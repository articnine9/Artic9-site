import React from "react";
import "./CaseStudy.css";

import gtbanner from "../../../Assets/case study/gt-holidays/gt-banner.jpg";
import abtpic from "../../../Assets/case study/gt-holidays/about-gt.webp";
const Gt = () => {
  return (
    <div className="gt">
      <div className="gt-main">
        <div className="gt-banner">
          <img src={gtbanner} alt="banner" />
          <div className="gt-video">
            <div className="video-div">
              <iframe
                width="370"
                height="300"
                src="https://www.youtube.com/embed/EJPlq41Yfck?si=k0Z_EAHzJRSFRSjO&controls=0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <div className="video-div">
              <iframe
                width="370"
                height="300"
                src="https://www.youtube.com/embed/Orh3rWsLZF4?si=A1-FkT3g7_6Ou2dJ&controls=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-div">
              <iframe
                width="370"
                height="300"
                src="https://www.youtube.com/embed/LxVT5G5NZN0?si=ey2FwCFkBIxmEfOw&controls=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        <div className="gt-abt">
          <div className="gt-abt-img">
            <img src={abtpic} alt="gt" />
          </div>
          <div className="gt-abt-cnt">
            <div className="gt-abt-cnt-head">
              <h2>About GT Holidays</h2>
            </div>
            <div className="gt-cnt">
              <p>
                Established in 1968, GT Holidays is owned and managed by the
                Sangam Group of Hotels. The Sangam Group is recognized as one of
                the largest hotel chains in Tamil Nadu. Along with the Group,
                the GT Holidays strives hard for ultimate success and
                innovation.
              </p>
              <p>
                We are an ISO 9001: 2008 certified company that aims to set
                clear goals, fix priorities, and organize the resources
                effectively. GT Holidays enables you to discover a new
                destination and offers unique ideas for your travel.
              </p>
              <p>
                Our travel company offers a complete business travel environment
                for MICE (Meetings, Incentives, Conferences, and Events)
                services at an affordable cost. We provide a wide range of
                holiday tour packages for all domestic and international
                destinations worldwide.
              </p>
            </div>
          </div>
        </div>

        <div className="gt-section"></div>
        <div className="counter-sec"></div>
      </div>
    </div>
  );
};

export default Gt;
