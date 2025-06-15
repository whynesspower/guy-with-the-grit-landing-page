import React, { useRef, useEffect, useState } from "react";
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

const HIGHLIGHT_DURATION = 2000; // ms

const VerticalRotatingList: React.FC = () => {
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedIndex((prev) => (prev + 1) % WORDS.length);
    }, HIGHLIGHT_DURATION);
    return () => clearInterval(interval);
  }, []);

  // For infinite "rotation" effect
  // Repeat words in the DOM so the marching animation is seamless
  const repeatedWords = [...WORDS, ...WORDS];

  return (
    <div 
      className="relative flex flex-col items-center justify-center h-64 w-full overflow-hidden"
    >
      {/* Carousel container */}
      <div
        className="absolute left-1/2 top-1/2 flex flex-row items-center justify-center -translate-x-1/2 -translate-y-1/2"
        style={{
          // Animate X to scroll carousel to the left, step per tick:
          transform: `translate(-50%, -50%) translateX(-${
            highlightedIndex * 96
          }px)`,
          transition: "transform 0.8s cubic-bezier(0.39, 0.58, 0.57, 1)",
        }}
        ref={carouselRef}
      >
        {repeatedWords.map((word, idx) => {
          // Vertical text: use writing-mode
          // Highlighted: white and larger
          // Others: faded white
          const isHighlighted = idx % WORDS.length === highlightedIndex;
          return (
            <div
              key={idx}
              className={`px-7 transition-all duration-500 flex flex-col items-center`}
              style={{height: "160px", justifyContent: "center"}}
            >
              <span
                className={`
                  font-bold
                  ${
                    isHighlighted
                      ? "text-white text-2xl drop-shadow-lg"
                      : "text-white/40 text-xl"
                  }
                  transition-all duration-500
                  rotate-[-90deg]
                  block
                  select-none
                `}
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "mixed",
                  letterSpacing: "2px",
                  textShadow: isHighlighted? "0 2px 24px #fff, 0 0px 6px #fff6" : "none",
                }}
              >
                {word}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-12 relative">
      <div className="container mx-auto flex flex-col items-center">
        <div className="mb-12 w-full flex items-center justify-center relative">
          {/* Rotating vertical list */}
          <VerticalRotatingList />

          {/* Center arrow icon */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
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
