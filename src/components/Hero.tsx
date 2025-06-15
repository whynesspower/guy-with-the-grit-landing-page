
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative h-screen bg-gray-100 overflow-hidden flex items-center">
      {/* Animated concentric semi-circles with gradient shadows */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div className="relative">
          {/* Largest semi-circle - full screen width */}
          <div 
            className="absolute bottom-0 w-screen h-[50vh] bg-white rounded-t-full shadow-2xl animate-pulse"
            style={{ left: '50%', transform: 'translateX(-50%)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-300/50 to-transparent rounded-t-full blur-2xl"></div>
          </div>
          
          {/* Medium semi-circle */}
          <div 
            className="absolute bottom-0 w-[80vw] h-[40vh] bg-white rounded-t-full shadow-2xl animate-pulse"
            style={{ left: '50%', transform: 'translateX(-50%)', animationDelay: '0.5s' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-300/50 to-transparent rounded-t-full blur-2xl"></div>
          </div>
          
          {/* Smallest semi-circle */}
          <div 
            className="absolute bottom-0 w-[60vw] h-[30vh] bg-white rounded-t-full shadow-xl animate-pulse"
            style={{ left: '50%', transform: 'translateX(-50%)', animationDelay: '1s' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-200/40 to-blue-200/40 rounded-t-full blur-xl"></div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative w-full z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 flex items-center space-x-3 shadow-lg">
              <Globe className="w-5 h-5 text-gray-700" />
              <span className="text-gray-800 font-medium">NEW! Noise Cancellation with omni-directional capabilities</span>
              <ArrowRight className="w-4 h-4 text-gray-700" />
            </div>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl lg:text-7xl font-bold text-black leading-tight mb-8">
              Sounds like Magic
            </h1>
            <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
              Experience the world's first real-time speech understanding platform with Accent Translation and
              Noise Cancellation featuring omni-directional capabilities.
            </p>
            
            <div className="flex justify-center mb-16">
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-lg flex items-center space-x-3"
              >
                <img src="/lovable-uploads/f84854c4-9116-48bc-8733-908684e2cac2.png" alt="Demo" className="w-8 h-8 rounded-full object-cover" />
                <span>Play Demo</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
