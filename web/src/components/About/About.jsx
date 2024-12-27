import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import stry from "../../Assets/story.jpeg";
import pic1 from "../../Assets/leo.jpg";
import pic2 from "../../Assets/lio.jpg";
import pic3 from "../../Assets/fox.jpg";
import pic4 from "../../Assets/panda.jpg";
import logo from "../../Assets/logo2.png";

import "./About.css";
const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-out",
      once: false,
      offset: 100,
    });

    AOS.refresh();
  }, []);

  const years = ["2018", "2019", "2021", "2023"];
  const images = [pic1, pic2, pic3, pic4];
  const yearContent = [
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dolores illo nemo dolorum et fuga consequatur totam architecto neque ea corporis, iste omnis dignissimos quisquam nihil commodi enim, deserunt doloremque debitis velit veniam similique distinctio! Similique, possimus eveniet neque aperiam quasi pariatur id fugiat iure vitae ex sit perferendis asperiores veniam?",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dolores illo nemo dolorum et fuga consequatur totam architecto neque ea corporis, iste omnis dignissimos quisquam nihil commodi enim, deserunt doloremque debitis velit veniam similique distinctio! Similique, possimus eveniet neque aperiam quasi pariatur id fugiat iure vitae ex sit perferendis asperiores veniam?",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dolores illo nemo dolorum et fuga consequatur totam architecto neque ea corporis, iste omnis dignissimos quisquam nihil commodi enim, deserunt doloremque debitis velit veniam similique distinctio! Similique, possimus eveniet neque aperiam quasi pariatur id fugiat iure vitae ex sit perferendis asperiores veniam?",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dolores illo nemo dolorum et fuga consequatur totam architecto neque ea corporis, iste omnis dignissimos quisquam nihil commodi enim, deserunt doloremque debitis velit veniam similique distinctio! Similique, possimus eveniet neque aperiam quasi pariatur id fugiat iure vitae ex sit perferendis asperiores veniam?",
  ];
  const logos = [logo, logo, logo, logo];
  return (
    <div className="about-main">
      <div className="about">
        <div className="storytitle">
          <h1>our story</h1>
        </div>
        <div className="story-img">
          <img src={stry} alt="story" />
        </div>

        <div className="story-contents">
          <div className="story-cnt">
            <div className="stry-abt">
              <div className="stry-head">
                <span>
                  We are makers of sensors in industrial, automotive and mobile
                  sector.
                </span>
              </div>
            </div>
            <div className="stry-gap"></div>
            <div className="stry-abt1">
              <p>
                The Vibor Company, founded in 1965 in the center of Milan,
                initially focused its production and design on the creation of
                sensors for pressure and temperature control in the automotive
                world; today its product range includes pressure switches,
                temperature sensors and level sensors for every need. <br />
                <br />
                High level of experience, appropriate production and commercial
                flexibility remain concrete and persistent strengths of Vibor's
                mission, without neglecting the passion for technology that
                leads us towards constant innovation. <br />
                <br />
                Our mission is to find customized solutions for the most
                demanding customers, developing innovative ideas and paying
                particular attention to the environmental impacts of industrial
                production; therefore we strive towards an eco-sustainable
                production line.
              </p>
            </div>
          </div>

          {years.map((year, yearIndex) => (
            <div key={yearIndex} className="story-cnt1">
              <div className="year-img">
                <h2>
                  {year.split("").map((letter, index) => (
                    <span
                      key={index}
                      data-aos="fade-up"
                      data-aos-delay={`${index * 150}`}
                      data-aos-duration="500"
                      data-aos-offset="300"
                    >
                      {letter}
                    </span>
                  ))}
                  <img
                    src={images[yearIndex]}
                    alt={`Year ${year}`}
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-offset="100"
                  />
                </h2>
              </div>
              <div className="year-cnt" data-aos="fade-left">
                <div className="yearly-cnt">
                  <img src={logos[yearIndex]} alt={`Logo for ${year}`} />
                  <p>{yearContent[yearIndex]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
