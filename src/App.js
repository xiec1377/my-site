import logo from './logo.svg'
import './App.css'
import CloseBar from './components/CloseBar/CloseBar'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home/Home';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact component={Home} />
        </Routes>
      </Router>
    </>
  )
}

export default App
