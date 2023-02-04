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
<<<<<<< Updated upstream
            <li className="nav-item">
              <div className="nav-icon"></div>
              <Link to="/home" className="nav-links">
                home
              </Link>
=======
            <li>
              <a href="/" className="nav-item">
                <div className="nav-icon"></div>
                <p>home</p>
              </a>
>>>>>>> Stashed changes
            </li>
            <li>
              <a href="/about-me" className="nav-item">
                <div className="nav-icon"></div>
                <p>about me</p>
              </a>
            </li>
            <li>
              <a href="/experiences" className="nav-item">
                <div className="nav-icon"></div>
                <p>experiences</p>
              </a>
            </li>
            <li>
              <a href="/projects" className="nav-item">
                <div className="nav-icon"></div>
                <p>projects</p>
              </a>
            </li>
            <li>
              <a href="/hobbies" className="nav-item">
                <div className="nav-icon"></div>
                <p>hobbies</p>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default NavBar
