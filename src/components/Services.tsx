import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Palette, Bot, Smartphone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full Stack Web Development",
      description: "End-to-end web application development using modern technologies like React, Node.js, and MongoDB. From concept to deployment.",
      features: ["Custom Web Applications", "API Development", "Database Design", "Performance Optimization"]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design & Prototyping",
      description: "Creating intuitive and visually appealing user interfaces with a focus on user experience and modern design principles.",
      features: ["User Interface Design", "Wireframing", "Prototyping", "User Experience Research"]
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI Integration",
      description: "Integrating artificial intelligence into web applications, including chatbots, intelligent platforms, and AI-powered features.",
      features: ["AI Chatbots", "Machine Learning Integration", "OpenAI API", "Intelligent Automation"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Responsive Frontend Development",
      description: "Building responsive, mobile-first web applications that work seamlessly across all devices and screen sizes.",
      features: ["Mobile-First Design", "Cross-Browser Compatibility", "Performance Optimization", "Modern CSS Frameworks"]
    }
  ];

  return (
    <section className="py-20 bg-portfolio-darker">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-portfolio-light-gray text-lg max-w-2xl mx-auto">
            I offer comprehensive web development services to help bring your ideas to life with 
            modern technology and best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="bg-portfolio-gray/30 border-portfolio-gray/20 hover:border-portfolio-purple/50 transition-all duration-500 hover:scale-105 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-primary rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-white">
                    {service.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-portfolio-light-gray leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-portfolio-light-gray">
                      <div className="w-2 h-2 bg-portfolio-blue rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
