import React from 'react'

function SocialIcons() {
  return (
    <div className="plat-container">
      <a
        href="https://www.linkedin.com/in/catherine-xie-101377/"
        className="plat-icon-container"
      >
        <img src={require('./linkedin.png')} className="plat-icon" />
      </a>
      <a href="https://github.com/xiec1377" className="plat-icon-container">
        <img src={require('./github.png')} className="plat-icon" />{' '}
      </a>
      <a href="./resume.png" download className="plat-icon-container">
        <img src={require('./resume.png')} className="plat-icon" />
      </a>
      <a
        href="catherinexie2014@gmail.com?subject='Hello from Abstract!'&body='Just popped in to say hello'"
        className="plat-icon-container"
      >
        <img src={require('./mail.png')} className="plat-icon" />{' '}
      </a>
    </div>
  )
}

export default SocialIcons
