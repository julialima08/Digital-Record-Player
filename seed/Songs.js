const db = require('../db')
const Song = require('../models/Song')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const mainSongs = async () => {
  const songs = [
    {
      title: '',
      artist: '',
      genre: '',
      length: ''
    },
    {
      title: '',
      artist: '',
      genre: '',
      length: ''
    },
    {
      title: '',
      artist: '',
      genre: '',
      length: ''
    },
    {
      title: '',
      artist: '',
      genre: '',
      length: ''
    },
    {
      title: '',
      artist: '',
      genre: '',
      length: ''
    },
    {
      title: '',
      artist: '',
      genre: '',
      length: ''
    },
    {
      title: '',
      artist: '',
      genre: '',
      length: ''
    },
    {
      title: '',
      artist: '',
      genre: '',
      length: ''
    },
    {
      title: '',
      artist: '',
      genre: '',
      length: ''
    },
    {
      title: '',
      artist: '',
      genre: '',
      length: ''
    },
    {
      title: '',
      artist: '',
      genre: '',
      length: ''
    },
    {
      title: '',
      artist: '',
      genre: '',
      length: ''
    },
    {
      title: '',
      artist: '',
      genre: '',
      length: ''
    },
    {
      title: '',
      artist: '',
      genre: '',
      length: ''
    },
    {
      title: '',
      artist: '',
      genre: '',
      length: ''
    },
    {
      title: '',
      artist: '',
      genre: '',
      length: ''
    },
    {
      title: '',
      artist: '',
      genre: '',
      length: ''
    },
    {
      title: '',
      artist: '',
      genre: '',
      length: ''
    },
    {
      title: '',
      artist: '',
      genre: '',
      length: ''
    },
    {
      title: '',
      artist: '',
      genre: '',
      length: ''
    }
  ]

  await Song.insertMany(songs)
  console.log('Created some songs!')
}

const run = async () => {
  await mainSongs()
  db.close()
}

run()
