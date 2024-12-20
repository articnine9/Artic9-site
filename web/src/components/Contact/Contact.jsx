import React, { useState } from "react";
import "./Contact.css";

import { FaUser } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";

import contact from "../../Assets/contact-img.png";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };
  return (
    <div className="contact">
      <div className="contact-main">

        <div className="contact-banner">
          <h2>Contact us</h2>
        </div>

        <div className="contact-section row">
          <div className="contact-sec col-lg-6 col-md-12">
            <img src={contact} alt="contact" />
          </div>
          <div className="contact-sec1 col-lg-6 col-md-12">
            <div className="contact-head">
              <span>Come, Share Your Thoughts</span>
              <h2>With us</h2>
            </div>
            <div className="contact-form">
              <form onSubmit={handleSubmit} className="form">
                <div className="form-group">
                  <FaUser className="form-icon" />

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your Name"
                    required
                  />
                </div>

                <div className="form-group">
                  <IoMdMail className="form-icon" />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your Email"
                    required
                  />
                </div>

                <div className="form-group">
                  <FaPhone className="form-icon" />

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your Phone Number"
                    required
                  />
                </div>

                <div className="form-group">
                  <FaArrowDown className="form-icon" />

                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Enter your Subject"
                    required
                  />
                </div>

                <div className="form-group1">
                  <FaEdit className="form-icon" />

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Enter your Message"
                    rows="4"
                    required
                  />
                </div>

                <div className="form-group2">
                  <button type="submit" className="submit-btn">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="location-section">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d246.8228141382225!2d77.42540667755222!3d8.186125409336519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3b04f1246b9aa969%3A0xfa80cd8763303aa8!2sArtic%20Nine%20Creative%20Agency%2C%2030A%2C%20Gnanai%20St%2C%20Nagercoil%2C%20Tamil%20Nadu%20629001!3m2!1d8.1861488!2d77.4254668!4m5!1s0x3b04f1246b9aa969%3A0xfa80cd8763303aa8!2sartic9%20maps!3m2!1d8.1861488!2d77.4254668!5e0!3m2!1sen!2sin!4v1708584002038!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
        
      </div>
    </div>
  );
};

export default Contact;
