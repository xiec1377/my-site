import React from 'react'
import Footer from '../../Footer/Footer'
import StaticInterface from '../../StaticInterface/StaticInterface'
import TextBox from '../../TextBox/TextBox'
import './Home.css'

function Home() {
  return (
    <>
      <StaticInterface />
      <div className="page">
        <div className="home-title">welcome.</div>
        <div className="home-desc">
          Welcome to my page! To get started, click on a page on the right.{' '}
        </div>
      </div>
    </>
  )
}

export default Home
