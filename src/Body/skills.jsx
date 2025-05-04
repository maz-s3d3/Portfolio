import { motion } from "framer-motion";
import { Code, Database, Layout, Server, Smartphone, Tool } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="text-blue-500" size={24} />,
      skills: ["React", "Next.js", "HTML5", "CSS3", "JavaScript", "TypeScript", "Tailwind CSS"]
    },
    {
      title: "Backend Development",
      icon: <Server className="text-blue-500" size={24} />,
      skills: ["Node.js", "Express", "Python", "Django", "RESTful APIs"]
    },
    {
      title: "Database",
      icon: <Database className="text-blue-500" size={24} />,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"]
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="text-blue-500" size={24} />,
      skills: ["React Native", "Flutter", "Mobile-First Design"]
    },
    {
      title: "Development Tools",
      icon: <Tool className="text-blue-500" size={24} />,
      skills: ["Git", "Docker", "VS Code", "Postman", "Webpack"]
    },
    {
      title: "Programming Languages",
      icon: <Code className="text-blue-500" size={24} />,
      skills: ["JavaScript", "Python", "Java", "C++", "PHP"]
    }
  ];

  return (
    <section id="skills" className="bg-black bg-opacity-80 backdrop-blur-md py-16 relative overflow-hidden">
      {/* Cosmic gradient accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-cyan-400 to-blue-500"></div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">
          Skills & Expertise
        </h2>
        <p className="text-center text-gray-300 mb-12 max-w-lg mx-auto">
          Technologies and tools I work with
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 bg-opacity-60 rounded-xl p-6 shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 border border-gray-800"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold ml-3 text-white">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 text-sm rounded-full bg-gray-800 text-cyan-400 border border-gray-700 hover:border-cyan-500 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}