import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "SENSAI – AI Career Coach",
      description: "A full-stack AI-powered career coaching platform that guides users in building resumes and preparing for interviews with Gemini AI integration. Includes Clerk authentication, Prisma, and server-side rendering.",
      tech: ["React.js", "Next.js", "Tailwind CSS", "Gemini AI", "Prisma", "Clerk"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      live: "https://sens-ai-pi.vercel.app/",
      badge: "Full Stack"
    },
    {
      title: "ResumeXpert",
      description: "A full-stack resume builder with live preview and PDF generation. Backend APIs using Node.js and Express handle resume data, with MongoDB for storage.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "HTML", "CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop",
      live: "https://resume-builder-1-d75g.onrender.com/",
      badge: "Full Stack"
    },
    {
      title: "AI Chatbot",
      description: "A conversational AI chatbot using OpenAI API with a responsive React UI. Built as part of AI integration learning to provide intelligent, dynamic interactions.",
      tech: ["React", "OpenAI API", "JavaScript", "CSS"],
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",
      live: "https://nitikakalra.github.io/AI-Chatbot/",
      badge: "AI Integration"
    },
    {
      title: "Kalm – Meditation App",
      description: "A mindfulness-based web app offering guided breathing exercises for relaxation and stress relief. Built as a college project focusing on mental wellness and user experience design.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      live: "https://nitikakalra.github.io/Meditation-Website-/",
      badge: "Frontend"
    },
    {
      title: "Virtual Shopping Website",
      description: "A UI/UX prototype of an intuitive e-commerce website, designed with Figma to showcase modern design principles and user experience flow.",
      tech: ["Figma", "UI/UX", "Prototyping"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      live: "https://www.figma.com/proto/pQq49RkStAuLQQsncmiBvQ/Virtual-Shopping-Mobile-App?node-id=1-5569&starting-point-node-id=1%3A5569&t=Fm0Yrcau3wo41TMt-1",
      badge: "UI/UX"
    }
  ];

  return (
    <section className="py-20 bg-portfolio-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-portfolio-light-gray text-lg max-w-2xl mx-auto">
            Here are some of the projects I've worked on during my college journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-portfolio-gray/30 border-portfolio-gray/20 hover:border-portfolio-blue/50 transition-all duration-500 hover:scale-105 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <span className="absolute top-3 left-3 bg-portfolio-blue/90 text-white text-xs px-3 py-1 rounded-full font-medium">
                    {project.badge}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-portfolio-light-gray mb-4 leading-relaxed">
                  {project.description}
                </CardDescription>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-portfolio-dark px-3 py-1 rounded-full text-xs text-portfolio-blue border border-portfolio-blue/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="flex items-center gap-2 bg-gradient-primary hover:opacity-90"
                    onClick={() => window.open(project.live, '_blank')}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
