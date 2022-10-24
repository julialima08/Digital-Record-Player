import axios from 'axios'
import { useEffect, useState } from 'react'
import SongCard from '../Components/SongCard'

const Songs = () => {
  const [songs, setSongs] = useState([])

  const getSongs = async () => {
    let response = await axios.get('http://localhost:3001/allSongs')
    setSongs(response.data.songs)
  }

  useEffect(() => {
    getSongs()
  }, [])

  return (
    <div>
      <h1>Songs</h1>
      <div class="allsongs-container">
        {songs.map((song) => (
          <SongCard
            key={song._id}
            title={song.title}
            artist={song.artist}
            genre={song.genre}
            length={song.length}
          />
        ))}
      </div>
    </div>
  )
}

export default Songs
