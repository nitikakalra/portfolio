const Services = () => {
  const services = [
    {
      icon: "🌐",
      title: "Full Stack Web Development",
      description: "End-to-end web application development using modern technologies like React, Node.js, and databases. Perfect for college projects and startup MVPs.",
      features: ["Responsive Design", "Database Integration", "API Development", "Performance Optimization"]
    },
    {
      icon: "🎨",
      title: "UI/UX Design & Prototyping",
      description: "Creating intuitive and visually appealing user interfaces with tools like Figma. Focused on user-centered design principles learned in coursework.",
      features: ["Wireframing", "Prototyping", "User Research", "Design Systems"]
    },
    {
      icon: "🤖",
      title: "AI Integration",
      description: "Implementing AI-powered features like chatbots and intelligent platforms using APIs like OpenAI and Gemini AI for enhanced user experiences.",
      features: ["Chatbot Development", "AI API Integration", "Smart Recommendations", "Data Analysis"]
    },
    {
      icon: "📱",
      title: "Responsive Frontend Development",
      description: "Building modern, mobile-first web applications with clean code and smooth animations. Specialized in React and modern CSS frameworks.",
      features: ["Mobile-First Design", "Cross-Browser Compatibility", "Performance Optimization", "Modern CSS"]
    }
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">What I Can Help You With</h2>
          <p className="text-gray-400 text-lg mb-6">
            Services I offer as a passionate full-stack developer and student
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-slate-800/30 rounded-2xl p-8 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <div className="text-4xl mb-6">{service.icon}</div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-400">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
