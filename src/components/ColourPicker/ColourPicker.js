import React from 'react'
import './ColourPicker.css'

export default function ColourPicker() {
  return (
    <img
      src={require('./colour_picker.png')}
      className="colour-picker"
      alt="colour-picker"
    />
  )
}
