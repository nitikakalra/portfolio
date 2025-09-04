import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      title: "SENSAI – AI Career Coach",
      description:
        "A full-stack AI-powered career coaching platform that guides users in building resumes and preparing for interviews with Gemini AI integration. Includes Shadcn UI, Clerk authentication, Prisma, and PostgreSQL.",
      tech: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "Gemini AI",
        "Prisma",
        "Shadcn UI",
        "Clerk",
        "PostgreSQL",
      ],
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      live: "https://sens-ai-pi.vercel.app/",
      category: "Full Stack",
    },
    {
      title: "ResumeXpert",
      description:
        "A full-stack resume builder that allows users to input details like education, experience, and skills with live preview and PDF download functionality. Deployed with both frontend and backend for public use.",
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "HTML",
        "CSS/Tailwind CSS",
        "JavaScript",
        "Git",
        "GitHub",
        "Render",
      ],
      image:
        "https://images.unsplash.com/photo-1581092580485-4c4f50b3c6ab?w=600&h=400&fit=crop",
      live: "https://resume-builder-1-d75g.onrender.com/",
      category: "Full Stack",
    },
    {
      title: "AI Chatbot",
      description:
        "A conversational AI chatbot using OpenAI API with a responsive React UI. Built as part of AI integration learning to provide intelligent, dynamic interactions.",
      tech: ["React", "OpenAI API", "JavaScript", "CSS"],
      image:
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",
      live: "https://nitikakalra.github.io/AI-Chatbot/",
      category: "AI Integration",
    },
    {
      title: "Kalm – Meditation App",
      description:
        "A mindfulness-based web app offering guided breathing exercises for relaxation and stress relief. Built as a college project focusing on mental wellness and user experience design.",
      tech: ["React", "CSS", "JavaScript", "Figma"],
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      live: "https://nitikakalra.github.io/Meditation-Website-/",
      category: "Frontend",
    },
    {
      title: "Virtual Shopping Website",
      description:
        "A UI/UX prototype of an intuitive e-commerce website, designed with Figma to showcase modern design principles and user experience flow.",
      tech: ["Figma", "UI/UX", "Prototyping"],
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      live: null,
      category: "UI/UX",
    },
  ];

  return (
    <section id="portfolio" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Recent Projects</h2>
          <p className="text-gray-400 text-lg mb-6">
            Here are some of the projects I've worked on during my college journey
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/40 rounded-2xl overflow-hidden backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-blue-500/80 text-white px-3 py-1 rounded-full text-sm">
                  {project.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-sm border border-blue-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.live && (
                  <div className="flex justify-center">
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                      onClick={() => window.open(project.live, "_blank")}
                    >
                      <ArrowUp className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
