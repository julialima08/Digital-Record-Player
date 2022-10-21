const db = require('../db')
const Playlist = require('../models/Playlist')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const mainPlaylists = async () => {
  const playlists = [
    {
      creatorName: '',
      playlistName: '',
      numOfSongs: 5,
      length: '',
      songs: []
    },
    {
      creatorName: '',
      playlistName: '',
      numOfSongs: 5,
      length: '',
      songs: []
    },
    {
      creatorName: '',
      playlistName: '',
      numOfSongs: 5,
      length: '',
      songs: []
    },
    {
      creatorName: '',
      playlistName: '',
      numOfSongs: 5,
      length: '',
      songs: []
    },
    {
      creatorName: '',
      playlistName: '',
      numOfSongs: 5,
      length: '',
      songs: []
    }
  ]

  await Playlist.insertMany(playlists)
  console.log('Created some playlists!')
}

const run = async () => {
  await mainPlaylists()
  db.close()
}

run()
