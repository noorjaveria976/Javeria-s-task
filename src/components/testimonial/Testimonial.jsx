import React from 'react'

import pic from '../../images/client.jpg'

const Testimonial = () => {
  return (
    <div>
  <div class="container pb-4 ">
    <h2 class="fs-2 fw-bold text-uppercase lh-sm text-center pt-3 mb-2 ">What our Client say!</h2>
    <div id="carouselExampleAutoplaying" class="carousel slide mb-2 shadow" data-bs-ride="carousel">
      <div class="carousel-inner  py-2">
        <div class="carousel-item active">
          <div class="row ">
            <div class="col-sm-12 col-lg-4 ">
              <div class=" d-flex justify-content-center align-items-center ">
                <div class=" testimonial-img-circle d-flex justify-content-center align-items-center">
                  <img data-aos="fade-up" src={pic} alt="Circle Image" height="175" width="175" class="img-fluid"/>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-lg-8 ">
              <div class="detail-box d-flex flex-column px-3 pt-0 pt-lg-3">
                <div class="name">
                  <i class="fa fa-quote-left" aria-hidden="true"></i>
                  <h6>
                    Siaalya
                  </h6>
                </div>
                <p>
                  It is a long established fact that a reader will be
                  distracted by the readable cIt is a long established fact
                  that a reader will be distracted by the readable c
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-item active">
          <div class="row ">
            <div class="col-sm-12 col-lg-4 ">
              <div class=" d-flex justify-content-center align-items-center ">
                <div class=" testimonial-img-circle d-flex justify-content-center align-items-center">
                  <img data-aos="fade-up" src={pic} alt="Circle Image" height="175" width="175" class="img-fluid"/>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-lg-8 ">
              <div class="detail-box d-flex flex-column px-3 pt-0 pt-lg-3">
                <div class="name">
                  <i class="fa fa-quote-left" aria-hidden="true"></i>
                  <h6>
                    Siaalya
                  </h6>
                </div>
                <p>
                  It is a long established fact that a reader will be
                  distracted by the readable cIt is a long established fact
                  that a reader will be distracted by the readable c
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item active">
          <div class="row ">
            <div class="col-sm-12 col-lg-4 ">
              <div data-aos="fade-up"  class=" d-flex justify-content-center align-items-center ">
                <div class=" testimonial-img-circle d-flex justify-content-center align-items-center">
                  <img  src={pic} alt="Circle Image" height="175" width="175" class="img-fluid"/>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-lg-8 ">
              <div class="detail-box d-flex flex-column px-3 pt-0 pt-lg-3">
                <div class="name">
                  <i class="fa fa-quote-left" aria-hidden="true"></i>
                  <h6>
                    Siaalya
                  </h6>
                </div>
                <p>
                  It is a long established fact that a reader will be
                  distracted by the readable cIt is a long established fact
                  that a reader will be distracted by the readable c
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Testimonial