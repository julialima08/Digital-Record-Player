import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../CSS/playlist.css'

const PlaylistCard = (props) => {
  let navigate = useNavigate()

  const handleDelete = async () => {
    await axios.delete(`/playlist/${props.id}`)
    navigate('/playlists')
  }

  return (
    <div className="playlist" onClick={props.onClick}>
      <div className="playlist-img">
        <img
          src="https://ucarecdn.com/36899aae-483e-4673-8760-c07728e15f04/"
          alt="playlists"
        />
      </div>
      <div className="playlist-info">
        <h3>{props.playlistName}</h3>
        <h4>Created by: {props.creatorName}</h4>
        <h5>{props.numOfSongs} Songs</h5>
        <h5>{props.length} secs</h5>
        <button className="delete" onClick={handleDelete}>
          Delete Playlist
        </button>
      </div>
    </div>
  )
}

export default PlaylistCard
