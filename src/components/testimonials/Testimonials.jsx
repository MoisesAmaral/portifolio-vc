import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'


// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Fernanda Silva',
    review: `A good professional, fulfills what he promises, delivers the demands on time!!`
  },
  {
    avatar: AVTR2,
    name: 'Josué Alves',
    review: `I really enjoyed being able to share some moments of work with Moises, a great professional`
  }, 
  
]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      
      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>

      {data.map(({avatar, name, review}, index)=>{
        return(
          <SwiperSlide className='testimonial' key={index}>
          <div className="client__avatar">
            <img src={avatar} alt="Avatar" />
          </div>
          <h5 className='client__name'>{name}</h5>
            <small className='client__review'>{review}</small>
        </SwiperSlide>
        )
      })}
      </Swiper>
    </section>
  )
}

export default Testimonials