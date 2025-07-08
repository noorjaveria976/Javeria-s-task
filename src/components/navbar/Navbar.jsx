import React from "react";

import { Link } from "react-router-dom";

const Navbar = (  ) => {

  // console.log(props);
  
  return (
    <div>
      <nav class="navbar navbar-expand-lg">
      <div class="container ">
         <a class="navbar-brand imgdp" href="#"> </a>
        <a class="navbar-brand" href="#"><span>Javeria</span> </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item text-center">
              <Link class="nav-link my-2 mx-3 text-uppercase active" aria-current="page" to="/"> Home </Link>
            </li>
            <li class="nav-item  text-center">
              <Link class="nav-link my-2 mx-3 text-uppercase mx-2" aria-current="page" to="/about"> About</Link>
            </li>
            <li class="nav-item text-center">
              <Link class="nav-link my-2 mx-3 text-uppercase mx-2" aria-current="page" to="/services"> Services</Link>
            </li>
            <li class="nav-item text-center">
              <Link class="nav-link my-2 mx-3 text-uppercase mx-2" aria-current="page" to="/testi"> Testimonial</Link>
            </li>
            <li class="nav-item text-center">
              <Link class="nav-link my-2 mx-3 text-uppercase mx-2" aria-current="page" to="/contact"> Contact</Link>
            </li>
          </ul>
          <div class="align-items-center d-flex nav-item justify-content-center">
            <a class="nav-link me-5" href="">
              <span>LOGIN</span>
              <i class="fa-solid fa-user"></i>

            </a>
            <form class="form-inline">
              <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                <i class="fa fa-search" aria-hidden="true"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>

    </div>
  );
};

export default Navbar;
