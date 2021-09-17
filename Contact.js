import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {

  function sendEmail(e) {
    e.preventDefault();
 
    emailjs.sendForm('intelliinsights', 'job', e.target, 'user_hpL5JddR58MXoIT7fnGia')
      .then((result) => {
     console.log(result.text);
     }, 
     (error) => {
     console.log(error.text);
    });
    e.target.reset();
 }
 


  return (
    <div>
      <section className="contactus-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="contact-leftside col-12 col-lg-5">
                  <h1 className="main-heading fw-bold">
                   Contact Us 
                  </h1>
                  <p className="main-hero-para">
                   "Give us your feedback to us. And also give a message for any query."
                  </p>
                  <figure>
                    <img
                      src="./Images/hero12.jpg"
                      alt="contatUsImg"
                      className="img-fluid"
                    />
                  </figure>
                </div>

                {/* right side contact form  */}
                <div className="contact-rightside col-12 col-lg-7">
                  <form onSubmit={sendEmail}>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="firstName"
                          id=""
                          className="form-control"
                          placeholder="First Name"
                          
                          
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="lastName"
                          id=""
                          className="form-control"
                          placeholder="Last Name"
                         
                          
                          
                        />
                      </div>
                    
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="phone"
                          name="phone"
                          id=""
                          className="form-control"
                          placeholder="Phone Number "
                         
                          
                          
                        />
                      </div>
                      
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="email"
                          id=""
                          className="form-control"
                          placeholder="Email ID"
                         
                          
                        />
                      </div>
                    </div>
                   
              

                    <div className="row">
                      <div className="col-12 ">
                        <input
                          type="text"
                          name="message"
                          id=""
                          className="form-control"
                          placeholder="Enter Your Message"
                        
                          
                          
                        />
                      </div>
                    </div>
                    <div class="form-check form-checkbox-style">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="checked"
                        id="flexCheckChecked"
                        checked="checked"
                      />
                      <label
                        class="form-check-label"
                        className="main-hero-para">
                        I agree that the Intelliinsights Software Pvt. Ltd. may contact me at the
                        email address or phone number above
                      </label>
                    </div>

                    <input
                      type="submit"
                      className="btn btn-style w-100"
                      value="Send">
                
                    </input>
                  </form>
                </div>
  
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;