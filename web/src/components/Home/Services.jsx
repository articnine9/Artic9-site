// import React, { useState } from "react";
// import "./Home.css";

// import bg1 from "../../Assets/service/symbol1.avif";
// import bg2 from "../../Assets/service/symbol2.avif";
// import bg3 from "../../Assets/service/symbol3.avif";
// import bg4 from "../../Assets/service/symbol4.avif";
// import bg5 from "../../Assets/service/symbol5.avif";

// const Services = () => {
//   const [expandedItem, setExpandedItem] = useState(null);
//   const [hovered, setHovered] = useState(false);
//   const [imageSrc, setImageSrc] = useState("");

//   const handleItemClick = (index) => {
//     setExpandedItem(expandedItem === index ? null : index);
//   };

//   const handleMouseEnter = (e, index) => {
//     setHovered(true);
//     switch (index) {
//       case 0:
//         setImageSrc(bg1);
//         break;
//       case 1:
//         setImageSrc(bg2);
//         break;
//       case 2:
//         setImageSrc(bg3);
//         break;
//       case 3:
//         setImageSrc(bg4);
//         break;
//       case 4:
//         setImageSrc(bg5);
//         break;
//       default:
//         setImageSrc("");
//     }
//   };

//   const handleMouseLeave = () => {
//     setHovered(false);
//   };

//   const items = [
//     "Branding",
//     "Social Media Marketing",
//     "Website Development",
//     "Pay Per Click",
//     "SEO",
//   ];

//   const desc = [
//     "A brand is more than just a logo and color palette. As a leading branding agency, we'll craft a distinct visual and verbal identity, create necessary assets, and establish clear brand guidelines to maintain consistency across all touchpoints.",
//     "Artic9 concentrates on designing authentic connections through the use of both aesthetics and behavioral science. Our team of senior UI/UX designers delivers engaging digital products that help brands thrive in the modern economy.",
//     "A modern brand is defined by its digital presence, starting with the website. We focus on creating websites that effectively convey the brand's identity and perspective for an enhanced user experience.",
//     "Artic9 strategically integrates AI, optimizing processes, and elevating digital products. We're at the forefront of innovating AI-driven UX, pioneering novel interaction models to set new standards in interface design.",
//     "Content is a crucial aspect of the user experience, and we offer a range of services to support this, including copywriting, illustration, 2D and 3D graphics, iconography, animation, video production, and photography.",
//   ];

//   return (
//     <div className="services-main">
//       <div className="service-desc">
//         <div className="service-desc-box">
//           <p>
//             We build transformative digital experiences for the world's leading
//             brands by blending AI, design, and technology.
//           </p>
//           <div className="service-gap"></div>
//         </div>
//       </div>

//       {/* Service Types List */}
//       <div className="service-types">
//         <div className="service-types-box">
//           <ul>
//             {items.map((item, index) => (
//               <li
//                 key={index}
//                 style={{ marginBottom: "10px", listStyleType: "none" }}
//                 onClick={() => handleItemClick(index)}
//                 onMouseEnter={(e) => handleMouseEnter(e, index)}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <span>{item}</span>
//                 <span style={{ cursor: "pointer", marginLeft: "10px" }}>
//                   {expandedItem === index ? (
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       height="24px"
//                       viewBox="0 -960 960 960"
//                       width="24px"
//                       fill="#000000"
//                     >
//                       <path d="m280-400 200-200 200 200H280Z" />
//                     </svg>
//                   ) : (
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       height="24px"
//                       viewBox="0 -960 960 960"
//                       width="24px"
//                       fill="#000000"
//                     >
//                       <path d="M480-360 280-560h400L480-360Z" />
//                     </svg>
//                   )}
//                 </span>

//                 <div
//                   className={`service-description ${
//                     expandedItem === index ? "expanded" : ""
//                   }`}
//                 >
//                   {expandedItem === index && <p>{desc[index]}</p>}
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* Hover image */}
//       {hovered && (
//         <img
//           src={imageSrc} // Dynamic image based on hover
//           alt="Service Image"
//           width="310"
//           height="310"
//           className="service-image"
//           loading="lazy"
//           decoding="async"
//           data-nimg="1"
//           sizes="(max-width: 1919px) 538px, 800px"
//           style={{
//             display: hovered ? "block" : "none", // Show the image only when hovered
//           }}
//         />
//       )}
//     </div>
//   );
// };

// export default Services;


import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import pic1 from "../../Assets/service/Digital-Branding-services-in-bangalore.webp";
import pic2 from "../../Assets/service/Digital-Marketing-Agency-in-Bangalore.webp";
import pic3 from "../../Assets/service/Website-Development-Company-in-India.webp";
import pic4 from "../../Assets/service/Ecommerce-Website-design-company-in-Bangalore.webp";
import pic5 from "../../Assets/service/UI-UX-Design-Services-in-Bangalore.webp";

import bg1 from "../../Assets/service/branding.jpg";
import bg2 from "../../Assets/service/digital-marketing.jpg";
import bg3 from "../../Assets/service/web-design.jpg";
import bg4 from "../../Assets/service/ecommerce.jpg";
import bg5 from "../../Assets/service/ui-ux.jpg";

