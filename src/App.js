import React from 'react'
import logo from './logo.svg'
import './App.css'
import CloseBar from './components/CloseBar/CloseBar'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home/Home'
import TopStaticBar from './components/TopStaticBar/TopStaticBar'
import SideStaticBar from './components/SideStaticBar/SideStaticBar'
import AboutMe from './components/pages/AboutMe/AboutMe'
import Experiences from './components/pages/Experiences/Experiences'
import Projects from './components/pages/Projects/Projects'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/hobbies" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
