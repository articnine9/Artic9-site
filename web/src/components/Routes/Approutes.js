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
        <Route path="/gtholidays" element={<Gt />} />
        <Route path="/harrisnadar" element={<Hn />} />
        <Route path="/tinoengineering" element={<Te />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Approutes;
