import React from 'react'
import Footer from '../../Footer/Footer'
import StaticInterface from '../../StaticInterface/StaticInterface'
import '../../staticCSS.css'
import './Projects.css'
import ProjectGallery from './ProjectGallery'

export default function Projects() {
  return (
    <>
      <StaticInterface />
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
