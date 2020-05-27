const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const axios = require('axios')

const Trail = require('../models/trail-model');
const Task = require('../models/task-model');


router.post('/trails', (req, res, next) => {
  const {lat, lng} = req.body
  axios.get(`https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${lng}&maxDistance=200&key=${process.env.HKINGPROJECT_API_KEY}`)
  .then(response => console.log(response.data))
  .catch(err => next(err))

})



// router.post('/trails', (req, res, next)=>{
//   Trail.create({
//     title: req.body.title,
//     description: req.body.description,
//     tasks: [],
//     owner: req.user._id
//   })
//   .then(response => {
//   res.json(response);
//   })
//   .catch(err => {
//   res.json(err);
//   })
// });

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
