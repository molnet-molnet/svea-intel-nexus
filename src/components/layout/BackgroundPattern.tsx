
import React from "react";

const BackgroundPattern = () => {
  return (
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden">
      <div className="h-full w-full relative">
        {Array.from({ length: 40 }).map((_, i) => (
          <div 
            key={i}
            className="absolute braille-pattern"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          />
        ))}
      </div>
      <style>
        {`
          .braille-pattern {
            width: 60px;
            height: 30px;
            opacity: 0.4;
            background-image: radial-gradient(circle, currentColor 2px, transparent 2px);
            background-size: 12px 12px;
            background-position: center;
            background-repeat: space;
          }
        `}
      </style>
    </div>
  );
};

export default BackgroundPattern;
