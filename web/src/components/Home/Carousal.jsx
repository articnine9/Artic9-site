import React from "react";
import { Carousel } from "react-bootstrap";
import gt from "../../Assets/GT.png";
import gt1 from "../../Assets/carousel.png";
import harris from "../../Assets/carousel.png";
import harris1 from "../../Assets/harris2.png";
import ananth from "../../Assets/anantha-bavan.png";
import logo from '../../Assets/gt-logo.png'
import "./Home.css";

const CarouselComponent = () => {
  const images = [gt, gt1, harris, harris1, ananth];
  const images1 = [
    "https://picsum.photos/id/123/1200/400",
    "https://picsum.photos/id/456/1200/400",
    "https://picsum.photos/id/678/1200/400",
  ];

  return (
    <div className="carousel-container">
      <div className="carousel-section1">
        <Carousel pause='false'>
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <div className="imgs">
                <div
                  className=" pstrs"
                  style={{ backgroundImage: `url(${image})` }}
                  alt={`slide-${index}`}
                >
                  <div className="gap"></div>
                  <div className="pstrs-cnt">
                    <img src={logo} alt="logo" className="logo"/>
                    <h2 className="mainline">Does this ad & style looks familier</h2>
                    <span className="secondline">Yes you guessed it right
                      we are the creators of this
                    </span>
                    <div className="slider-btn">
                      <button className="more-btn">Learn more</button>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div className="carousel-section2">
        <div className="sml-carousal">
          <Carousel pause='false'>
            {images1.map((src, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block sml-img"
                  src={src}
                  alt={`small-slide-${index}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="sml-carousal1">
          <Carousel pause='false'>
            {images1.map((src, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block sml-img"
                  src={src}
                  alt={`small-slide-${index}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
