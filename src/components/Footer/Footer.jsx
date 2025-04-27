import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
      <footer className={isHomePage ? 'homePage_footer otherPage_footer': "otherPage_footer"}>
        <div className="container" >
          <h4 class ="text-white">RENTIFY</h4>
          <p>
            THE HOUSE RENTAL APP
          </p>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/termsandconditions"}>Terms&Conditions</Link>
            </li>
            <li>
              <Link to={"/"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="container">
          <h4>Connect with us</h4>
          <p>+91 9456789340</p>
          <p>renturhouse@rentify.com</p>
          <p>© All Rights Reserved By RENTIFY.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
