import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/genres">
        <button>Genres</button>
      </Link>
      <Link to="/songs">
        <button>Songs</button>
      </Link>
      <Link to="/playlists">
        <button>Playlists</button>
      </Link>
      <Link to="/addsongs">
        <button>Add Songs</button>
      </Link>
    </div>
  )
}

export default Nav
