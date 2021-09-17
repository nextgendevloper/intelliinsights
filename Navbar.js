import React, { useState }   from "react";
import {useEffect} from "react"
import "./Navbar.css";
import { SiIndeed} from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [scrolled,setScrolled]=React.useState(false);
const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 200 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })
let navbarClasses=['navbar'];
  if(scrolled){
    navbarClasses.push('scrolled');
  }
  return (
    <div>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <NavLink to="/" className="logo">
          <h2>
            <span>I</span>NTELLIINSIGHTS
         
          </h2>
        </NavLink>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink exact activeClassName="navlink" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink   activeClassName="navlink" to="/about">About us</NavLink>
            </li>
            <li>
              <NavLink to="/service">Services</NavLink>
            
            </li>
            <li>
              <NavLink to="/careers">Careers</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
          

          <li>
            <a href="https://in.indeed.com/intelliinsights-jobs" target="_blank">
                      <SiIndeed className="indeed"/ >
                      </a>
           
            </li>
           
           
           
            <li>
            
               
              
            <a href="https://www.linkedin.com/company/intelliinsights-software-pvt-ltd?trk=public_profile_topcard-current-company" target="_blank">
                    <i class="fab fa-linkedin "></i>
                   </a>
            
            </li>  <li>
        
              
             <a href="https://www.facebook.com/IntelliInsights-Software-Pvt-Ltd-1707704212867947" target="_blank">
                      <i className="fab fa-facebook-f "></i>
                      </a>
            </li>
            
          
           
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
    </div>
  );
};

export default Navbar;