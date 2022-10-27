const Search = (props) => {

  return (
    <form onSubmit={props.onSubmit}>
      <input
        type="text"
        name="search"
        value={props.value}
        placeholder="Search Songs/Artists"
        onChange={props.onChange}> 
      </input>
      <button type='submit'>Search</button>
    </form>
  )
}

export default Search