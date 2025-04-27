import React from "react";

const About = () => {
  return (
    <>
      <section id="aboutUs_Mini">
        <div className="first_container">
          <div className="content">
          <h1>ABOUT US</h1>
          <p>
          At Rentify, we believe that finding your perfect home should be simple, secure, and stress-free. Whether you're searching for a cozy apartment, a family house, or a luxurious villa, Rentify connects renters and property owners through a trusted, easy-to-use platform. Our mission is to modernize the rental experience by offering verified listings, transparent communication, and a seamless booking process. We are passionate about helping people discover spaces they’ll love — because at Rentify, we know it’s not just a house, it’s your home.
          </p>
          </div>
          <button>We strive to offer you best possible homes to stay!</button>
        </div>
        <div className="second_container">
          <div className="image_1">
            <img src="/people.jpg" alt="people" />
          </div>
          <div className="image_2">
            <img src="people2.jpg" alt="people2" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
