import React from 'react'
import Footer from '../../Footer/Footer'
import StaticInterface from '../../StaticInterface/StaticInterface'
import '../../static.scss'
import './Hobbies.css'
import NavBarHobbies from '../../NavBar/NavBarHobbies'

export default function Hobbies() {
  return (
    <>
      <NavBarHobbies />
      <div className="page">
        <div className="page-title">
          <h1>hobbies.</h1>
        </div>
        <div className="hobby-desc">
          In my free time, I dabble in digital art, 3D-modeling and hip-hop
          dance. I also like taking pictures of myself hehe.
        </div>
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
