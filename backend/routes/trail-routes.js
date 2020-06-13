const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const axios = require('axios')
//const parser = require('../configs/cloudinary');

const Trail = require('../models/trail-model');


router.post('/getTrails', (req, res, next) => {
  const {lat, lng} = req.body
  let trails = []

  function arePointsNear(checkPoint, centerPoint, km) { // returns true if two points are nearby based on amount of km. In this case I use 321km or 200 miles. (same as API)
    let ky = 40000 / 360;
    let kx = Math.cos(Math.PI * centerPoint.lat / 180.0) * ky;
    let dx = Math.abs(centerPoint.lng - checkPoint.lng) * kx;
    let dy = Math.abs(centerPoint.lat - checkPoint.lat) * ky;
    return Math.sqrt(dx * dx + dy * dy) <= km;
  }

  axios.get(`https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${lng}&maxDistance=200&maxResults=10&key=${process.env.HKINGPROJECT_API_KEY}`)
  .then(response => {
    let newArr = response.data.trails
    newArr.forEach(trail => trails.push(trail))
  }) 
  .then(() => {
    Trail.find()
    .then(theTrails => {
      theTrails.map(trail => {
        let trailCheck = {lat: trail.latitude, lng: trail.longitude}
        if (arePointsNear(trailCheck, {lat, lng}, 321)) {
          trails.push(trail)
        } 
      })
    })
    .then(() => {
      res.status(200).json(trails)
    })
  })
  .catch(err => next(err))
})


router.post('/createTrail', (req, res, next) => {
  console.log(req.body)
  const {title, description, latitude, longitude} = req.body

  // console.log(req.file.url)
  
  Trail.create({
    name: title,
    summary: description,
    latitude,
    longitude,
    owner: req.user._id
  })
  .then(response => {
  res.status(200).json({message : 'Thank you for submitting a new trail'});
  })
  .catch(err => {
  res.status(400).json(err);
  })
});







router.get('/trails', (req, res, next) => {
    Trail.find()
      .populate('tasks')
      .then(allTheTrails => {
        res.json(allTheTrails);
      })
      .catch(err => {
        res.json(err);
      });
  });

  router.get('/trails/:id', (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }
   
    Trail.findById(req.params.id)
      .populate('tasks')
      .then(trail => {
        res.status(200).json(trail);
      })
      .catch(error => {
        res.json(error);
      });
  });




   
  router.put('/trails/:id', (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }
   
    Trail.findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
        res.json({ message: `Trail with ${req.params.id} is updated successfully.` });
      })
      .catch(error => {
        res.json(error);
      });
  });



   
  router.delete('/trails/:id', (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }
   
    Trail.findByIdAndRemove(req.params.id)
      .then(() => {
        res.json({ message: `Trail with ${req.params.id} is removed successfully.` });
      })
      .catch(error => {
        res.json(error);
      });
  });
   
module.exports = router;
