
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Features = () => {
  const features = [
    {
      title: "Real-time Translation",
      description: "Instant voice translation with minimal latency for natural conversations.",
      icon: "🗣️"
    },
    {
      title: "40+ Languages",
      description: "Support for over 40 languages and dialects with native-like pronunciation.",
      icon: "🌍"
    },
    {
      title: "AI-Powered Accuracy",
      description: "Advanced neural networks ensure 99.9% translation accuracy.",
      icon: "🧠"
    },
    {
      title: "Voice Preservation",
      description: "Maintain your unique voice characteristics while speaking different languages.",
      icon: "🎵"
    },
    {
      title: "Enterprise Ready",
      description: "Scalable infrastructure with enterprise-grade security and compliance.",
      icon: "🏢"
    },
    {
      title: "Easy Integration",
      description: "Simple APIs and SDKs for seamless integration into your applications.",
      icon: "⚡"
    }
  ];

  return (
    <section id="features" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Global Communication
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-powered voice translation technology breaks down language barriers 
            and enables seamless communication across cultures.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md bg-gradient-to-br from-white to-gray-50"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
