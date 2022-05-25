import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='services'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>creating web layouts</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>user experience</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>responsive designer</p>
            </li>
            
           {/*END OF UI/UX*/}
          </ul>
        </article>

        <article className='services'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>web interface development.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>RestFul API consumption.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>modern development, focused on results.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>user experience, focused on agility.</p>
            </li>
            
            
           {/*END OF Web Development*/}
          </ul>
        </article>

        <article className='services'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Content creation for the web.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>from Instagram</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>from facebook.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>for other social networks.</p>
            </li>
           
           
           {/*END OF Content Creantion*/}
          </ul>
        </article>

      </div>  
    </section>
  )
}

export default Services