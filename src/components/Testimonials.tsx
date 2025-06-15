import { Button } from "@/components/ui/button";

export const Testimonials = () => {
  return (
    <section className="h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/elon-musk.webp" 
          alt="Background"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient shadow overlay only at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Main testimonial quote */}
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-relaxed text-white drop-shadow-2xl">
              "Sanas helps us strengthen the relationship with our customers."
            </h2>
            
            {/* Attribution */}
            <div className="flex items-center justify-center space-x-3">
              <span className="text-white/90 font-medium text-lg drop-shadow-lg">Ishita, India</span>
              <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-red-400 rounded-full shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Curved bottom section with white background for next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden z-20">
        <svg 
          viewBox="0 0 1440 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path 
            d="M0,100 Q720,0 1440,100 L1440,100 L0,100 Z" 
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
};
