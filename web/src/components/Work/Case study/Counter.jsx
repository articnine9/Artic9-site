import React, { useEffect, useState, useRef } from "react";
import { IoGameControllerOutline } from "react-icons/io5";
import { IoMdCalendar } from "react-icons/io";
import { BsPinMap } from "react-icons/bs";
import { BiCoffeeTogo } from "react-icons/bi";
import "./CaseStudy.css";

const CounterBox = ({ icon: Icon, count, label, isVisible }) => {
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 5000;
    const increment = count / (duration / 5);
    let startTime = null;

    const animateCounter = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const value = Math.min(Math.ceil(progress * increment), count);

      setDisplayCount(value);

      if (progress < duration) {
        requestAnimationFrame(animateCounter);
      } else {
        setDisplayCount(count);
      }
    };

    requestAnimationFrame(animateCounter);
  }, [count, isVisible]);

  return (
    <div className="counter-box">
      <Icon size={40} />
      <span className="counter">{displayCount}%</span>
      <p>{label}</p>
    </div>
  );
};

const Counter = () => {
  const [isInView, setIsInView] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  return (
    <div className="cont" ref={counterRef}>
      <h3>See our impressions</h3>
      <div className="counter-row">
        <CounterBox
          icon={IoGameControllerOutline}
          count={65}
          label="Raised In 2020"
          isVisible={isInView}
        />
        <CounterBox
          icon={IoMdCalendar}
          count={29}
          label="Time In Gaming"
          isVisible={isInView}
        />
        <CounterBox
          icon={BsPinMap}
          count={55}
          label="Country Coverage"
          isVisible={isInView}
        />
        <CounterBox
          icon={BiCoffeeTogo}
          count={25}
          label="Drink Coffee"
          isVisible={isInView}
        />
      </div>
    </div>
  );
};

export default Counter;
