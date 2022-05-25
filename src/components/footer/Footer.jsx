import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'

import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>MOISES-DEV</a>
      
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Esperience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/Sistemasblu7/" target="_blank_"><FaFacebookF /></a>
        <a href="https://www.instagram.com/moisesdevops/" target="_blank_"><FiInstagram /></a>
        <a href='https://www.linkedin.com/in/moises-moreira-557346183/' > <BsLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; MOISES-DEV developer.  All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer