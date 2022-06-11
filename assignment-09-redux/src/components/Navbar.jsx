import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Link to='/'>todo</Link>
      <Link to='/counter'>counter</Link>
    </div>
  )
}

export default Navbar
