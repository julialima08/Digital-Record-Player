import '../CSS/search.css'

const Search = (props) => {

  return (
    <form onSubmit={props.onSubmit}>
      <input
        type="text"
        name="search"
        value={props.value}
        placeholder="Search Songs/Artists"
        onChange={props.onChange}
        className="search" /> 
      <button type='submit' className="search-button">Search</button>
    </form>
  )
}

export default Search