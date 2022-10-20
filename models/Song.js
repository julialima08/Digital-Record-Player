const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Song = new Schema(
  {
    title: { type: String, required: true },
    artist: { type: String, required: true },
    genre: { type: String, required: true },
    length: { type: Number, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Song', Song)
