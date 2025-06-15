
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export const Features = () => {
  const [visibleWords, setVisibleWords] = useState(0);
  const text = "Sanas delivers crystal clear communication with real-time speech-to-speech AI technology.";
  const words = text.split(' ');

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('animated-text');
      if (element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementTop = rect.top;
        const elementHeight = rect.height;
        
        // Calculate how much of the element is visible
        const visiblePercentage = Math.max(0, Math.min(1, (windowHeight - elementTop) / (windowHeight + elementHeight)));
        
        // Calculate how many words should be visible based on scroll
        const wordsToShow = Math.floor(visiblePercentage * words.length);
        setVisibleWords(wordsToShow);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [words.length]);

  return (
    <section className="min-h-screen bg-gray-200 relative overflow-hidden flex flex-col justify-center">
      
      {/* Curved top section */}
      <div className="absolute top-0 left-0 right-0 h-24 overflow-hidden">
        <svg 
          viewBox="0 0 1440 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path 
            d="M0,100 Q720,0 1440,100 L1440,0 L0,0 Z" 
            fill="#e5e7eb"
          />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative flex-1 flex flex-col justify-center py-40">
        <div className="text-center mb-16 mt-16">
          <p className="text-gray-600 text-sm uppercase tracking-wider mb-8">What we do</p>
        </div>

        <div className="text-center mb-24">
          <h2 id="animated-text" className="text-4xl lg:text-5xl font-bold leading-tight mb-12 max-w-4xl mx-auto px-4">
            {words.map((word, index) => (
              <span
                key={index}
                className={`transition-colors duration-300 ${
                  index < visibleWords ? 'text-black' : 'text-gray-400'
                }`}
              >
                {word}{' '}
              </span>
            ))}
          </h2>
        </div>

        {/* Grid layout matching the reference image */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Enhance Productivity */}
          <div className="bg-gray-800 rounded-3xl p-8 row-span-1">
            <h3 className="text-2xl font-bold mb-4 text-white">Enhance productivity</h3>
            <p className="text-gray-300 leading-relaxed">
              Improve customer satisfaction (CSAT) and average handling time (AHT) by delivering a 
              better overall experience.
            </p>
          </div>

          {/* Center image card */}
          <div className="bg-gray-800 rounded-3xl p-8 relative overflow-hidden lg:row-span-2">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=800&fit=crop" 
              alt="Professional woman using technology"
              className="w-full h-64 lg:h-full object-cover rounded-2xl"
            />
            <div className="absolute bottom-6 right-6 bg-white rounded-2xl p-4 shadow-lg">
              <div className="flex items-center space-x-2">
                <span className="text-green-500 text-2xl">▲</span>
                <div>
                  <p className="text-gray-600 text-sm">Adoption rate</p>
                  <p className="text-black text-3xl font-bold">97%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Boost Satisfaction */}
          <div className="bg-gray-800 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-white">Boost satisfaction</h3>
            <p className="text-gray-300 leading-relaxed">
              Elevate your employee experience (97% adoption rate across our current customer base).
            </p>
          </div>

          {/* Reduce Stress */}
          <div className="bg-gray-800 rounded-3xl p-8 lg:col-span-1 relative">
            <div className="mb-8">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" 
                alt="Customer service representative"
                className="w-20 h-20 rounded-full object-cover mb-4"
              />
              <div className="bg-white/10 rounded-xl p-4 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-green-400">▲ Improved</span>
                  <span className="text-2xl font-bold text-white">CSAT</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                  <div className="bg-green-400 h-2 rounded-full w-3/4"></div>
                </div>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <span className="text-green-400">▼ Reduced</span>
                  <span className="text-2xl font-bold text-white">AHT</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                  <div className="bg-green-400 h-2 rounded-full w-1/2"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Increase Confidence */}
          <div className="bg-gray-800 rounded-3xl p-8 relative">
            <h3 className="text-2xl font-bold mb-4 text-white">Increase confidence</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Empower people to be bold, authentic and speak up.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face" 
                alt="Team member"
                className="w-16 h-16 rounded-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face" 
                alt="Team member"
                className="w-16 h-16 rounded-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=80&h=80&fit=crop&crop=face" 
                alt="Team member"
                className="w-16 h-16 rounded-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=80&h=80&fit=crop&crop=face" 
                alt="Team member"
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
            
            <div className="bg-black rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white">Sanas on</span>
                <div className="w-12 h-6 bg-green-400 rounded-full relative">
                  <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-400">Fluidity</span>
                <span className="text-green-400">✓</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Simple curved bottom section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
        <svg 
          viewBox="0 0 1440 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path 
            d="M0,100 Q720,0 1440,100 L1440,100 L0,100 Z" 
            fill="#000000"
          />
        </svg>
      </div>
    </section>
  );
};
