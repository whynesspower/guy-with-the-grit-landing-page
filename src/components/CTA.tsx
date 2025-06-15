
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section className="h-screen bg-white relative overflow-hidden flex items-center justify-center">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl lg:text-6xl font-bold text-black mb-8 leading-tight">
            Ready to close more deals?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of sales teams already using SalesKat to transform their sales performance.
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
              Start Free Trial
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
