import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left order-2 md:order-1">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium mb-4">
              🎓 Available for new opportunities
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Nitika</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
            A Full Stack Developer passionate about crafting modern and intelligent web applications
          </h2>
          
          <p className="text-gray-400 mb-8 text-lg leading-relaxed">Computer Science student specializing in Web Development, and Frontend Development. Currently pursuing B.Tech  with a focus on building innovative solutions.</p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={scrollToPortfolio} className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
              View My Work
            </Button>
            
            <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300" onClick={() => window.open('https://github.com/nitikakalra', '_blank')}>
              GitHub Profile
            </Button>
          </div>
        </div>
        
        <div className="flex justify-center order-1 md:order-2">
          <div className="relative">
            <div className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 animate-pulse">
              <div className="w-full h-full rounded-full bg-slate-900 p-2">
                <img src="https://i.postimg.cc/4xr026nn/Whats-App-Image-2025-07-06-at-13-22-58-68d23a3d.jpg" alt="Nitika Kalra" className="w-full h-full rounded-full object-cover" />
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-4 animate-bounce">
              <ArrowDown className="text-white w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;