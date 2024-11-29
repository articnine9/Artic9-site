import React from "react";
import logo from "../../Assets/logo2.png";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { ImFacebook2 } from "react-icons/im";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGoogle } from "react-icons/io5";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="text-left text-lg-start text-muted bg-color-dark pt-4 footer-body">
      <section>
        <div className="container text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 text-left text-lower">
              <h5 className="mb-4">
                <img src={logo} alt="Logo" />
              </h5>
              <div className="cntnt">
                We are a collection of creators, designers and developers with
                cutting edge technology essential for the success of any
                business.
              </div>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h5
                className="text-uppercase fw-bold mb-4"
                style={{ color: "#cacaca" }}
              >
                Services
              </h5>
              <div className="mb-4">
                <a href="/socialmedia" className="footer-link">
                &gt;&gt;Social Media Marketing
                </a>
              </div>
              <div className="mb-4">
                <a href="/websitedev" className="footer-link">
                &gt;&gt;Web Developing
                </a>
              </div>
              <div className="mb-4">
                <a href="/videoprod" className="footer-link">
                &gt;&gt;Video Production
                </a>
              </div>
              <div className="mb-4">
                <a href="/searchengine" className="footer-link">
                &gt;&gt;SEO
                </a>
              </div>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h5
                className="text-uppercase fw-bold mb-4"
                style={{ color: "#cacaca" }}
              >
                Services
              </h5>
              <div className="mb-4">
                <a href="/socialmedia" className="footer-link">
                &gt;&gt;Social Media Marketing
                </a>
              </div>
              <div className="mb-4">
                <a href="/websitedev" className="footer-link">
                &gt;&gt;Web Developing
                </a>
              </div>
              <div className="mb-4">
                <a href="/videoprod" className="footer-link">
                &gt;&gt;Video Production
                </a>
              </div>
              <div className="mb-4">
                <a href="/searchengine" className="footer-link">
                &gt;&gt;SEO
                </a>
              </div>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h5
                className="text-uppercase fw-bold mb-4"
                style={{ color: "#cacaca" }}
              >
                Contact
              </h5>
              <div className="mb-4">
                <FaPhoneAlt className="icns mx-2" />
                <a
                  href="tel:+919003442463"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  {" "}
                  +91 90034 42463
                </a>
              </div>
              <div className="mb-4">
                <FaEnvelope className="icns mx-2" />
                <a
                  href="mailto:hi@artic9.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                   hi@artic9.com
                </a>
              </div>
              <div className="mb-4 flex">
                <IoHomeSharp className="icns mx-2" />
                <a
                  href="https://www.google.com/maps/place/Artic+Nine+Creative+Agency/@8.1862086,77.4257656,17.79z/data=!4m6!3m5!1s0x3b04f1246b9aa969:0xfa80cd8763303aa8!8m2!3d8.1861488!4d77.4254668!16s%2Fg%2F11fn7v1vn7?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link "
                >
                  30A, Gnanai St, Nagercoil, Tamil Nadu <p style={{textIndent:"33px"}}>- 629001</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container p-4 pb-0">
        <div className="section-title text-center">
          <h5
            className="text-uppercase fw-bold mb-4"
            style={{ color: "#cacaca" }}
          >
            Follow Us On:
          </h5>
        </div>
        <section className="mb-4 text-center">
          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1 "
            style={{ backgroundColor: "#3b5998" }}
            href="#!"
            role="button"
          >
            <ImFacebook2 />
          </a>

          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#1c2831" }}
            href="#!"
            role="button"
          >
            <FaXTwitter />
          </a>

          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#dd4b39" }}
            href="#!"
            role="button"
          >
            <IoLogoGoogle />
          </a>

          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#ac2bac" }}
            href="#!"
            role="button"
          >
            <FiInstagram />
          </a>

          <a
            data-mdb-ripple-init
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#0082ca" }}
            href="#!"
            role="button"
          >
            <FaLinkedin />
          </a>
        </section>
      </div>

      <div
        className="text-center p-4 "
        style={{ backgroundColor: "rgba(145, 145, 145, 0.16)" }}
      >
        <span className="footer-link"> © 2024 </span>
        <a
          className="footer-link"
          href="https://artic9.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Artic9 Creative Agency
        </a>
      </div>
    </footer>
  );
};

export default Footer;
