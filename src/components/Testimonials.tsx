
import { Button } from "@/components/ui/button";

export const Testimonials = () => {
  return (
    <section className="py-24 bg-black text-white relative">
      {/* Customer testimonial section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-24">
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

      {/* Curved transition */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white rounded-t-[50px]"></div>
    </section>
  );
};
