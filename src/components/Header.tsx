
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300">
      <div className={`bg-black/90 backdrop-blur-lg rounded-full border border-gray-800 transition-all duration-300 ${
        isScrolled ? 'px-4 py-3' : 'px-6 py-3'
      }`}>
        {isScrolled ? (
          <div 
            className="relative"
            onMouseEnter={() => setIsMenuOpen(true)}
            onMouseLeave={() => setIsMenuOpen(false)}
          >
            <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-6 py-2 font-medium">
              Book Demo
            </Button>
            
            {isMenuOpen && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-black/90 backdrop-blur-lg rounded-2xl border border-gray-800 min-w-64 z-50">
                <div className="px-6 py-4 space-y-4">
                  <a href="#products" className="block text-white/80 hover:text-white transition-colors">
                    Products
                  </a>
                  <a href="#solutions" className="block text-white/80 hover:text-white transition-colors">
                    Solutions
                  </a>
                  <a href="#customers" className="block text-white/80 hover:text-white transition-colors">
                    Customers
                  </a>
                  <a href="#resources" className="block text-white/80 hover:text-white transition-colors">
                    Resources
                  </a>
                  <a href="#company" className="block text-white/80 hover:text-white transition-colors">
                    Company
                  </a>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div 
            className="relative"
            onMouseEnter={() => setIsMenuOpen(true)}
            onMouseLeave={() => setIsMenuOpen(false)}
          >
            <div className="flex items-center justify-between min-w-96">
              <div className="flex items-center">
                <div className="text-white text-xl font-bold flex items-center space-x-2">
                  <ArrowRight className="w-5 h-5" />
                  <span>sanas</span>
                </div>
              </div>
              
              <nav className="hidden md:flex items-center space-x-8">
                <a href="#products" className="text-white/80 hover:text-white transition-colors">
                  Products
                </a>
                <a href="#solutions" className="text-white/80 hover:text-white transition-colors">
                  Solutions
                </a>
                <a href="#customers" className="text-white/80 hover:text-white transition-colors">
                  Customers
                </a>
                <a href="#resources" className="text-white/80 hover:text-white transition-colors">
                  Resources
                </a>
                <a href="#company" className="text-white/80 hover:text-white transition-colors">
                  Company
                </a>
              </nav>

              <div className="hidden md:flex items-center">
                <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-6 py-2 font-medium">
                  Book Demo
                </Button>
              </div>
            </div>
            
            {isMenuOpen && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-black/90 backdrop-blur-lg rounded-2xl border border-gray-800 min-w-80 z-50">
                <div className="px-6 py-4 space-y-4">
                  <a href="#products" className="block text-white/80 hover:text-white transition-colors">
                    Products
                  </a>
                  <a href="#solutions" className="block text-white/80 hover:text-white transition-colors">
                    Solutions
                  </a>
                  <a href="#customers" className="block text-white/80 hover:text-white transition-colors">
                    Customers
                  </a>
                  <a href="#resources" className="block text-white/80 hover:text-white transition-colors">
                    Resources
                  </a>
                  <a href="#company" className="block text-white/80 hover:text-white transition-colors">
                    Company
                  </a>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};
