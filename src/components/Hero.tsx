import { Button } from '@/components/ui/button';
import { ChevronDown, Sparkles, Code, Zap } from 'lucide-react';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero = ({ scrollToSection }: HeroProps) => {
  return (
    <section className="min-h-screen flex items-center pt-20 bg-gradient-dark relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-portfolio-blue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-portfolio-purple/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute top-20 left-20 text-portfolio-gray/20 text-9xl font-bold select-none">{'<>'}</div>
          <div className="absolute bottom-20 right-20 text-portfolio-gray/20 text-9xl font-bold select-none">{'</>'}</div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start animate-fade-in-left">
            <div className="relative group">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-primary p-1 group-hover:scale-105 transition-transform duration-500">
                <div className="w-full h-full rounded-full bg-portfolio-dark flex items-center justify-center relative overflow-hidden">
                  <img 
                    src="https://i.postimg.cc/4xr026nn/Whats-App-Image-2025-07-06-at-13-22-58-68d23a3d.jpg"
                    alt="Nitika Kalra"
                    className="w-full h-full object-cover rounded-full"
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-full"></div>
                </div>
              </div>
              <div className="absolute -inset-6 bg-gradient-primary rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
              
              {/* Floating icons */}
              <div className="absolute -top-4 -right-4 bg-portfolio-blue/20 backdrop-blur-sm rounded-full p-3 animate-bounce delay-300">
                <Code className="text-portfolio-blue" size={20} />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-portfolio-purple/20 backdrop-blur-sm rounded-full p-3 animate-bounce delay-700">
                <Zap className="text-portfolio-purple" size={20} />
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left animate-fade-in-right space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-primary/10 border border-portfolio-blue/20 rounded-full px-4 py-2 text-sm text-portfolio-blue backdrop-blur-sm">
              <Sparkles size={16} className="animate-pulse" />
              <span>Available for new projects</span>
            </div>

            {/* Main heading */}
            <div className="space-y-6">
              <h2 className="text-xl lg:text-2xl text-portfolio-light-gray font-light tracking-wide">
                👋 Hello, I'm <span className="text-white font-medium">Nitika Kalra</span>
              </h2>
              
              <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight">
                <span className="block text-white mb-2">Full Stack</span>
                <span className="block bg-gradient-primary bg-clip-text text-transparent relative">
                  Developer
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-primary rounded-full opacity-50"></div>
                </span>
              </h1>

              <p className="text-lg lg:text-xl text-portfolio-light-gray max-w-2xl leading-relaxed font-light">
                I'm a <span className="text-white font-medium">computer science student</span> passionate about 
                building modern web applications with cutting-edge technology and 
                <span className="text-portfolio-blue font-medium"> seamless user experiences</span>.
              </p>
            </div>

            {/* Tech stack badges */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {['React.js', 'Next.js', 'Node.js', 'Tailwind CSS'].map((tech) => (
                <div
                  key={tech}
                  className="px-4 py-2 bg-portfolio-gray/30 backdrop-blur-sm rounded-lg text-sm text-portfolio-light-gray border border-portfolio-gray/20 hover:border-portfolio-blue/30 hover:text-portfolio-blue transition-all duration-300"
                >
                  {tech}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button
                onClick={() => scrollToSection('portfolio')}
                className="group bg-gradient-primary hover:opacity-90 text-white px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-portfolio-blue/25 border-0"
              >
                <span>View My Work</span>
                <ChevronDown className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </Button>
              
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="border-2 border-portfolio-blue/50 bg-portfolio-blue/5 text-portfolio-blue hover:bg-portfolio-blue hover:text-white px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-portfolio-blue backdrop-blur-sm"
              >
                Let's Connect
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-portfolio-gray/20">
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-white">3+</div>
                <div className="text-sm text-portfolio-light-gray">Years Learning</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-white">15+</div>
                <div className="text-sm text-portfolio-light-gray">Projects Built</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-white">100%</div>
                <div className="text-sm text-portfolio-light-gray">Dedication</div>
              </div>
            </div>
          </div>
        </div>

        {/* Improved Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-portfolio-light-gray uppercase tracking-wider">Scroll Down</span>
          <div className="flex flex-col gap-1 animate-bounce">
            <ChevronDown className="text-portfolio-light-gray" size={20} />
            <ChevronDown className="text-portfolio-light-gray/50 -mt-2" size={16} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
