
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
    <section className="h-screen bg-gradient-to-br from-green-100 via-white to-blue-100 relative overflow-hidden flex flex-col justify-center">
      {/* Curved top section */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-white rounded-b-[50px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-8">
          <p className="text-gray-600 text-sm uppercase tracking-wider mb-4">What we do</p>
        </div>

        <div className="text-center mb-16">
          <h2 id="animated-text" className="text-4xl lg:text-5xl font-bold leading-tight mb-8 max-w-2xl mx-auto">
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

        {/* Two main feature cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Accent Translation Card */}
          <Card className="bg-black text-white rounded-3xl p-8 relative overflow-hidden border-0 shadow-2xl h-96">
            <CardContent className="p-0 h-full flex flex-col justify-between">
              <div className="mb-6">
                <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mb-6">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Accent Translation</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Sanas modulates accents in real-time while preserving unique voices and emotions to ensure 
                  every interaction is natural and authentic.
                </p>
              </div>
              
              {/* Animated circular visualization */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-32 h-32 border-2 border-green-400 rounded-full flex items-center justify-center animate-pulse">
                    <div className="w-24 h-24 border border-green-400/50 rounded-full flex items-center justify-center animate-pulse" style={{ animationDelay: '0.5s' }}>
                      <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center">
                        <ArrowRight className="w-6 h-6 text-white animate-pulse" style={{ animationDelay: '1s' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Noise Cancellation Card */}
          <Card className="bg-black text-white rounded-3xl p-8 relative overflow-hidden border-0 shadow-2xl h-96">
            <CardContent className="p-0 h-full flex flex-col justify-between">
              <div className="mb-6">
                <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mb-6">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Noise Cancellation</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Sanas Noise Cancellation with omni-directional capabilities and speech enhancement eliminates 
                  noises and ambient voices from every angle, in any environment.
                </p>
              </div>
              
              {/* Animated audio visualization */}
              <div className="flex justify-center items-center">
                <div className="flex items-center space-x-1">
                  {[...Array(20)].map((_, i) => (
                    <div 
                      key={i} 
                      className="w-1 bg-green-400 rounded-full animate-pulse"
                      style={{ 
                        height: `${Math.random() * 40 + 10}px`,
                        opacity: Math.random() * 0.8 + 0.2,
                        animationDelay: `${i * 0.1}s`
                      }}
                    ></div>
                  ))}
                  <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mx-4">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                  {[...Array(20)].map((_, i) => (
                    <div 
                      key={i} 
                      className="w-1 bg-green-400/30 rounded-full animate-pulse"
                      style={{ 
                        height: `${10}px`,
                        animationDelay: `${i * 0.1 + 2}s`
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Curved bottom section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-black rounded-t-[50px]"></div>
    </section>
  );
};
