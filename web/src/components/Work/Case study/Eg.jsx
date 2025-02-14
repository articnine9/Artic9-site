// import React from 'react';
// import "../Work.css";

// const Card = ({ videoPoster, videoSrc, imgSrc, title, description, link }) => {
//   return (
//     <div className="card card-column intersected">
//       <div className="content">
//         <a className="card-video" href={link}>
//           {title}
//         </a>

//         <div className="card-video-inner">
//           <video
//             poster={videoPoster}
//             muted
//             preload="metadata"
//             loop
//             playsInline
//             src={videoSrc}
//             className="loaded"
//           />
//           <img
//             src={imgSrc}
//             alt={`${title} case cover`}
//             width="1600"
//             height="1200"
//             loading="lazy"
//           />
//         </div>
//         <span className="card-link">{title}</span>
//         <p className="card-description">{description}</p>
//       </div>
//     </div>
//   );
// };

// const ListBoard = () => {
//   const cardsData = [
//     {
//       title: "Firefox",
//       link: "/firefox-brand-redesign/",
//       videoPoster: "https://www.datocms-assets.com/22695/1728340476-firefox_preview.jpg",
//       videoSrc: "https://www.datocms-assets.com/22695/1728323207-cover-render-1-3.mp4",
//       imgSrc: "https://www.datocms-assets.com/22695/1728340476-firefox_preview.jpg",
//       description: "Official Firefox rebrand",
//     },
//     {
//       title: "Salesforce",
//       link: "https://www.lightningdesignsystem.com/",
//       videoPoster: "https://www.datocms-assets.com/22695/1729108084-salesforce-preview-still-1600-1200.jpg",
//       videoSrc: "https://www.datocms-assets.com/22695/1729108103-salesforce-preview-animation-1600-1200.mp4",
//       imgSrc: "https://www.datocms-assets.com/22695/1729108084-salesforce-preview-still-1600-1200.jpg",
//       description: "Developing micro-interactions for the Lightning Design System",
//     },
//     {
//       title: "Clearbit",
//       link: "/clearbit-website-transformation/",
//       videoPoster: "https://www.datocms-assets.com/22695/1729286827-clearbit-preview-still-1600-1200.jpg",
//       videoSrc: "https://www.datocms-assets.com/22695/1729287088-clearbit-preview-animation-1600-1200-2.mp4",
//       imgSrc: "https://www.datocms-assets.com/22695/1729286827-clearbit-preview-still-1600-1200.jpg",
//       description: "We redesigned Clearbit’s website, boosting engagement and contributing to their $150M acquisition by Hubspot.",
//     },
//     {
//       title: "Turo",
//       link: "/support-portal-redesign/",
//       videoPoster: "https://www.datocms-assets.com/22695/1731433497-turo-cover-still-mockup-1600-1200.jpg",
//       videoSrc: "https://www.datocms-assets.com/22695/1731433517-turo-cover-animation-1600-1200.mp4",
//       imgSrc: "https://www.datocms-assets.com/22695/1731433497-turo-cover-still-mockup-1600-1200.jpg",
//       description: "Redesign of the support portal and 30% improvement in users’ ability to get the answers they want",
//     },
//     {
//       title: "Netflix",
//       link: "",
//       videoPoster: "https://www.datocms-assets.com/22695/1730481559-netflix-cover-still-1600-1200.jpg",
//       videoSrc: "https://www.datocms-assets.com/22695/1730481564-netflix-cover-animation-1600-1200.mp4",
//       imgSrc: "https://www.datocms-assets.com/22695/1730481559-netflix-cover-still-1600-1200.jpg",
//       description: "Series of visual concepts for improving the user experience",
//     },
//     {
//       title: "Citrix",
//       link: "https://www.citrix.com/",
//       videoPoster: "",
//       videoSrc: "",
//       imgSrc: "https://www.datocms-assets.com/22695/1729108034-citrix_cover.jpg",
//       description: "Iconography for a secure workspace software company with over 16 million cloud users",
//     },
//     {
//       title: "Descript",
//       link: "/descript-brand-identity-and-web-design/",
//       videoPoster: "https://www.datocms-assets.com/22695/1731438713-descript-cover-still-1600-1200.jpg",
//       videoSrc: "https://www.datocms-assets.com/22695/1731438766-descript-cover-animation-1600-1200.mp4",
//       imgSrc: "https://www.datocms-assets.com/22695/1731438713-descript-cover-still-1600-1200.jpg",
//       description: "Our team collaborated with Descript to develop their brand identity and website, driving brand recognition, user engagement and reach.",
//     },
//     {
//       title: "Stripe",
//       link: "",
//       videoPoster: "https://www.datocms-assets.com/22695/1729873267-stripe-cover-still-1600-1200.png",
//       videoSrc: "https://www.datocms-assets.com/22695/1729873277-stripe-cover-animation-1600-1200.mp4",
//       imgSrc: "https://www.datocms-assets.com/22695/1729873267-stripe-cover-still-1600-1200.png",
//       description: "Iconography design for a payments infrastructure company with 250M+ API requests per day",
//     },
//   ];

//   return (
//     <div className="listboard">
//       {cardsData.map((card, index) => (
//         <Card
//           key={index}
//           title={card.title}
//           link={card.link}
//           videoPoster={card.videoPoster}
//           videoSrc={card.videoSrc}
//           imgSrc={card.imgSrc}
//           description={card.description}
//         />
//       ))}
//     </div>
//   );
// };

