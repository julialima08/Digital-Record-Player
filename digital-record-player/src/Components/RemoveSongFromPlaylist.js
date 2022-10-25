import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const RemoveSongFromPlaylist = (props) => {
  const [playlists, setPlaylists] = useState([])
  const [song, setSong] = useState([])

  const removeSongFromPlaylist = async (playlist) => {
    setSong(props.song)

    let response = await axios.put(
      `http://localhost:3001/removeSong/${playlist._id}`,
      song
    )
    setPlaylists(response)
    // console.log(response)
  }

  // let navigate = useNavigate()

  const handleSubmit = async (playlist) => {
    await removeSongFromPlaylist(playlist)
    // navigate(`/playlist/${playlist._id}`)
  }

  return (
    <div>
      <button onClick={handleSubmit}>Delete from playlist</button>
    </div>
  )
}

export default RemoveSongFromPlaylist
