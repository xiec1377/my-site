import React from 'react';
import logo from './logo.svg'
import './App.css'
import CloseBar from './components/CloseBar/CloseBar'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home/Home'
import TopStaticBar from './components/TopStaticBar/TopStaticBar'

function App() {
  return (
    <>
      <Router>
        <CloseBar />
        <TopStaticBar />
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
