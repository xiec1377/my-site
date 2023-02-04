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

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<Home />} />
          <Route path="/experiences" element={<Home />} />
          <Route path="/projects" element={<Home />} />
          <Route path="/hobbies" element={<Home />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
