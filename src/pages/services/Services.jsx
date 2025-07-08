import React from 'react'
import cardimg1 from "../../img/Style=01.png";
import cardimg2 from "../../img/Style=02.png";
import cardimg3 from "../../img/Style=03.png";

const Services = () => {
  return (
    <div>
<div className="Wrapper bg-secondary-subtle" id="services">
  <div className="container py-5">
    <div className="text-center mx-5">
      <h2>My Services</h2>
      <p>
        Lorem ipsum dolor, sit amet. <br />
        consectetur adipisicing elit. Earum tempore.
      </p>
    </div>
    <div className="row mx-5 pt-5">
      <div className="col-md-4">
        <div className="card px-0" style={{ width: "18rem" }}>
          <img
            src={cardimg1}
            className="card-img-top p-3 rounded"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Back end Development</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-white text-primary">
              Let's Work Togther <i className="ri-arrow-right-line" />
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card mx-0" style={{ width: "18rem" }}>
          <img
            src={cardimg2}
            className="card-img-top p-3 rounded"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title"> Front end Development </h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-white text-primary">
              Let's Work Togther <i className="ri-arrow-right-line" />
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card mx-0" style={{ width: "18rem" }}>
          <img
            src={cardimg3}
            className="card-img-top p-3 rounded"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Content Writing</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-white text-primary">
              Let's Work Togther <i className="ri-arrow-right-line" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


    </div>
  )
}

export default Services