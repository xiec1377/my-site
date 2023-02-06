import React from 'react'
import Footer from '../../Footer/Footer'
import StaticInterface from '../../StaticInterface/StaticInterface'
import '../../staticCSS.css'
import './Projects.css'
import ProjectGallery from './ProjectGallery'

export default function Projects() {
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

          <a href="/projects" className="nav-item nav-item-selected">
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
        <div className="page-title">
          <h1>projects.</h1>
        </div>
        {/* <div className="hobby-desc">
          In my free time, I dabble in digital art, 3D-modeling and knitting.
        </div> */}
        <div className="gallery">
          <div className="gallery-column">
            <a
              href="https://devpost.com/software/pitcheasy"
              className="gallery-image-container"
            >
              <img
                src={require('./sales_pitch_generator.jpg')}
                alt="sales-pitch-generator"
                className="gallery-image gray"
              />
            </a>
            <a
              href="https://devpost.com/software/north-arcadia"
              className="gallery-image-container"
            >
              <img
                src={require('./north_arcadia.jpg')}
                alt="north-arcadia"
                className="gallery-image"
              />
            </a>
          </div>
          <div className="gallery-column">
            <a
              href="https://devpost.com/software/search-with-tech"
              className="gallery-image-container"
            >
              <img
                src={require('./search_with_tech.jpg')}
                alt="search-with-tech"
                className="gallery-image"
              />
            </a>
            <a
              href="https://github.com/xiec1377/my-runner-project"
              className="gallery-image-container runner"
            >
              <img src={require('./runner.png')} className="gallery-image" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
