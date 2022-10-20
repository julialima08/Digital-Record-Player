const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Playlist = new Schema(
  {
    creatorName: { type: String, required: true },
    playlistName: { type: String, reqired: true },
    numOfsongs: { type: Number, required: true },
    length: { type: Number, required: true },
    songs: { type: Array, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Playlist', Playlist)
