
import React from "react";

// Generates random braille-like strings
const BRAILLE_SNIPPETS = [
  "⠙⠕⠞⠎", "⠃⠗⠁⠊⠇⠇⠑", "⠠⠎⠞⠕⠗⠍", "⠋⠕⠓⠕⠎", "⠊⠝⠋⠕", "⠋⠊⠕⠨",
  "⠉⠕⠝⠝⠑⠉⠞", "⠇⠁⠞⠊⠝", "⠕⠎⠊⠝⠞", "⠧⠊⠝⠉⠥⠇⠁", "⠇⠊⠋⠑",
];
const GOLD_COLORS = ["#9A7D2E", "#dac377", "#b4993a"];

function randFrom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}
function rand(min=0, max=1) {
  return Math.random() * (max - min) + min;
}

const BrailleText = ({
  children,
  style,
  color = undefined,
  rotate = 0,
}: { children: React.ReactNode; style?: React.CSSProperties; color?: string; rotate?: number; }) => (
  <div
    className="absolute braille-pattern select-none pointer-events-none"
    style={{
      color,
      top: `${rand(3,97)}%`,
      left: `${rand(3,97)}%`,
      fontSize: `${rand(1.2, 2.0)}rem`,
      fontWeight: 600,
      opacity: 0.18,
      letterSpacing: "0.14em",
      textShadow: "0 0 5px #fff3, 0 0 1.5px #fff7",
      ...style,
      transform: `rotate(${rotate}deg) ${style?.transform ?? ""}`,
      // Some slight blur variation
      filter: "blur(0.2px)"
    }}
  >
    {children}
  </div>
);

const BackgroundPattern = () => {
  // Generate 24 unique braille text items
  const elements = Array.from({ length: 24 }).map((_, i) => {
    const txt = randFrom(BRAILLE_SNIPPETS);
    const isGold = Math.random() < 0.17; // ~17% gold accent
    const color = isGold ? randFrom(GOLD_COLORS) : "#555";
    // Alternate orientations for more "life"
    const rotate = (i % 3 === 0)
      ? 90 + rand(-15, 15)
      : (i % 5 === 0)
        ? 180 + rand(-10, 10)
        : rand(-12, 12);
    return (
      <BrailleText key={i} color={color} rotate={rotate}>
        {txt}
      </BrailleText>
    );
  });

  // Add a few large faded dots as sub-background
  const dotOverlays = Array.from({ length: 6 }).map((_, i) => (
    <div
      key={`dot-${i}`}
      style={{
        position: "absolute",
        top: `${rand(10,90)}%`,
        left: `${rand(10,90)}%`,
        width: `${rand(60,120)}px`,
        height: `${rand(24,43)}px`,
        opacity: rand(0.07, 0.12),
        backgroundColor: randFrom(GOLD_COLORS),
        borderRadius: "43%",
        filter: "blur(12px)"
      }}
    />
  ));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
      <div className="h-full w-full relative">
        {dotOverlays}
        {elements}
      </div>
      <style>
        {`
          .braille-pattern {
            font-family: 'Manrope', 'Quicksand', monospace, sans-serif;
            user-select: none;
            transition: opacity 1.2s;
            will-change: transform, opacity;
          }
        `}
      </style>
    </div>
  );
};

export default BackgroundPattern;
