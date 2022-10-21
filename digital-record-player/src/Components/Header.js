import Title from './Title'
import Nav from './Nav'
import { useState } from 'react'

const Header = () => {
  const [title, setTitle] = useState('Digital Record Player')

  return (
    <header>
      <Title title={title} />
      <Nav />
    </header>
  )
}

export default Header
