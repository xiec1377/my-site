import React from 'react'
import Footer from '../../Footer/Footer'
import StaticInterface from '../../StaticInterface/StaticInterface'
import '../../static.scss'
import './Projects.css'
import ProjectGallery from './ProjectGallery'
import NavBarProject from '../../NavBar/NavBarProject'

export default function Projects() {
  return (
    <>
      <NavBarProject />
      <div className="page">
        <div className="page-title">
          <h1>projects.</h1>
        </div>
        {/* <div className="hobby-desc">
          In my free time, I dabble in digital art, 3D-modeling and knitting.
        </div> */}
        <div className="page-container">
          <div className="gallery">
            <div className="gallery-column">
              <a
                href="https://devpost.com/software/pitcheasy"
                className="gallery-image-container"
              >
                <img
                  src={require('./sales_pitch_generator.jpg')}
                  alt="sales-pitch-generator"
                  className="gallery-image"
                />
                <div className="gallery-caption">
                  <h3>Pitch Perfect</h3>
                  <p>Application that generates customized stock pitch</p>{' '}
                </div>
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

          <div className="footer"></div>
          <Footer />
        </div>
      </div>
    </>
  )
}
