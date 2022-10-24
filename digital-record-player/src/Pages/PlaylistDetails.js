import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PlaylistCard from '../Components/PlaylistCard'

const PlaylistDetails = () => {
  const [playlist, setPlaylist] = useState([])
  let { id } = useParams()
  const getPlaylistDetails = async () => {
    let response = await axios.get(`http://localhost:3001/playlists/${id}`)
    setPlaylist(response.data)
    console.log(response.data)
  }

  useEffect(() => {
    getPlaylistDetails()
  }, [])

  return (
    <div>
      <button>Delete Playlist</button>
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
