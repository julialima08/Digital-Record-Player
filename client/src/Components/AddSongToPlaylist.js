import React, { useState } from 'react'
import '../CSS/App.css'
// import '../CSS/popUp.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import PlaylistCard from './PlaylistCard'

const AddSongToPlaylist = (props) => {
  const [popUp, setPopUp] = useState(false)
  const [playlists, setPlaylists] = useState([])
  const [song, setSong] = useState(null)

  const getPlaylists = async () => {
    let response = await axios.get('/playlists')

    setPlaylists(response.data.playlists)
  }

  const togglePopUp = () => {
    setPopUp(!popUp)
    getPlaylists()
  }

  const addSongToPlaylist = async (playlist) => {
    let response = await axios.put(
      `/addSong/${playlist._id}`,
      song
    )
    setPlaylists(response)
  }

  let navigate = useNavigate()

  const handleSubmit = async (playlist) => {
    await addSongToPlaylist(playlist)
    navigate(`/playlist/${playlist._id}`)
  }

  const handleClick = () => {
    togglePopUp()
    setSong(props.song)
  }

  if (popUp) {
    document.body.classList.add('active-popUp')
  } else {
    document.body.classList.remove('active-popUp')
  }

  return (
    <>
      <button onClick={handleClick} className="btn-popUp">
        Add to playlist
      </button>

      {popUp && (
        <div className="popUp">
          <div onClick={togglePopUp} className="overlay"></div>
          <div className="popUp-content">
            <button className="close-popUp" onClick={togglePopUp}>
              CLOSE
            </button>

            {playlists.map((playlist) => (
              <div>
                <div>
                  <PlaylistCard
                    key={playlist._id}
                    id={playlist._id}
                    playlistName={playlist.playlistName}
                    creatorName={playlist.creatorName}
                    numOfSongs={playlist.numOfSongs}
                    length={playlist.length}
                  />
                </div>
                <div>
                  <button
                    className="add"
                    onClick={() => handleSubmit(playlist)}
                  >
                    add to playlist
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default AddSongToPlaylist
