
import React from "react";

// Number of dots, don't use lines. All are positioned and animated individually.
const DOTS = 60; // Adjust for sparseness/density
const GOLD_COLORS = ["#9A7D2E", "#dac377", "#b4993a"];

function generateRandomDotData() {
  // Dot appears between 6% (left gutter) and 86% (avoid right 14%)
  // Top is from 5% to 94%
  // All positions are percentages for responsiveness.
  const x = Math.random() * 80 + 6; // 6% - 86%
  const y = Math.random() * 89 + 5; // 5% - 94%
  const color = Math.random() > 0.8
    ? GOLD_COLORS[Math.floor(Math.random() * GOLD_COLORS.length)]
    : "#b1aa99";
  const size = Math.random() > 0.91 ? "1.25rem" : "0.88rem";
  const opacity = Math.random() > 0.85 ? 0.23 : (Math.random() * 0.16 + 0.08);
  const animDuration = Math.random() * 2.1 + 2; // 2s to 4s
  const animDelay = Math.random() * 2; // random start point
  return { x, y, color, size, opacity, animDuration, animDelay };
}

const dots = Array.from({ length: DOTS }).map(generateRandomDotData);

const BackgroundPattern = () => (
  <div
    className="absolute inset-0 pointer-events-none overflow-hidden"
    aria-hidden
    style={{
      background: "linear-gradient(to bottom, #fcfcf8 93%, #f4f4e6 100%)",
      zIndex: 0,
    }}
  >
    {/* Static & animated dots */}
    <div className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
      {dots.map((dot, i) => (
        <span
          key={i}
          className="braille-dot"
          style={{
            position: "absolute",
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            color: dot.color,
            fontSize: dot.size,
            opacity: dot.opacity,
            fontWeight: 700,
            filter: "blur(0.3px)",
            animation: `fadeBrailleDot ${dot.animDuration}s ${dot.animDelay}s infinite alternate`,
            zIndex: 1,
            pointerEvents: "none",
            userSelect: "none",
          }}
        >⠄</span>
      ))}
    </div>
    {/* Subtle gold ellipse for depth, left side */}
    <div style={{
      position: "absolute",
      left: "calc(16% - 117px)",
      top: "42%",
      width: 260, height: 90,
      borderRadius: "44%",
      opacity: 0.11, background: GOLD_COLORS[1],
      filter: "blur(33px)", zIndex: 0,
    }} />
    {/* Animation keyframes */}
    <style>{`
      @keyframes fadeBrailleDot {
        from { opacity: ${Math.random() * 0.12 + 0.14}; }
        to   { opacity: ${Math.random() * 0.22 + 0.02}; }
      }
    `}</style>
  </div>
);

export default BackgroundPattern;
