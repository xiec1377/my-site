import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '../Button/Button'
import EyeIcon from '../StaticInterface/EyeIcon/EyeIcon'
import './NavBar.css'
import '../static.scss'
import { AiFillHome } from 'react-icons/ai'
import { IoInformationCircle } from 'react-icons/io5'
import { MdOutlineWork, MdLightbulb, MdBrush } from 'react-icons/md'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import SocialIcons from '../SocialIcons/SocialIcons'

function NavBarHome() {
  return (
    <>
      <div className="title">pages</div>
      <nav className="navbar">
        <div className="navbar-container">
          <a href="/" className="nav-item nav-item-selected">
            <div className="nav-icon">
              <div className="home-icon">
                <AiFillHome size={30} color={'#383838'} />
              </div>
            </div>
            <p>home</p>
            <div className="eye-icon">
              <BsEye size={20} color={'#D9D9D9'} />
            </div>
          </a>
          {/* <a href="/about-me" className="nav-item nav-item-selected">
            <div className="nav-icon">
              <div className="home-icon">
                <IoInformationCircle size={30} color={'#383838'} />
              </div>
            </div>
            <p>about me</p>
            <div className="eye-icon">
              <BsEye size={20} color={'#D9D9D9'} />
            </div>
          </a> */}

          <a href="/experiences" className="nav-item">
            <div className="nav-icon">
              <div className="home-icon">
                <MdOutlineWork size={30} color={'#383838'} />
              </div>
            </div>
            <p>experiences</p>
            <div className="eye-icon">
              <BsEyeSlash size={20} color={'#D9D9D9'} />
            </div>
          </a>

          <a href="/projects" className="nav-item">
            <div className="nav-icon">
              <div className="home-icon">
                <MdLightbulb size={30} color={'#383838'} />
              </div>
            </div>
            <p>projects</p>
            <div className="eye-icon">
              <BsEyeSlash size={20} color={'#D9D9D9'} />
            </div>
          </a>

          <a href="/hobbies" className="nav-item">
            <div className="nav-icon">
              <div className="home-icon">
                <MdBrush size={30} color={'#383838'} />
              </div>
            </div>
            <p>hobbies</p>
            <div className="eye-icon">
              <BsEyeSlash size={20} color={'#D9D9D9'} />
            </div>
          </a>
        </div>
        <SocialIcons />
      </nav>
    </>
  )
}

export default NavBarHome
