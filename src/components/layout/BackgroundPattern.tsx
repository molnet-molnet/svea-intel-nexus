
import React from "react";

const BackgroundPattern = () => {
  return (
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
      <div className="h-full w-full grid-pattern"></div>
      <div className="h-full w-full absolute top-0 left-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i}
            className="data-point absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BackgroundPattern;
