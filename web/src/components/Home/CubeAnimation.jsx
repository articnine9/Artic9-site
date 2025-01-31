import React from 'react';
import './CubeAnimation.css'; 

const CubeAnimation = () => {
  return (
    <div className="container">
      {Array(3).fill().map((_, idx) => (
        <div className="cube" key={idx}>
          {Array(3).fill().map((_, subIdx) => (
            <div style={{ '--x': subIdx - 1, '--y': 0 }} key={subIdx}>
              <span style={{ '--i': 3 }}></span>
              <span style={{ '--i': 2 }}></span>
              <span style={{ '--i': 1 }}></span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CubeAnimation;
