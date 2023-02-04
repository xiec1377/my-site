import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button/Button'
import './NavBar.css'

// {
//   button && <Button buttonStyle="btn--dark">home</Button>
// }

function NavBar() {
  const [button] = useState(true)
  return (
    <>
      <div className="title">pages</div>
      <nav className="navbar">
        <div className="navbar-container">
          <ul>
            <li className="nav-item">
              <div className="nav-icon"></div>
              <Link to="/home" className="nav-links">
                home
              </Link>
            </li>
            <li className="nav-item">
            <div className="nav-icon"></div>
              <Link to="/about-me" className="nav-links">
                about me
              </Link>
            </li>
            <li className="nav-item">
            <div className="nav-icon"></div>
              <Link to="/experiences" className="nav-links">
                experiences
              </Link>
            </li>
            <li className="nav-item">
            <div className="nav-icon"></div>
              <Link to="/projects" className="nav-links">
                projects
              </Link>
            </li>
            <li className="nav-item">
            <div className="nav-icon"></div>
              <Link to="/hobbies" className="nav-links">
                hobbies
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default NavBar
