import React from 'react'
import './ProjectGallery.css'

function ProjectGallery() {
  return (
    <div className="gallery-container">
      <div className="gallery-column">
        <a href="https://devpost.com/software/pitcheasy" className="img-link">
          <img
            src={require('./sales_pitch_generator.jpg')}
            alt="sales-pitch-generator"
            className="gallery-item-1"
          />
        </a>

        <a
          href="https://devpost.com/software/north-arcadia"
          className="img-link"
        >
          <img
            src={require('./north_arcadia.jpg')}
            alt="north-arcadia"
            className="gallery-item-3"
          />
        </a>
      </div>
      <div className="gallery-column">
        <a
          href="https://devpost.com/software/search-with-tech"
          className="img-link"
        >
          <img
            src={require('./search_with_tech.jpg')}
            alt="search-with-tech"
            className="gallery-item-2"
          />
        </a>
      </div>
    </div>
  )
}

export default ProjectGallery
