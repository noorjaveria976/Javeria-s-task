import './About.css'
import React from "react";
import img1 from "../../img/img1.png";
import img2 from "../../img/img2.png";
import pic2 from "../../img/pic2.jpg";


const About_page = () => {
  return (
    <div className="bg-secondary-subtle">
      <div className="work-section  mx-5 py-5" id="about">
        <div className="row">
          <div className="col-6">
            <h2>
              I work with over 279+ happy <br />
              clients all over the World.
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Praesentium <br />
              amet temporibus beatae similique nulla, esse dicta nobis, aut ,
              <br />
              eos deserunt nostrum tenetur.
            </p>
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-md-4">
                <div
                  className="card d-flex justify-content-center text-center mb-3"
                  style={{ height: 100 }}
                >
                  <h4>Amazon</h4>
                </div>
                <div
                  className="card d-flex justify-content-center text-center"
                  style={{ height: 100 }}
                >
                  <h4>dribble</h4>
                </div>
              </div>
              <div className="col-md-4 mt-4">
                <div
                  className="card d-flex justify-content-center text-center mb-3"
                  style={{ height: 100 }}
                >
                  <h4>Google</h4>
                </div>
                <div
                  className="card d-flex justify-content-center text-center"
                  style={{ height: 100 }}
                >
                  <h4>Microsoft</h4>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="card d-flex justify-content-center text-center mb-3"
                  style={{ height: 100 }}
                >
                  <h4>Spotify</h4>
                </div>
                <div
                  className="card d-flex justify-content-center text-center"
                  style={{ height: 100 }}
                >
                  <h4>Linkedin</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Wrapper" id="projects">
        <div className="container">
          <div className="section mx-5 py-5">
            <div className="row">
              <div className="col-10">
                <h2>Latest Case Study</h2>
                <p>
                  Lorem ipsum dolor, sit amet. <br />
                  consectetur adipisicing elit. Earum tempore.
                </p>
              </div>
              <div className="col-2 d-flex justify-content-end mt-4">
                <div className="arrow text-primary d-flex text-center justify-content-center align-item-center">
                  <i className="ri-arrow-left-line" />
                </div>
                <div className="arrow bg-primary text-light">
                  <i className="ri-arrow-right-line" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <img
                  src={img1}
                  alt=""
                  className="img-fluid"
                  style={{ height: 400 }}
                />
              </div>
              <div className="col-md-4">
                <img
                  src={img2}
                  alt=""
                  className="img-fluid"
                  style={{ height: 400 }}
                />
              </div>
              <div className="col-md-4">
                <img
                  src={pic2}
                  alt=""
                  className="img-fluid"
                  style={{ height: 400 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_page;
