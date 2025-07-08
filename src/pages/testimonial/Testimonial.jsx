import './TestiStyle.css'
import React from "react";
import pic2 from "../../img/pic2.jpg"

const Testimonial = () => {
  return (
    <div className="wrapper bg-secondary-subtle" id="testimonial">
        <div className="container py-5 border-bottom d-flex justify-content-center">
          <div className="row text-center">
            <div className="col-md-3">
              <div className="px-2 border-end">
                <div className="icon text-dark fs-3"><i className="ri-stack-line"></i></div>
                <div className="years"><h3>23+</h3></div>
                <p>years of experience</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="px-2 border-end">
                <div className="icon text-dark fs-3"><i className="ri-window-line"></i></div>
                <div className="years"><h3>279+</h3></div>
                <p>Completed projects  </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="px-4 border-end">
                <div className="icon text-dark fs-3"><i className="ri-emotion-happy-line"></i></div>
                <div className="years"><h3>325+</h3></div>
                <p>Happy clients</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="px-5">
                <div className="icon text-dark fs-3"><i className="ri-cup-line"></i></div>
                <div className="years"><h3>1652+</h3></div>
                <p>Hours of work</p>
              </div>
            </div>
          </div>
        </div>

        
        <div className="container py-5">
          <div className="row mx-5">
            <div className="col-md-6">
              <h2>Client Testimonial</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
                molestias!
              </p>

              <div className="bg-info-subtle rounded p-3 my-3">
                <h2>"</h2>
                <p>
                  Great Designer! does great work and is very flexible with
                  change.If you are a programmer and looking for UI/UX designer
                  is definitely well qualified for the job.
                </p>
              </div>

              <div className="d-flex justify-content-between">
                <div className="d-flex align-item-top">
                  <div className="imgdp mt-2 rounded me-4"></div>
                  <div className="name">
                    <h6>Javeria noor</h6>
                    <p>Founder of Relik</p>
                  </div>
                </div>
                <div className="d-flex justify-content-end mt-3">
                  <div
                    className="arrow text-primary d-flex text-center justify-content-center align-item-center"
                  >
                    <i className="ri-arrow-left-line"></i>
                  </div>
                  <div className="arrow bg-primary text-light">
                    <i className="ri-arrow-right-line"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img
                  src={pic2}
                  alt=""
                  className="img-fluid" style={{height:"400px",width:"500px"}}
                  // style="height: 400px", width="500px"
                />
            </div>
          </div>
        </div>
      </div>
  );
};

export default Testimonial;
