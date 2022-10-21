import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Pages/Home'
import Genres from './Pages/Genres'
import Songs from './Pages/Songs'
import Playlists from './Pages/Playlists'
import AddSongs from './Pages/AddSongs'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/songs" element={<Songs />} />
          <Route path="/playlists" element={<Playlists />} />
          <Route path="/addsongs" element={<AddSongs />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
