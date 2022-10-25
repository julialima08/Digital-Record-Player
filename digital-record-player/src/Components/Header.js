import Title from './Title'
import Nav from './Nav'
import { useState } from 'react'
import '../CSS/header.css'

const Header = () => {
  const [title, setTitle] = useState('Digital Record Player')

  return (
    <div className="header">
      <img src="https://ucarecdn.com/f738b9e2-61c3-4e71-b533-bee8cb880474/" />
      <div className="title">
        <Title title={title} />
      </div>
      <div className="nav">
        <Nav />
      </div>
    </div>
  )
}

export default Header
