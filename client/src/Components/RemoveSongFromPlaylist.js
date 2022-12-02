import axios from 'axios'
import '../CSS/playlistDetails.css'

const RemoveSongFromPlaylist = (props) => {
  const removeSong = async () => {
    let song = { ...props.song, index: props.index }
    console.log(song)
    let response = await axios.put(
      `/removeSong/${props.id}`,
      song
    )
    props.setPlaylist(response.data)
  }

  return (
    <div>
      <button className="remove" onClick={removeSong}>
        Delete from playlist
      </button>
    </div>
  )
}

export default RemoveSongFromPlaylist
