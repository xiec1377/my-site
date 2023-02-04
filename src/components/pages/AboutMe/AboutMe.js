import React from 'react'
import Footer from '../../Footer/Footer'
import StaticInterface from '../../StaticInterface/StaticInterface'
import './AboutMe.css'
import '../../staticCSS.css'

export default function AboutMe() {
  return (
    <>
      <StaticInterface />
      <div className="page">
        <div className="page-title">
          <h1>about me.</h1>
        </div>
        <img
          src={require('./profile_pic.jpg')}
          className="profile-pic"
          alt="profile-pic"
        />
        <div className="about-me-desc">
          Welcome to my page! I'm Catherine Xie. I'm currently an undergraduate
          student in my 3A term of my Bachelor of Computer Science (Honours
          Co-op) at the University of Waterloo. I am an effervescent and
          creative student with programming and problem-solving experience who
          seeks new growth opportunities in computer science. I like to venture
          out to different technological disciplines such as full-stack
          development, UX/UI development and project management. My past
          experiences include working with C, C++, Python, JavaScript, SQL,
          HTML/CSS, ReactJS, AngularJS, JasmineJS, Linux OS to name a few. Some
          of my side projects include a stock trading simulator and a job search
          curator. In my free time, I like to make 3D models in Blender, develop
          3D games in Unity, design UX/UI mockups in Figma, explore my growing
          passion for digital art and go to the gym.
        </div>
      </div>
      <Footer />
    </>
  )
}
