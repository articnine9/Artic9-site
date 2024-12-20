import React from "react";
import { RiArrowRightLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";  
import "./CaseStudy.css";

const Nextpage = ({ title, imageUrl, altText, route }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (route) {
      navigate(route);  
    }
  };

  return (
    <div className="next-page-container" onClick={handleClick}>
      <div className="next-page-sec">
        <div className="next-page-head">
          <p>Next case-study</p>
        </div>
        <div className="next-page-cnt">
          <p>
            {title} <RiArrowRightLine className="svg" />
          </p>
        </div>
      </div>
      <div className="next-page-sec">
        <img src={imageUrl} alt={altText} />
      </div>
    </div>
  );
};

export default Nextpage;
