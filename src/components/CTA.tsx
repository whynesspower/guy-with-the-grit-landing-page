import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section className="h-screen bg-white flex flex-col justify-center">
      {/* Curved top section */}
      <div className="absolute top-0 left-0 right-0 h-32">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0,0 C480,100 960,100 1440,0 L1440,0 L0,0 Z" fill="#000000"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center">
        <div className="text-center mb-16">
          <p className="text-gray-600 text-sm uppercase tracking-wider mb-8">Our customers</p>
          <h2 className="text-5xl lg:text-6xl font-bold text-black mb-8 leading-tight">
            Trusted by enterprise<br />
            and contact centers
          </h2>
        </div>

        {/* Company logos */}
        <div className="flex justify-center items-center space-x-12 mb-16 opacity-60">
          <div className="text-2xl font-bold text-gray-400">X</div>
          <div className="text-lg text-gray-400">hansa cequity</div>
          <div className="text-lg text-gray-400">GLOWTOUCH</div>
          <div className="text-lg text-gray-400">OP360</div>
          <div className="text-lg text-gray-400">GUARDIAN</div>
          <div className="text-lg text-gray-400">synergize.ai</div>
          <div className="text-lg text-gray-400">Cap</div>
        </div>

        {/* Testimonial */}
        <div className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 mb-4">Ganesh Bell | Managing Director, Insight Partners</p>
            <blockquote className="text-2xl lg:text-3xl font-medium text-black leading-relaxed">
              "Sanas has cracked the code, offering patented real-time accent conversion and neural network-based voice enhancement systems that 
              empower businesses to address speech barriers and create more job opportunities."
            </blockquote>
          </div>
          <div className="mt-8">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face" 
              alt="Ganesh Bell"
              className="w-16 h-16 rounded-full mx-auto object-cover"
            />
          </div>
        </div>

        {/* Who we serve section */}
        <div className="mb-16">
          <p className="text-center text-gray-600 text-sm uppercase tracking-wider mb-12">Who we serve</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {/* Contact Centers */}
            <Card className="bg-black text-white rounded-3xl overflow-hidden border-0 shadow-2xl">
              <CardContent className="p-0">
                <div className="flex">
                  <div className="flex-1 p-8">
                    <h3 className="text-2xl font-bold mb-4">For Contact Centers</h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      Sanas empowers agents by improving call quality and handling, transforming customer experiences and driving 
                      cost savings and ROI in operations.
                    </p>
                    <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black rounded-full">
                      Learn more <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                  <div className="w-1/2">
                    <img 
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop" 
                      alt="Contact center representative"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Enterprises */}
            <Card className="bg-black text-white rounded-3xl overflow-hidden border-0 shadow-2xl">
              <CardContent className="p-0">
                <div className="flex">
                  <div className="flex-1 p-8">
                    <h3 className="text-2xl font-bold mb-4">For Enterprises</h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      Sanas breaks down communication barriers, driving greater efficiency and creating opportunities for talent 
                      sourcing and employment in emerging territories.
                    </p>
                    <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black rounded-full">
                      Learn more <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                  <div className="w-1/2">
                    <img 
                      src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop" 
                      alt="Enterprise professional"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-gradient-to-br from-green-300 via-green-200 to-blue-200 rounded-3xl py-24 px-8 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-300/30 rounded-full blur-xl"></div>
          </div>
          <div className="relative">
            <h2 className="text-5xl lg:text-6xl font-bold text-black mb-8">
              Sound good?
            </h2>
            <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-12 py-4 text-lg font-semibold">
              Book a demo
              <div className="w-3 h-3 bg-green-400 rounded-full ml-3"></div>
            </Button>
          </div>
          
          {/* Bottom curved section */}
          <div className="absolute bottom-0 left-0 right-0 h-16">
            <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path d="M0,64 C480,-21 960,-21 1440,64 L1440,64 L0,64 Z" fill="#000000"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
