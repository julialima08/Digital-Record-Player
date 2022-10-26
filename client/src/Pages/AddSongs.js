import AddSongForm from '../Components/AddSongForm'
import axios from 'axios'
import { useState } from 'react'

const AddSongs = () => {
  const [newSong, setNewSong] = useState({
    title: '',
    artist: '',
    genre: '',
    length: ''
  })

  const addSong = async (e) => {
    e.preventDefault()
    let response = await axios.post('http://localhost:3001/allSongs', newSong)
    setNewSong(response)
  }

  const handleChange = (e) => {
    setNewSong({ ...newSong, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <h1>Add Songs</h1>
      <AddSongForm
        newSong={newSong}
        handleChange={handleChange}
        addSong={addSong}
      />
    </div>
  )
}

export default AddSongs
