const About = () => {
  const skills = {
    languages: ["Java", "C++", "HTML", "CSS", "JavaScript", "Python", "C", "PHP"],
    frameworks: ["NodeJS", "ReactJS", "ExpressJS"],
    databases: ["MySQL", "MongoDB"],
    tools: ["Figma", "Canva"],
    soft: ["DSA", "Problem-Solving", "Project Management"]
  };
  return <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">I'm Nitika, a passionate and dedicated Computer Science and Engineering student at Lovely Professional University. With a strong foundation in full stack development, I enjoy building modern web applications that are both functional and visually appealing.</p>
            <p className="text-gray-300 text-lg leading-relaxed">
              My interests span AI integration, user-centered design, and innovative solutions that 
              enhance user experiences. I'm always eager to learn new technologies and take on 
              challenging projects that push my boundaries as a developer.
            </p>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-400 pl-4">
                <h4 className="text-lg font-semibold text-white">B.Tech Computer Science & Engineering</h4>
                <p className="text-blue-400">Lovely Professional University</p>
                <p className="text-gray-400">2022 – Present | CGPA: 7.5</p>
              </div>
              <div className="border-l-4 border-purple-400 pl-4">
                <h4 className="text-lg font-semibold text-white">Intermediate (81%)</h4>
                <p className="text-purple-400">SHC SD Public Sr Sec School</p>
              </div>
              <div className="border-l-4 border-pink-400 pl-4">
                <h4 className="text-lg font-semibold text-white">Matriculation (88.6%)</h4>
                <p className="text-pink-400">SHC SD Public Sr Sec School</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList]) => <div key={category} className="bg-slate-800/30 rounded-xl p-6 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-4 capitalize">
                {category === "soft" ? "Soft Skills" : category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map(skill => <span key={skill} className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-blue-300 rounded-full text-sm border border-blue-400/30">
                    {skill}
                  </span>)}
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default About;