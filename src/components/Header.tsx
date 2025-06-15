
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-4 transition-all duration-300">
      <div className={`bg-black/90 backdrop-blur-lg rounded-full border border-gray-800 transition-all duration-300 ${
        isScrolled ? 'w-16 h-16' : ''
      }`}>
        {isScrolled ? (
          <div className="flex items-center justify-center h-full">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-4"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-between px-6 py-3">
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

            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        )}

        {isMenuOpen && (
          <div className={`absolute top-full left-0 right-0 mt-2 bg-black/90 backdrop-blur-lg rounded-2xl border border-gray-800 ${
            isScrolled ? 'w-80' : ''
          }`}>
            <div className="px-6 py-4 space-y-4">
              <a href="#products" className="block text-white/80 hover:text-white">
                Products
              </a>
              <a href="#solutions" className="block text-white/80 hover:text-white">
                Solutions
              </a>
              <a href="#customers" className="block text-white/80 hover:text-white">
                Customers
              </a>
              <a href="#resources" className="block text-white/80 hover:text-white">
                Resources
              </a>
              <a href="#company" className="block text-white/80 hover:text-white">
                Company
              </a>
              <Button className="w-full bg-white text-black hover:bg-gray-100 rounded-full mt-4">
                Book Demo
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
