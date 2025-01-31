import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../Home/Home";
import Work from "../Work/Work";
import Gt from "../Work/Case study/Gt.jsx";
import Hn from "../Work/Case study/Hn.jsx";
import Te from "../Work/Case study/Te.jsx";
import Client from "../Client/Clients";
import Service from "../Service/Service";
import About from "../About/About";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer.jsx";
import PreloaderWrapper from "../Preloader/PreloaderWrapper.jsx";
import ScrollupWrapper from "../Preloader/ScrollupWrapper.jsx";
import Sm from "../Service/Services/Socialmedia.jsx";
const Approutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <ScrollupWrapper>
              <PreloaderWrapper>
                <Home />
              </PreloaderWrapper>
            </ScrollupWrapper>
          }
        />
        <Route
          path="/work"
          element={
            <ScrollupWrapper>
              <PreloaderWrapper>
                <Work />
              </PreloaderWrapper>
            </ScrollupWrapper>
          }
        />
        <Route
          path="/clients"
          element={
            <ScrollupWrapper>
              <PreloaderWrapper>
                <Client />
              </PreloaderWrapper>
            </ScrollupWrapper>
          }
        />
        <Route
          path="/services"
          element={
            <ScrollupWrapper>
              <PreloaderWrapper>
                <Service />
              </PreloaderWrapper>
            </ScrollupWrapper>
          }
        />
        <Route
          path="/about"
          element={
            <ScrollupWrapper>
              <PreloaderWrapper>
                <About />
              </PreloaderWrapper>
            </ScrollupWrapper>
          }
        />
        <Route
          path="/blog"
          element={
            <ScrollupWrapper>
              <PreloaderWrapper>
                <Blog />
              </PreloaderWrapper>
            </ScrollupWrapper>
          }
        />
        <Route
          path="/contact"
          element={
            <ScrollupWrapper>
              <PreloaderWrapper>
                <Contact />
              </PreloaderWrapper>
            </ScrollupWrapper>
          }
        />
        <Route
          path="/gtholidays"
          element={
            <ScrollupWrapper>
              <PreloaderWrapper>
                <Gt />
              </PreloaderWrapper>
            </ScrollupWrapper>
          }
        />
        <Route
          path="/harrisnadar"
          element={
            <ScrollupWrapper>
              <PreloaderWrapper>
                <Hn />
              </PreloaderWrapper>
            </ScrollupWrapper>
          }
        />
        <Route
          path="/tinoengineering"
          element={
            <ScrollupWrapper>
              <PreloaderWrapper>
                <Te />
              </PreloaderWrapper>
            </ScrollupWrapper>
          }
        />
        <Route
          path="/socialMedia"
          element={
            <ScrollupWrapper>
              <PreloaderWrapper>
                <Sm />
              </PreloaderWrapper>
            </ScrollupWrapper>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Approutes;
