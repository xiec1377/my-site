import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button/Button'
import './NavBar.css'

function NavBar() {
  const [button] = useState(true)
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <ul>
            {button && (
              <Button buttonStyle="btn--dark">
                home
              </Button>
            )}

            <li className="nav-item">
              <Link to="/about-me" className="nav-links">
                about me
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/experiences" className="nav-links">
                experiences
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-links">
                projects
              </Link>
            </li>
            <li className="nav-item">
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
