import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import PlaylistCard from '../Components/PlaylistCard'

const PlaylistDetails = () => {
  const [playlist, setPlaylist] = useState([])

  let { id } = useParams()
  const getPlaylistDetails = async () => {
    let response = await axios.get(`http://localhost:3001/playlists/${id}`)
    setPlaylist(response.data)
  }

  useEffect(() => {
    getPlaylistDetails()
  }, [])

  let navigate = useNavigate()

  const handleDelete = async () => {
    await axios.delete(`http://localhost:3001/playlist/${id}`)
    navigate('/playlists')
  }

  return (
    <div>
      <button onClick={handleDelete}>Delete Playlist</button>
      <button>Edit Playlist</button>
      <PlaylistCard
        key={playlist._id}
        playlistName={playlist.playlistName}
        creatorName={playlist.creatorName}
        numOfSongs={playlist.numOfSongs}
        length={playlist.length}
        songs={playlist.songs}
      />
    </div>
  )
}

export default PlaylistDetails
