import AddSongToPlaylist from './AddSongToPlaylist'

const SongCard = (props) => {
  return (
    <div class="song-card">
      <div class="song-img">
        <img
          src="https://ucarecdn.com/2aadbb25-ed92-4ede-8a0c-51a2ea96bcc5/"
          alt="song cover"
        />
      </div>
      <div class="song-info">
        <h3>{props.title}</h3>
        <h4>{props.artist}</h4>
        <h5>{props.genre}</h5>
        <h5>{props.length}</h5>
        <AddSongToPlaylist />
      </div>
    </div>
  )
}

export default SongCard
