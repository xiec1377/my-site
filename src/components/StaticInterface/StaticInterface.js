import React from 'react'
import CloseBar from '../CloseBar/CloseBar'
import ColourPicker from '../ColourPicker/ColourPicker'
import NavBar from '../NavBar/NavBar'
import SideStaticBar from '../SideStaticBar/SideStaticBar'
import TopStaticBar from '../TopStaticBar/TopStaticBar'

export default function StaticInterface() {
  return (
    <>
      <CloseBar />
      <TopStaticBar />
      <SideStaticBar />
      <ColourPicker />
      <NavBar />
    </>
  )
}
