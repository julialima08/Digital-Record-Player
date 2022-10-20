const mongoose = require('mongoose')
const playlistSchema = require('./Playlist')
const songSchema = require('./Song')

const Playlist = mongoose.model('Playlist', playlistSchema)
const Song = mongoose.model('Song', songSchema)

module.exports = {
  Playlist,
  Song
}
