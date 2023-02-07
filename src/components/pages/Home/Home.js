import React from 'react'
import Footer from '../../Footer/Footer'
import NavBar from '../../NavBar/NavBar'
import StaticInterface from '../../StaticInterface/StaticInterface'
import TextBox from '../../TextBox/TextBox'
import './Home.css'
import '../../static.scss'

function Home() {
  return (
    <>
      <div className="title">pages</div>
      <nav className="navbar">
        <div className="navbar-container">
          <a href="/" className="nav-item nav-item-selected">
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

          <a href="/hobbies" className="nav-item">
            <div className="nav-icon"></div>
            <p>hobbies</p>
          </a>
        </div>
      </nav>
      <div className="page">
        <h1 id="welcome-title">welcome.</h1>

        <div className="home-desc">
          Welcome to my page! Click on a page on the right to get started.
        </div>
      </div>
    </>
  )
}

export default Home
