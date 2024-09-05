import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
        <Link to={"/"}>Home</Link>
        <Link to={"/users/location"}>Location</Link>
        <Link to={"/users"}>Users</Link>
    </div>
  )
}

export default Header