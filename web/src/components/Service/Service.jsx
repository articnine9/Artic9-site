import React, { useRef, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoIosArrowRoundForward } from "react-icons/io";

import pic5 from "../../Assets/service.png";
import video from "../../Assets/Artic 9 logo.mp4";
import "./Service.css";
import { useNavigate } from "react-router-dom";

const Service = () => {
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = false;
    }
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 250,
      easing: "ease-out",
      once: false,
      offset: 100,
    });
  }, []);

  const [openSection, setOpenSection] = useState(0);
  const navigate = useNavigate();
  const toggleContent = (index) => {
    setOpenSection(index);
  };

  const handleReadMore = (route) => {
    navigate(route); 
  };
  const sections = [
    {
      title: "Graphic Designing",
      summary:
        "Creating a distinctive and compelling identity that resonates for generations.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="34px"
          viewBox="0 -960 960 960"
          width="34px"
          fill=" #ffca00"
        >
          <path d="M440-183v-274L200-596v274l240 139Zm80 0 240-139v-274L520-457v274Zm-40-343 237-137-237-137-237 137 237 137ZM160-252q-19-11-29.5-29T120-321v-318q0-22 10.5-40t29.5-29l280-161q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v318q0 22-10.5 40T800-252L520-91q-19 11-40 11t-40-11L160-252Zm320-228Z" />
        </svg>
      ),
      imageUrl: pic5,
      num: "01",
      content:
        "At the core of our approach, we maintain that brand and UX are closely connected and work together. Our team specializes in creating and representing digital brand identities across channels, providing strategy assistance and guidelines to ensure consistency.",
      route: "/graphic-designing",
    },
    {
      title: "Social Media Marketing",
      summary:
        "Leveraging online channels and strategies to reach, engage, convert audiences and grow.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="34px"
          viewBox="0 -960 960 960"
          width="34px"
          fill=" #ffca00"
        >
          <path d="M160-80q-33 0-56.5-23.5T80-160v-400q0-33 23.5-56.5T160-640h640q33 0 56.5 23.5T880-560v400q0 33-23.5 56.5T800-80H160Zm0-80h640v-400H160v400Zm240-40 240-160-240-160v320ZM160-680v-80h640v80H160Zm120-120v-80h400v80H280ZM160-160v-400 400Z" />
        </svg>
      ),
      imageUrl: pic5,
      num: "02",
      content:
        "At Artic9, we believe everyone deserves an exceptional user experience, whether using a product at work or in their free time. We create memorable enterprise and consumer products as well as provide comprehensive design systems for effortless product iteration.",
      route: "/graphic-designing",

    },
    {
      title: "Site Developement",
      summary:
        "Building functional and engaging online platforms to showcase your brand value.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="34px"
          viewBox="0 -960 960 960"
          width="34px"
          fill=" #ffca00"
        >
          <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H160v400Zm140-40-56-56 103-104-104-104 57-56 160 160-160 160Zm180 0v-80h240v80H480Z" />
        </svg>
      ),
      imageUrl: pic5,
      num: "03",
      content:
        "A website is the most important channel to showcase your brand to customers. Our portfolio features award-winning websites designed to give users the best experience possible while also meeting business goals.",
      route: "/graphic-designing",

    },
    {
      title: "Content",
      summary:
        "Visual storytelling through creative and impactful designs that captivates audiences.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="34px"
          viewBox="0 -960 960 960"
          width="34px"
          fill=" #ffca00"
        >
          <path d="M660-570q-25 0-42.5-17.5T600-630q0-25 17.5-42.5T660-690q25 0 42.5 17.5T720-630q0 25-17.5 42.5T660-570Zm-360 0q-25 0-42.5-17.5T240-630q0-25 17.5-42.5T300-690q25 0 42.5 17.5T360-630q0 25-17.5 42.5T300-570Zm180 110q-25 0-42.5-17.5T420-520q0-25 17.5-42.5T480-580q25 0 42.5 17.5T540-520q0 25-17.5 42.5T480-460Zm0-220q-25 0-42.5-17.5T420-740q0-25 17.5-42.5T480-800q25 0 42.5 17.5T540-740q0 25-17.5 42.5T480-680Zm0 520q-20 0-40.5-3t-39.5-8v-143q0-35 23.5-60.5T480-400q33 0 56.5 25.5T560-314v143q-19 5-39.5 8t-40.5 3Zm-140-32q-20-8-38.5-18T266-232q-28-20-44.5-52T205-352q0-26-5.5-48.5T180-443q-10-13-37.5-39.5T92-532q-11-11-11-28t11-28q11-11 28-11t28 11l153 145q20 18 29.5 42.5T340-350v158Zm280 0v-158q0-26 10-51t29-42l153-145q12-11 28.5-11t27.5 11q11 11 11 28t-11 28q-23 23-50.5 49T780-443q-14 20-19.5 42.5T755-352q0 36-16.5 68.5T693-231q-16 11-34.5 21T620-192Z" />
        </svg>
      ),
      imageUrl: pic5,
      num: "04",
      content:
        " Authentic content is essential in the digital world. We work with brands to identify their unique content needs and deliver custom-made assets at the highest quality, down to the last detail.",
      route: "/graphic-designing",

    },
    {
      title: "Video Production",
      summary:
        "Crafting pocket-sized, user-centric applications that is robust yet flexible.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="34px"
          viewBox="0 -960 960 960"
          width="34px"
          fill=" #ffca00"
        >
          <path d="m480-420 240-160-240-160v320Zm28 220h224q-7 26-24 42t-44 20L228-85q-33 5-59.5-15.5T138-154L85-591q-4-33 16-59t53-30l46-6v80l-36 5 54 437 290-36Zm-148-80q-33 0-56.5-23.5T280-360v-440q0-33 23.5-56.5T360-880h440q33 0 56.5 23.5T880-800v440q0 33-23.5 56.5T800-280H360Zm0-80h440v-440H360v440Zm220-220ZM218-164Z" />
        </svg>
      ),
      imageUrl: pic5,
      num: "05",
      content:
        "Our designers and developers collaborate to create websites and products that provide exceptional user experiences and functionality. We optimize search engine visibility, ensure accessibility, and maximize performance.",
      route: "/graphic-designing",

    },
    {
      title: "SEO",
      summary:
        "Crafting seamless user experiences through intuitive interfaces and appealing designs.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="34px"
          viewBox="0 -960 960 960"
          width="34px"
          fill=" #ffca00"
        >
          <path d="M520-520h278q-15-110-91.5-186.5T520-798v278Zm-80 358v-636q-121 15-200.5 105.5T160-480q0 122 79.5 212.5T440-162Zm80 0q110-14 187-91t91-187H520v278Zm-40-318Zm0 400q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Z" />
        </svg>
      ),
      imageUrl: pic5,
      num: "06",
      content:
        "Our designers and developers collaborate to create websites and products that provide exceptional user experiences and functionality. We optimize search engine visibility, ensure accessibility, and maximize performance.",
      route: "/seo",

    },
  ];

  return (
    <div className="services-main">
      <div className="services">
        <div className="services-head" data-aos="fade-down">
          <h2>A full-service digital innovation partner</h2>
          <p>
            Our advanced design and technology capabilities drive leading
            brands, forward-thinking ideas, and dynamic digital experiences.
          </p>
        </div>
        <div className="services-anime" data-aos="zoom-in">
          <video ref={videoRef} src={video} autoPlay loop muted>
            Your browser does not support the video.
          </video>
        </div>

        <div className="service-content">
          <div className="service-container">
            {sections.map((section, index) => (
              <div
                key={index}
                className="service-card"
                onClick={() => toggleContent(index)}
              >
                <div className="icon">
                  <span>{section.num}</span>
                  {section.icon}
                </div>
                <div className="service-card-cnt">
                  <h3>{section.title}</h3>
                  <p>{section.summary}</p>
                </div>
              </div>
            ))}
          </div>

          {openSection !== null && (
            <div className="expanded-content">
              <div className="card-content">
                <div className="card-img">
                  <img
                    src={sections[openSection].imageUrl}
                    alt={` for ${sections[openSection].title}`}
                  />
                </div>
                <div className="card-cnt">
                  <span>Best Skills</span>
                  <h2>{sections[openSection].title}</h2>
                  <div>{sections[openSection].content}</div>
                  <button
                    onClick={() => handleReadMore(sections[openSection].route)}
                  >
                    Read more <IoIosArrowRoundForward />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Service;
