import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [navHeight, setNavHeight] = useState(false);
  const navigate = useNavigate();
  const gotoHome = ()=>{
    navigate('/');
  }
  return (
    <>
      <nav className={navHeight ? "show nav" : "nav"}>
        <div className="logo" onClick={()=> gotoHome()}>RENTIFY</div>
        <ul>
        <li>
            <Link to={"/"}>HOME</Link>
          </li>
          <li>
            <Link to={"/aboutus"}>ABOUT US</Link>
          </li>
          <li>
            <Link to={"/villas"}>PROPS</Link>
          </li>
          <li>
            <Link to={"/contact"}>CONTACT</Link>
          </li>
          <li>
            <Link to={"/login"}>LOGIN</Link>
          </li>
          <li>
            <Link to={"/signup"}>SIGN UP</Link>
          </li>
          
        </ul>
        <RxHamburgerMenu
          className="hamburger"
          onClick={() => setNavHeight(!navHeight)}
        />
      </nav>
    </>
  );
};

export default Navbar;
