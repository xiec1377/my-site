import React from 'react'
import logo from './logo.svg'
import './App.css'
import CloseBar from './components/CloseBar/CloseBar'
import NavBar from './components/NavBar/NavBarHome'
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home/Home'
import TopStaticBar from './components/TopStaticBar/TopStaticBar'
import SideStaticBar from './components/SideStaticBar/SideStaticBar'
import AboutMe from './components/pages/AboutMe/AboutMe'
import Experiences from './components/pages/Experiences/Experiences'
import Projects from './components/pages/Projects/Projects'
import Hobbies from './components/pages/Hobbies/Hobbies'
import StaticInterface from './components/StaticInterface/StaticInterface'
import EyeIcon from './components/StaticInterface/EyeIcon/EyeIcon'

function App() {
  return (
    <>
      {/* <EyeIcon /> */}
      <Router>
        <StaticInterface />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about-me" element={<AboutMe />} /> */}
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/hobbies" element={<Hobbies />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
