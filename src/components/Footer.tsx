
import React, { useEffect, useRef, useState } from "react";

const WORDS = [
  "Empowerment",
  "Magic",
  "Understanding",
  "Language",
  "Clarity",
  "Accuracy",
  "Opportunity",
];

// Helper for a curved SVG path as a clipping mask
function FooterCurve({ children }: { children: React.ReactNode }) {
  return (
    <div className="footer-curve relative overflow-hidden bg-black">
      {/* The SVG creates the top curve */}
      <svg
        className="absolute top-0 left-0 w-full h-[22vw] min-h-[150px] max-h-[320px] -translate-y-1 pointer-events-none z-10"
        viewBox="0 0 1920 320"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0,320 C600,0 1320,0 1920,320 L1920,0 L0,0 Z"
          fill="black"
        />
      </svg>
      <div className="relative pt-[9vw] pb-8 flex flex-col items-center z-20">
        {children}
      </div>
    </div>
  );
}

// Each vertical word component
function VerticalText({
  text,
  highlighted,
}: {
  text: string;
  highlighted: boolean;
}) {
  return (
    <span
      className={`font-sans select-none transition-colors duration-500 font-medium block`}
      style={{
        color: highlighted ? "#fff" : "#666",
        fontSize: highlighted ? 32 : 28,
        fontWeight: highlighted ? 600 : 500,
        writingMode: "vertical-lr",
        textOrientation: "mixed",
        letterSpacing: "2px",
        textShadow: highlighted
          ? "0 2px 16px #fff8"
          : "none",
      }}
    >
      {text}
    </span>
  );
}

const VISIBLE_COUNT = 19; // How many verticals to show at once
const ITEM_GAP = 32; // px between each word, adjust for density

const FooterCarousel: React.FC = () => {
  const [highlightedIdx, setHighlightedIdx] = useState(0);

  // To fill curve: repeat words much more (at least 2x visible count)
  const repeatedWords = Array(4)
    .fill(WORDS)
    .flat();

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedIdx((prev) => (prev + 1) % WORDS.length);
    }, 1900);
    return () => clearInterval(interval);
  }, []);

  // Animate leftwards movement using translateX
  const [movePx, setMovePx] = useState(0);
  useEffect(() => {
    setMovePx(highlightedIdx * (28 + ITEM_GAP));
  }, [highlightedIdx]);

  return (
    <div
      className="w-full flex items-center justify-center relative overflow-x-hidden"
      style={{ height: 220 }}
    >
      <div
        className="flex items-end transition-transform duration-700 ease-[cubic-bezier(0.66,0,0.33,1)]"
        style={{
          gap: ITEM_GAP,
          transform: `translateX(calc(50vw - 50% - ${movePx}px))`,
          // This centers the highlighted word in viewport.
        }}
      >
        {repeatedWords.map((word, idx) => {
          // Get which word should be highlighted, looping every WORDS.length
          const highlight = idx % WORDS.length === highlightedIdx;
          return (
            <div key={idx} className="flex flex-col items-center">
              <VerticalText text={word} highlighted={highlight} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="relative bg-black text-white">
      <FooterCurve>
        {/* Center "logo": use a placeholder icon, replace with your SVG if needed */}
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 rounded-xl bg-[#111] flex items-center justify-center shadow-2xl">
            {/* Example fallback, swap with real logo */}
            <span className="block w-7 h-7 bg-white rounded-[6px] shadow-xl" />
          </div>
        </div>
        {/* Footer text and links */}
        <div className="flex flex-col items-center gap-2 mb-2">
          <div className="text-sm text-zinc-300 font-sans mb-1">
            © 2025 Sanas. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-4 justify-center text-xs text-zinc-400">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">DPA</a>
            <a href="#" className="hover:underline">Terms of Use</a>
            <a href="#" className="hover:underline">Cookie Policy</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
        </div>
      </FooterCurve>
      {/* Curve border rides above carousel */}
      <div style={{ marginTop: "-60px" }}>
        <FooterCarousel />
      </div>
    </footer>
  );
};
