import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Preloader from "../Preloader/Preloader";

const PreloaderWrapper = ({ children }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); 

    return () => clearTimeout(timer);
  }, [location]); 
  return (
    <Preloader loading={loading}>
      {children}
    </Preloader>
  );
};

export default PreloaderWrapper;
