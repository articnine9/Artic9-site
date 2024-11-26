import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../Home/Home";
import Work from "../Work/Work";
import Client from "../Client/Client";
import Service from "../Service/Service";
import About from "../About/About";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import Navbar from "../Header/Navbar";

const Approutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/clients" element={<Client />} />
        <Route path="/services" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default Approutes;
