
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const prevScrollY = useRef(0);
  const heroSectionHeight = useRef(0);

  // Get hero section height on component mount
  useEffect(() => {
    const getHeroHeight = () => {
      const heroSection = document.querySelector('section') as HTMLElement;
      if (heroSection) {
        heroSectionHeight.current = heroSection.offsetHeight;
      }
    };
    
    getHeroHeight();
    window.addEventListener('resize', getHeroHeight);
    return () => window.removeEventListener('resize', getHeroHeight);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Check if we're past the hero section
      const isPastHero = currentScrollY > heroSectionHeight.current * 0.7;
      
      // Calculate scroll progress for animation smoothness
      // This gives us a value between 0 and 1 for the transition zone
      const transitionZoneStart = heroSectionHeight.current * 0.5;
      const transitionZoneEnd = heroSectionHeight.current * 0.9;
      const transitionZoneSize = transitionZoneEnd - transitionZoneStart;
      
      let progress = 0;
      if (currentScrollY > transitionZoneStart) {
        progress = Math.min((currentScrollY - transitionZoneStart) / transitionZoneSize, 1);
      }
      
      setScrollProgress(progress);
      setIsScrolled(isPastHero);
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-800 ease-out">
      <div 
        className={`bg-black/95 backdrop-blur-xl rounded-full border border-gray-700/50 shadow-xl transition-all duration-800 ease-out ${isScrolled ? 'px-6 py-3' : 'px-8 py-4'}`}
        style={{
          width: isScrolled ? '14rem' : '100%',
          maxWidth: isScrolled ? '14rem' : '85rem',
          transform: `scale(${1 - scrollProgress * 0.03})`,
          opacity: 1 - scrollProgress * 0.05
        }}
      >
        {isScrolled ? (
          <div 
            className="relative"
            onMouseEnter={() => setIsMenuOpen(true)}
            onMouseLeave={() => setIsMenuOpen(false)}
          >
            <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-3 font-medium text-sm transition-all duration-300">
              Book Demo
            </Button>
            
            {isMenuOpen && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 bg-black/95 backdrop-blur-xl rounded-3xl border border-gray-700/50 shadow-2xl min-w-72 z-50 animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="px-8 py-6 space-y-1">
                  <div className="pb-2 mb-4 border-b border-gray-800">
                    <div className="text-white font-semibold text-sm">Navigation</div>
                  </div>
                  <a href="#products" className="flex items-center justify-between py-3 px-4 text-white/80 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200 group">
                    <span>Products</span>
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  </a>
                  <a href="#solutions" className="flex items-center justify-between py-3 px-4 text-white/80 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200 group">
                    <span>Solutions</span>
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  </a>
                  <a href="#customers" className="flex items-center justify-between py-3 px-4 text-white/80 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200 group">
                    <span>Customers</span>
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  </a>
                  <a href="#resources" className="flex items-center justify-between py-3 px-4 text-white/80 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200 group">
                    <span>Resources</span>
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  </a>
                  <a href="#company" className="flex items-center justify-between py-3 px-4 text-white/80 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200 group">
                    <span>Company</span>
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
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
            <div className="flex items-center justify-between min-w-96"
              style={{
                opacity: 1 - scrollProgress * 1.2,
                transform: `translateY(${scrollProgress * 8}px)`
              }}
            >
              <div className="flex items-center">
                <div className="text-white text-xl font-bold flex items-center space-x-3">
                  <ArrowRight className="w-5 h-5" />
                  <span>SalesKat</span>
                </div>
              </div>
              
              <nav className="hidden md:flex items-center space-x-10"
                style={{
                  opacity: 1 - scrollProgress * 1.5,
                  transform: `translateY(${scrollProgress * 15}px)`
                }}
              >
                <a href="#products" className="text-white/80 hover:text-white transition-colors duration-200 font-medium">
                  Products
                </a>
                <a href="#solutions" className="text-white/80 hover:text-white transition-colors duration-200 font-medium">
                  Solutions
                </a>
                <a href="#customers" className="text-white/80 hover:text-white transition-colors duration-200 font-medium">
                  Customers
                </a>
                <a href="#resources" className="text-white/80 hover:text-white transition-colors duration-200 font-medium">
                  Resources
                </a>
                <a href="#company" className="text-white/80 hover:text-white transition-colors duration-200 font-medium">
                  Company
                </a>
              </nav>

              <div className="hidden md:flex items-center"
                style={{
                  opacity: 1 - scrollProgress * 0.3
                }}
              >
                <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-3 font-medium transition-all duration-300">
                  Book Demo
                </Button>
              </div>
            </div>
            
            {isMenuOpen && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-6 bg-black/95 backdrop-blur-xl rounded-3xl border border-gray-700/50 shadow-2xl min-w-96 z-50 animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="px-8 py-6">
                  <div className="pb-4 mb-6 border-b border-gray-800">
                    <div className="text-white font-semibold">Navigation Menu</div>
                    <div className="text-white/60 text-sm mt-1">Explore our platform</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <a href="#products" className="flex items-center justify-between p-4 text-white/80 hover:text-white hover:bg-white/5 rounded-2xl transition-all duration-200 group">
                      <div>
                        <div className="font-medium">Products</div>
                        <div className="text-xs text-white/50 mt-1">Our solutions</div>
                      </div>
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    </a>
                    <a href="#solutions" className="flex items-center justify-between p-4 text-white/80 hover:text-white hover:bg-white/5 rounded-2xl transition-all duration-200 group">
                      <div>
                        <div className="font-medium">Solutions</div>
                        <div className="text-xs text-white/50 mt-1">Use cases</div>
                      </div>
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    </a>
                    <a href="#customers" className="flex items-center justify-between p-4 text-white/80 hover:text-white hover:bg-white/5 rounded-2xl transition-all duration-200 group">
                      <div>
                        <div className="font-medium">Customers</div>
                        <div className="text-xs text-white/50 mt-1">Success stories</div>
                      </div>
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    </a>
                    <a href="#resources" className="flex items-center justify-between p-4 text-white/80 hover:text-white hover:bg-white/5 rounded-2xl transition-all duration-200 group">
                      <div>
                        <div className="font-medium">Resources</div>
                        <div className="text-xs text-white/50 mt-1">Learn more</div>
                      </div>
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    </a>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-800">
                    <a href="#company" className="flex items-center justify-between p-4 text-white/80 hover:text-white hover:bg-white/5 rounded-2xl transition-all duration-200 group">
                      <div>
                        <div className="font-medium">Company</div>
                        <div className="text-xs text-white/50 mt-1">About us</div>
                      </div>
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};
