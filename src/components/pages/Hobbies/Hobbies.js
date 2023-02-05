import React from 'react'
import Footer from '../../Footer/Footer'
import StaticInterface from '../../StaticInterface/StaticInterface'
import '../../staticCSS.css'
import './Hobbies.css'

export default function Hobbies() {
  return (
    <>
      <div className="title">pages</div>
      <nav className="navbar">
        <div className="navbar-container">
          <a href="/" className="nav-item">
            <div className="nav-icon"></div>
            <p>home</p>
          </a>
          <a href="/about-me" className="nav-item">
            <div className="nav-icon"></div>
            <p>about me</p>
          </a>

          <a href="/experiences" className="nav-item">
            <div className="nav-icon"></div>
            <p>experiences</p>
          </a>

          <a href="/projects" className="nav-item">
            <div className="nav-icon"></div>
            <p>projects</p>
          </a>

          <a href="/hobbies" className="nav-item nav-item-selected">
            <div className="nav-icon"></div>
            <p>hobbies</p>
          </a>
        </div>
      </nav>
      <div className="page">
        <div className="page-title">
          <h1>hobbies.</h1>
        </div>
        {/* <div className="hobby-desc">
            <p>In my free time, I dabble in digital art, 3D-modeling and knitting.</p>
        </div> */}
        <div className="gallery">
          <div className="gallery-column">
            <img src={require('./monsterC2.jpg')} className="monster" />
          </div>
        </div>
      </div>
    </>
  )
}
