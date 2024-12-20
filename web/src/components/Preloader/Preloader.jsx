import React from "react";
import "./Preloader.css";
import Logo from "../../Assets/logo2.png";

const Preloader = ({ loading, children }) => {
  return (
    <>
      {loading ? (
        <div id="preloader">
          <div className="taeled-preloader">
            <img src={Logo} alt="Logo" />
          </div>
        </div>
      ) : (
        <div className="content loaded">{children}</div>
      )}
    </>
  );
};

export default Preloader;
