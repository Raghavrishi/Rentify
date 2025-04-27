import React from "react";
import AboutComponentMini from "../../SubComponents/About";
const AboutUs = () => {
  return (
    <section id="aboutPage" className="page">
      <div className="container">
        <img src="/about.jpg" alt="about" />
        <div className="content">
          <h3>Your peace of mind, our priority!</h3>
          <h5>Verified Listings Only:</h5>
          <p>Every property on Rentify is carefully verified to ensure you rent safely, confidently, and without surprises.</p>
          <h5>Secure Transactions:</h5>
          <p>We offer trusted and secure payment options, so your money — and your future home — are always protected.</p>
          <h5>24/7 Support:</h5>
          <p>Our dedicated support team is here around the clock to assist you with any questions, concerns, or help you might need during your rental journey.</p>
        </div>
      </div>
      <AboutComponentMini />
    </section>
  );
};

export default AboutUs;
