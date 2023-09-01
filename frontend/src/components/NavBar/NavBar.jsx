import React from 'react'
import './NavBar.css'
const NavBar = () => {
  return (
    <nav>
      <span className='logo'>Search</span>
      <ul>
        <li className='active'><p><span>A</span> people by name</p></li>
        <li><p><span>B</span> People by skills, etc</p></li>
        <li><p><span>C</span> Jobs</p></li>
      </ul>
    </nav>
  )
}

export { NavBar }