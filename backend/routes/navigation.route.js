const express = require('express');
const app = express();
const navigationRoute = express.Router();

// Navigation model
let Navigation = require('../model/Navigation');

// Add Coordinates
navigationRoute.route('/add').post((req, res, next) => {
  Navigation.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get all coordinates
navigationRoute.route('/').get((req, res) => {
  Navigation.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single coordinate
navigationRoute.route('/read/:id').get((req, res) => {
  Navigation.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Coordinates
navigationRoute.route('/update/:id').put((req, res, next) => {
  Navigation.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('coordinates successfully updated!')
    }
  })
})

// Delete Coordinate
navigationRoute.route('/delete/:id').delete((req, res, next) => {
  Navigation.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = navigationRoute;