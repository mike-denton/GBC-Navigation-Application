const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Navigation = new Schema({
  _id: {
    type: String
  },
  coords: {
    type: Array
  },
}, {
  collection: 'exterior_coordinates'
})

module.exports = mongoose.model('Navigation', Navigation)