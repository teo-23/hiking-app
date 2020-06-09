const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const axios = require('axios')

const Trail = require('../models/trail-model');
const Task = require('../models/task-model');


router.post('/trails', (req, res, next) => {
  const {lat, lng} = req.body
  let trails = []
  // to do 
  // - user able to change max distance 
  // - user able to change max results
  function arePointsNear(checkPoint, centerPoint, km) {
    let ky = 40000 / 360;
    let kx = Math.cos(Math.PI * centerPoint.lat / 180.0) * ky;
    let dx = Math.abs(centerPoint.lng - checkPoint.lng) * kx;
    let dy = Math.abs(centerPoint.lat - checkPoint.lat) * ky;
    return Math.sqrt(dx * dx + dy * dy) <= km;
  }

  // Trail.find()
  // .then(trails => {
  //   trails.map(trail => {
  //     let trailCheck = {lat: trail.lat, lng: trail.lng}
  //     if (arePointsNear(trailCheck, {lat, lng}, 321)) {
  //       console.log("fllop")
  //     } 
  //   })
  // })

//     let vasteras = { lat: 59.615911, lng: 16.544232 };
//     let stockholm = { lat: 59.345635, lng: 18.059707 };

//     let n = arePointsNear(vasteras, stockholm, 321);

// console.log(n);


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
          console.log('true')
          trails.push(trail)
        } 
      })
    })
    .then(() => {
      console.log(trails)
      res.json(trails)
    })
  })
  .catch(err => next(err))
})



router.post('/createTrail', (req, res, next) => {
  const {title, description, latitude, longitude} = req.body.trail

  // if(!title || !description) {
  //   res.status(204).json({message : 'Please enter a title and give a description of the trail'})
  // }

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
