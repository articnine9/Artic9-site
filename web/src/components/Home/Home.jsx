import { useEffect, useRef, useState } from "react";
// import { Carousel } from "react-bootstrap";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import video from "../../Assets/reel.mp4";

// import women from "../../Assets/slider/seo-1-1.png";
// import slack from "../../Assets/slider/benefits-of-custom-web-development-and-web-design-12grids.webp";
// import snap from "../../Assets/slider/brand-te-blog-800x363.png";
// import pink from "../../Assets/slider/smo-1.webp";
// import gray from "../../Assets/slider/seo-1-1.png";
// import margeta from "../../Assets/slider/benefits-of-custom-web-development-and-web-design-12grids.webp";
import contact from "../../Assets/Contact-banner.png";

// import grid1 from "../../Assets/platez.png";
// import grid2 from "../../Assets/b2.png";
// import grid3 from "../../Assets/b4.png";
// import grid4 from "../../Assets/harris2.png";
// import grid5 from "../../Assets/anantha-bavan.png";
// import grid6 from "../../Assets/post11.jpg";
// import grid7 from "../../Assets/post3.jpg";

import Carousal from "./Carousal";
// import TestimonialSection from "./Testimonial";
import Clients from "./Clients";
// import Indus from "./Indus";
import Services from "./Services";
import Gtestimonial from "./Gtestimonial";

import "./Home.css";
// import CubeAnimation from "./CubeAnimation";

const Home = () => {
  // const clients = [
  //   { src: women, alt: "clients" },
  //   { src: slack, alt: "clients" },
  //   { src: snap, alt: "clients" },
  //   { src: pink, alt: "clients" },
  //   { src: gray, alt: "clients" },
  //   { src: margeta, alt: "clients" },
  // ];
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   autoplay: false,
  //   speed: 1500,
  //   autoplaySpeed: 0,
  //   cssEase: "linear",
  //   pauseOnHover: false,
  //   arrows: false,
  //   draggable: true,
  //   swipeToSlide: true,
  //   touchMove: true,
  // };

  // const imagesGrid1 = [grid1, grid5, grid4, grid2];
  // const imagesGrid2 = [grid2, grid4, grid1, grid5];
  // const imagesGrid3 = [grid3, grid6, grid7];

  // const imagesGrid4 = [grid4, grid5];
  // const imagesGrid5 = [grid5, grid4];

  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
    }
  }, []);

  const [containerHeight, setContainerHeight] = useState(80);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newHeight = Math.min(100, 80 + scrollPosition / 150);
      setContainerHeight(newHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="home-main">
      <div className="home-first-sec">
        <div className="home-first-head">
          <div className="home-first-title">
            <h1>
              Artic9 is a global branding <br />
              and Creative agency
            </h1>
          </div>
        </div>
        <div className="home-first-anime">
          <div className="home-anime-img">
            <img src={contact} alt="ervwsg" />
            {/* <CubeAnimation/> */}
          </div>
        </div>
      </div>

      <Carousal />

      {/* ----------------------------------------------------Who-are-we------------------------------------------------- */}
      <section className="who-are-you">
        <div
          className="abt-container"
          style={{ height: `${containerHeight}%` }}
        >
          <video ref={videoRef} src={video} autoPlay loop>
            Your browser does not support the video.
          </video>

          {/* <div className="abtcnt1"></div>
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
          </div> */}
        </div>
      </section>

      {/* ----------------------------------------------------slider------------------------------------------------- */}
      {/* <section className="slider-main"> */}
      <div className="serve">
        <Services />
      </div>

      {/* <div className="slider-head">
          <h3>
            Looking for an <b>change-over</b> ?
          </h3>
        </div> */}
      {/* <div className="home-slider">
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
        </div> */}
      {/* </section> */}

      {/* ----------------------------------------------------Why-choose-us------------------------------------------------- */}
      {/* <ServiceTab /> */}

      {/* ----------------------------------------------------Clients------------------------------------------------- */}
      <Clients />

      {/* ----------------------------------------------------Blog------------------------------------------------- */}
      {/* <section className="blog-main">
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
                    className="grid-item grid-bg"
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
                    className="grid-item grid-bg"
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
                <span>Business</span>
                <h3>Be the brand that stands out. Meet our creative</h3>
              </div>
            </div>

            <div className="grid-item bg2">
              <div className="blog-post">
                <span>Business</span>
                <h3>Be the brand that stands out. Meet our creative</h3>
              </div>
            </div>

            <Carousel
              pause="false"
              fade
              className="blog-carousal"
              controls={false}
              indicators={false}
            >
              {imagesGrid4.map((image, index) => (
                <Carousel.Item key={index} className="blog-carousal">
                  <div
                    className="grid-item grid-bg3"
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
              {imagesGrid5.map((image, index) => (
                <Carousel.Item key={index} className="blog-carousal">
                  <div
                    className="grid-item grid-bg3"
                    style={{ backgroundImage: `url(${image})` }}
                    alt={`slide-${index}`}
                  ></div>
                </Carousel.Item>
              ))}
            </Carousel>

            <div className="grid-item bg3">
              <div className="blog-post">
                <span>Business</span>
                <h3>Be the brand that stands out. Meet our creative</h3>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* ----------------------------------------------------Team-quote------------------------------------------------- */}
      {/* <section className="teamquote-main">
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
      </section> */}
      {/* ----------------------------------------------------Why-choose-us------------------------------------------------- */}
      <Gtestimonial />
      {/* <TestimonialSection /> */}
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

      {/* <section className="letswork-main">
        <Indus />
      </section> */}
    </div>
  );
};

export default Home;
