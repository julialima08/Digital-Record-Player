const PlaylistCard = (props) => {
  return (
    <div class="playlist-card">
      <div class="playlist-img">
        <img src="" alt="" />
      </div>
      <div class="playlist-info">
        <h3>{props.playlistName}</h3>
        <h4>{props.creatorName}</h4>
        <h5>{props.numOfSongs}</h5>
        <h5>{props.length}</h5>
      </div>
    </div>
  )
}

export default PlaylistCard
