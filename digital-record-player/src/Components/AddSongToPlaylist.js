import React, { useState } from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom'

const AddSongToPlaylist = (props) => {
  const [popUp, setPopUp] = useState(false)

  const togglePopUp = () => {
    setPopUp(!popUp)
  }

  if (popUp) {
    document.body.classList.add('active-popUp')
  } else {
    document.body.classList.remove('active-popUp')
  }

  let navigate = useNavigate()

  const handleSumbit = async (e) => {
    await props.addSongToPlaylist(e)
    navigate('/playlists/:id')
  }

  const newPlaylist = props.newPlaylist

  return (
    <>
      <button onClick={togglePopUp} className="btn-popUp">
        Create Playlist
      </button>

      {popUp && (
        <div className="popUp">
          <div onClick={togglePopUp} className="overlay"></div>
          <div className="popUp-content">
            <button className="close-popUp" onClick={togglePopUp}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default CreatePlaylistPopUp
