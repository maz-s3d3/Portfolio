import React from 'react';
import { Star, Twitter, Linkedin, Github, Instagram, Mail, ArrowRight } from 'lucide-react';

const Footer = ({FirstName, LastName}) => {
  // Create animated stars for the footer background
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 20; i++) {
      const size = Math.random() * 2 + 1;
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const animationDuration = Math.random() * 3 + 2;
      
      stars.push(
        <div 
          key={i}
          className="absolute rounded-full bg-white opacity-50"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: `${top}%`,
            left: `${left}%`,
            animation: `twinkle ${animationDuration}s infinite ease-in-out`
          }}
        />
      );
    }
    return stars;
  };

  return (
    <footer className="bg-black bg-opacity-80 backdrop-blur-md py-12 px-6 relative overflow-hidden">
      {/* Animated stars background */}
      <div className="absolute inset-0 z-0">
        {renderStars()}
      </div>
      
      {/* Cosmic gradient accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-cyan-400 to-blue-500"></div>

      <div className="w-full max-w-6xl mx-auto z-10 relative">
        {/* Newsletter subscription section */}
        <div className="mb-12 bg-gray-900 bg-opacity-60 p-6 rounded-lg border border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-left">
              <h3 className="text-xl font-bold text-white mb-2">Join Our Cosmic Journey</h3>
              <p className="text-gray-300">Subscribe to our newsletter for stellar updates and digital insights</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 text-white py-3 px-4 rounded-l-md w-full md:w-64 border-r-0 border border-gray-700 focus:outline-none focus:ring-1 focus:ring-cyan-400"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-r-md flex items-center transition-all">
                Subscribe <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Main footer content */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-10">
          {/* Brand section */}
          <div className="w-full lg:w-1/3">
            <div className="flex items-center mb-3">
              <Star className="text-cyan-400 mr-2 w-6 h-6" />
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">{FirstName}'s {LastName} Portfolio</span>
            </div>
            <p className="text-gray-300 mb-6">Creating digital experiences that are out of this world. We blend innovation and creativity to deliver stellar solutions that captivate and inspire.</p>
            
            {/* Social icons */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Links sections */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full lg:w-2/3">
            <div>
              <h3 className="text-white font-medium mb-4 text-lg border-b border-gray-800 pb-2">Navigation</h3>
              <ul className="text-gray-300 space-y-2">
                <li><a href="#home" className="hover:text-cyan-400 transition-colors flex items-center"><span className="mr-2 w-1 h-1 bg-cyan-400 rounded-full"></span>Home</a></li>
                <li><a href="#about" className="hover:text-cyan-400 transition-colors flex items-center"><span className="mr-2 w-1 h-1 bg-cyan-400 rounded-full"></span>About</a></li>
                <li><a href="#projects" className="hover:text-cyan-400 transition-colors flex items-center"><span className="mr-2 w-1 h-1 bg-cyan-400 rounded-full"></span>Projects</a></li>
                <li><a href="#services" className="hover:text-cyan-400 transition-colors flex items-center"><span className="mr-2 w-1 h-1 bg-cyan-400 rounded-full"></span>Services</a></li>
                <li><a href="#contact" className="hover:text-cyan-400 transition-colors flex items-center"><span className="mr-2 w-1 h-1 bg-cyan-400 rounded-full"></span>Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-medium mb-4 text-lg border-b border-gray-800 pb-2">Resources</h3>
              <ul className="text-gray-300 space-y-2">
                <li><a href="#" className="hover:text-cyan-400 transition-colors flex items-center"><span className="mr-2 w-1 h-1 bg-purple-400 rounded-full"></span>Blog</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors flex items-center"><span className="mr-2 w-1 h-1 bg-purple-400 rounded-full"></span>Documentation</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors flex items-center"><span className="mr-2 w-1 h-1 bg-purple-400 rounded-full"></span>Tools</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors flex items-center"><span className="mr-2 w-1 h-1 bg-purple-400 rounded-full"></span>Design Systems</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors flex items-center"><span className="mr-2 w-1 h-1 bg-purple-400 rounded-full"></span>FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-medium mb-4 text-lg border-b border-gray-800 pb-2">Contact</h3>
              <ul className="text-gray-300 space-y-3">
                <li className="flex items-start">
                  <Mail className="w-5 h-5 mr-2 text-cyan-400 mt-1" />
                  <span>mazozisaad@gmail.com</span>
                </li>
                <li className="mt-6">
                  <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-md text-gray-300 hover:text-white transition-colors border border-gray-700">
                    Get in Touch
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright section */}
      <div className="mt-12 pt-6 text-center text-gray-400 border-t border-gray-800 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} {}. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
      
      {/* Add custom animation styles */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;