import React, { useState } from "react";
import "./Work.css";

import model1 from "../../Assets/modal/mandalay-lake-monochrome.jpg";
import model2 from "../../Assets/modal/cool-coffee-india-tea-leaves-forest.jpg";
import model3 from "../../Assets/modal/beautiful-landscape-with-green-grass-breathtaking-view-rainbow-storm-clouds.jpg";
import model4 from "../../Assets/modal/beautiful-view-mesmerizing-nature-traditional-styled-japanese-adelaide-himeji-gardens.jpg";
import model5 from "../../Assets/modal/mountain-covered-with-fogs.jpg";
import model6 from "../../Assets/modal/munnar-tea-plantations-with-fog-early-morning.jpg";
import model7 from "../../Assets/modal/rock-ban-forest-tropical-beautiful-jungle.jpg";
import model8 from "../../Assets/modal/seoraksan-mountains-is-covered-by-morning-fog-sunrise-seoul-korea.jpg";
import model9 from "../../Assets/modal/vertical-shot-river-surrounded-by-mountains-meadows-scotland.jpg";
import model10 from "../../Assets/modal/cascade-park-stone-flow-splash-ban.jpg";
import model11 from "../../Assets/modal/fresh-blue-nature-shore-waterfall-river.jpg";
import model12 from "../../Assets/modal/tree-silhouette-fog-dark-landscape-terrain-generative-ai.jpg";
import model13 from "../../Assets/modal/wet-vietnam-mountain-flow-stream-rural.jpg";

import { Link } from "react-router-dom";

const Work = () => {
  const sections = [
    {
      imgSrc: model2,
      heading: "GT Holidays",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, quos.",
      category: "Branding . UI & UX Designs . Product Development",
      link: "/gtholidays",
    },
    {
      imgSrc: model3,
      heading: "Harris Nadar",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, quos.",
      link: "/harrisnadar",
      category: "Branding . UI & UX Designs . Product Development",
    },
    {
      imgSrc: model4,
      heading: "Tino Engineering",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, quos.",
      link: "/tinoengineering",
      category: "Branding . UI & UX Designs . Product Development",
    },
    {
      imgSrc: model5,
      heading: "Heading",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, quos.",
      link: "/gtholidays",
      category: "Branding . UI & UX Designs . Product Development",
    },
    {
      imgSrc: model6,
      heading: "Heading",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, quos.",
      link: "/gtholidays",
      category: "Branding . UI & UX Designs . Product Development",
    },
    {
      imgSrc: model1,
      heading: "Heading",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, quos.",
      link: "/gtholidays",
      category: "Branding . UI & UX Designs . Product Development",
    },
    {
      imgSrc: model9,
      heading: "Heading",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, quos.",
      link: "/gtholidays",
      category: "Branding . UI & UX Designs . Product Development",
    },
    {
      imgSrc: model7,
      heading: "Heading",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, quos.",
      link: "/gtholidays",
      category: "Branding . UI & UX Designs . Product Development",
    },
    {
      imgSrc: model8,
      heading: "Heading",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, quos.",
      link: "/gtholidays",
      category: "Branding . UI & UX Designs . Product Development",
    },
  ];

  const sideSections = [
    {
      imgSrc: model2,
      heading: "Heading",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, quos.",
      category: "Branding . UI & UX Designs . Product Development",
      link: "/gtholidays",
    },
    {
      imgSrc: model3,
      heading: "Heading",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, quos.",
      category: "Branding . UI & UX Designs . Product Development",
      link: "/gtholidays",
    },
    {
      imgSrc: model4,
      heading: "Heading",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, quos.",
      category: "Branding . UI & UX Designs . Product Development",
      link: "/gtholidays",
    },

    {
      imgSrc: model5,
      heading: "Heading",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, quos.",
      category: "Branding . UI & UX Designs . Product Development",
      link: "/gtholidays",
    },
    {
      imgSrc: model1,
      heading: "Heading",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, quos.",
      link: "/gtholidays",
      category: "Branding . UI & UX Designs . Product Development",
    },
    {
      imgSrc: model9,
      heading: "Heading",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, quos.",
      link: "/gtholidays",
      category: "Branding . UI & UX Designs . Product Development",
    },

    {
      imgSrc: model10,
      heading: "Heading",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, quos.",
      link: "/gtholidays",
      category: "Branding . UI & UX Designs . Product Development",
    },
    {
      imgSrc: model11,
      heading: "Heading",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, quos.",
      link: "/gtholidays",
      category: "Branding . UI & UX Designs . Product Development",
    },
    {
      imgSrc: model12,
      heading: "Heading",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, quos.",
      link: "/gtholidays",
      category: "Branding . UI & UX Designs . Product Development",
    },
    {
      imgSrc: model13,
      heading: "Heading",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, quos.",
      link: "/gtholidays",
      category: "Branding . UI & UX Designs . Product Development",
    },
  ];

  const [clickedCategory, setClickedCategory] = useState(null);

  const handleClick = (category) => {
    setClickedCategory(category);
  };

  return (
    <div className="work-main">
      <div className="work">
        <div className="work-head">
          <h2>
            Transforming your vision <br /> into action.
          </h2>
          <div className="category">
            <ul>
              {[
                "All Works",
                "Category1",
                "Category2",
                "Category3",
                "Category4",
              ].map((category, index) => (
                <li
                  key={index}
                  className={`category-list ${
                    clickedCategory === category ? "clicked" : ""
                  }`}
                  onClick={() => handleClick(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="work-section">
          {sections.map((section, index) => (
            <Link
              to={section.link}
              key={index}
              className={`work-sec sec-${index + 1}`}
            >
              <div className="wrk-img">
                <img src={section.imgSrc} alt={section.heading} />
              </div>
              <div className="wrk-cnt">
                <h4>{section.heading}</h4>
                <span>{section.description}</span>
                <br />
                <span>{section.category}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Mapping the side sections */}
        <div className="work-side">
          {sideSections.map((side, index) => (
            <Link to={side.link} key={index} className="work-side-sec">
              <div className="side-img">
                <img src={side.imgSrc} alt={side.heading} />
              </div>
              <div className="side-cnt">
                <div className="side-head">
                  <h4>{side.heading}</h4>
                </div>
                <div className="side-cntnts">
                  <span>{side.description}</span>
                </div>
                <div className="side-category">
                  <span>{side.category}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
