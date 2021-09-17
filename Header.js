import React from "react";

import { NavLink } from "react-router-dom";


const Header = () => {
   
  return (
    <div>
      <header>
        <section className="container main-hero-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-left ">
              <h1 className="display-2">
                Welcome to  <br /> IntelliInsights
              </h1>
              <p className="main-hero-para">
              "Intelliinsights is a software developer Company with the eyes on the prize as we have a strong focus on Technologies.

We work on software assisted business solutions with startup like speed and the stability of an enterprise. Many of our employees have given positive reviews to the firm which say that the learning curve and the minds working there are the two reasons that make it a suitable work environment. While your work-life balance might be a little off.a"
              </p>
              <h3>Vacancy Open for freshers and Experienced</h3>
              <div className="input-group mt-3">
            
                <button className="btn-style"  > <NavLink to="/careers"> Apply</NavLink></button>
              </div>
            </div>
            {/*  --------------- main header right side--------------  */}
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-item-center main-herosection-images">
              <img
                src="./Images/hero7.jpg"
                alt="heroimg"
                className="img-fluid"
              />
              
              <div className="xyz">
                <chat/>
              </div>

             
            </div>
          </div>
        </section>
      </header>
    </div>
  );
};

export default Header;