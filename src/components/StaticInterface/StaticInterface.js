import React, { useState } from 'react'
import CloseBar from '../CloseBar/CloseBar'
import ColourPicker from '../ColourPicker/ColourPicker'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import SideStaticBar from '../SideStaticBar/SideStaticBar'
import TopStaticBar from '../TopStaticBar/TopStaticBar'
// import { TriangleColorPicker, toHsv } from 'react-native-color-picker'
// import Slider from '@react-native-community/slider'
import { SketchPicker, ChromePicker } from 'react-color'
import EyeIcon from './EyeIcon/EyeIcon'

export default function StaticInterface() {
  // const [color, setColor] = useState(toHsv('green'))

  // function onColorChange(color) {
  //   setColor({ color })
  // }
  return (
    <>
      <CloseBar />
      <TopStaticBar />
      <SideStaticBar />
      <ColourPicker />
      {/* <SketchPicker />
      <ChromePicker /> */}
      <Footer />
    </>
  )
}
// import { SketchPicker } from 'react-color';

// export default function StaticInterface() {
//   return (
//     <>
//       <CloseBar />
//       <TopStaticBar />
//       <SideStaticBar />
//       {/* <ColourPicker /> */}
//       <SketchPicker />
//       <Footer />
//     </>
//   )
// }
