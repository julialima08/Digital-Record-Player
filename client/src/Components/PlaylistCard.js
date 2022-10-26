import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const PlaylistCard = (props) => {
  let navigate = useNavigate()

  const handleDelete = async () => {
    await axios.delete(`http://localhost:3001/playlist/${props.id}`)
    navigate('/playlists')
  }

  return (
    <div className="playlist-card" onClick={props.onClick}>
      <div className="playlist-img">{/* <img src="" alt="" /> */}</div>
      <div className="playlist-info">
        <h3>{props.playlistName}</h3>
        <h4>Created by: {props.creatorName}</h4>
        <h5>{props.numOfSongs} Songs</h5>
        <h5>{props.length} mins</h5>
        <button onClick={handleDelete}>Delete Playlist</button>
        <button>Edit Playlist</button>
      </div>
    </div>
  )
}

export default PlaylistCard