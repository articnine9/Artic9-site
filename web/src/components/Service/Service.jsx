import React, { useRef, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

import { IoIosArrowForward } from "react-icons/io";
import pic1 from "../../Assets/leo.jpg";
import pic2 from "../../Assets/lio.jpg";
import pic3 from "../../Assets/fox.jpg";
import pic4 from "../../Assets/panda.jpg";
import pic5 from "../../Assets/eagle.jpg";
// import logo from "../../Assets/Grey Artic logo.png";
import video from "../../Assets/Artic 9 logo.mp4";
import "./Service.css";

const Service = () => {
  const services = [
    {
      heading: "Branding",
      description:
        "At the core of our approach, we maintain that brand and UX are closely connected and work together. Our team specializes in creating and representing digital brand identities across channels, providing strategy assistance and guidelines to ensure consistency.",
      list: [
        "Brand Strategy",
        "Brand Architecture",
        "Verbal Identity",
        "Visual Identity",
        "Brand Guidelines",
        "Brand Experiences",
      ],
      image: pic1,
    },
    {
      heading: "Digital Products",
      description:
        "At Artic9, we believe everyone deserves an exceptional user experience, whether using a product at work or in their free time. We create memorable enterprise and consumer products as well as provide comprehensive design systems for effortless product iteration.",
      list: [
        "Consumer & Enterprise Software",
        "User Research & Testing",
        "CX, UX & Interaction Design",
        "UI Design",
        "Motion Design",
        "Design Systems",
      ],
      image: pic2,
    },
    {
      heading: "Websites",
      description:
        "A website is the most important channel to showcase your brand to customers. Our portfolio features award-winning websites designed to give users the best experience possible while also meeting business goals.",
      list: [
        "Content Strategy",
        "Web Design",
        "Interactive Experiences",
        "Content Production",
        "Frontend & Backend Development",
        "CMS Implementation",
      ],
      image: pic3,
    },
    {
      heading: "Content",
      description:
        "Authentic content is essential in the digital world. We work with brands to identify their unique content needs and deliver custom-made assets at the highest quality, down to the last detail.",
      list: [
        "Art Direction",
        "Illustration & Graphic Design",
        "Iconography",
        "Animation",
        "Photo & Video",
        "3D",
      ],
      image: pic4,
    },
    {
      heading: "Development",
      description:
        "Our designers and developers collaborate to create websites and products that provide exceptional user experiences and functionality. We optimize search engine visibility, ensure accessibility, and maximize performance.",
      list: [
        "Technology Consulting",
        "Architecture Planning",
        "Mobile App Development",
        "Frontend Web Development",
        "Backend Development & API Integration",
        "Emerging Tech (AI, AR/VR, Wearables, Web3)",
      ],
      image: pic5,
    },
  ];
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = false; // Unmute the video after the page has loaded
    }
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 250,
      easing: "ease-out",
      once: false,
      offset: 100, // Trigger animation when element is 100px from the viewport
    });
  }, []);

  return (
    <div className="services-main">
      <div className="services">
        <div className="services-head" data-aos="fade-down">
          <h2>A full-service digital innovation partner</h2>
          <p>
            Our advanced design and technology capabilities drive leading
            brands,forward-thinking ideas, and dynamic digital experiences.
          </p>
        </div>
        <div className="services-anime " data-aos="zoom-in">
         <video ref={videoRef} src={video} autoPlay loop muted>
            Your browser does not support the video.
          </video>
        </div>

        <div className="service-content">
          {services.map((service, index) => (
            <div className="services-content" key={index}>
              {index % 2 === 0 ? (
                <>
                  <div className="services-box" data-aos="fade-right">
                    <div className="service-cnt">
                      <div className="services-box-head">
                        <h4>{service.heading}</h4>
                      </div>
                      <div className="services-box-cnt">
                        <p>{service.description}</p>
                      </div>
                      <div className="services-box-list">
                        <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
                          {service.list.map((element, idx) => (
                            <li key={idx} style={{ fontSize: "24px" }}>
                              <IoIosArrowForward />
                              {element}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="services-img" data-aos="fade-left">
                    <div className="service-img">
                      <img src={service.image} alt={service.heading} />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="services-img" data-aos="fade-right">
                    <div className="service-img">
                      <img src={service.image} alt={service.heading} />
                    </div>
                  </div>

                  <div className="services-box" data-aos="fade-left">
                    <div className="service-cnt">
                      <div className="services-box-head">
                        <h4>{service.heading}</h4>
                      </div>
                      <div className="services-box-cnt">
                        <p>{service.description}</p>
                      </div>
                      <div className="services-box-list">
                        <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
                          {service.list.map((element, idx) => (
                            <li key={idx} style={{ fontSize: "24px" }}>
                              <IoIosArrowForward />
                              {element}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
