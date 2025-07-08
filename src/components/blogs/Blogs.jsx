import React from 'react'
import blog1 from '../../images/b1.jpg'
import blog2 from '../../images/b2.jpg'
import blog3 from '../../images/b3.jpg'

const Blogs = () => {
  return (
    <div>
        <section>
    <div class="container">
      <h2 class="fs-2 fw-bold text-uppercase lh-sm text-center pt-5 ">Latest Blog</h2>
    </div>
    <div class="container py-5 px-3">
      <div class="row">
        <div class="col-md-4">
          <div class="card shadow mb-2" data-aos="fade-up">
            <img src={blog1} class="card-img-top" alt="images"/>
            <div class="card-body">
              <h5 class="card-title fw-bold">Look even slightly believable. If you are </h5>
              <p class="card-text">alteration in some form, by injected humour, or randomised words which don't look
                even slightly believable.</p>
              <a href="#" class="btn2">Read More</a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card shadow mb-2" data-aos="fade-up">
            <img src={blog2}  class="card-img-top" alt="images"/>
            <div class="card-body">
              <h5 class="card-title fw-bold ">Anything embarrassing hidden in the middle </h5>
              <p class="card-text">alteration in some form, by injected humour, or randomised words which don't look
                even slightly believable.</p>
              <a href="#" class="btn2">Read More</a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card shadow mb-2" data-aos="fade-up">
            <img src={blog3}  class="card-img-top" alt="images"/>
            <div class="card-body">
              <h5 class="card-title fw-bold">Anything embarrassing hidden in the middle </h5>
              <p class="card-text">alteration in some form, by injected humour, or randomised words which don't look
                even slightly believable.</p>
              <a href="#" class="btn2">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
        </div>
  )
}

export default Blogs