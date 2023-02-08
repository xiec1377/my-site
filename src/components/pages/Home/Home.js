import React from 'react'
import Footer from '../../Footer/Footer'
import NavBar from '../../NavBar/NavBarHome'
import StaticInterface from '../../StaticInterface/StaticInterface'
import TextBox from '../../TextBox/TextBox'
import './Home.css'
import '../../static.scss'
import { AiFillHome } from 'react-icons/ai'
import { IoInformationCircle } from 'react-icons/io5'
import { MdOutlineWork, MdLightbulb, MdBrush } from 'react-icons/md'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import NavBarHome from '../../NavBar/NavBarHome'

function Home() {
  return (
    <>
      <NavBarHome />
      <div className="page">
        <div id="home-page"></div>
        <img src={require('./interview.png')} className="interview-pic" />

        <div className="block">
          <h1 id="welcome-title">catherine</h1>

          <div className="home-desc">
            Welcome to my page! I'm Catherine Xie. I'm currently an
            undergraduate student in my 3A term of my Bachelor of Computer
            Science (Honours Co-op) at the University of Waterloo.
            <br />
            <br /> I am an effervescent and creative student with programming
            and problem-solving experience who seeks new growth opportunities in
            computer science. I like to venture out to different technological
            disciplines such as full-stack development, UX/UI development and
            project management. My past experiences include working with C, C++,
            Python, JavaScript, SQL, HTML/CSS, ReactJS, AngularJS, JasmineJS,
            Linux OS to name a few. Some of my side projects include a stock
            trading simulator and a job search curator. In my free time, I like
            to make 3D models in Blender, develop 3D games in Unity, design
            UX/UI mockups in Figma, explore my growing passion for digital art
            and go to the gym.
          </div>
          <div className="plat-container">
            <a
              href="https://www.linkedin.com/in/catherine-xie-101377/"
              className="plat-icon-container"
            >
              <img src={require('./linkedin.png')} className="plat-icon" />
            </a>
            <a
              href="https://github.com/xiec1377"
              className="plat-icon-container"
            >
              <img src={require('./github.png')} className="plat-icon" />{' '}
            </a>
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
          {/* <svg viewBox="0 0 640 640">
            <path
              class="path"
              fill="white"
              stroke="black"
              stroke-width="4"
              d="M70.74 411.89L91.42 411.89L112.09 411.89L114.39 
        391.22L114.39 370.54L110.95 349.86L114.39 329.19L115.54 
        308.51L115.54 287.84L125.88 270.61L146.55 269.46L167.23 
        269.46L176.42 287.84L172.97 308.51L172.97 329.19L172.97 
        351.01L172.97 371.69L174.12 392.36L184.46 409.59L205.14
        409.59L225.81 410.74L230.41 390.07L229.26 369.39L226.96 
        348.72L226.96 328.04L231.55 307.36L235 286.69L228.11 
        267.16L247.64 259.12L268.31 259.12L288.99 261.42L303.92 
        275.2L299.32 297.03L297.03 317.7L297.03 339.53L298.18 
        360.2L298.18 380.88L299.32 401.55L318.85 406.15L339.53 
        406.15L349.86 388.92L352.16 368.24L355.61 347.57L355.61 
        326.89L354.46 305.07L352.16 284.39L351.01 263.72L370.54 
        256.82L391.22 256.82L411.89 260.27L411.89 280.95L411.89 
        302.77L413.04 323.45L416.49 345.27L418.78 365.95L421.08 
        386.62L436.01 401.55L456.69 402.7L477.36 403.85L481.96 
        384.32L484.26 363.65L484.26 342.97L484.26 320L479.66 
        300.47L473.92 279.8L469.32 260.27L465.88 239.59L465.88 
        218.92L448.65 208.58L427.97 208.58L406.15 208.58L384.32 
        208.58L362.5 208.58L341.82 208.58L321.15 208.58L299.32 
        207.43L277.5 205.14L255.68 205.14L232.7 202.84L212.03 
        201.69L190.2 201.69L168.38 202.84L144.26 206.28L122.43 
        208.58L101.76 210.88L81.08 210.88L60.41 210.88L53.51 
        231.55L50.07 252.23L47.77 274.05L47.77 295.88L46.62 
        317.7L45.47 338.38L45.47 360.2L48.92 380.88L54.66 
        400.41L69.59 414.19"
            />
          </svg> */}
        </div>
      </div>
    </>
  )
}

export default Home
