import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import SongCard from './SongCard'
import { useEffect } from 'react'
import RemoveSongFromPlaylist from './RemoveSongFromPlaylist'

const PlaylistDetailsCard = (props) => {
  let { id } = useParams()
  const getPlaylistDetails = async () => {
    let response = await axios.get(`http://localhost:3001/playlists/${id}`)
    props.setPlaylist(response.data)
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
    <div className="playlist-card" onClick={props.onClick}>
      <div className="playlist-img">{/* <img src="" alt="" /> */}</div>
      <div className="playlist-info">
        <h3>{props.playlistName}</h3>
        <h4>Created by: {props.creatorName}</h4>
        <h5>{props.numOfSongs} Songs</h5>
        <h5>{props.length} mins</h5>
        <button onClick={handleDelete}>Delete Playlist</button>
        <button>Edit Playlist</button>

        {props.songs?.map((song, index) => (
          <div key={index}>
            <SongCard
              id={song._id}
              title={song.title}
              image={song.image}
              artist={song.artist}
              length={song.length}
            />
            <RemoveSongFromPlaylist
              song={props}
              id={id}
              setPlaylist={props.setPlaylist}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default PlaylistDetailsCard
