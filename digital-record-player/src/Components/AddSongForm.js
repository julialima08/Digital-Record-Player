import { useNavigate } from 'react-router-dom'

const AddSongForm = (props) => {
  let navigate = useNavigate()

  const handleSumbit = async (e) => {
    await props.addSong(e)
    navigate('/songs')
  }

  const newSong = props.newSong

  return (
    <div>
      <form onSubmit={handleSumbit}>
        <input
          type="text"
          value={newSong.title}
          onChange={props.handleChange}
          placeholder={'title'}
          name="title"
        />
        <input
          type="text"
          value={newSong.artist}
          onChange={props.handleChange}
          placeholder={'artist'}
          name="artist"
        />
        <input
          type="number"
          value={newSong.length}
          onChange={props.handleChange}
          placeholder={'length'}
          name="length"
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default AddSongForm