// export default ListBoard;


// import React, { useState, useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// // Image and other imports here

// gsap.registerPlugin(ScrollTrigger);

// const sections = [
//   {
//     image: `url(${pic1})`,
//     title: "Branding",
//     content:
//       "Customized, responsive and aesthetically designed websites catapult your brand to new heights among clients.",
//     bgImage: `url(${bg1})`,
//     color: "#45bfff",
//     label: "Digital Branding",
//   },
//   {
//     image: `url(${pic2})`,
//     title: "Social Media Marketing",
//     content:
//       "Our content writers, digital marketers, and SEO experts build a strong digital presence for our customers.",
//     bgImage: `url(${bg2})`,
//     color: "#ffc41e",
//     label: "Social Media Marketing",
//   },
//   {
//     image: `url(${pic3})`,
//     title: "Website Development",
//     content:
//       "A visually impressive User Interface & User Experience (UI/UX) and all its connected powerful tools.",
//     bgImage: `url(${bg3})`,
//     color: "#f16ca8",
//     label: "Website Design/ Development",
//   },
//   {
//     image: `url(${pic4})`,
//     title: "Pay Per Click",
//     content:
//       "Digital Branding is the creative, strategic process of telling our potential customers what our brand does.",
//     bgImage: `url(${bg4})`,
//     color: "#23ee68",
//     label: "Pay Per Click",
//   },
//   {
//     image: `url(${pic5})`,
//     title: "SEO",
//     content:
//       "Having an e-commerce alternative available to sell your services and products for your brand worldwide.",
//     bgImage: `url(${bg5})`,
//     color: "#14cadc",
//     label: "Search Engine Optimization",
//   },
// ];

// const positions = [
//   { top: "317px", left: "552px" },
//   { top: "543px", left: "382px" },
//   { top: "448px", left: "114px" },
//   { top: "165px", left: "122px" },
//   { top: "85px", left: "392px" },
// ];

// const spanPositions = [
//   { top: "-21px", left: "28px" },
//   { top: "9px", left: "21px" },
//   { top: "20px", left: "-184px" },
//   { top: "-53px", left: "-186px" },
//   { top: "-44px", left: "21px" },
// ];

// const Services = () => {
//   const [currentSection, setCurrentSection] = useState(0);

//   useEffect(() => {
//     const scrollTrigger = ScrollTrigger.create({
//       trigger: ".service",
//       start: "top top",
//       end: "+=100%",
//       pin: true,
//       scrub: true,
//       onUpdate: ({ progress }) => {
//         const newSection = Math.min(
//           Math.floor(progress * (sections.length - 1)),
//           sections.length - 1
//         );
//         setCurrentSection(newSection);
//       },
//       markers: true,
//     });

//     return () => {
//       scrollTrigger.kill();
//     };
//   }, []);

//   useEffect(() => {
//     // Update text dynamically based on currentSection
//     const sliderNames = document.querySelectorAll(".slider-name");

//     sliderNames.forEach((sliderName, index) => {
//       if (index === currentSection) {
//         const label = sections[index].label;
//         sliderName.innerHTML = label;
//       }
//     });
//   }, [currentSection]);

//   return (
//     <div
//       className="service"
//       style={{
//         backgroundImage: sections[currentSection].bgImage,
//         backgroundSize: "cover",
//         backgroundAttachment: "fixed",
//         backgroundPosition: "50% 0%",
//         height: "100vh",
//       }}
//     >
//       <div className="service-main">
//         <div className="service-box">
//           <div className="slide_dial">
//             <img src={disk} alt="slider wheel" loading="lazy" />
//           </div>
//           <div className="slide_dots_wheel">
//             {sections.map((section, index) => (
//               <a
//                 key={index}
//                 href={`#slide_0${index + 1}`}
//                 title={section.title}
//                 className="slider-link"
//                 style={{
//                   position: "absolute",
//                   top: positions[index].top,
//                   left: positions[index].left,
//                 }}
//               >
//                 <i
//                   className={`slide_dot slide_dot-${index}`}
//                   style={{
//                     backgroundColor: section.color,
//                   }}
//                 ></i>
//                 <span
//                   className="slider-name"
//                   style={{
//                     position: "absolute",
//                     top: spanPositions[index].top,
//                     left: spanPositions[index].left,
//                     display: "block",
//                   }}
//                 >
//                   {section.label} {/* Initially show the label */}
//                 </span>
//               </a>
//             ))}
//           </div>
//           <div
//             className="service-img-box"
//             style={{
//               backgroundImage: sections[currentSection].image,
//             }}
//           ></div>
//         </div>
//         <div className="service-box1">
//           <div className="service-box-cnts">
//             <h2 style={{ color: sections[currentSection].color }}>
//               {sections[currentSection].title}
//             </h2>
//             <p>{sections[currentSection].content}</p>
//             <button className="service-btn">Know More</button>
//           </div>
//         </div>
//       </div>
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
    label: "Website Design/Development",
    colorIndex: 2,
  },
  {
    href: "#slide_04",
    title: `Pay &nbsp Per Click`,
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
  { top: "-21px", right: "10px" },
  { top: "9px", left: "21px" },
  { top: "20px", left: "-184px" },
  { top: "-63px", left: "-189px" },
  { top: "-61px", left: "21px" },
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
                    right: spanPositions[index].right,
                    visibility: index === 0 ? "hidden" : "visible",
                  }}
                >
                  {sections[currentSection].title === service.label
                    ? service.label
                    : ""}
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
