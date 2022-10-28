import { useState } from 'react'
import PlaylistDetailsCard from '../Components/PlaylistDetailsCard'
import '../CSS/playlistDetails.css'

const PlaylistDetails = () => {
  const [playlist, setPlaylist] = useState([])

  return (
    <div>
      <PlaylistDetailsCard
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
