import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import HowItWorks from "./HowItWorks";
import Aboutus from "./Aboutus";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";
import "./App.css";

import "./Navbar.css"


const Home = (props) => {

  return (
    <div>
      <Navbar/>
      <Header />
      <HowItWorks />
      <Aboutus />
      <Services />
      <Contact />
      <Footer />
    
    </div>
  )
}
export default Home