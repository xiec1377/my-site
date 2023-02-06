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
            <div className="gallery-image-container">
              <img src={require('./monsterC2.jpg')} className="gallery-image" />
            </div>
            <div className="gallery-image-container">
              <img
                src={require('./portrait16.png')}
                className="gallery-image"
              />
            </div>
            <div className="gallery-image-container">
              <img src={require('./vancouver.jpg')} className="gallery-image" />
            </div>
          </div>
          <div className="gallery-column">
            <div className="gallery-image-container">
              <img
                src={require('./portrait15.png')}
                className="gallery-image"
              />
            </div>
            <div className="gallery-image-container">
              <img src={require('./havanaC1.jpg')} className="gallery-image" />
            </div>
            <div className="gallery-image-container">
              <img src={require('./portrait6.png')} className="gallery-image" />
            </div>
          </div>
          <div className="gallery-column">
            <div className="gallery-image-container">
              <img src={require('./face.gif')} className="gallery-image" />
            </div>
            <div className="gallery-image-container">
              <img
                src={require('./photoshoot.png')}
                className="gallery-image"
              />
            </div>
            <div className="gallery-image-container">
              <img src={require('./portrait2.png')} className="gallery-image" />
            </div>
            <div className="gallery-image-container">
              <img src={require('./eye.png')} className="gallery-image" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// https://www.youtube.com/watch?v=rqQ4bJgUfps&ab_channel=JessicaChen
