// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// import stry from "../../Assets/story.jpeg";

// import logo from "../../Assets/logo1.png";

// import "./About.css";
// const About = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 500,
//       easing: "ease-out",
//       once: false,
//       offset: 100,
//     });

//     AOS.refresh();
//   }, []);

//   const years = ["2018", "2019", "2021", "2023"];
//   const images = [pic1, pic2, pic3, pic4];
//   const yearContent = [
//     "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dolores illo nemo dolorum et fuga consequatur totam architecto neque ea corporis, iste omnis dignissimos quisquam nihil commodi enim, deserunt doloremque debitis velit veniam similique distinctio! Similique, possimus eveniet neque aperiam quasi pariatur id fugiat iure vitae ex sit perferendis asperiores veniam?",
//     "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dolores illo nemo dolorum et fuga consequatur totam architecto neque ea corporis, iste omnis dignissimos quisquam nihil commodi enim, deserunt doloremque debitis velit veniam similique distinctio! Similique, possimus eveniet neque aperiam quasi pariatur id fugiat iure vitae ex sit perferendis asperiores veniam?",
//     "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dolores illo nemo dolorum et fuga consequatur totam architecto neque ea corporis, iste omnis dignissimos quisquam nihil commodi enim, deserunt doloremque debitis velit veniam similique distinctio! Similique, possimus eveniet neque aperiam quasi pariatur id fugiat iure vitae ex sit perferendis asperiores veniam?",
//     "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dolores illo nemo dolorum et fuga consequatur totam architecto neque ea corporis, iste omnis dignissimos quisquam nihil commodi enim, deserunt doloremque debitis velit veniam similique distinctio! Similique, possimus eveniet neque aperiam quasi pariatur id fugiat iure vitae ex sit perferendis asperiores veniam?",
//   ];
//   const logos = [logo, logo, logo, logo];
//   return (
//     <div className="about-main">
//       <div className="about">
//         <div className="storytitle">
//           <h1>our story</h1>
//         </div>
//         <div className="story-img">
//           <img src={stry} alt="story" />
//         </div>

//         <div className="story-contents">
//           <div className="story-cnt">
//             <div className="stry-abt">
//               <div className="stry-head">
//                 <span>
//                   We are makers of sensors in industrial, automotive and mobile
//                   sector.
//                 </span>
//               </div>
//             </div>
//             <div className="stry-gap"></div>
//             <div className="stry-abt1">
//               <p>
//                 The Vibor Company, founded in 1965 in the center of Milan,
//                 initially focused its production and design on the creation of
//                 sensors for pressure and temperature control in the automotive
//                 world; today its product range includes pressure switches,
//                 temperature sensors and level sensors for every need. <br />
//                 <br />
//                 High level of experience, appropriate production and commercial
//                 flexibility remain concrete and persistent strengths of Vibor's
//                 mission, without neglecting the passion for technology that
//                 leads us towards constant innovation. <br />
//                 <br />
//                 Our mission is to find customized solutions for the most
//                 demanding customers, developing innovative ideas and paying
//                 particular attention to the environmental impacts of industrial
//                 production; therefore we strive towards an eco-sustainable
//                 production line.
//               </p>
//             </div>
//           </div>

//           {years.map((year, yearIndex) => (
//             <div key={yearIndex} className="story-cnt1">
//               <div className="year-img">
//                 <h2>
//                   {year.split("").map((letter, index) => (
//                     <span
//                       key={index}
//                       data-aos="fade-up"
//                       data-aos-delay={`${index * 150}`}
//                       data-aos-duration="500"
//                       data-aos-offset="300"
//                     >
//                       {letter}
//                     </span>
//                   ))}
//                   <img
//                     src={images[yearIndex]}
//                     alt={`Year ${year}`}
//                     data-aos="zoom-out"
//                     data-aos-duration="500"
//                     data-aos-offset="100"
//                   />
//                 </h2>
//               </div>
//               <div className="year-cnt" data-aos="fade-left">
//                 <div className="yearly-cnt">
//                   <img src={logos[yearIndex]} alt={`Logo for ${year}`} />
//                   <p>{yearContent[yearIndex]}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="team-details">
//           <div className="team-dtl">
//             <span>20</span>
//             <p>Crew Members</p>
//           </div>
//           <div className="team-dtl">
//             <span>10</span>
//             <p>Years Carved in Excellence</p>
//           </div>
//           <div className="team-dtl">
//             <span>100+</span>
//             <p>Visions Brought to Life</p>
//           </div>
//           <div className="team-dtl1">
//             <span>Nagercoil</span>
//             <p>Headquarters</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

