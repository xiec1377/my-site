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
        <ProjectGallery />
      </div>
    </>
  )
}

{
  /* <a
href="https://devpost.com/software/north-arcadia"
className="img-link"
>
<img
  src={require('./north_arcadia.jpg')}
  alt="north-arcadia"
  className="gallery-item-1"
/>
</a>
<div className="gallery">
<div></div>
<a href="https://devpost.com/software/north-arcadia">
  <img
    src={require('./search_with_tech.jpg')}
    alt="search-with-tech"
    className="gallery-item-1"
  />
</a>
<a href="https://devpost.com/software/north-arcadia">
  <img
    src={require('./sales_pitch_generator.jpg')}
    alt="sales-pitch-generator"
    className="gallery-item-1"
  />
</a> */
}
