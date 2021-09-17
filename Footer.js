import React from "react";
import { NavLink } from "react-router-dom";
import { SiIndeed} from "react-icons/si";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-6 col-lg-3">
                <h2>
    Welcome
</h2>
<ul className="list">
    <li><NavLink to="/about"> About Us</NavLink></li>
    <li><NavLink to="/service">Services</NavLink></li>
    <li><NavLink to="/careers">Careers</NavLink></li>
   
</ul>
                </div>

                <div className="col-6 col-lg-3">
                <h2>
    Services
</h2>
<ul className="list">
    <li>Web Development</li>
    <li>Mobile App development</li>
    <li>Desktop Software</li>
    <li>Artificial Intelligence</li>
</ul>
                </div>

                <div className="col-6 col-lg-3">
                <h2>
   Get In Touch
</h2>
<ul className="list">
    <li>+91 7678290810</li>
    <li>sales@intelliinsights.com</li>
    <li>Sant Nagar Marg, Sant Nagar, Burari, Delhi-110084.</li>
  
</ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>Follow Us</h2>
                  <div className="row">
                    <div className="col-3 mx-auto">
                      <a href="https://www.facebook.com/IntelliInsights-Software-Pvt-Ltd-1707704212867947" target="_blank">
                      <i className="fab fa-facebook-f fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <a href="https://www.linkedin.com/company/intelliinsights-software-pvt-ltd?trk=public_profile_topcard-current-company" target="_blank">
                    <i class="fab fa-linkedin fontawesome-style"></i>
                   </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <a href="https://in.indeed.com/intelliinsights-jobs" target="_blank">
                      <i class="fab fa-invision fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <i className="fab fa-twitter fontawesome-style"></i>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="mt-5">
                <p className="main-hero-para text-center w-100">
                &copy;{new Date().getFullYear()} IntelliInsights Software Pvt Ltd | All right reserved | Terms of service | Privacy
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;