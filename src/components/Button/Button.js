import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

const STYLES = ['btn--dark', 'btn--blue']

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0]

  return (
    <Link to="/home">
      <button
        className={'btn ${checkButtonStyle}'}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  )
}
