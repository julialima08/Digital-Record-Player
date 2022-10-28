import React, { useState } from 'react'
import '../CSS/popUp.css'
import '../CSS/playlist.css'

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

  const handleSumbit = async (e) => {
    await props.addPlaylist(e)
    togglePopUp()
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
                className="input"
                type="text"
                value={newPlaylist.playlistName}
                onChange={props.handleChange}
                placeholder={'playlist name'}
                name="playlistName"
              />
              <input
                className="input"
                type="text"
                value={newPlaylist.creatorName}
                onChange={props.handleChange}
                placeholder={'creator name'}
                name="creatorName"
              />

              <button className="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default CreatePlaylistPopUp
