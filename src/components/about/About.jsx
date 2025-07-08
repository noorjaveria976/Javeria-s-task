import React from 'react'

import aboutpic from '../../images/about-img.png'

const About = () => {
  return (
    <div> 
        <section class="bg-light">
    <div class="container py-5 px-3" >
      <div class="row">
        <div class="col-md-6">
          <img src={aboutpic} alt="There is an About Image" class="img-fluid" data-aos="fade-up"/>
        </div>
        <div class="col-md-6">
          <h2 class="fs-2 fw-bold text-uppercase lh-sm mt-3" data-aos="fade-up">About Us</h2>
          <p class="mt-3 mb-4" data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            dolorem eum
            consequuntur ipsam repellat dolor soluta aliquid laborum, eius odit consectetur vel quasi in quidem, eveniet
            ab est corporis tempore.</p>
          <a href="" class="btn2" data-aos="fade-up">Read More</a>

        </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default About