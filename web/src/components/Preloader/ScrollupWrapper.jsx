import React from "react";
import Scrollup from "./Scrollup";

const ScrollupWrapper = ({ children }) => {
  return (
    <>
      {children}
      <Scrollup />
    </>
  );
};

export default ScrollupWrapper;
