
import React from "react";

const BRAILLE_ROWS = [
  "⠙⠕⠞⠎   ⠋⠕⠓⠕⠎        ⠠⠎⠞⠕⠗⠍ ;;⠉⠕⠝⠝⠑⠉⠞        ",
  "     ⠇⠁⠞⠊⠝  ⠕⠎⠊⠝⠞              ⠧⠊⠝⠉⠥⠇⠁   ",
  "⠇⠊⠋⠑        ;            ⠃⠗⠁⠊⠇⠇⠑ ;;;⠋⠊⠕⠨ ;;;::.",
  "     ⠝⠕⠎⠞⠁⠇᠎⠤       ;;   ⠠⠉⠕⠍⠏⠇⠢⠑⠭ ",
  ";;  ;;  ;;        ;;     ;;      ",
  "                    ;;     ;;       ",
  "⠋⠊⠕⠚⠕⠤⠨         ;;;⠉⠕⠎⠁⠧⠑     ",
  "  ⠗⠎⠊⠝⠎          ;;::    ⠅⠇⠁⠗ ",
  ";;;::.       ;;     ;;;;;    ;;    ",
];

const GOLD_COLORS = ["#9A7D2E", "#dac377", "#b4993a"];
function randFrom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}
function lerp(a: number, b: number, t: number) {
  return a + t * (b - a);
}

const BackgroundPattern = () => {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden
      style={{
        background: "linear-gradient(to bottom, #fcfcf8 90%, #f4f4e6 100%)",
        zIndex: 0,
      }}
    >
      {/* Braille text lines, spaced vertically, with variable left offset */}
      <div className="absolute inset-0 w-full h-full flex flex-col justify-center" style={{zIndex: 1}}>
        {BRAILLE_ROWS.map((line, i) => (
          <div
            key={i}
            className="w-full text-left font-manrope"
            style={{
              position: "absolute",
              left: lerp(5, 20, Math.random()) + "%",
              top: `${10 + i * 10.5}%`,
              fontSize: i % 2 === 0 ? "1.24rem" : "1.06rem",
              color: i % 3 === 1 ? randFrom(GOLD_COLORS) : "#4e4e58",
              opacity: i % 2 === 0 ? 0.21 : 0.17,
              fontWeight: 600,
              letterSpacing: "0.23em",
              transform: "rotate(-3deg)",
              filter: "blur(0.2px)"
            }}
          >
            {line}
          </div>
        ))}
      </div>
      {/* Large subtle gold ellipse for depth */}
      <div style={{
        position: "absolute", left: "calc(45% - 170px)", top: "37%",
        width: 355, height: 120,
        borderRadius: "44%",
        opacity: 0.14, background: randFrom(GOLD_COLORS),
        filter: "blur(24px)", zIndex: 0,
      }} />
    </div>
  );
};

export default BackgroundPattern;
