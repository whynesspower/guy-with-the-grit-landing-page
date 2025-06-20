
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative h-screen bg-gray-100 overflow-hidden flex items-center justify-center">
      {/* Animated concentric semi-circles with gradient shadows - centered */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        {/* Largest semi-circle */}
        <div 
          className="absolute w-[72rem] h-[36rem] bg-white rounded-full shadow-2xl animate-pulse"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-300/50 to-transparent rounded-full blur-2xl"></div>
        </div>
        
        {/* Medium semi-circle */}
        <div 
          className="absolute w-[60rem] h-[30rem] bg-white rounded-full shadow-2xl animate-pulse"
          style={{ animationDelay: '0.5s' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-300/50 to-transparent rounded-full blur-2xl"></div>
        </div>
        
        {/* Smallest semi-circle */}
        <div 
          className="absolute w-[48rem] h-[24rem] bg-white rounded-full shadow-xl animate-pulse"
          style={{ animationDelay: '1s' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-200/40 to-blue-200/40 rounded-full blur-xl"></div>
        </div>
      </div>
      
      {/* Content overlaid on top of circles */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top notification banner */}
          <div className="flex justify-center mb-12">
            <div className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 flex items-center space-x-3 shadow-lg">
              <Globe className="w-5 h-5 text-gray-700" />
              <span className="text-gray-800 font-medium">Book Demo</span>
            </div>
          </div>

          {/* Main content centered over circles */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl lg:text-7xl font-bold text-black leading-tight mb-8">
              Close More Deals
            </h1>
            <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
              Transform your sales performance with SalesKat's real-time AI assistance. 
              Get intelligent insights, conversation guidance, and automated follow-ups during every sales call.
            </p>
            
            {/* Play Demo button */}
            <div className="flex justify-center">
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-lg flex items-center space-x-3"
              >
                <img src="/lovable-uploads/f84854c4-9116-48bc-8733-908684e2cac2.png" alt="Demo" className="w-8 h-8 rounded-full object-cover" />
                <span>Watch Demo</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
