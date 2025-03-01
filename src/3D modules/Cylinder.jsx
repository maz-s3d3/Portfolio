import React, { useState } from 'react';

const styles = {
  container: {
    transformStyle: 'preserve-3d',
    perspective: '2000px',
  },
  innerContainer: {
    transformStyle: 'preserve-3d',
    transform: 'rotateX(-25deg)',
  },
  topCap: (width, height, topColor, baseColor) => ({
    width,
    height: width,
    transform: `translate(-50%,-150%)  rotateX(90deg)`,
    background: `radial-gradient(circle at 30% 30%, ${topColor}, ${baseColor})`,
    borderRadius: '50%',
    boxShadow: 'inset 0 2px 15px rgba(255,255,255,0.7), inset 0 -2px 15px rgba(0,0,0,0.3)',
  }),
  bottomCap: (width, height, bottomColor, baseColor) => ({
    width,
    height: width,
    transform: `translate(100%, 50%) rotateX(90deg)`,
    background: `radial-gradient(circle at 70% 70%, ${bottomColor}, ${baseColor})`,
    borderRadius: '50%',
    boxShadow: 'inset 0 2px 15px rgba(255,255,255,0.8), inset 0 -2px 15px rgba(0,0,0,0.4)',
  }),
  segment: (segmentWidth, height, angle, xPos, zPos, topColor, baseColor, bottomColor) => ({
    width: segmentWidth + 1,
    height,
    transform: `translate(-50%, -50%) translate3d(${xPos}px, 0, ${zPos}px) rotateY(${angle}deg)`,
    background: `linear-gradient(to bottom, 
      ${topColor} 0%, 
      ${baseColor} 2%, 
      ${baseColor} 98%, 
      ${bottomColor} 100%
    )`,
    transformOrigin: '50% 50%',
    backfaceVisibility: 'hidden',
  }),
  rotationKeyframes: `
    @keyframes rotateY {
      0%{
        transform: rotate3d(2,1 ,1 , 0deg); 
      }
      100%{ 
        transform: rotate3d(2,1 ,1 , 360deg); 
      }
    }
    @keyframes rotateX {
      0% {
        transform: rotateX(-15deg);
      }
      100% {
        transform: rotateX(15deg);
      }
    }
  `
};

const Cylinder = ({ 
  initialHeight = 256,
  initialWidth = 128,
  baseColor = 'rgb(0, 0, 0)',
  rotationSpeed = 5,
}) => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  // Calculations
  const height = isExpanded ? initialHeight * 1.5 : initialHeight;
  const width = isExpanded ? initialWidth * 1.5 : initialWidth;
  const segments = 36;
  const segmentWidth = (width * Math.PI) / segments;
  const radius = width / 2;

  // Colors with slightly adjusted gradients
  const topColor = `color-mix(in srgb, ${baseColor} 85%, white)`;
  const bottomColor = `color-mix(in srgb, ${baseColor} 85%, black)`;

  return (
    <div className=" items-center relative justify-center w-auto h-full">
      <div className="relative w-96 h-96">
        
        
        
        {/* Main container with perspective */}
        <div className="absolute inset-0" style={styles.container}>
          {/* Animated container */}
          <div 
            className="absolute inset-0 origin-center"
            style={{
              animation: isAnimating ? `rotateY ${rotationSpeed}s linear infinite` : 'none',
              transformStyle: 'preserve-3d',
            }}
          >
            {/* X-rotation container */}
            <div 
              className="absolute inset-0"
              style={{
                animation: isAnimating ? `rotateX ${rotationSpeed * 2}s ease-in-out infinite alternate` : 'none',
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Top cap */}
              <div 
                className="absolute left-1/2 top-1/2 transition-all"
                style={styles.topCap(width, height, topColor, baseColor)}
              />

              {/* Cylinder body */}
              {[...Array(segments)].map((_, index) => {
                const angle = (index * 360) / segments;
                const rad = (angle * Math.PI) / 180;
                const xPos = Math.sin(rad) * radius;
                const zPos = Math.cos(rad) * radius;
                
                return (
                  <div
                    key={index}
                    className="absolute left-1/2 top-1/2 transition-all"
                    style={styles.segment(
                      segmentWidth,
                      height,
                      angle,
                      xPos,
                      zPos,
                      topColor,
                      baseColor,
                      bottomColor
                    )}
                  />
                );
              })}

              {/* Bottom cap */}
              <div 
                className="absolute  top-1/2 transition-all"
                style={styles.bottomCap(width, height, bottomColor, baseColor)}
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{styles.rotationKeyframes}</style>
    </div>
  );
};

export default Cylinder;