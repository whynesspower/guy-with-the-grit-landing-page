
import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const WORDS = [
  "Empowerment",
  "Magic",
  "Understanding",
  "Language",
  "Clarity",
  "Accuracy",
  "Opportunity",
];

const highlightDuration = 2000; // ms
const ITEM_WIDTH = 96; // px, should match the width set in the style

// Custom vertical text component
function VerticalText({
  text,
  highlighted,
}: {
  text: string;
  highlighted: boolean;
}) {
  return (
    <span
      className={`
        font-bold
        transition-all duration-500
        block
        select-none
        ${highlighted ? "text-white text-2xl drop-shadow-lg" : "text-white/50 text-xl"}
      `}
      style={{
        writingMode: "vertical-lr",
        textOrientation: "mixed",
        letterSpacing: "2px",
        rotate: "-90deg",
        textShadow: highlighted
          ? "0 2px 24px #fff, 0 0px 6px #fff6"
          : "none",
      }}
    >
      {text}
    </span>
  );
}

const RotatingCarousel: React.FC = () => {
  const [highlightedIdx, setHighlightedIdx] = useState(0);
  const [animStart, setAnimStart] = useState(false);
  // To allow infinite horizontal scroll, repeat the words array at least twice
  const repeatedWords = [...WORDS, ...WORDS];

  useEffect(() => {
    setAnimStart(true); // trigger animation after first render

    const interval = setInterval(() => {
      setHighlightedIdx((prev) => (prev + 1) % WORDS.length);
    }, highlightDuration);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden" style={{ width: "100%", height: 160 }}>
      {/* Carousel */}
      <div
        className={`flex flex-row items-center absolute top-1/2 left-1/2`}
        style={{
          // Center the row vertically and horizontally
          transform: `translate(-50%, -50%) translateX(-${
            highlightedIdx * ITEM_WIDTH
          }px)`,
          transition: "transform 0.8s cubic-bezier(0.39, 0.58, 0.57, 1)",
        }}
      >
        {repeatedWords.map((word, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center"
            style={{ width: ITEM_WIDTH, height: 160 }}
          >
            <VerticalText
              text={word}
              highlighted={idx % WORDS.length === highlightedIdx}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-12 relative">
      <div className="container mx-auto flex flex-col items-center">
        <div className="mb-12 w-full flex items-center justify-center relative" style={{ height: 180 }}>
          {/* Rotating vertical list */}
          <RotatingCarousel />
          {/* Center arrow icon */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg">
              <ArrowRight className="w-7 h-7 text-black" />
            </div>
          </div>
        </div>
        {/* Footer text */}
        <div className="text-center text-gray-400">
          <p className="text-base">&copy; 2024 Sanas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
