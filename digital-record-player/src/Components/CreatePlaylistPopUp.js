import React, { useState } from 'react'
import '../CSS/popUp.css'
import { useNavigate } from 'react-router-dom'

const CreatePlaylistPopUp = (props) => {
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
    await props.addPlaylist(e)
    navigate('/playlists')
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
            <form onSubmit={handleSumbit}>
              <input
                type="text"
                value={newPlaylist.playlistName}
                onChange={props.handleChange}
                placeholder={'playlist name'}
                name="playlistName"
              />
              <input
                type="text"
                value={newPlaylist.creatorName}
                onChange={props.handleChange}
                placeholder={'creator name'}
                name="creatorName"
              />

              <button>Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default CreatePlaylistPopUp