import React from "react";
import "./About.css";

import pic1 from "../../Assets/leo.jpg";
import pic2 from "../../Assets/lio.jpg";
import pic3 from "../../Assets/fox.jpg";
import pic4 from "../../Assets/panda.jpg";
import contact from "../../Assets/Contact-banner.png";

const About = () => {
  return (
    <div className="about-main">
      <div className="about-first-sec">
        <div className="about-first-head">
          <div className="about-first-title">
            <h1>About Us</h1>
            <p>
            We are creators of innovative solutions, driving digital transformation for businesses across industries through cutting-edge technology and strategic marketing.
            </p>
          </div>
        </div>
        <div className="about-first-anime">
          <div className="about-anime-img">
            <img src={contact} alt="ervwsg" />
          </div>
        </div>
      </div>

      <div className="about">
        <div className="storytitle">
          <h2>Our Journey</h2>
          <div className="story-desc">
            <p>
              Being one of the fastest-growing web design and development
              companies in India, we have always worked towards elevating a
              brand's true purpose by delivering uniquely personalised
              experience. Our clientele is one happy group that has been content
              and satisfied with our association.
            </p>
          </div>
        </div>
        <div className="our-work-process-wrapper">
          <div className="card_s-container">
            <div className="card_s">
              <img
                className="ls-is-cached lazyloaded"
                loading="lazy"
                src={pic1}
                alt="Well Researched Website Development Company in Bangalore"
              />
              <div className="card__head">Research</div>
              <p className="steps-intro">
                We are committed to finding the finest solutions to meet the
                needs of our clients. We are always updated with the latest
                trends and technologies. Information gathering and requirement
                understanding becomes an integral part of this phase.
              </p>
            </div>
          </div>
          <div className="card_s-container">
            <div className="card_s">
              <img
                className="ls-is-cached lazyloaded"
                loading="lazy"
                src={pic2} // Use the imported image here
                alt="Well Researched Website Development Company in Bangalore"
              />
              <div className="card__head">Research</div>
              <p className="steps-intro">
                We are committed to finding the finest solutions to meet the
                needs of our clients. We are always updated with the latest
                trends and technologies. Information gathering and requirement
                understanding becomes an integral part of this phase.
              </p>
            </div>
          </div>
          <div className="card_s-container">
            <div className="card_s">
              <img
                className="ls-is-cached lazyloaded"
                loading="lazy"
                src={pic3} // Use the imported image here
                alt="Well Researched Website Development Company in Bangalore"
              />
              <div className="card__head">Research</div>
              <p className="steps-intro">
                We are committed to finding the finest solutions to meet the
                needs of our clients. We are always updated with the latest
                trends and technologies. Information gathering and requirement
                understanding becomes an integral part of this phase.
              </p>
            </div>
          </div>
          <div className="card_s-container">
            <div className="card_s">
              <img
                className="ls-is-cached lazyloaded"
                loading="lazy"
                src={pic4} // Use the imported image here
                alt="Well Researched Website Development Company in Bangalore"
              />
              <div className="card__head">Research</div>
              <p className="steps-intro">
                We are committed to finding the finest solutions to meet the
                needs of our clients. We are always updated with the latest
                trends and technologies. Information gathering and requirement
                understanding becomes an integral part of this phase.
              </p>
            </div>
          </div>
          <div className="card_s-container">
            <div className="card_s">
              <img
                className="ls-is-cached lazyloaded"
                loading="lazy"
                src={pic1} // Use the imported image here
                alt="Well Researched Website Development Company in Bangalore"
              />
              <div className="card__head">Research</div>
              <p className="steps-intro">
                We are committed to finding the finest solutions to meet the
                needs of our clients. We are always updated with the latest
                trends and technologies. Information gathering and requirement
                understanding becomes an integral part of this phase.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
