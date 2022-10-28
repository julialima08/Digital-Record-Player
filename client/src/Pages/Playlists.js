import PlaylistCard from '../Components/PlaylistCard'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import CreatePlaylistPopUp from '../Components/CreatePlaylistPopUp'
import '../CSS/playlist.css'

const Playlists = () => {
  const [playlists, setPlaylists] = useState([])

  const getPlaylists = async () => {
    let response = await axios.get('http://localhost:3001/playlists')
    setPlaylists(response.data.playlists)
  }

  useEffect(() => {
    getPlaylists()
  }, [])

  let navigate = useNavigate()

  const getOnePlaylist = (playlist) => {
    navigate(`/playlist/${playlist._id}`)
  }
  const [newPlaylist, setNewPlaylist] = useState({
    playlistName: '',
    creatorName: '',
    numOfSongs: 0,
    length: 0
  })

  const addPlaylist = async (e) => {
    e.preventDefault()
    let response = await axios.post(
      'http://localhost:3001/playlists',
      newPlaylist
    )

    let tempList = [...playlists]

    tempList.push(response.data.playlist)
    setPlaylists(tempList)

    setNewPlaylist({
      playlistName: '',
      creatorName: '',
      numOfSongs: 0,
      length: 0
    })
  }

  const handleChange = (e) => {
    setNewPlaylist({ ...newPlaylist, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <h2>Playlists</h2>
      <div className="create-playlist">
        <CreatePlaylistPopUp
          newPlaylist={newPlaylist}
          handleChange={handleChange}
          addPlaylist={addPlaylist}
        />
      </div>

      <div className="playlist-card-container">
        {playlists.map((playlist) => (
          <PlaylistCard
            key={playlist._id}
            playlistName={playlist.playlistName}
            creatorName={playlist.creatorName}
            numOfSongs={playlist.numOfSongs}
            length={playlist.length}
            onClick={() => getOnePlaylist(playlist)}
          />
        ))}
      </div>
    </div>
  )
}

export default Playlists
