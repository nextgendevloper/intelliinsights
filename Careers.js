import React, {Component} from 'react';
import emailjs from "emailjs-com";


 

const Careers = () => {
 
  

   
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

  return(
    <div>
   <div className="cardholder"> <div class="card">
  <div class="card-body">
    <h5 class="card-title"><h1>Software Developer (.Net)</h1>
IntelliInsights Software Pvt. Ltd. - Delhi, Delhi</h5>
    <p class="card-text">Expertise in ASP.NET 3.5/4.0, C#.NET<br/>
Expertise in ASP.NET MVC , ASP.Net Core<br/>
Preferred Candidate Should have at least 1 year experience in WPF, WCF . Freshers can also apply.<br/>
Good to have knowledge of Xamarin<br/>
Expertise in Object Oriented Programming techniques, JavaScript, ASP.NET, AJAX, XML, XSLT, Web Services........<br/>
<a href="https://in.indeed.com/intelliinsights-jobs">
  <i class="fas fa-paper-plane"></i>   Apply on Indeed</a></p>
   
  </div>
</div>
<div class="card">
  <div class="card-body">
    <h5 class="card-title"><h1> Jr. Software Developer (.Net)</h1>
IntelliInsights Software Pvt. Ltd. - Delhi, Delhi</h5>
    <p class="card-text">React position will be responsible for the application development mainly for Desktop as well as Web-based applications in the services domain that use Microsoft <br/>Technologies with SQL Server.
Experience/Prerequisites:<br/>
Required strong troubleshooting skills and good knowledge of C#.<br/>
Good to have some experience in WPF, MVVM, Expression Blend.........<br/>
<a href="https://in.indeed.com/intelliinsights-jobs">
  <i class="fas fa-paper-plane"></i>   Apply on Indeed</a></p>
   
  </div>
</div>
</div>
     
      <section className="contactus-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="contact-leftside col-12 col-lg-5">
                  <h1 className="main-heading fw-bold">
                   Apply for vacancy
                  </h1>
                  <p className="main-hero-para">
                   "Fill your detail here so that our team will contact you as soon!!"
                  </p>
                  <figure>
                    <img
                      src="./Images/hero13.png"
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
                          type="text"
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
                    <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="experience"
                          id=""
                          className="form-control"
                          placeholder="Experience (In years)"
                          
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="state"
                          id=""
                          className="form-control"
                          placeholder="State"
                         
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
                        value=""
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
    )
  }

export default Careers