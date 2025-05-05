import React, { useEffect, useState } from 'react';
import { Star, Linkedin, Github, Instagram, Mail, ArrowRight, ChevronUp, MapPin, Phone } from 'lucide-react';

const Footer = ({ FirstName, LastName, theme = "dark" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const currentYear = new Date().getFullYear();

  // Control animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.body.offsetHeight;
      
      // Make footer elements visible when close to the bottom
      if (scrollPosition > docHeight - windowHeight - 300) {
        setIsVisible(true);
      }
    };

    // Track mouse for parallax effect
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Trigger visibility check on mount
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Create enhanced animated stars for the footer background
  const renderStars = () => {
    const stars = [];
    const starCount = 30;
    
    for (let i = 0; i < starCount; i++) {
      const size = Math.random() * 3 + 1;
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = Math.random() * 5 + 3;
      const opacity = Math.random() * 0.5 + 0.2;
      
      // Calculate parallax offset based on mouse position
      const offsetX = (mousePosition.x - 0.5) * 3;
      const offsetY = (mousePosition.y - 0.5) * 4;
    
      stars.push(
        <div 
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: `calc(${top}% + ${offsetY * (size/3)}px)`,
            left: `calc(${left}% + ${offsetX * (size/3)}px)`,
            opacity: opacity,
            animation: `twinkle ${duration}s infinite ease-in-out ${delay}s`,
            transition: 'transform 0.2s ease-out'
          }}
        />
      );
    }
    return stars;
  };

  // Quick links data
  const navLinks = [
    { name: 'Home', url: '#home' },
    { name: 'About', url: '#about' },
    { name: 'Projects', url: '#projects' },
    { name: 'Contact', url: '#contact' }
  ];

  // Social links data
  const socialLinks = [
    { icon: Linkedin, url: 'https://www.linkedin.com/in/saad-es-safryouy-171930176/', label: 'LinkedIn' },
    { icon: Github, url: 'https://github.com/maz-s3d3', label: 'GitHub' },
    { icon: Instagram, url: 'https://www.instagram.com/maz_s3d3/', label: 'Instagram' },
    { icon: Mail, url: 'mailto:mazozisaad@gmail.com', label: 'Email' }
  ];

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-black bg-opacity-90 overflow-hidden">
      {/* Background stars and shapes */}

     <div className="absolute inset-0 z-0 overflow-hidden">
        {renderStars()}
        
        {/* Abstract shapes */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-purple-600 opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-cyan-400 opacity-10 blur-3xl"></div>
      </div>
      
      {/* Top cosmic gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-cyan-400 to-blue-500"></div>
      
      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop}
        className="absolute top-10 right-8 transform -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-cyan-400 flex items-center justify-center text-white shadow-lg hover:scale-110 transition-all duration-300 z-20 group"
      >
        <ChevronUp className="w-6 h-6 group-hover:animate-bounce" />
      </button>

      {/* Footer content */}
      <div className="w-full max-w-6xl mx-auto px-6 py-16 z-10 relative">
        {/* Main footer content */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand section */}
          <div className={`lg:col-span-5 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center mb-6 group">
              <div className="relative mr-3">
                <Star className="text-cyan-400 w-7 h-7 absolute group-hover:animate-spin-slow" 
                  style={{ animationDuration: '8s' }} />
                <Star className="text-purple-500 w-7 h-7 absolute opacity-70 group-hover:animate-ping" 
                  style={{ animationDuration: '1s', animationIterationCount: '3' }} />
                <Star className="text-white w-7 h-7" />
              </div>
              <h2 className="text-3xl font-bold">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 text-transparent bg-clip-text hover:bg-gradient-to-l transition-all duration-700">
                  {FirstName} {LastName}
                </span>
              </h2>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Creating digital experiences that are out of this world. Blending innovation 
              and creativity to deliver stellar solutions that captivate and inspire.
            </p>
            
            {/* Contact info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors">
                <MapPin className="w-5 h-5 mr-3" />
                <span>Casablanca, Morocco</span>
              </div>
              <div className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors">
                <Mail className="w-5 h-5 mr-3" />
                <span>mazozisaad@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors">
                <Phone className="w-5 h-5 mr-3" />
                <span>+212 644 796 181</span>
              </div>
            </div>
            
            {/* Social icons with enhanced hover effects */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  aria-label={social.label}
                  className="group relative w-12 h-12 rounded-full bg-gray-800 hover:bg-gradient-to-br hover:from-purple-600 hover:to-cyan-400 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20"></span>
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="absolute inset-0 border border-transparent group-hover:border-white group-hover:border-opacity-20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Navigation links section */}
          <div className={`lg:col-span-3 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h3 className="text-white font-semibold mb-6 text-xl relative inline-block">
              Navigation
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-500"></span>
            </h3>
            
            <ul className="text-gray-300 space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url} 
                    className="group flex items-center hover:text-white transition-colors duration-300"
                  >
                    <span className="mr-3 w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter signup section */}
          <div className={`lg:col-span-4 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h3 className="text-white font-semibold mb-6 text-xl relative inline-block">
              Stay Connected
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-500"></span>
            </h3>
            
            <p className="text-gray-300 mb-6">
              Subscribe to receive updates on new projects and announcements.
            </p>
            
            <form className="flex flex-col sm:flex-row">
              <div className="relative flex-grow">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full px-4 py-3 bg-gray-800 bg-opacity-70 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-l-md opacity-0 group-focus-within:opacity-10 transition-opacity"></div>
              </div>
              <button 
                type="submit"
                className="mt-2 sm:mt-0 px-5 py-3 bg-gradient-to-r from-purple-600 to-cyan-400 text-white font-medium rounded-r-md hover:from-purple-700 hover:to-cyan-500 transition-all duration-300 flex items-center justify-center group"
              >
                Subscribe
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Copyright section with animated border */}
      <div className="relative z-10">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; {currentYear} {FirstName} {LastName}. All rights reserved.</p>
            
            <div className="mt-4 md:mt-0 flex flex-wrap justify-center gap-x-8 gap-y-2">
              <a href="#privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
              <a href="#cookies" className="hover:text-cyan-400 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom animations */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; transform: scale(0.8); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;