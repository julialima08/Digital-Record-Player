const db = require('../db')
const { Playlist } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const mainPlaylists = async () => {
  const playlists = [
    {
      creatorName: 'Jonny',
      playlistName: 'Summer jams',
      numOfSongs: 5,
      length: '30.05',
      songs: []
    },
    {
      creatorName: 'Olivia',
      playlistName: 'Best songs ever!',
      numOfSongs: 5,
      length: '20.10',
      songs: []
    },
    {
      creatorName: 'Nick',
      playlistName: 'Indie playlist',
      numOfSongs: 5,
      length: '15.00',
      songs: []
    },
    {
      creatorName: 'Carol',
      playlistName: 'Carols cool playlist',
      numOfSongs: 5,
      length: '46.03',
      songs: []
    },
    {
      creatorName: 'Bianca',
      playlistName: 'Songs on repeat',
      numOfSongs: 5,
      length: '30.40',
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
