const mongoose = require('mongoose')
const Schema = mongoose.Schema

const playlistSchema = new Schema(
  {
    creatorName: { type: String, required: true },
    playlistName: { type: String, reqired: true },
    numOfSongs: { type: Number },
    length: { type: Number },
    songs: [{ type: Schema.Types.ObjectId, ref: 'Song' }]
  },
  { timestamps: true }
)

module.exports = playlistSchema
