import React, { useState, useEffect } from "react";
import "./Work.css";

import model1 from "../../Assets/modal/mandalay-lake-monochrome-min.jpg";
import model2 from "../../Assets/modal/cool-coffee-india-tea-leaves-forest-min.jpg";
import model3 from "../../Assets/modal/beautiful-landscape-with-green-grass-breathtaking-view-rainbow-storm-clouds-min.jpg";
import model4 from "../../Assets/modal/beautiful-view-mesmerizing-nature-traditional-styled-japanese-adelaide-himeji-gardens-min.jpg";
import model5 from "../../Assets/modal/mountain-covered-with-fogs-min.jpg";
import model6 from "../../Assets/modal/munnar-tea-plantations-with-fog-early-morning-min.jpg";
import model7 from "../../Assets/modal/rock-ban-forest-tropical-beautiful-jungle-min.jpg";
import model8 from "../../Assets/modal/seoraksan-mountains-is-covered-by-morning-fog-sunrise-seoul-korea-min.jpg";
import model9 from "../../Assets/modal/vertical-shot-river-surrounded-by-mountains-meadows-scotland-min.jpg";
import model10 from "../../Assets/modal/cascade-park-stone-flow-splash-ban-min.jpg";
import model11 from "../../Assets/modal/fresh-blue-nature-shore-waterfall-river-min.jpg";
import model12 from "../../Assets/modal/tree-silhouette-fog-dark-landscape-terrain-generative-ai-min.jpg";
import model13 from "../../Assets/modal/wet-vietnam-mountain-flow-stream-rural-min.jpg";

import { Link } from "react-router-dom";

const Work = () => {
  const sections = [
    {
      imgSrc: model2,
      heading: "GT Holidays",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
      category: "Branding",
      link: "/gtholidays",
    },
    {
      imgSrc: model3,
      heading: "Harris Nadar",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
      link: "/harrisnadar",
      category: "Video production",
    },
    {
      imgSrc: model4,
      heading: "Tino Engineering",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
      link: "/tinoengineering",
      category: "Website",
    },
    {
      imgSrc: model5,
      heading: "Anandha Bhavan",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
      link: "/gtholidays",
      category: "Marketing & Social",
    },
    {
      imgSrc: model6,
      heading: "Fuji",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
      link: "/gtholidays",
      category: "SEO",
    },
    {
      imgSrc: model1,
      heading: "Aksha ya",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
      link: "/gtholidays",
      category: "SEO",
    },
    {
      imgSrc: model9,
      heading: "Karpagam",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
      link: "/gtholidays",
      category: "Branding",
    },
    {
      imgSrc: model7,
      heading: "DCS Technology",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
      link: "/gtholidays",
      category: "Website",
    },
    {
      imgSrc: model8,
      heading: "Rajan & co",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
      link: "/gtholidays",
      category: "Marketing & Social",
    },
  ];

  const sideSections = [
    {
      imgSrc: model2,
      heading: "Platez",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
      category: "Marketing & Social",
      link: "/gtholidays",
    },
    {
      imgSrc: model3,
      heading: "Toni & Guy",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
      category: "Branding",
      link: "/gtholidays",
    },
    {
      imgSrc: model4,
      heading: "At broadband",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
      category: "SEO",
      link: "/gtholidays",
    },
    {
      imgSrc: model5,
      heading: "Delano",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
      category: "Video Production",
      link: "/gtholidays",
    },
    {
      imgSrc: model1,
      heading: "Pragrup",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
      link: "/gtholidays",
      category: "Website",
    },
    {
      imgSrc: model9,
      heading: "Titan",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
      link: "/gtholidays",
      category: "Marketing & Social",
    },
    {
      imgSrc: model10,
      heading: "Arunachala",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
      link: "/gtholidays",
      category: "Video Production",
    },
    {
      imgSrc: model11,
      heading: "Sheffield",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
      link: "/gtholidays",
      category: "Website",
    },
    {
      imgSrc: model12,
      heading: "Thasor Musicals",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
      link: "/gtholidays",
      category: "Website",
    },
    {
      imgSrc: model13,
      heading: "Hairways",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
      link: "/gtholidays",
      category: "Branding",
    },
  ];

  const [clickedCategory, setClickedCategory] = useState(null);

  const handleClick = (category) => {
    setClickedCategory(category);
  };

  // const filteredSections = clickedCategory
  //   ? sections.filter(
  //       (section) =>
  //         section.category.toLowerCase() === clickedCategory.toLowerCase()
  //     )
  //   : sections;

  const mergedSections = [...sections, ...sideSections];

  const filteredMergedSections = clickedCategory
    ? mergedSections.filter(
        (section) =>
          section.category.toLowerCase() === clickedCategory.toLowerCase()
      )
    : mergedSections;

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const workArea = document.querySelector(".work-area");
      const workAreaBottom = workArea.getBoundingClientRect().bottom;

      if (workAreaBottom < window.innerHeight) {
        setIsSticky(false);
      } else {
        setIsSticky(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
                "SEO",
                "Branding",
                "Website",
                "Video Production",
                "Marketing & Social",
              ].map((category, index) => (
                <li
                  key={index}
                  className={`category-list ${
                    clickedCategory === category ? "clicked" : ""
                  }`}
                  onClick={() =>
                    handleClick(category === "All Works" ? null : category)
                  }
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="work-area">
          <div className="work-section">
            {filteredMergedSections.map((section, index) => (
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
                  <span className="bold-text">{section.category}</span>
                </div>
              </Link>
            ))}
          </div>

          <div className={`work-side ${isSticky ? "sticky" : ""}`}>
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
                    <span className="bold-text">{side.category}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Work;
