import React, { useState, useRef } from "react";
import { RiMenu2Line, RiCloseLine } from "react-icons/ri";
// import FaOpencart from "react-icons/ri";
import { Link, BrowserRouter as Router } from "react-router-dom";
import "../Css/Navbar.css";
import { FaOpencart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import logo from "../Images/Dot-Pro-white.png";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);

  const navRef = useRef(null);

  return (
    // <nav className="navbar ">
    //   <div className="logo">
    //     {/* Insert your logo here */}
    //     <img src="logo.png" alt="Logo" />
    //   </div>
    //   <div className="links">
    //     <a href="#" className="link">
    //       Link 1
    //     </a>
    //     <a href="#" className="link">
    //       Link 2
    //     </a>
    //     <a href="#" className="link">
    //       Link 3
    //     </a>
    //     <a href="#" className="link">
    //       Link 4
    //     </a>
    //   </div>
    //   <div className={`icons ${isNavOpen ? "open" : ""}`}>
    //     <a href="#" className="icon">
    //       {/* Insert your login icon here */}
    //       <img src="login-icon.png" alt="Login Icon" />
    //     </a>
    //     <a href="#" className="icon">
    //       {/* Insert your cart icon here */}
    //       <img src="cart-icon.png" alt="Cart Icon" />
    //     </a>
    //   </div>
    //   <div className="nav-icon" onClick={toggleNav}>
    //     {isNavOpen ? <RiCloseLine /> : <RiMenu2Line />}
    //   </div>
    // </nav>
    <>
      <nav className="navbar" ref={navRef}>
        {/* <div className='container'> */}
        <img className="logo" src={logo}></img>
        <ul
          className={mobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setMobile(false)}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>Home</li>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>Collection</li>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>Contact Us</li>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>About Us</li>
          </Link>
        </ul>
        <div className="icons ">
          <a href="#" className="icon">
            <FaOpencart size={25} />
          </a>
          <a href="#" className="icon">
            <FaUser size={25} />
          </a>
        </div>

        <button className="mobile-menu-icon" onClick={() => setMobile(!mobile)}>
          {mobile ? <RiCloseLine /> : <RiMenu2Line />}
        </button>
        {/* </div> */}
      </nav>
    </>
  );
};

export default Navbar;
