import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../Assets/logo1.png";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false); // State to control the navbar
  const location = useLocation();

  const handleScroll = () => {
    if (window.scrollY > 1400) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const handleNavbarToggle = () => {
    setIsNavbarOpen(!isNavbarOpen); // Toggle navbar open state
  };

  useEffect(() => {
    if (location.pathname === "/") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  const isOtherPage = location.pathname !== "/";

  return (
    <nav
      className={`navbar navbar-expand-lg bg-body-tertiary ${isScrolled ? "scrolled" : ""} ${
        isOtherPage ? "other-page" : ""
      }`}
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" aria-label="Go to homepage">
          <img src={logo} alt="Company Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleNavbarToggle} 
          aria-controls="navbarNavAltMarkup"
          aria-expanded={isNavbarOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isNavbarOpen ? "show" : ""}`} 
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <Link
              to="/work"
              className={`nav-link ${location.pathname === "/work" ? "active" : ""}`}
            >
              Work
            </Link>
            <Link
              to="/clients"
              className={`nav-link ${location.pathname === "/clients" ? "active" : ""}`}
            >
              Clients
            </Link>
            <Link
              to="/services"
              className={`nav-link ${location.pathname === "/services" ? "active" : ""}`}
            >
              Services
            </Link>
            <Link
              to="/about"
              className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}
            >
              About
            </Link>
            <Link
              to="/blog"
              className={`nav-link ${location.pathname === "/blog" ? "active" : ""}`}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
