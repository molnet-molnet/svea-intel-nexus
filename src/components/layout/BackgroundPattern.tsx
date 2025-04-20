
import React from "react";

// Controls: number of lines, chars per line, dot probability
const LINES = 12;
const CHARS_PER_LINE = 26;
const DOT_CHANCE = 0.17; // sparseness: lower is sparser

const GOLD_COLORS = ["#9A7D2E", "#dac377", "#b4993a"];

function randomDotLine(charsPerLine: number, blindStart: number, blindEnd: number) {
  // Generate a "dots" line: dots, " ", with blank zone at end
  const arr = Array(charsPerLine).fill(" ");
  for (let i = 0; i < charsPerLine; i++) {
    // Right-most [blindEnd] is always redacted; left is drawn as normal
    if (i > blindStart && i < charsPerLine - blindEnd) {
      if (Math.random() < DOT_CHANCE) arr[i] = "⠄";
    }
  }
  return arr.join("");
}

const BackgroundPattern = () => {
  // Right margin blind spot: e.g. 7 spaces at right, 3 at left.
  const blindStart = 2; // blank at left (to not collide with main content)
  const blindEnd = 7; // bigger blind spot on the right for menu column

  // Precompute lines to ensure deterministic render
  const lines = React.useMemo(
    () =>
      Array.from({ length: LINES }).map((_, i) =>
        randomDotLine(CHARS_PER_LINE, blindStart, blindEnd)
      ),
    []
  );

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden
      style={{
        background: "linear-gradient(to bottom, #fcfcf8 93%, #f4f4e6 100%)",
        zIndex: 0,
      }}
    >
      {/* Braille dot lines (straight, left-to-right, sparse), little/no dots on far right */}
      <div className="absolute inset-0 w-full h-full flex flex-col justify-center" style={{zIndex: 1}}>
        {lines.map((line, i) => (
          <div
            key={i}
            className="w-full font-manrope select-none"
            style={{
              position: "absolute",
              left: "6%",
              top: `${10 + i * 7.1}%`,
              fontSize: i % 2 === 0 ? "1.19rem" : "1.05rem",
              color: i % 3 === 0 ? GOLD_COLORS[i % GOLD_COLORS.length] : "#b1aa99",
              opacity: i % 2 === 0 ? 0.19 : 0.17,
              fontWeight: 700,
              letterSpacing: "0.18em",
              transform: "rotate(0deg)", // straight
              filter: "blur(0.2px)"
            }}
          >
            {line}
          </div>
        ))}
      </div>
      {/* Large subtle gold ellipse for depth, shifted left */}
      <div style={{
        position: "absolute",
        left: "calc(27% - 164px)",
        top: "38%",
        width: 300, height: 100,
        borderRadius: "44%",
        opacity: 0.15, background: GOLD_COLORS[1],
        filter: "blur(26px)", zIndex: 0,
      }} />
    </div>
  );
};

export default BackgroundPattern;

