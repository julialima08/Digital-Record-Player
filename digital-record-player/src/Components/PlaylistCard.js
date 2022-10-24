import SongCard from './SongCard'

const PlaylistCard = (props) => {
  return (
    <div class="playlist-card" onClick={props.onClick}>
      <div class="playlist-img">
        <img src="" alt="" />
      </div>
      <div class="playlist-info">
        <h3>{props.playlistName}</h3>
        <h4>Created by: {props.creatorName}</h4>
        <h5>{props.numOfSongs} Songs</h5>
        <h5>{props.length} mins</h5>
        {props.songs &&
          props.songs.map((song) => (
            <div>
              <SongCard
                key={song._id}
                title={song.title}
                artist={song.artist}
                genre={song.genre}
                length={song.length}
              />
              <button>Delete from playlist</button>
            </div>
          ))}
      </div>
    </div>
  )
}

export default PlaylistCard
