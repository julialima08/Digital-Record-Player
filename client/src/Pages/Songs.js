import { useState, useEffect } from 'react'
import axios from 'axios'
import SongCard from '../Components/SongCard'
import '../CSS/songpage.css'
import '../CSS/popUp.css'
import Search from '../Components/Search'

const Songs = () => {
  const [songs, setSongs] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  let API_KEY = process.env.REACT_APP_RAPID_API_KEY

  const startSongs = {
    method: 'GET',
    url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
    params: { q: 'songs' },
    headers: {
      'X-RapidAPI-Key': `${API_KEY}`,
      'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    }
  }

  const getSongs = async () => {
    await axios
      .request(startSongs)
      .then(function (response) {
        setSongs(response.data.data)
      })
      .catch(function (error) {
        console.error(error)
      })
  }

  useEffect(() => {
    getSongs()
  }, [])

  const searchSongs = {
    method: 'GET',
    url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
    params: { q: `${searchQuery}` },
    headers: {
      'X-RapidAPI-Key': `${API_KEY}`,
      'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    }
  }

  const getSearchResults = async (e) => {
    e.preventDefault()
    await axios
      .request(searchSongs)
      .then(function (response) {
        setSearchResults(response.data.data)
        toggleSearched(true)
        setSearchQuery('')
      })
      .catch(function (error) {
        console.error(error)
      })
  }

  const handleChange = (event) => {
    setSearchQuery(event.target.value)
  }

  return (
    <div>
      <h2 className="songs">Songs</h2>
      <div className="search">
        <Search
          onSubmit={getSearchResults}
          onChange={handleChange}
          value={searchQuery}
        />
        {searched ? <h2>Search Results</h2> : <></>}
        <section className="search-results container-grid">
          {searchResults.map((song) => (
            <SongCard
              id={song.id}
              key={song.id}
              title={song.title_short}
              image={song.album.cover_medium}
              artist={song.artist.name}
              length={song.duration}
              preview={song.preview}
            />
          ))}
        </section>
      </div>
      <div className="search-results container-grid">
        {songs?.map((song) => (
          <SongCard
            id={song.id}
            key={song.id}
            title={song.title_short}
            image={song.album.cover_medium}
            artist={song.artist.name}
            length={song.duration}
            preview={song.preview}
          />
        ))}
      </div>
    </div>
  )
}

export default Songs
