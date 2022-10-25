import { useState } from 'react'
import PlaylistCard from '../Components/PlaylistCard'

const PlaylistDetails = () => {
  const [playlist, setPlaylist] = useState([])

  return (
    <div>
      <PlaylistCard
        key={playlist._id}
        playlistName={playlist.playlistName}
        creatorName={playlist.creatorName}
        numOfSongs={playlist.numOfSongs}
        length={playlist.length}
        songs={playlist.songs}
        setPlaylist={setPlaylist}
      />
    </div>
  )
}

export default PlaylistDetails
