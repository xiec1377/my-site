import React from 'react'
import Footer from '../../Footer/Footer'
import StaticInterface from '../../StaticInterface/StaticInterface'
import '../../staticCSS.css'
import './Experiences.css'
import ExperienceCard from '../../ExperienceCard/ExperienceCard'

export default function Experiences() {
  return (
    <>
      <StaticInterface />
      <div className="page">
        <div className="page-title">
          <h1>experiences.</h1>
        </div>
        <ExperienceCard />
      </div>
      <Footer />
    </>
  )
}
