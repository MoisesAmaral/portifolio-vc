import React from 'react'
import './about.css'
import ME from '../../assets/me-about1.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">

            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Expereience</h5>
              <small>3+ Years Working</small>          
            </article>

            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small> 10+ Worldwide</small>          
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Completed</small>          
            </article>

          </div>
          <p> Graduated in Information Technology Management, I come through studies and dedication, expanding my technological knowledge. currently I have focused on JavaScript, React, Node, and Mysql,
I really like new challenges, completing a challenge for me is essential for a good learning experience, finally I hope you like my portfolio (obs. made with love and React lol...)
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>

      </div>
    </section>
  )
}

export default About