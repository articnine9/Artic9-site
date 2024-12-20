import React, { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa6";
import './Scrollup.css';

const Scrollup = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 300);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    isVisible && (
      <div className="up">
        <button
          className="scrollup text-center"
          onClick={handleScrollToTop}
          aria-label="Scroll to top"
        >
          <FaAngleUp className="scrollup-icon" />
        </button>
      </div>
    )
  );
};

export default Scrollup;
