
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Features = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-green-100 via-white to-blue-100 relative overflow-hidden">
      {/* Curved top section */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-white rounded-b-[50px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-8">
          <p className="text-gray-600 text-sm uppercase tracking-wider mb-4">What we do</p>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-black mb-8 leading-tight">
            Sanas delivers crystal<br />
            clear communication<br />
            with <span className="text-gray-400">real-time speech-<br />
            to-speech AI technology.</span>
          </h2>
        </div>

        {/* Two main feature cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Accent Translation Card */}
          <Card className="bg-black text-white rounded-3xl p-8 relative overflow-hidden border-0 shadow-2xl">
            <CardContent className="p-0">
              <div className="mb-6">
                <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mb-6">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Accent Translation</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Sanas modulates accents in real-time while preserving unique voices and emotions to ensure 
                  every interaction is natural and authentic.
                </p>
              </div>
              
              {/* Circular visualization */}
              <div className="flex justify-center mt-12">
                <div className="relative">
                  <div className="w-32 h-32 border-2 border-green-400 rounded-full flex items-center justify-center">
                    <div className="w-24 h-24 border border-green-400/50 rounded-full flex items-center justify-center">
                      <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center">
                        <ArrowRight className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Noise Cancellation Card */}
          <Card className="bg-black text-white rounded-3xl p-8 relative overflow-hidden border-0 shadow-2xl">
            <CardContent className="p-0">
              <div className="mb-6">
                <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mb-6">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Noise Cancellation</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Sanas Noise Cancellation with omni-directional capabilities and speech enhancement eliminates 
                  noises and ambient voices from every angle, in any environment.
                </p>
              </div>
              
              {/* Audio visualization */}
              <div className="flex justify-center items-center mt-12">
                <div className="flex items-center space-x-1">
                  {[...Array(20)].map((_, i) => (
                    <div 
                      key={i} 
                      className="w-1 bg-green-400 rounded-full"
                      style={{ 
                        height: `${Math.random() * 40 + 10}px`,
                        opacity: Math.random() * 0.8 + 0.2 
                      }}
                    ></div>
                  ))}
                  <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mx-4">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                  {[...Array(20)].map((_, i) => (
                    <div 
                      key={i} 
                      className="w-1 bg-green-400/30 rounded-full"
                      style={{ height: `${10}px` }}
                    ></div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
