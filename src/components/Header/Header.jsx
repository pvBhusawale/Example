import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='Header_sec'>
    <div className="LOgo">Logo</div>
    <div className="links">
    <Link to ='/'>Home</Link>
    <Link to ='/about'>About</Link>
    <Link to ='/ab'>About</Link>
    </div>
    </div>
    
  )
}

export default Header
