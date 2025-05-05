import { useState, useEffect } from "react";
import Scene from "../3D modules/Scene";

const Welcoming = ({ theme, reversetheme, FirstName, LastName }) => {
  // State for animation
  const [loaded, setLoaded] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Text to animate
  const welcomeText = "Welcome to";
  const portfolioText = "portfolio";
  
  // Handle initial animation and scroll effects
  useEffect(() => {
    // Trigger load animation after a short delay
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);
    
    // Set up scroll listener
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    
    // Cleanup
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  // Calculate parallax and fade effects based on scroll
  const parallaxOffset = scrollPosition * 0.4;
  const opacityValue = Math.max(1 - scrollPosition / 500, 0);
  
  return (
    <div id ="home" className="relative overflow-hidden w-full h-svh">
     
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className={`absolute top-0 left-0 w-64 h-64 rounded-full blur-3xl bg-${theme} opacity-20`}></div>
        <div className={`absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl bg-${theme} opacity-30`}></div>
      </div>
      
      {/* Main welcome content */}
      <div 
        className="absolute inset-0 flex flex-col items-center justify-center"
        style={{ opacity: opacityValue, transform: `translateY(${parallaxOffset * 0.1}px)` }}
      >
        {/* Welcome heading with animated text reveal */}
        <div className="text-center px-4 max-w-4xl">
          {/* Animated welcome text */}
          <div className="overflow-hidden mb-2">
            <p 
              className={`text-${reversetheme} text-lg md:text-xl font-medium tracking-widest uppercase transition-transform duration-1000 transform ${loaded ? 'translate-y-0' : 'translate-y-full'}`}
              style={{ transitionDelay: '0.2s' }}
            >
              {welcomeText}
            </p>
          </div>
          
          {/* Main name with outline effect */}
          <div className="overflow-hidden my-2">
            <h1 
              className={`
                text-${reversetheme} text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight
                transition-transform duration-1000 transform ${loaded ? 'translate-y-0' : 'translate-y-full'}
              `}
              style={{ 
                WebkitTextStroke: `2px ${theme}`,
                textStroke: `2px ${theme}`,
                transitionDelay: '0.4s'
              }}
            >
              <span className="inline-block hover:scale-105 transition-transform duration-300">{LastName}</span>{' '}
              <span className="inline-block hover:scale-105 transition-transform duration-300">{FirstName}</span>
            </h1>
          </div>
          
          {/* Portfolio text */}
          <div className="overflow-hidden mt-2">
            <p 
              className={`text-${reversetheme} text-lg md:text-xl font-medium tracking-widest uppercase transition-transform duration-1000 transform ${loaded ? 'translate-y-0' : 'translate-y-full'}`}
              style={{ transitionDelay: '0.6s' }}
            >
              {portfolioText}
            </p>
          </div>
        </div>
        
        {/* Animated scroll indicator */}
        <div 
          className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '1s' }}
        >
          <div className="flex flex-col items-center">
            <p className={`text-${reversetheme} text-sm font-medium mb-2`}>Scroll Down</p>
            <div className={`w-6 h-10 rounded-full border-2 border-${reversetheme} flex justify-center p-1`}>
              <div className={`w-1 h-2 bg-${reversetheme} rounded-full animate-bounce`}></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Subtle grid overlay */}
      <div 
        className="absolute inset-0 bg-grid-pattern opacity-5"
        style={{
          backgroundImage: `linear-gradient(to right, ${theme}40 1px, transparent 1px), linear-gradient(to bottom, ${theme}40 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>
    </div>
  );
};

export default Welcoming;