import { useState, useEffect } from 'react'
import axios from 'axios'
import SongCard from '../Components/SongCard'
import '../CSS/songpage.css'

const Songs = () => {
  const [songs, setSongs] = useState([])

  // const getSongs = async () => {
  //   let response = await axios.get('http://localhost:3001/allSongs')
  //   setSongs(response.data.songs)
  // }

  const options = {
    method: 'GET',
    url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
    params: { q: 'songs' },
    headers: {
      'X-RapidAPI-Key': '7d3489c981mshd8b003a4a76fc64p1d5f38jsn5939fc8db612',
      'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    }
  }

  const getSongs = async () => {
    await axios
      .request(options)
      .then(function (response) {
        setSongs(response.data.data)
        console.log(response.data.data)
      })
      .catch(function (error) {
        console.error(error)
      })
  }

  useEffect(() => {
    getSongs()
  }, [])

  return (
    <div>
      <h2 className="songs">Songs</h2>
      <div>
        {songs?.map((song) => (
          <SongCard
            id={song.id}
            key={song.id}
            title={song.title}
            image={song.album.cover_medium}
            artist={song.artist.name}
            length={song.duration}
          />
        ))}
      </div>
    </div>
  )
}

export default Songs
