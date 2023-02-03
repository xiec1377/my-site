import React from 'react'
import { Link } from 'react-router-dom'
import './CloseBar.css'

function CloseBar() {
  return (
    <div className="close-bar-container">
      <Link to="/home" className="navbar-logo">
        catherine-xie-website-2023
      </Link>
      <div className="icon-span">
        &#95;
        <p className="square"></p>
        &#x2715;
      </div>
    </div>
  )
}

export default CloseBar
