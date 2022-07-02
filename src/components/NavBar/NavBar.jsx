import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
const NavBar = () => {
  return (
    <div className='main'>
        <Link to="/" className='li'>Login</Link>
        <Link to="/booking" className='li'>booking</Link>
        <Link to="/home" className='li'>home</Link>
    </div>
  )
}

export default NavBar