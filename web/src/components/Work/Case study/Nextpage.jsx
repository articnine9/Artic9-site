import React from "react";
import "./CaseStudy.css";

import { RiArrowRightLine } from "react-icons/ri";
import hnbanner from "../../../Assets/case-study/harris_nadar/harris2.png";

const Nextpage = () => {
  return (
    <div className="next-page-container">
      <div className="next-page-sec">
        <div className="nxt-gap"></div>

        <div className="next-page-head">
          <p>Next case-study</p>
        </div>
        <div className="next-page-cnt">
          <p>
            Harris Nadar <RiArrowRightLine className="svg" />
          </p>
        </div>
        <div className="nxt-gap"></div>
      </div>
      <div className="next-page-sec">
        <img src={hnbanner} alt="Harris Nadar Banner" />
      </div>
    </div>
  );
};

export default Nextpage;
