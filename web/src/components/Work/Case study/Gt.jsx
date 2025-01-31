import { useEffect, useRef } from "react";
import { Carousel } from "react-bootstrap";
import logo from "../../../Assets/gt-logo.png";
import poster from "../../../Assets/case-study/gt-holidays/gt-banner.jpg";
import post1 from "../../../Assets/case-study/gt-holidays/gtabt.avif";
import post2 from "../../../Assets/case-study/gt-holidays/gtabt1.avif";
import post3 from "../../../Assets/case-study/gt-holidays/gtabt2.avif";
import post4 from "../../../Assets/case-study/gt-holidays/gtabt5.jpg";
import post5 from "../../../Assets/case-study/gt-holidays/gtabt3.avif";
import post6 from "../../../Assets/case-study/gt-holidays/gtabt4.avif";
// import abtbg from "../../../Assets/case-study/gt-holidays/one.png";
// import abtbg1 from "../../../Assets/case-study/gt-holidays/two.png";
// import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import video from "../../../Assets/case-study/gt-holidays/vid.mp4";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Nextpage from "../Case study/Nextpage";
import hnbanner from "../../../Assets/harris2.png";
import "./CaseStudy.css";
const Gt = () => {
  const posters = [poster, poster, poster];
  const posts = [post1, post2, post3, post4, post5, post6];

  const sliderRef = useRef(null);

  const setting1 = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1200,
    autoplaySpeed: 5000,
    cssEase: "linear",
    pauseOnHover: false,
    draggable: true,
    loop: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  // const images1 = [abtbg, abtbg1];

  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
    }
  }, []);
  // const [openSection, setOpenSection] = useState("about");

  // const toggleSection = (section) => {
  //   setOpenSection((prev) => {
  //     if (prev !== section) return section;
  //     return prev;
  //   });
  // };

  return (
    <div className="gt">
      <div className="gt-main">
        <div className="gt-banner">
          <div className="gt-gap"></div>
          <div className="gt-head">
            <h2>
              Discover it with GT Holidays, <br />
              the No.1 travel brand in South India
            </h2>
          </div>
        </div>

        <div className="gt-cnts">
          <div className="gt-cnts1">
            <div className="gt-cnts1-desc">
              <h2 className="title-anim ">
                Travel, World Class <br /> Travel GT Holidays
              </h2>
            </div>
            <div className="gt-cnts1-img">
              <img src={logo} alt="wevwed" />
            </div>
          </div>
        </div>

        <div className="gt-cnts2">
          <div className="gt-video">
            <video ref={videoRef} src={video} autoPlay loop>
              Your browser does not support the video.
            </video>
          </div>
        </div>

        <div className="gt-cnts">
          <div className="gt-cnts3">
            <div className="gt-abt-head">
              <div className="gt-abt-head-one">
                <h2>Transforming The Future of travelling</h2>
              </div>
              <div className="gt-abt-head-cnt">
                <p className="para">
                  GT Holidays Established in 1968, GT Holidays is owned and
                  managed by the Sangam Group of Hotels. The Sangam Group is
                  recognized as one of the largest hotel chains in Tamil Nadu.
                  <br />
                  <br />
                  GT Holidays Established in 1968, GT Holidays is owned and
                  managed by the Sangam Group of Hotels. The Sangam Group is
                  recognized as one of the largest hotel chains in Tamil Nadu.
                </p>
              </div>
              {/* <p className="para">
                GT Holidays Established in 1968, GT Holidays is owned and
                managed by the Sangam Group of Hotels. The Sangam Group is
                recognized as one of the largest hotel chains in Tamil Nadu.
                Along with the Group, GT Holidays strives hard for ultimate
                success and innovation.
              </p>

              <div className="gt-abt-faq">
                <h3
                  className={`collapsible ${
                    openSection === "about" ? "open" : "closed"
                  }`}
                  onClick={() => toggleSection("about")}
                >
                  About
                  {openSection === "about" ? (
                    <IoIosArrowDown />
                  ) : (
                    <IoIosArrowForward />
                  )}
                </h3>
                {openSection === "about" && (
                  <div
                    className={`abt-content ${
                      openSection === "about"
                        ? "active expanding"
                        : "collapsing"
                    }`}
                  >
                    <p>
                      GT Holidays Established in 1968, GT Holidays is owned and
                      managed by the Sangam Group of Hotels. The Sangam Group is
                      recognized as one of the largest hotel chains in Tamil
                      Nadu. Along with the Group, GT Holidays strives hard for
                      ultimate success and innovation.
                    </p>
                    <p>
                      We are an ISO 9001: 2008 certified company that aims to
                      set clear goals, fix priorities, and organize the
                      resources effectively. GT Holidays enables you to discover
                      a new destination and offers unique ideas for your travel.
                    </p>
                  </div>
                )}
              </div>*/
              /* <div className="gt-abt-faq">
                <h3
                  className={`collapsible ${
                    openSection === "project" ? "open" : "closed"
                  }`}
                  onClick={() => toggleSection("project")}
                >
                  Project Includes
                  {openSection === "project" ? (
                    <IoIosArrowDown />
                  ) : (
                    <IoIosArrowForward />
                  )}
                </h3>
                {openSection === "project" && (
                  <div
                    className={`abt-content ${
                      openSection === "project"
                        ? "active expanding"
                        : "collapsing"
                    }`}
                  >
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum.
                    </p>
                    <ul>
                      <li>
                        Our targeted SEO strategies and optimizations have
                        resulted in a growth in organic sessions compared to the
                        previous month.
                      </li>
                      <li>
                        We published high-quality blog posts and optimized pages
                        on your website. These efforts have contributed to
                        improved search visibility and user engagement.
                      </li>
                      <li>
                        We're delighted to report your target keywords have
                        experienced positive movements, with 2 keywords ranking
                        on the first page of search results.
                      </li>
                    </ul>
                  </div>
                )}
              </div> */}
            </div>

            <div className="gt-abt-cnts">
              <div className="gt-abt-img">
                <ul>
                  <li>Social media Marketing</li>
                  <li>Branding</li>
                  <li>Designing</li>
                  <li>Content</li>
                  <li>Development</li>
                </ul>
                {/* <Carousel
                  pause="false"
                  interval={4000}
                  className="abts-slider"
                >
                  {images1.map((src, index) => (
                    <Carousel.Item key={index} 
                    className="abt-img"
                    >
                      <div
                        className="abt-img"
                        style={{ backgroundImage: `url(${src})` }}
                        alt={`small-slide-${index}`} 
                      />
                    </Carousel.Item>
                  ))}
                </Carousel> */}
              </div>
            </div>
          </div>

          <div className="gt-cnts4">
            <div className="carousal1">
              <Carousel pause="false" interval={5000}>
                {posters.map((src, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="poster-img"
                      src={src}
                      alt={`small-slide-${index}`}
                      style={{ width: "100%", height: "auto" }} // You can adjust the styles as needed
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </div>
        </div>

        <div className="gt-cnts5">
          <div className="gt-counter-head">
            <h3>Results</h3>
            <div className="underline"></div>
          </div>
          <div className="gt-counter">
            <div className="gt-content">
              <div className="gt-counter-box">
                <div className="gt-result-icn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="60px"
                    viewBox="0 -960 960 960"
                    width="60px"
                    fill="black"
                  >
                    <path d="M0-240v-53q0-38.57 41.5-62.78Q83-380 150.38-380q12.16 0 23.39.5t22.23 2.15q-8 17.35-12 35.17-4 17.81-4 37.18v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-19.86-3.5-37.43T765-377.27q11-1.73 22.17-2.23 11.17-.5 22.83-.5 67.5 0 108.75 23.77T960-293v53H780Zm-480-60h360v-6q0-37-50.5-60.5T480-390q-79 0-129.5 23.5T300-305v5ZM149.57-410q-28.57 0-49.07-20.56Q80-451.13 80-480q0-29 20.56-49.5Q121.13-550 150-550q29 0 49.5 20.5t20.5 49.93q0 28.57-20.5 49.07T149.57-410Zm660 0q-28.57 0-49.07-20.56Q740-451.13 740-480q0-29 20.56-49.5Q781.13-550 810-550q29 0 49.5 20.5t20.5 49.93q0 28.57-20.5 49.07T809.57-410ZM480-480q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm.35-60Q506-540 523-557.35t17-43Q540-626 522.85-643t-42.5-17q-25.35 0-42.85 17.15t-17.5 42.5q0 25.35 17.35 42.85t43 17.5ZM480-300Zm0-300Z" />
                  </svg>
                </div>
                <h3>20k+</h3>
                <p>Entries</p>
              </div>

              <div className="gt-counter-box">
                <div className="gt-result-icn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="60px"
                    viewBox="0 -960 960 960"
                    width="60px"
                    fill="black
"
                  >
                    <path d="M445-80q-29 0-56-12t-45-35L127-403l21-23q14-15 34.5-18.5T221-438l99 53v-365q0-12.75 8.68-21.38 8.67-8.62 21.5-8.62 12.82 0 21.32 8.62 8.5 8.63 8.5 21.38v465l-144-77 156 198q10 12 23.76 18 13.76 6 29.24 6h205q38 0 64-26t26-64v-170q0-25.5-17.25-42.75T680-460H460v-60h219.65q50.14 0 85.25 35 35.1 35 35.1 85v170q0 63-43.5 106.5T650-80H445ZM203-665q-11.07-18.75-17.04-40.49-5.96-21.74-5.96-44.76 0-70.75 49.73-120.25Q279.45-920 350-920t120.27 49.74Q520-820.52 520-749.96q0 22.96-5.96 44.62Q508.07-683.68 497-665l-52-30q7-12 11-26t4-29.48Q460-796 427.88-828q-32.12-32-78-32T272-827.92q-32 32.09-32 77.92 0 15 4 29t11 26l-52 30Zm285 335Z" />
                  </svg>
                </div>
                <h3>10k+</h3>
                <p>Overall brand growth</p>
              </div>

              <div className="gt-counter-box">
                <div className="gt-result-icn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="60px"
                    viewBox="0 -960 960 960"
                    width="60px"
                    fill="black
"
                  >
                    <path d="M222-255q63-44 125-67.5T480-346q71 0 133.5 23.5T739-255q44-54 62.5-109T820-480q0-145-97.5-242.5T480-820q-145 0-242.5 97.5T140-480q0 61 19 116t63 109Zm257.81-195q-57.81 0-97.31-39.69-39.5-39.68-39.5-97.5 0-57.81 39.69-97.31 39.68-39.5 97.5-39.5 57.81 0 97.31 39.69 39.5 39.68 39.5 97.5 0 57.81-39.69 97.31-39.68 39.5-97.5 39.5Zm.66 370Q398-80 325-111.5t-127.5-86q-54.5-54.5-86-127.27Q80-397.53 80-480.27 80-563 111.5-635.5q31.5-72.5 86-127t127.27-86q72.76-31.5 155.5-31.5 82.73 0 155.23 31.5 72.5 31.5 127 86t86 127.03q31.5 72.53 31.5 155T848.5-325q-31.5 73-86 127.5t-127.03 86Q562.94-80 480.47-80Zm-.47-60q55 0 107.5-16T691-212q-51-36-104-55t-107-19q-54 0-107 19t-104 55q51 40 103.5 56T480-140Zm0-370q34 0 55.5-21.5T557-587q0-34-21.5-55.5T480-664q-34 0-55.5 21.5T403-587q0 34 21.5 55.5T480-510Zm0-77Zm0 374Z" />
                  </svg>
                </div>
                <h3>100k+</h3>
                <p>Reach</p>
              </div>

              <div className="gt-counter-box">
                <div className="gt-result-icn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="64px"
                    viewBox="0 -960 960 960"
                    width="64px"
                    fill="black
"
                  >
                    <path d="M480.08-326.67q72.25 0 122.75-50.58 50.5-50.57 50.5-122.83 0-72.25-50.58-122.75-50.57-50.5-122.83-50.5-72.25 0-122.75 50.58-50.5 50.57-50.5 122.83 0 72.25 50.58 122.75 50.57 50.5 122.83 50.5Zm-.24-62.66q-46.17 0-78.34-32.33-32.17-32.32-32.17-78.5 0-46.17 32.33-78.34 32.32-32.17 78.5-32.17 46.17 0 78.34 32.33 32.17 32.32 32.17 78.5 0 46.17-32.33 78.34-32.32 32.17-78.5 32.17ZM480-200q-146 0-264.67-82.5Q96.67-365 40-500q56.67-135 175.33-217.5Q334-800 480-800t264.67 82.5Q863.33-635 920-500q-56.67 135-175.33 217.5Q626-200 480-200Zm0-300Zm-.11 233.33q118.44 0 217.61-63.5 99.17-63.5 151.17-169.83-52-106.33-151.06-169.83-99.05-63.5-217.5-63.5-118.44 0-217.61 63.5-99.17 63.5-151.83 169.83 52.66 106.33 151.72 169.83 99.05 63.5 217.5 63.5Z" />
                  </svg>
                </div>
                <h3 className="light">15M+</h3>
                <p>Impressions</p>
              </div>

              <div className="gt-counter-box">
                <div className="gt-result-icn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="60px"
                    viewBox="0 -960 960 960"
                    width="60px"
                    fill="black
"
                  >
                    <path d="M481-80q-47.5 0-80.75-32.5T367-193q0-8 1-14.5t3-13.5l-100-56q-15 15-35 24t-43 9q-47.5 0-80.75-32.94t-33.25-80Q79-404 111.5-437t80.5-33q24.73 0 46.36 10Q260-450 276-433l134-67q-5-26 2-51t24-45l-43-64q-8.4 3-17.4 4.5-9 1.5-18.6 1.5-47.5 0-80.75-32.94t-33.25-80Q243-814 276.15-847q33.14-33 80.5-33 47.35 0 79.85 32.96Q469-814.08 469-767q0 21-7 39.5T442-694l43 65q8-3 17.5-4.5T522-635q17.72 0 33.36 5.5T585-615l79-65q-5-10.65-7.5-21.82Q654-713 654-726q0-48 32.5-80.5t80-32.5q47.5 0 80.5 32.94t33 80q0 47.06-32.96 79.56T767-614q-18.45 0-34.72-5Q716-624 702-634l-78 65q5 10.97 7.5 22.48Q634-535 634-522q0 47.08-32.96 80.04Q568.08-409 521-409q-26 0-47-10.5T437-447l-134 68q2 12.5 1.5 25t-3.5 25l99 56q16-15 37-24t44-9q46.67 0 79.33 32.94 32.67 32.94 32.67 80T560.33-113Q527.67-80 481-80ZM193.07-304q22.07 0 37-15.5T245-357q0-22-14.93-37.5t-37-15.5Q171-410 155-394.5T139-357q0 22 16 37.5t38.07 15.5Zm164-409q22.07 0 37-15.5T409-766q0-22-14.93-37.5t-37-15.5Q335-819 319-803.5T303-766q0 22 16 37.5t38.07 15.5ZM480-140q22 0 37.5-15.5T533-193q0-22-15.5-37.5T480-246q-22 0-37.5 15.5T427-193q0 22 15.5 37.5T480-140Zm41-329q22 0 37.5-15.5T574-522q0-22-15.5-37.5T521-575q-22 0-37.5 15.5T468-522q0 22 15.5 37.5T521-469Zm246.07-205q22.07 0 37-14.93t14.93-37q0-22.07-14.93-37.57t-37-15.5Q745-779 729-763.5t-16 37.57q0 22.07 16 37T767.07-674Z" />
                  </svg>
                </div>
                <h3>1M+</h3>
                <p>Engagement</p>
              </div>
            </div>
            {/* <div className="gt-content">
                <div className="gt-counter-box">
                  <h5>&gt;3</h5>
                  <p> ROAS </p>
                </div>
                <div className="gt-counter-box">
                  <p>Conversion rate increased by</p>
                  <h5> 28% </h5>
                </div>
                <div className="gt-counter-box last-box">
                  <p>AOV increased by</p> <h5> 15% </h5>
                </div>
              </div> */}
          </div>
        </div>

        <div className="gt-works-done">
          <div className="gt-work-head">
            <h3>Our Works</h3>
            <div className="underline"></div>
          </div>
          <div className="gt-work-slider">
            <Slider {...setting1} ref={sliderRef} className="slider">
              {posts.map((post, index) => {
                let width, height, margin;

                if (index % 3 === 0) {
                  width = 500;
                  height = 500;
                  margin = 200;
                } else if (index % 3 === 1) {
                  width = 400;
                  height = 400;
                  margin = 250;
                } else {
                  width = 600;
                  height = 700;
                  margin = 100;
                }

                return (
                  <div key={index} className="post-slider">
                    <div
                      className="image-placeholder"
                      style={{
                        backgroundImage: `url(${post})`,
                        width: `${width}px`,
                        height: `${height}px`,
                        marginTop: `${margin}px`,
                      }}
                      alt={post}
                    ></div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>

        <Nextpage
          title="Harris Nadar Jewellery"
          imageUrl={hnbanner}
          altText="Harris Nadar Banner"
          route="/harrisnadar"
        />
      </div>
    </div>
  );
};

export default Gt;
