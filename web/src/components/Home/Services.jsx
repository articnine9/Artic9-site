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

import "./Home.css";

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    image: `url(${pic1})`,
    title: "Branding",
    content:
      "Customized, responsive and aesthetically designed websites catapult your brand to new heights among clients. Ability to understand customer requirements precisely will bring in creative and innovative web design when you choose Swaragh.",
    bgImage: `url(${bg1})`,
    color: "#ffca00",
  },
  {
    image: `url(${pic2})`,
    title: "Social Media Marketing",
    content:
      "Our content writers, digital marketers, and SEO experts build a strong digital presence for our customers which enables return on investment(ROI). We are rewarded for the practical solutions and digital marketing services we offer.",
    bgImage: `url(${bg2})`,
    color: "#4CAF50",
  },
  {
    image: `url(${pic3})`,
    title: "Website Development",
    content:
      "A visually impressive User Interface & User Experience (UI/UX) and all its connected powerful tools are essential to enhance the virtual presence for any business and help generate more leads and improve conversion rates.",
    bgImage: `url(${bg3})`,
    color: "#2196F3",
  },
  {
    image: `url(${pic4})`,
    title: "Pay Per Click",
    content:
      "Digital Branding is the creative, strategic process of telling our potential customers what our brand does. We can assist you in developing logos, brand envisioning, brand representation, and so on.",
    bgImage: `url(${bg4})`,
    color: "#FF9800",
  },
  {
    image: `url(${pic5})`,
    title: "SEO",
    content:
      "Having an e-commerce alternative available to sell your services and products for your brand worldwide at all times is a wise decision. Come design and develop an e-commerce website with the best ecommerce web design company in Bangalore.",
    bgImage: `url(${bg5})`,
    color: "#9C27B0",
  },
];

const Services = () => {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const scrollTrigger = ScrollTrigger.create({
      trigger: ".service",
      start: "top ",
      end: "+=500%",
      pin: true,
      anticipatePin: 1,
      scrub: true,
      markers: true,
      onUpdate: ({ progress }) => {
        const newSection = Math.floor(progress * (sections.length - 1));
        setCurrentSection(newSection);
      },
    });

    return () => {
      scrollTrigger.kill();
    };
  }, []);

  return (
    <div
      className="service"
      style={{
        backgroundImage: sections[currentSection].bgImage,
      }}
    >
      <div className="service-main">
        <div className="service-box">
          <div
            className="service-img-box"
            style={{ backgroundImage: sections[currentSection].image }}
          ></div>
        </div>
        <div className="service-box">
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
