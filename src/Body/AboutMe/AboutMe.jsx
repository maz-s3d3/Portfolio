import { useState, useEffect } from 'react';
import Skills from './Skills/Skills';

const AboutMe = ({ FirstName, LastName, Profile, theme, reversetheme }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add animation effect on component mount
    setIsVisible(true);
  }, []);

  return (
    <section id="about" className="py-16">
      <div className={`container mx-auto transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className={`text-4xl font-bold text-${reversetheme} text-center mb-12`}>About Me</h2>
        
        <div className="flex flex-col md:flex-row items-center justify-around gap-10 mb-16">
          {/* Profile Image with Frame */}
          <div className={`relative max-w-sm transition-all duration-300 transform hover:scale-105`}>
            <div className={`absolute inset-0 border-2 border-${reversetheme} rounded-md -m-3 z-0`}></div>
            <img 
              className={`relative z-10 rounded-md shadow-xl max-h-96 object-cover`} 
              src={Profile} 
              alt={`${FirstName} ${LastName}`} 
            />
          </div>
          
          {/* Bio Text */}
          <div className={`max-w-xl p-5 text-${reversetheme} space-y-4`}>
            <h3 className="text-2xl font-bold mb-4">
              Hello! I'm {FirstName} {LastName}
            </h3>
            
            <p className="text-lg leading-relaxed"> 
            A passionate Full-Stack Web Developer based in Casablanca. I hold a diploma in Web Development from OFPPT, where I built a strong foundation in both front-end and back-end technologies, specializing in creating responsive, efficient, and user-focused web applications.

Throughout my training and projects, I developed a strong habit of writing clean, scalable code and solving problems with creativity and precision. I adapt quickly to new technologies, work effectively both independently and within a team, and am always focused on delivering high-quality results that meet real-world needs.

Motivated, reliable, and committed to continuous growth, I am ready to bring my technical skills, energy, and dedication to new professional challenges. If you are looking for a developer who is serious about delivering value and contributing to meaningful projects, I would be excited to collaborate with you.                              
            </p>
            
            <div className="pt-4 flex gap-4">
              <a 
                href="#contact" 
                className={`px-6 py-2 bg-${theme} text-${reversetheme} border border-${reversetheme} rounded-md hover:bg-${reversetheme} hover:text-${theme} transition-all`}
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className={`px-6 py-2 border border-${reversetheme} text-${reversetheme} rounded-md hover:bg-${reversetheme} hover:text-${theme} transition-all`}
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
        
        {/* Skills Section */}
        <Skills theme={theme} reversetheme={reversetheme} />
      </div>
    </section>
  );
};

export default AboutMe;