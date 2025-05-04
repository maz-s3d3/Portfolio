import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects({ theme, reversetheme, projects }) {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section id="projects" className=" backdrop-blur-sm py-16 relative overflow-hidden">
      {/* Cosmic gradient accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-cyan-400 to-blue-500"></div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">
          My Projects
        </h2>
        <p className="text-center text-gray-300 mb-12 max-w-lg mx-auto">
          Explore my latest works and creative endeavors
        </p>
        
        <div className="flex flex-wrap justify-center gap-10">
          {projects.map((project, index) => (
            <div
              className="relative bg-gray-900 bg-opacity-60 w-80 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-800"
              key={index}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image with Overlay */}
              <div className="relative overflow-hidden h-48">
                <img
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    hoveredProject === index ? "scale-110 filter brightness-75" : ""
                  }`}
                  src={project.image}
                  alt={project.name}
                />
                
                {/* Links Overlay */}
                <div className={`absolute inset-0 flex items-center justify-center gap-6 bg-black bg-opacity-50 transition-opacity duration-300 ${
                  hoveredProject === index ? "opacity-100" : "opacity-0"
                }`}>
                  {project.links.map((link, linkIndex) => (
                    <div key={linkIndex} className="flex gap-4">
                      {link.git && (
                        <a
                          href={link.git}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-full text-white hover:scale-110 transition-all"
                          aria-label="GitHub Repository"
                        >
                          <FaGithub size={24} />
                        </a>
                      )}
                      
                      {link.site && (
                        <a
                          href={link.site}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-full text-white hover:scale-110 transition-all"
                          aria-label="Live Site"
                        >
                          <FaExternalLinkAlt size={22} />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Project Details */}
              <div className="p-5">
                <h3 className="text-2xl font-bold mb-2 text-white">{project.name}</h3>
                <p className="text-sm font-mono mb-4 text-gray-300">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.usedLanguages.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs rounded-full bg-gray-800 text-cyan-400 border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}