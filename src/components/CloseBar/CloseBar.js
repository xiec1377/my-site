import React from 'react'
import { Link } from 'react-router-dom'
import './CloseBar.css'

function CloseBar() {
  return (
    <div className="close-bar-container">
      <Link to="/home" className="navbar-logo">
        &#128526; catherine-xie-website-2023
      </Link>
      <img
        src={require('./close_icons.png')}
        className="close-icons"
        alt="close icons"
      />
    </div>
  )
}

export default CloseBar
