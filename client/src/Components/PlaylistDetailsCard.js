import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import SongCard from './SongCard'
import { useEffect } from 'react'
import RemoveSongFromPlaylist from './RemoveSongFromPlaylist'
import '../CSS/songpage.css'

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
      <div className="playlist-img">
        <img
          src="https://ucarecdn.com/36899aae-483e-4673-8760-c07728e15f04/"
          alt="playlist"
        />
      </div>
      <div className="playlist-info">
        <h3>{props.playlistName}</h3>
        <h4>Created by: {props.creatorName}</h4>
        <h5>{props.numOfSongs} Songs</h5>
        <h5>{props.length} secs</h5>
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
              preview={song.preview}
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
