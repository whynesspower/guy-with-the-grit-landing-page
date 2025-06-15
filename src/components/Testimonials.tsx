
import { Button } from "@/components/ui/button";

export const Testimonials = () => {
  return (
    <section className="h-screen bg-black text-white relative flex items-center justify-center">
      {/* Smooth curved top section */}
      <div className="absolute top-0 left-0 right-0 h-24 overflow-hidden">
        <svg 
          viewBox="0 0 1440 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0 C360,100 1080,100 1440,0 L1440,0 L0,0 Z" 
            fill="#000000"
          />
        </svg>
      </div>

      {/* Customer testimonial section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-relaxed">
            "Sanas helps us strengthen the relationship with our customers."
          </h2>
          <div className="flex items-center justify-center space-x-3">
            <span className="text-white/80">Ishita, India</span>
            <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Smooth curved bottom section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
        <svg 
          viewBox="0 0 1440 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path 
            d="M0,100 C360,0 1080,0 1440,100 L1440,100 L0,100 Z" 
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
};
