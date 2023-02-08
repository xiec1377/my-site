import React from 'react'
import Footer from '../../Footer/Footer'
import StaticInterface from '../../StaticInterface/StaticInterface'
import '../../static.scss'
import './Experiences.css'
import ExperienceCard from '../../ExperienceCard/ExperienceCard'
import NavBarExp from '../../NavBar/NavBarExp'

export default function Experiences() {
  return (
    <>
      <NavBarExp />
      <div className="page">
        <div className="page-title">
          <h1>experiences.</h1>
        </div>
        <ExperienceCard />
      </div>
    </>
  )
}
