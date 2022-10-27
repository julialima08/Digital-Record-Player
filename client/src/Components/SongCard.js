import AddSongToPlaylist from './AddSongToPlaylist'
import '../CSS/songpage.css'
import '../CSS/popUp.css'
import { useState } from 'react'

const SongCard = (props) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [song, setSong] = useState(new Audio(props.preview))

  const toggleAudio = () => {
    if (isPlaying === false) {
      song.play()
      setIsPlaying(true)
    } else {
      song.pause()
      setIsPlaying(false)
    }
  }

  return (
    <div className="card-holder">
      <div className="song-card">
        <div className="container">
          <div className="song-img">
            <img
              onClick={toggleAudio}
              src={props.image}
              alt="song cover"
              className={isPlaying ? 'spin' : ''}
            />
          </div>
          <img
            className="center"
            src="https://ucarecdn.com/a8951e3e-8cef-4c2a-86f9-b87d34bc82d0/"
          />

          <img
            className={!isPlaying ? 'play' : 'play-inactive'}
            onClick={toggleAudio}
            src="https://ucarecdn.com/f2825d68-d25e-4bbb-a47c-fc0b73cb238b/"
          />
          <img
            className={isPlaying ? 'pause' : 'pause-inactive'}
            onClick={toggleAudio}
            src="https://ucarecdn.com/33371ab3-7a92-435f-b8e8-cf419e5c0f9c/"
          />
        </div>
        <div className="song-info">
          <h3>{props.title}</h3>
          <h4>By: {props.artist}</h4>
          <h4>{props.length} secs</h4>
        </div>
        <div>
          <AddSongToPlaylist song={props} />
        </div>
      </div>
    </div>
  )
}

export default SongCard
