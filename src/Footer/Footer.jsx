import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-50 backdrop-blur-md py-8 px-6 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">SpacePortfolio</div>
          <p className="text-gray-400 mt-2">Creating digital experiences that are out of this world</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-medium mb-2">Navigation</h3>
            <ul className="text-gray-400">
              <li><a href="#home" className="hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-2">Connect</h3>
            <ul className="text-gray-400">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} SpacePortfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;