import { Briefcase } from 'lucide-react';

const About = () => {
  const skills = {
    "Programming Languages": ["Java", "JavaScript", "Python", "C++"],
    "Frontend": ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS"],
    "Backend": ["Node.js", "Express.js", "REST APIs"],
    "Databases": ["MySQL", "MongoDB", "Prisma"],
    "Tools & Platforms": ["Git", "GitHub", "Vercel", "Render"],
    "Core CS Concepts": ["OOPs", "DBMS", "OS Basics"],
    "Soft Skills": ["Leadership", "Communication", "Adaptable", "Problem Solving"]
  };

  const education = [
    {
      degree: "B.Tech Computer Science and Engineering",
      institution: "Lovely Professional University",
      duration: "July 2022 – Present",
      grade: "CGPA 7.49"
    },
    {
      degree: "Intermediate",
      institution: "S.H.C. SD Public Sr Sec School",
      duration: "April 2020 – March 2022",
      grade: "81%"
    },
    {
      degree: "Matriculation",
      institution: "S.H.C. SD Public Sr Sec School",
      duration: "April 2018 – March 2020",
      grade: "88.6%"
    }
  ];

  return (
    <section className="py-20 bg-portfolio-darker">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio Section */}
          <div className="animate-fade-in-left">
            <h3 className="text-2xl font-semibold mb-6 text-portfolio-blue">My Story</h3>
            <p className="text-portfolio-light-gray text-lg leading-relaxed mb-8">
              I'm Nitika, a passionate and dedicated Computer Science and Engineering student 
              at Lovely Professional University. With a strong foundation in full stack development, 
              I enjoy building modern web applications that are both functional and visually appealing.
            </p>
            <p className="text-portfolio-light-gray text-lg leading-relaxed mb-8">
              My interests span across various technologies, user-centered design, and innovative solutions that 
              enhance user experiences. I believe in writing clean, efficient code and creating 
              interfaces that users love to interact with.
            </p>

            {/* Internship */}
            <h3 className="text-2xl font-semibold mb-4 text-portfolio-purple">Internship</h3>
            <div className="bg-portfolio-gray/30 p-6 rounded-lg border border-portfolio-gray/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-gradient-primary rounded-lg text-white">
                  <Briefcase size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Academor – SDE Intern</h4>
                  <span className="text-sm text-portfolio-light-gray">June 2024 – August 2024</span>
                </div>
              </div>
              <ul className="space-y-2 text-portfolio-light-gray text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-portfolio-blue rounded-full mt-2 shrink-0"></div>
                  Built and optimized full-stack web application features using JavaScript.
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-portfolio-blue rounded-full mt-2 shrink-0"></div>
                  Worked on real-world case studies focusing on backend logic and scalable architecture.
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-portfolio-blue rounded-full mt-2 shrink-0"></div>
                  Collaborated with mentors to debug, test, and improve application performance.
                </li>
              </ul>
            </div>
          </div>

          {/* Education Section */}
          <div className="animate-fade-in-right">
            <h3 className="text-2xl font-semibold mb-6 text-portfolio-purple">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-portfolio-gray/30 p-6 rounded-lg border border-portfolio-gray/20">
                  <h4 className="font-semibold text-white mb-2">{edu.degree}</h4>
                  <p className="text-portfolio-light-gray mb-1">{edu.institution}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-portfolio-light-gray">{edu.duration}</span>
                    <span className="text-portfolio-blue font-medium">{edu.grade}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 animate-fade-in">
          <h3 className="text-3xl font-semibold text-center mb-12">
            Skills & <span className="bg-gradient-primary bg-clip-text text-transparent">Technologies</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-portfolio-gray/30 p-6 rounded-lg border border-portfolio-gray/20 hover:border-portfolio-blue/50 transition-all duration-300">
                <h4 className="text-xl font-semibold mb-4 text-portfolio-blue">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-portfolio-dark px-3 py-1 rounded-full text-sm text-portfolio-light-gray border border-portfolio-gray/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
