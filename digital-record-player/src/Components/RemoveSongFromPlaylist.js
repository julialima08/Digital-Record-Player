import axios from 'axios'

const RemoveSongFromPlaylist = (props) => {
  const removeSong = async () => {
    let song = { ...props.song, index: props.index }
    let response = await axios.put(
      `http://localhost:3001/removeSong/${props.id}`,
      song
    )
    props.setPlaylist(response.data)
  }

  return (
    <div>
      <button onClick={removeSong}>Delete from playlist</button>
    </div>
  )
}

export default RemoveSongFromPlaylist
