import * as React  from 'react';
import logo from './logo.svg'
import './App.css'
import CloseBar from './components/CloseBar/CloseBar'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home/Home';

function App() {
  return (
    <>
      <Router>
        <CloseBar />
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
