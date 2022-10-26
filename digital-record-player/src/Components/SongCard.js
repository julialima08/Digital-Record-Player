import AddSongToPlaylist from './AddSongToPlaylist'
import '../CSS/songpage.css'

const SongCard = (props) => {
  return (
    <div className="card-holder">
      <div className="song-card">
        <div className="song-img">
          <img src={props.image} alt="song cover" />
        </div>
        <div className="song-info">
          <h3>{props.title}</h3>
          <h4>{props.artist}</h4>
          <h4>{props.releaseDate}</h4>
          <h4>{props.length}</h4>
          <AddSongToPlaylist song={props} />
        </div>
      </div>
    </div>
  )
}

export default SongCard
