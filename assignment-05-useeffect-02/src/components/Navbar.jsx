import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Link to='/'>Stopwatch</Link>
      <Link to='/timer'>Timer</Link>
    </div>
  )
}

export default Navbar
