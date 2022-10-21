const db = require('../db')
const { Song } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const mainSongs = async () => {
  const songs = [
    {
      title: 'Disco Man',
      artist: 'Remi Wolf',
      genre: 'indie',
      length: 3.11
    },
    {
      title: 'All The Stars',
      artist: 'Kendrick Lamar, SZA',
      genre: 'contemporary R&B',
      length: 3.5
    },
    {
      title: 'Strawberry Chainsaw',
      artist: 'JAWNY',
      genre: 'alternative, indie',
      length: 2.35
    },
    {
      title: 'Chicago',
      artist: 'Flipturn',
      genre: 'alternative, indie',
      length: 5.2
    },
    {
      title: 'Daddy Lessons',
      artist: 'Beyonce',
      genre: 'country',
      length: 4.46
    },
    {
      title: 'Shot in the Dark',
      artist: 'Ozzy Osbourne',
      genre: 'metal',
      length: 4.15
    },
    {
      title: 'Cigarettes',
      artist: 'Oliver Tree',
      genre: 'alternative',
      length: 2.3
    },
    {
      title: 'Lemon Tree',
      artist: 'Post Malone',
      genre: 'R&B/soul, pop, indie',
      length: 4.05
    },
    {
      title: 'Raspberry',
      artist: 'Grouplove',
      genre: 'alternative, indie',
      length: 3.15
    },
    {
      title: 'Infatuation',
      artist: 'Takeoff',
      genre: 'hip-hop, rap',
      length: 3.4
    },
    {
      title: 'Way 2 High',
      artist: 'Souly Had',
      genre: 'R&B/soul',
      length: 2.3
    },
    {
      title: 'Forbidden Fruit',
      artist: 'J.Cole, Kendrick Lamar',
      genre: 'hip-hop, rap',
      length: 4.3
    },
    {
      title: 'Sundress',
      artist: 'A$AP Rocky',
      genre: 'pop, hip-hop',
      length: 2.4
    },
    {
      title: 'P.Y.T.',
      artist: 'Micheal Jackson',
      genre: 'funk, disco',
      length: 4.01
    },
    {
      title: 'Murder',
      artist: 'Danger Incorporated',
      genre: 'alternative',
      length: 2.15
    },
    {
      title: 'A Change Is Gonna Come',
      artist: 'Greta Van Fleet',
      genre: 'rock',
      length: 3.15
    },
    {
      title: 'Dope on a rope',
      artist: 'The Growlers',
      genre: 'alternative, indie',
      length: 4.1
    },
    {
      title: 'Dark Red',
      artist: 'Steve Lacy',
      genre: 'R&B/soul',
      length: 2.5
    },
    {
      title: 'CHAIN ON',
      artist: 'BROCKHAMPTON, JPEGMAFIA',
      genre: 'alternative, rap',
      length: 3.2
    },
    {
      title: 'Pick Up The Phone',
      artist: 'Falling In Reverse',
      genre: 'metal, rock',
      length: 4.4
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
