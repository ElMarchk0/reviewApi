const mongoose = require('mongoose')
const ReviewSchema = new mongoose.Schema({
  content: String,
  name: String,
  rating: Number,
  beerId: Number,
})
module.exports = mongoose.model('review', ReviewSchema)