import './HomeStyle.css'
import React from "react";



import mypic from "../../img/pic1.png";

const Home_page = () => {
  return (
    <div>
      <div className="hero-section mx-5 text-white my-3" id="home">
        <div className="cards mb-3">
          <div className="row g-0">
            <div className="col-md-8 mt-5 p-5">
              <h1>
                👋 Hey, I am Javeria <br />
                Mern Stack Developer.
              </h1>
              <p className="py-3">
                Mern Stack Front end Developer and Content writing <br />
                Based on LA. I specialize in Bug Fixing, Responsive Web <br />
                Design, and Visual Development
              </p>
              <a href="#">
                <button className="btn btn-primary">View Projects</button>
              </a>
            </div>
            <div className="col-md-4">
              <img
                src={mypic} className="img-fluid rounded-start"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home_page;
