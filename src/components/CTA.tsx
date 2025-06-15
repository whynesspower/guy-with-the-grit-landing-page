
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section className="h-screen bg-white relative overflow-hidden flex items-center justify-center">
      {/* Clean curved top section */}
      <div className="absolute top-0 left-0 right-0 h-32 overflow-hidden">
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0 C480,100 960,100 1440,0 L1440,0 L0,0 Z" 
            fill="#ffffff"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl lg:text-6xl font-bold text-black mb-8 leading-tight">
            Ready to experience the magic?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of companies already using Sanas to transform their communication.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg font-semibold rounded-full shadow-lg flex items-center space-x-3"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              variant="outline"
              size="lg" 
              className="border-black text-black hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-full"
            >
              Try for Free
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
