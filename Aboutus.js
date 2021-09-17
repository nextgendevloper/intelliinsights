import React, { useState } from "react";
import howToUseApp from "./API/howTouse.js";

const Aboutus = () => {
  const [aboutData, setAboutData] = useState(howToUseApp);
  return (
    <div>
      <section className="common-section our-services">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-5 text-center our-service-leftside-img">
              <img src="./Images/hero6.jpg" alt="aboutusIMg" />
            </div>

            {/* 1section right side data  */}
            <div className="col-12 col-lg-7 our-services-list">
              <h3 className="mini-title">
                Intelliinsights
              </h3>
              <h1 className="main-heading">Who we are</h1>
              <p className="main-hero-para">
              Intelliinsights is a dynamic and client centric Software Company based in India with global perspectives.
               It has successfully catered to the needs of small & medium scale corporate the world over.

                 For serving the clients well, it has arranged strong and lasting strategic alliances 
               with experts in various fields. They 
              share Values, Vision and Mission of SSI with equal commitment and zest.
                <br/><ul>
               <li> Some of the areas of prime importance are as under:<br/></li>

             <li>Good corporate citizenship.<br/></li> 
             <li> Professionalism.<br/></li>
             <li> Customer first.<br/></li>
              <li>Commitment to quality.<br/></li>
              <li>Dignity of the individual.<br/></li>

              </ul>  </p>


              <br/>
              <button className="btn-style btn-style-border">learn more</button>
            </div>
          </div>
        </div>
      </section>

      {/* 2nd part of bayt us section  */}

      <section className="common-section our-services our-services-rightside">
        <div className="container mb-5">
          <div className="row">
            {/* 1section right side data  */}
            <div className="col-12 col-lg-7 our-services-rightside-content d-flex justify-content-center align-items-start flex-column">
              <h3 className="mini-title">Quality we provide</h3>
              <h1 className="main-heading">
               available 24/7
              </h1>
             <p className="main-hero-para">
              Quality has indeed become a buzzword today. It has different meanings for different people.
               As a matter of fact, quality needs a paradigm shift: best quality, best management, and delivery on time – the customer 
               wants all this and more, and that is the quality way for any industry. Quality is not what the supplier puts in. It is what the customer gets at a price/cost acceptable to him.

At SSI, Quality is understanding not just what the customer wants but truly understanding the customer and then
 creating processes/products – with the involvement of the employees connected with each process – with a view to exceeding the expressed and 
 inherent needs of the client. It also means constant efforts at improving the degree of excellence with an aim to eventually bringing its stringent processes to zero defects
  aimed at bringing about cost effective products with dependability, speed and flexibility.
             </p>
              <br />
              <button className="btn-style btn-style-border">learn more</button>
            </div>

            {/* images section  */}
            <div className="col-12 col-lg-5  our-service-rightside-img">
              <img src="./Images/hero9.jpg" alt="aboutusIMg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutus;