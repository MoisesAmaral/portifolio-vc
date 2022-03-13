import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import {FaCodepen} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="_blank_"><BsLinkedin /></a>
        <a href="https://github.com" target="_blank_"><BsGithub /></a>
        <a href="https://codepen.io/" target="_blank_">< FaCodepen /></a>
    </div>
  )
}

export default HeaderSocials

