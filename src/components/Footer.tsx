
import { ArrowRight } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-8">
          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
            <ArrowRight className="w-6 h-6 text-black" />
          </div>
        </div>
        
        <div className="text-center text-gray-400">
          <p>&copy; 2024 Sanas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
