

import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-portfolio-darker border-t border-portfolio-gray/20 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              Nitika Kalra
            </div>
            <p className="text-portfolio-light-gray text-sm">
              Full Stack Developer • Problem Solver • Adaptable
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/nitikakalra"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-portfolio-gray/30 rounded-lg text-portfolio-light-gray hover:text-white hover:bg-portfolio-blue transition-all duration-300 hover:scale-110"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/nitika-kalraa"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-portfolio-gray/30 rounded-lg text-portfolio-light-gray hover:text-white hover:bg-portfolio-blue transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:nitikakalra2003@gmail.com"
              className="p-3 bg-portfolio-gray/30 rounded-lg text-portfolio-light-gray hover:text-white hover:bg-portfolio-blue transition-all duration-300 hover:scale-110"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-portfolio-gray/20 mt-8 pt-8 text-center">
          <p className="text-portfolio-light-gray text-sm">
            © {new Date().getFullYear()} Nitika Kalra. All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
