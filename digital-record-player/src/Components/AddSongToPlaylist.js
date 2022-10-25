import React, { useState } from 'react'
import '../App.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import PlaylistCard from './PlaylistCard'

const AddSongToPlaylist = (props) => {
  const [popUp, setPopUp] = useState(false)
  const [playlists, setPlaylists] = useState([])
  const [song, setSong] = useState([])

  const getPlaylists = async () => {
    let response = await axios.get('http://localhost:3001/playlists')
    setPlaylists(response.data.playlists)
  }

  const togglePopUp = () => {
    setPopUp(!popUp)
    getPlaylists()
  }

  let { id } = useParams()
  const addSongToPlaylist = async (playlist) => {
    let response = await axios.put(
      `http://localhost:3001/addSong/${playlist}`,
      song
    )
    setPlaylists(response)
  }

  let navigate = useNavigate()

  const handleSubmit = async (e, playlist, banana) => {
    await addSongToPlaylist(e, banana)
    navigate(`/playlist/${playlist._id}`)
  }

  const handleClick = (song) => {
    togglePopUp()
    setSong(song)
  }

  return (
    <>
      <button onClick={() => handleClick(song)} className="btn-popUp">
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
                <PlaylistCard
                  key={playlist._id}
                  playlistName={playlist.playlistName}
                  creatorName={playlist.creatorName}
                  numOfSongs={playlist.numOfSongs}
                  length={playlist.length}
                />
                <button onClick={() => handleSubmit(playlist, playlist._id)}>
                  add to playlist
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default AddSongToPlaylist
