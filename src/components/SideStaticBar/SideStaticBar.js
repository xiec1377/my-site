import React from 'react'
import './SideStaticBar.css'

export default function SideStaticBar() {
  return (
    <>
      <img
        src={require('./side_static_bar.png')}
        className="side-static-bar"
        alt="side-static-bar"
      />
      <div className="left-div"></div>
    </>
  )
}
