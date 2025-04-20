
import React from "react";
import { cn } from "@/lib/utils";

// Interval for glitch to start (in ms) and glitch duration (in ms)
const MIN_GLITCH_INTERVAL = 7800;
const MAX_GLITCH_INTERVAL = 13300;
const GLITCH_DURATION = 140;

const GlitchLatin = ({ className }: { className?: string }) => {
  const [showEnglish, setShowEnglish] = React.useState(false);

  React.useEffect(() => {
    let outerTimeout: NodeJS.Timeout, flickerTimeout: NodeJS.Timeout;

    function glitchCycle() {
      // Next random showing
      const interval =
        Math.floor(Math.random() * (MAX_GLITCH_INTERVAL - MIN_GLITCH_INTERVAL)) +
        MIN_GLITCH_INTERVAL;
      outerTimeout = setTimeout(() => {
        // Quick flicker effect
        setShowEnglish(true);
        // Flicker very rapidly (simulate glitch)
        let flicks = 0;
        function doFlicker() {
          setShowEnglish((v) => !v);
          flicks++;
          if (flicks < 8) { // 8 times ~fast
            flickerTimeout = setTimeout(doFlicker, GLITCH_DURATION);
          } else {
            setShowEnglish(false);
            glitchCycle();
          }
        }
        doFlicker();
      }, interval);
    }

    glitchCycle();
    return () => {
      clearTimeout(outerTimeout);
      clearTimeout(flickerTimeout);
    };
  }, []);

  return (
    <p className={cn("text-[11px] font-manrope relative text-blue-900 mt-10 text-center select-none", className)}>
      <span
        className={cn(
          "transition-opacity duration-80 glitch-text block",
          showEnglish ? "opacity-0" : "opacity-100"
        )}
        style={{
          letterSpacing: "0.05em",
          fontStyle: "normal",
          fontWeight: 500,
        }}
      >
        Omnia Vincula Sunt
      </span>
      <span
        className={cn(
          "absolute left-0 top-0 w-full transition-opacity duration-70 glitch-text-english text-blue-900 text-[11px]",
          showEnglish ? "opacity-100 glitch-anim" : "opacity-0"
        )}
        style={{
          letterSpacing: "0.04em",
          filter: "skewX(-11deg)",
          fontStyle: "normal",
        }}
      >
        All things are connected
      </span>
    </p>
  );
};

export default GlitchLatin;
