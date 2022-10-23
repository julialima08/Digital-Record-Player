import PlaylistCard from '../Components/PlaylistCard'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Playlists = () => {
  const [playlists, setPlaylists] = useState([])

  const getPlaylists = async () => {
    let response = await axios.get('http://localhost:3001/playlists')
    setPlaylists(response.data.playlists)
  }

  useEffect(() => {
    getPlaylists()
  })

  return (
    <div>
      <h1>Playlists</h1>
      <div>
        {playlists.map((playlist) => (
          <PlaylistCard
            key={playlist._id}
            playlistName={playlist.playlistName}
            creatorName={playlist.creatorName}
            numOfSongs={playlist.numOfSongs}
            length={playlist.length}
          />
        ))}
      </div>
    </div>
  )
}

export default Playlists
