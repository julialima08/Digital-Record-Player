import Title from './Title'
import Nav from './Nav'
import { useState } from 'react'

const Header = () => {
  const [title, setTitle] = useState('Digital Record Player')

  return (
    <header>
      <img src="https://ucarecdn.com/f738b9e2-61c3-4e71-b533-bee8cb880474/" />
      <Title title={title} />
      <Nav />
    </header>
  )
}

export default Header
