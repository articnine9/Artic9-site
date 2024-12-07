import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

import tst1 from "../../Assets/testimonial/testimonial2.png";
import tst2 from "../../Assets/testimonial/testimonial3.png";
import tst3 from "../../Assets/testimonial/testimonial4.png";
import tst4 from "../../Assets/testimonial/testimonial5.png";
import tst5 from "../../Assets/testimonial/testimonial6.png";

const testimonials = [
  {
    id: 1,
    image: tst1,
    designation: "Client Review",
    video: [
      "https://youtu.be/vmnlcnTopNQ",
      "https://youtu.be/orxg8R-2Y0Q",
      "https://youtu.be/UVXeXariyu4",
    ],
  },
  {
    id: 2,
    image: tst2,
    designation: "Client Review",
    reviews: [
      "The solar panels were installed quickly and efficiently.",
      "The customer support was great, and the team answered all my questions before and after the installation.",
    ],
  },
  {
    id: 3,
    image: tst3,
    designation: "Client Review",
    reviews: [
      "I am getting all the required support from the company to serve my customer in a better way. The product quality is perfect and after-sales service is worth appreciating.",
      "Great experience! Highly recommend this company for solar panel installations.",
      "The company offers a wide range of excellent quality products and services. In addition to this their good after-sales service is what keeps my customers happy.",
      "I was impressed by how professional the team was and how smoothly everything went from start to finish.",
    ],
  },
  {
    id: 4,
    image: tst4,
    designation: "Client Review",
    reviews: [
      "Good Product, looks nice, price is reasonable, strong build quality, yet to complete the installation, shall add more details once installed.",
      "The after-sales service is exceptional. They were very responsive when I had questions.",
    ],
  },
  {
    id: 5,
    image: tst5,
    designation: "Client Review",
    video: [
      "https://youtu.be/UVXeXariyu4",
      "https://youtu.be/vmnlcnTopNQ",
      "https://youtu.be/orxg8R-2Y0Q",
    ],
  },
];

const TestimonialCarousel = () => {
  const [pausedIndexes, setPausedIndexes] = useState([]);

  const handleMouseEnter = (index) => {
    if (index === 0 || index === 4) {
      setPausedIndexes((prev) => [...prev, index]); 
    }
  };

  const handleMouseLeave = (index) => {
    if (index === 0 || index === 4) {
      setPausedIndexes((prev) => prev.filter((i) => i !== index)); 
    }
  };

  return (
    <section>
      <div className="outerdiv">
        <div className="testimonial-cnt">
          <span className="testimonial-head">
            Hear what <br /><b>our client </b>says
          </span>
        </div>
        <div className="innerdiv">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`div${index + 1} eachdiv`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <Carousel
                interval={pausedIndexes.includes(index) ? null : 3000} 
                controls={false}
                indicators={false}
              >
                {testimonial.video
                  ? testimonial.video.map((videoUrl, videoIndex) => (
                      <Carousel.Item key={videoIndex}>
                        <div className="userdetails">
                          <div className="imgbox">
                            <img
                              src={testimonial.image}
                              alt={`testimonial-${index}`}
                            />
                          </div>
                          <div className="detbox">
                            <p className="designation">
                              {testimonial.designation}
                            </p>
                          </div>
                        </div>
                        <div className="review">
                          <iframe
                            className="video"
                            width="100%"
                            height="215"
                            src={`https://www.youtube.com/embed/${videoUrl
                              .split("/")[3]}`}
                            title={`testimonial-video-${index}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </Carousel.Item>
                    ))
                  : testimonial.reviews.map((review, reviewIndex) => (
                      <Carousel.Item key={reviewIndex}>
                        <div className="userdetails">
                          <div className="imgbox">
                            <img
                              src={testimonial.image}
                              alt={`testimonial-${index}`}
                            />
                          </div>
                          <div className="detbox">
                            <p className="designation">
                              {testimonial.designation}
                            </p>
                          </div>
                        </div>
                        <div className="review">
                          <h4>{review}</h4>
                        </div>
                      </Carousel.Item>
                    ))}
              </Carousel>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
