import React from "react";
import { Carousel } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

import women from "../../Assets/slider/seo-1-1.png";
import slack from "../../Assets/slider/benefits-of-custom-web-development-and-web-design-12grids.webp";
import snap from "../../Assets/slider/brand-te-blog-800x363.png";
import pink from "../../Assets/slider/smo-1.webp";
import gray from "../../Assets/slider/seo-1-1.png";
import margeta from "../../Assets/slider/benefits-of-custom-web-development-and-web-design-12grids.webp";

import grid1 from "../../Assets/platez.png";
import grid2 from "../../Assets/b2.png";
import grid3 from "../../Assets/b4.png";
import grid4 from "../../Assets/harris2.png";
import grid5 from "../../Assets/anantha-bavan.png";

// import ServiceTab from "./ServiceTab";
import Carousal from "./Carousal";
import TestimonialSection from "./Testimonial";
import Clients from './Clients'
import "./Home.css";

const Home = () => {
  const clients = [
    { src: women, alt: "clients" },
    { src: slack, alt: "clients" },
    { src: snap, alt: "clients" },
    { src: pink, alt: "clients" },
    { src: gray, alt: "clients" },
    { src: margeta, alt: "clients" },
  ];
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1500,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    draggable: true,
    swipeToSlide: true,
    touchMove: true,
  };

  const imagesGrid1 = [grid1, grid2, grid4, grid5];
  const imagesGrid2 = [grid2, grid4, grid5, grid1];
  // const imagesGrid3 = [grid3, grid3, grid3, grid3];
  // const imagesGrid4 = [grid5, grid1, grid2, grid4];
  // const imagesGrid5 = [grid4, grid5, grid1, grid2];

  return (
    <>
      <Carousal />

      {/* ----------------------------------------------------Who-are-we------------------------------------------------- */}
      <section className="who-are-you">
        <div className="abt-container">
          <div className="abtcnt1"></div>
          <div className="abtcnt2">
            <div className="abtcnt2-head">
              We Shape
              <span> Digital Journeys </span>
              <br /> from <span>Ideas</span> to
              <span> Execution and Beyond.</span>
            </div>
          </div>
          <div className="abtcnt3">
            <div className="abtimg">
              <div className="abtgap"></div>
              <span class="text-outline">artic9</span>
            </div>
          </div>
          <div className="abtcnt4">
            <div className="abt-lines">
              <p>
                Transforming visions into vibrant realities,
                <span>Artic9 </span>
                weaves creativity, technology, and strategy into a seamless
                tapestry of innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------slider------------------------------------------------- */}
      <section className="slider-main">
        <div className="slider-head">
          <h3>
            Looking for an <b>change-over</b> ?
          </h3>
        </div>
        <div className="home-slider">
          <Slider {...settings}>
            {clients.map((client, index) => (
              <div key={index} className="slidercontainer">
                <div
                  className="slider-pstr"
                  style={{ backgroundImage: `url(${client.src})` }}
                  alt={client.alt}
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* ----------------------------------------------------Why-choose-us------------------------------------------------- */}
      {/* <ServiceTab /> */}

      {/* ----------------------------------------------------Clients------------------------------------------------- */}
      <Clients/>
      {/* ----------------------------------------------------Why-choose-us------------------------------------------------- */}
      <TestimonialSection />
      {/* ----------------------------------------------------Blog------------------------------------------------- */}
      <section className="blog-main">
        <div className="blog-container">
          <div className="blog1">
            <h2>
              Explore How We Catalyzed their
              <br /> Business's<b> Digital Transformation</b>
            </h2>
          </div>
          <div className="blog2">
            <Carousel
              pause="false"
              fade
              className="blog-carousal"
              controls={false}
              indicators={false}
            >
              {imagesGrid1.map((image, index) => (
                <Carousel.Item key={index} className="blog-carousal">
                  <div
                    className=" grid-item grid-bg"
                    style={{ backgroundImage: `url(${image})` }}
                    alt={`slide-${index}`}
                  ></div>
                </Carousel.Item>
              ))}
            </Carousel>
            <Carousel
              pause="false"
              fade
              className="blog-carousal"
              controls={false}
              indicators={false}
            >
              {imagesGrid2.map((image, index) => (
                <Carousel.Item key={index} className="blog-carousal">
                  <div
                    className=" grid-item grid-bg"
                    style={{ backgroundImage: `url(${image})` }}
                    alt={`slide-${index}`}
                  ></div>
                </Carousel.Item>
              ))}
            </Carousel>
            <div
              className="grid-item span-2"
              style={{ backgroundImage: `url(${grid3})` }}
            ></div>
            <div className="grid-item bg1">
              <div className="blog-post">
                <span>Buisness</span>
                <h3>Be the brand that stands out. Meet our creative</h3>
              </div>
            </div>
            <div className="grid-item bg2">
              <div className="blog-post">
                <span>Buisness</span>
                <h3>Be the brand that stands out. Meet our creative</h3>
              </div>
            </div>
            <div
              className="grid-item"
              style={{ backgroundImage: `url(${grid4})` }}
            ></div>
            <div
              className="grid-item"
              style={{ backgroundImage: `url(${grid5})` }}
            ></div>
            <div className="grid-item bg3">
              <div className="blog-post">
                <span>Buisness</span>
                <h3>Be the brand that stands out. Meet our creative</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------Team-quote------------------------------------------------- */}
      <section className="teamquote-main">
        <div className="teamquote-cnt">
          <b>
            "Together, we are committed to excellence, innovation, and making a
            meaningful <br />
            impact in the digital world"
          </b>
          <h3>
            <i>#beunique</i>
          </h3>
        </div>
      </section>

      {/* ----------------------------------------------------Let's work------------------------------------------------- */}
      <section className="letswork-main">
        <div className="letswork-container">
          <span>Let's Work Together</span>
          <div className="letswork-link">
            <Link
              className="mail-link"
              to="mailto:hi@artic9.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              hi@artic9.com
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
