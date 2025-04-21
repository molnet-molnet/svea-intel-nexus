import React from "react";

const DOTS = 60;
const GOLD_COLORS = ["#9A7D2E", "#dac377", "#b4993a"];

function generateRandomDotData() {
  const x = Math.random() * 80 + 6;
  const y = Math.random() * 89 + 5;
  const color = Math.random() > 0.8
    ? GOLD_COLORS[Math.floor(Math.random() * GOLD_COLORS.length)]
    : "#b1aa99";
  const size = Math.random() > 0.91 ? "1.25rem" : "0.88rem";
  const opacity = Math.random() > 0.85 ? 0.29 : (Math.random() * 0.20 + 0.10);
  const animDuration = Math.random() * 2.1 + 2;
  const animDelay = Math.random() * 2;
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
    <div style={{
      position: "absolute",
      left: "calc(16% - 117px)",
      top: "42%",
      width: 260, height: 90,
      borderRadius: "44%",
      opacity: 0.11, background: GOLD_COLORS[1],
      filter: "blur(33px)", zIndex: 0,
    }} />
    <style>{`
      @keyframes fadeBrailleDot {
        from { opacity: ${Math.random() * 0.12 + 0.14}; }
        to   { opacity: ${Math.random() * 0.22 + 0.02}; }
      }
    `}</style>
  </div>
);

export default BackgroundPattern;
