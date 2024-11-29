import React from "react";
import { Link } from "react-router-dom";  
import logo from "../../Assets/logo2.png";
import "./Navbar.css";

const Navbar = () => {
  return (
      <nav className="navbar">
        <div className="logo">
          <Link to="/" aria-label="Go to homepage">
            <img src={logo} alt="Company Logo" />
          </Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/work" aria-label="View Work">Work</Link>
          </li>
          <li>
            <Link to="/clients" aria-label="View Clients">Clients</Link>
          </li>
          <li>
            <Link to="/services" aria-label="View Services">Services</Link>
          </li>
          <li>
            <Link to="/about" aria-label="Learn About Us">About</Link>
          </li>
          <li>
            <Link to="/blog" aria-label="Read our Blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact" aria-label="Contact Us">Contact</Link>
          </li>
        </ul>
      </nav>
  );
};

export default Navbar;
