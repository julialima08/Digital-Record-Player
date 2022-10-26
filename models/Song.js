const mongoose = require('mongoose')
const Schema = mongoose.Schema

const songSchema = new Schema(
  {
    image: { type: String, required: true },
    title: { type: String, required: true },
    artist: { type: String, required: true },
    length: { type: Number, required: true }
  },
  { timestamps: true }
)

module.exports = songSchema
