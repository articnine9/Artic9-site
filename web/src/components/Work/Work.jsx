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
import model14 from "../../Assets/modal/aesthetic-retro-vaporwave-landscape-min.jpg";
import model15 from "../../Assets/modal/amazing-nature-landscape-with-trees-vineyards-country-house-morning-fog-min.jpg";
import model16 from "../../Assets/modal/beautiful-landscape-min.jpg";
import model17 from "../../Assets/modal/beautiful-landscape-view-haputale-tea-plants-roads-leading-lipton-seat-fog-covering-mountains-concept-paradise-island-sri-lanka-min.jpg";
import model18 from "../../Assets/modal/beautiful-shot-single-green-tree-field-near-sea-min.jpg";
import model19 from "../../Assets/modal/beautiful-strawberry-garden-sunrise-doi-ang-khang-chiang-mai-thailand-min.jpg";
import model20 from "../../Assets/modal/cosmos-flowers-field-landscape-min.jpg";
import model21 from "../../Assets/modal/digital-lavender-natural-landscape-min.jpg";
import model22 from "../../Assets/modal/dreamy-rainbow-countryside-min.jpg";
import model23 from "../../Assets/modal/landscape-mountains-min.jpg";

import { Link } from "react-router-dom";
import pic1 from "../../Assets/modal/one.jpg";
import pic2 from "../../Assets/modal/two.jpg";
import pic3 from "../../Assets/modal/three.jpg";
import pic4 from "../../Assets/modal/four.jpg";
import pic5 from "../../Assets/modal/five.jpg";
import pic6 from "../../Assets/modal/six.jpg";
import pic7 from "../../Assets/modal/eight.jpg";
import pic8 from "../../Assets/modal/seven.png";
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
      imgSrc: model9,
      heading: "Karpagam",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
      link: "/gtholidays",
      category: "Branding",
    },
    {
      imgSrc: model1,
      heading: "Akshaya",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
      link: "/gtholidays",
      category: "SEO",
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

    {
      imgSrc: model20,
      heading: "Cascade Park Stone Flow",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
      link: "/cascadepark",
      category: "Waterfall Photography",
    },
    {
      imgSrc: model11,
      heading: "Fresh Blue Nature Waterfall River",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
      link: "/bluenaturewaterfall",
      category: "Waterfall Photography",
    },
    {
      imgSrc: model12,
      heading: "Tree Silhouette Fog Dark Landscape",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
      link: "/treefoglandscape",
      category: "Nature Photography",
    },
    {
      imgSrc: model13,
      heading: "Wet Vietnam Mountain Flow Stream",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
      link: "/wetvietnamstream",
      category: "Mountain Photography",
    },
    {
      imgSrc: model14,
      heading: "Aesthetic Retro Vaporwave Landscape",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
      link: "/retroaesthetic",
      category: "Vaporwave Photography",
    },
    {
      imgSrc: model15,
      heading: "Amazing Nature Landscape and Vineyards",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
      link: "/naturevineyards",
      category: "Nature Photography",
    },
    {
      imgSrc: model16,
      heading: "Beautiful Landscape",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
      link: "/beautifullandscape",
      category: "Landscape Photography",
    },
    {
      imgSrc: model17,
      heading: "Haputale Tea Plants Roads Leading to Lipton Seat",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
      link: "/haputaleteaplants",
      category: "Landscape Photography",
    },
    {
      imgSrc: model18,
      heading: "Beautiful Green Tree Field Near Sea",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
      link: "/greentreefield",
      category: "Nature Photography",
    },
    {
      imgSrc: model19,
      heading: "Beautiful Strawberry Garden Sunrise",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
      link: "/strawberrygarden",
      category: "Nature Photography",
    },
    {
      imgSrc: model20,
      heading: "Cosmos Flowers Field Landscape",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
      link: "/cosmosflowersfield",
      category: "Nature Photography",
    },
    {
      imgSrc: model21,
      heading: "Digital Lavender Natural Landscape",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
      link: "/digitallavender",
      category: "Digital Photography",
    },
    {
      imgSrc: model22,
      heading: "Dreamy Rainbow Countryside",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
      link: "/dreamyrainbow",
      category: "Countryside Photography",
    },
    {
      imgSrc: model23,
      heading: "Mountain Landscape",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
      link: "/mountainlandscape",
      category: "Mountain Photography",
    },
    {
      imgSrc: model10,
      heading: "Mountain Landscape",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
      link: "/mountainlandscape",
      category: "Mountain Photography",
    },
  ];

  const sideSections = [
    {
      imgSrc: model12,
      heading: "Platez",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
      category: "Marketing & Social",
      link: "/gtholidays",
    },
    {
      imgSrc: model13,
      heading: "Toni & Guy",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
      category: "Branding",
      link: "/gtholidays",
    },
    {
      imgSrc: model14,
      heading: "At broadband",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
      category: "SEO",
      link: "/gtholidays",
    },
    {
      imgSrc: model15,
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
      imgSrc: model19,
      heading: "Titan",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
      link: "/gtholidays",
      category: "Marketing & Social",
    },
    {
      imgSrc: model20,
      heading: "Arunachala",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
      link: "/gtholidays",
      category: "Video Production",
    },
    {
      imgSrc: model21,
      heading: "Sheffield",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
      link: "/gtholidays",
      category: "Website",
    },
    {
      imgSrc: model22,
      heading: "Thasor Musicals",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
      link: "/gtholidays",
      category: "Website",
    },
    {
      imgSrc: model23,
      heading: "Hairways",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
      link: "/gtholidays",
      category: "Branding",
    },
    {
      imgSrc: model18,
      heading: "Rajan & co",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
      link: "/gtholidays",
      category: "Marketing & Social",
    },
  ];

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
        </div>

        <div className="work-area">
          <div class="listboard">
            <Link to="/gtholidays" class="card" data-grid-index="1">
              <div class="card-video-inner">
                <img
                  src={pic1}
                  alt="GT Holidays cover"
                  width="1600"
                  height="1200"
                  loading="lazy"
                />
              </div>
              <span class="card-link">GT Holidays</span>
              <p class="card-description">
                Offers customized travel packages and tours for unique vacation
                experiences
              </p>
            </Link>

            <Link to="/harrisnadar" class="card" data-grid-index="2">
              <div class="card-video-inner">
                <img
                  src={pic2}
                  alt="Harris Nadar Jewellery cover"
                  width="1600"
                  height="1200"
                  loading="lazy"
                />
              </div>
              <span class="card-link">Harris Nadar Jewellery</span>
              <p class="card-description">
                Crafting fine, high-quality jewelry that blends tradition with
                modern design
              </p>
            </Link>

            <Link to="/tinoengineering" class="card" data-grid-index="3">
              <div class="card-video-inner">
                <img
                  src={pic3}
                  alt="Tino Engineering Pvt Ltd cover"
                  width="1600"
                  height="1200"
                  loading="lazy"
                />
              </div>
              <span class="card-link">Tino Engineering Pvt Ltd</span>
              <p class="card-description">
                Provides precision engineering solutions and system integrations
                for diverse industries
              </p>
            </Link>

            <Link to="/gtholidays" class="card" data-grid-index="4">
              <div class="card-video-inner">
                <img
                  src={pic4}
                  alt="Akshaya Catering cover"
                  width="1600"
                  height="1200"
                  loading="lazy"
                />
              </div>
              <span class="card-link">Akshaya Catering</span>
              <p class="card-description">
                Delivers exceptional catering services with a focus on quality
                and taste for all events
              </p>
            </Link>

            <Link to="/harrisnadar" class="card" data-grid-index="5">
              <div class="card-video-inner">
                <img
                  src={pic5}
                  alt="Delano Residency cover"
                  width="1600"
                  height="1200"
                  loading="lazy"
                />
              </div>
              <span class="card-link">Delano Residency</span>
              <p class="card-description">
                A premium hospitality brand offering luxurious and comfortable
                accommodations
              </p>
            </Link>

            <Link to="/tinoengineering" class="card" data-grid-index="6">
              <div class="card-video-inner">
                <img
                  src={pic6}
                  alt="At Broadband cover"
                  width="1600"
                  height="1200"
                  loading="lazy"
                />
              </div>
              <span class="card-link">AT Broadband</span>
              <p class="card-description">
                Offers reliable, high-speed internet and broadband services for
                homes and businesses
              </p>
            </Link>

            <Link to="/gtholidays" class="card" data-grid-index="7">
              <div class="card-video-inner">
                <img
                  src={pic7}
                  alt="Pragrup architecture cover"
                  width="1600"
                  height="1200"
                  loading="lazy"
                />
              </div>
              <span class="card-link">Pragrup Architecture</span>
              <p class="card-description">
                An architecture firm specializing in innovative and sustainable
                design solutions
              </p>
            </Link>

            <Link to="/harrisnadar" class="card" data-grid-index="8">
              <div class="card-video-inner">
                <img
                  src={pic8}
                  alt="Fuji Otis Monarch cover"
                  width="1600"
                  height="1200"
                  loading="lazy"
                />
              </div>
              <span class="card-link">Fuji Otis Monarch</span>
              <p class="card-description">
                Leading provider of advanced elevator and escalator systems with
                a focus on safety and performance
              </p>
            </Link>
          </div>

          {/* <div className="work-section">
            {sections.map((section, index) => (
              <Link
                to={section.link}
                key={index}
                className={`work-sec sec-${(index % 20) + 1}`}
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Work;
