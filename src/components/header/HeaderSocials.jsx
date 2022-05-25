import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import {FaCodepen} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/moises-moreira-557346183/" target="_blank_"><BsLinkedin /></a>
        <a href="https://github.com/MoisesAmaral" target="_blank_"><BsGithub /></a>
        <a href="https://codepen.io/" target="_blank_">< FaCodepen /></a>
    </div>
  )
}

export default HeaderSocials

