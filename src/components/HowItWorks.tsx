
export const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      title: "Speak Naturally",
      description: "Simply speak in your native language. Our AI listens and processes your speech in real-time."
    },
    {
      step: "02", 
      title: "AI Processing",
      description: "Advanced neural networks analyze your speech patterns, context, and meaning for accurate translation."
    },
    {
      step: "03",
      title: "Instant Translation",
      description: "Receive immediate translation in your target language while preserving your voice characteristics."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our revolutionary AI technology makes voice translation as simple as having a conversation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-purple-300 to-blue-300 transform -translate-x-1/2"></div>
                )}
                <div className="relative z-10 mb-6">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
