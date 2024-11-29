import React from "react";
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
    reviews: [
      "Solar did an excellent job of explaining the solar panel system, how it worked, the potential power output and savings. The installation was done on time and was excellent.",
      "I am very happy with the service and performance of the solar system. It has been saving me a lot on my energy bills.",
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
    reviews: [
      "The company offers a wide range of excellent quality products and services. In addition to this their good after-sales service is what keeps my customers happy.",
      "I was impressed by how professional the team was and how smoothly everything went from start to finish.",
    ],
  },
];

const TestimonialCarousel = () => {
  return (
    <section>
      <div className="outerdiv">
        <div className="testimonial-cnt">
          <span className="testimonial-head">
            Their <b>Journey</b> with Us <br /> Client's <b>Love </b>
          </span>
        </div>
        <div className="innerdiv">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`div${index + 1} eachdiv`}>
              <Carousel pause="false" controls={false} indicators={false}   >
                {testimonial.reviews.map((review, reviewIndex) => (
                  <Carousel.Item key={reviewIndex}>
                    <div className="userdetails">
                      <div className="imgbox">
                        <img
                          src={testimonial.image}
                          alt={`testimonial-${index}`}
                        />
                      </div>
                      <div className="detbox">
                        <p className="designation">{testimonial.designation}</p>
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