import disk from "../../Assets/service/dial-disk-md.png";

import "./Home.css";

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    image: `url(${pic1})`,
    title: "Digital Branding",
    content:
      "Customized, responsive and aesthetically designed websites catapult your brand to new heights among clients.",
    bgImage: `url(${bg1})`,
    color: "#45bfff",
  },
  {
    image: `url(${pic2})`,
    title: "Social Media Marketing",
    content:
      "Our content writers, digital marketers, and SEO experts build a strong digital presence for our customers.",
    bgImage: `url(${bg2})`,
    color: "#ffc41e",
  },
  {
    image: `url(${pic3})`,
    title: "Website Development",
    content:
      "A visually impressive User Interface & User Experience (UI/UX) and all its connected powerful tools.",
    bgImage: `url(${bg3})`,
    color: "#f16ca8",
  },
  {
    image: `url(${pic4})`,
    title: "Pay Per Click",
    content:
      "Digital Branding is the creative, strategic process of telling our potential customers what our brand does.",
    bgImage: `url(${bg4})`,
    color: "#23ee68",
  },
  {
    image: `url(${pic5})`,
    title: "SEO",
    content:
      "Having an e-commerce alternative available to sell your services and products for your brand worldwide.",
    bgImage: `url(${bg5})`,
    color: "#14cadc",
  },
];

const services = [
  {
    href: "#slide_01",
    title: "Digital Branding Services",
    label: "Digital Branding",
    colorIndex: 0,
  },
  {
    href: "#slide_02",
    title: "Social Media Marketing",
    label: "Social Media Marketing",
    colorIndex: 1,
  },
  {
    href: "#slide_03",
    title: "Website Development Services",
    label: "Website Design/ Development",
    colorIndex: 2,
  },
  {
    href: "#slide_04",
    title: "Pay Per Click",
    label: "Pay Per Click",
    colorIndex: 3,
  },
  {
    href: "#slide_05",
    title: "SEO Services",
    label: "Search Engine Optimization",
    colorIndex: 4,
  },
];

const colors = ["#45bfff", "#ffc41e", "#f16ca8", "#23ee68", "#14cadc"];

const positions = [
  { top: "317px", left: "552px" },
  { top: "543px", left: "382px" },
  { top: "448px", left: "114px" },
  { top: "165px", left: "122px" },
  { top: "85px", left: "392px" },
];

const spanPositions = [
  { top: "-21px", left: "28px" },
  { top: "9px", left: "21px" },
  { top: "20px", left: "-184px" },
  { top: "-53px", left: "-186px" },
  { top: "-44px", left: "21px" },
];

const Services = () => {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const scrollTrigger = ScrollTrigger.create({
      trigger: ".service",
      start: "top top",
      end: "+=100%",
      pin: true,
      scrub: true,
      onUpdate: ({ progress }) => {
        const newSection = Math.min(
          Math.floor(progress * (sections.length - 1)),
          sections.length - 1
        );
        setCurrentSection(newSection);
      },
      markers: true,
    });

    return () => {
      scrollTrigger.kill();
    };
  }, []);

  useEffect(() => {
    services.forEach((service, index) => {
      const dot = document.querySelector(`.slide_dot-${index}`);
      const colorCycleDuration = 0.1;

      if (dot) {
        gsap.to(dot, {
          backgroundColor:
            colors[(currentSection + service.colorIndex) % colors.length],
          duration: colorCycleDuration,
        });
      }
    });
  }, [currentSection]);

  return (
    <div
      className="service"
      style={{
        backgroundImage: sections[currentSection].bgImage,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "50% 0%",
        height: "100vh",
      }}
    >
      <div className="service-main">
        <div className="service-box">
          <div className="slide_dial">
            <img src={disk} alt="slider wheel" loading="lazy" />
          </div>
          <div className="slide_dots_wheel">
            {services.map((service, index) => (
              <a
                key={index}
                href={service.href}
                title={service.title}
                className="slider-link"
                style={{
                  position: "absolute",
                  top: positions[index].top,
                  left: positions[index].left,
                }}
              >
                <i
                  className={`slide_dot slide_dot-${index}`}
                  style={{
                    backgroundColor: colors[service.colorIndex], 
                  }}
                ></i>
                <span
                  className="slider-name"
                  style={{
                    position: "absolute",
                    top: spanPositions[index].top,
                    left: spanPositions[index].left,
                    display: index === 0 ? "none" : "block",
                  }}
                >
                  {service.label.split(" ")[0]}<br/>
                  {service.label.split(" ")[1]}<br/>
                  {service.label.split(" ")[2]}

                </span>
              </a>
            ))}
          </div>
          <div
            className="service-img-box"
            style={{
              backgroundImage: sections[currentSection].image,
            }}
          ></div>
        </div>
        <div className="service-box1">
          <div className="service-box-cnts">
            <h2 style={{ color: sections[currentSection].color }}>
              {sections[currentSection].title}
            </h2>
            <p>{sections[currentSection].content}</p>
            <button className="service-btn">Know More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
