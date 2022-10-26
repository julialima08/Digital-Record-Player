import { Link } from 'react-router-dom'
import '../CSS/nav.css'

const Nav = () => {
  return (
    <div className="nav">
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/songs">
        <button>Songs</button>
      </Link>
      <Link to="/playlists">
        <button>Playlists</button>
      </Link>
    </div>
  )
}

export default Nav
