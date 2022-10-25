const db = require('../db')
const { Playlist } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const mainPlaylists = async () => {
  const playlists = [
    {
      creatorName: 'Nick',
      playlistName: 'Indie playlist',
      numOfSongs: 0,
      length: 0,
      songs: []
    },
    {
      creatorName: 'Carol',
      playlistName: 'Carols cool playlist',
      numOfSongs: 0,
      length: 0,
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
