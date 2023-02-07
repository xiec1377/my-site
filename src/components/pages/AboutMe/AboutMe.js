import React from 'react'
import Footer from '../../Footer/Footer'
import StaticInterface from '../../StaticInterface/StaticInterface'
import './AboutMe.css'
import '../../static.scss'
import { AiFillHome } from 'react-icons/ai'
import { IoInformationCircle } from 'react-icons/io5'
import { MdOutlineWork, MdLightbulb, MdBrush } from 'react-icons/md'

export default function AboutMe() {
  function github() {
    window.location = 'https://github.com/xiec1377'
  }
  return (
    <>
      <div className="title">pages</div>
      <nav className="navbar">
        <div className="navbar-container">
          <a href="/" className="nav-item">
            <div className="nav-icon-container">
              <div className="nav-icon">
                <AiFillHome size={30} color={'#383838'}/>
              </div>
            </div>
            <p>home</p>
          </a>
          <a href="/about-me" className="nav-item nav-item-selected">
            <div className="nav-icon">
              <div className="home-icon">
                <IoInformationCircle size={30} color={'#383838'} />
              </div>
            </div>
            <p>about me</p>
          </a>

          <a href="/experiences" className="nav-item">
            <div className="nav-icon">
              <div className="home-icon">
                <MdOutlineWork size={30} color={'#383838'} />
              </div>
            </div>
            <p>experiences</p>
          </a>

          <a href="/projects" className="nav-item">
            <div className="nav-icon">
              <div className="home-icon">
                <MdLightbulb size={30} color={'#383838'} />
              </div>
            </div>
            <p>projects</p>
          </a>

          <a href="/hobbies" className="nav-item">
            <div className="nav-icon">
              <div className="home-icon">
                <MdBrush size={30} color={'#383838'} />
              </div>
            </div>
            <p>hobbies</p>
          </a>
        </div>
      </nav>
      <div className="page">
        <div className="page-title">
          <h1>about me.</h1>
        </div>

        <div id="about-me-page">
          <div class="row">
            <img
              src={require('./interview.jpg')}
              className="profile-container"
            />{' '}
            <div className="about-me-desc">
              Welcome to my page! I'm Catherine Xie. I'm currently an
              undergraduate student in my 3A term of my Bachelor of Computer
              Science (Honours Co-op) at the University of Waterloo.
              <br />
              <br /> I am an effervescent and creative student with programming
              and problem-solving experience who seeks new growth opportunities
              in computer science. I like to venture out to different
              technological disciplines such as full-stack development, UX/UI
              development and project management. My past experiences include
              working with C, C++, Python, JavaScript, SQL, HTML/CSS, ReactJS,
              AngularJS, JasmineJS, Linux OS to name a few. Some of my side
              projects include a stock trading simulator and a job search
              curator. In my free time, I like to make 3D models in Blender,
              develop 3D games in Unity, design UX/UI mockups in Figma, explore
              my growing passion for digital art and go to the gym.
            </div>
          </div>
        </div>
        <div className="plat-container">
          <a
            href="https://www.linkedin.com/in/catherine-xie-101377/"
            className="plat-icon-container"
          >
            <img src={require('./linkedin.png')} className="plat-icon" />
          </a>
          <img
            src={require('./github.png')}
            className="plat-icon"
            onClick={github}
          />{' '}
          <a href="./resume.png" download className="plat-icon-container">
            <img src={require('./resume.png')} className="plat-icon" />
          </a>
          <a
            href="catherinexie2014@gmail.com?subject='Hello from Abstract!'&body='Just popped in to say hello'"
            className="plat-icon-container"
          >
            <img src={require('./mail.png')} className="plat-icon" />{' '}
          </a>
        </div>
        <div className="home-icon">
          <AiFillHome size={60} color={'red'} />
        </div>
      </div>
    </>
  )
}
