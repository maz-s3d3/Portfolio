
import { useEffect } from 'react';

import React, { useState } from 'react';
import '../Styles/3D Styles/Cube.css'; // Import the CSS file

const AnimatedCube = ({ 
  size = 4.5,
  baseColor = 'rgb(0, 0, 0)',
  rotationSpeed = 10,
}) => {
  const [isAnimating, setIsAnimating] = useState(true);
   const [Height, setHeight] = useState();
    const [Width, setWidth] = useState();
  
    useEffect(() => {
      let width = `${Math.ceil(size / 4)}00`; // Fixing string formatting
      let height = `${Math.ceil(size / 4)}00`;
      setWidth(width);
      setHeight(height);
    }, [size]); // Runs only when `size` changes

  const faces = [
    { name: 'front',  transform: 'translateZ(5em)' },
    { name: 'right',  transform: 'rotateY(90deg) translateZ(5em)' },
    { name: 'back',   transform: 'rotateY(180deg) translateZ(5em)' },
    { name: 'left',   transform: 'rotateY(-90deg) translateZ(5em)' },
    { name: 'top',    transform: 'rotateX(90deg) translateZ(5em)' },
    { name: 'bottom', transform: 'rotateX(-90deg) translateZ(5em)' }
  ];

  return (

      <>

        {/* Cube Container */}
        <div className="top-14 left-14 cube-container transition-all">
          <div 
            className="cube"
            style={{
              
              animationDuration: `${rotationSpeed}s`,
              animationPlayState: isAnimating ? 'running' : 'paused',
            }}
          >
            {faces.map((face) => (
              <div
                key={face.name}
                className="cube-face"
                style={{
            //       height: `${Height}px`,
            // width: `${Width}px`,
                  backgroundColor: baseColor,
                  transform: face.transform,
                }}
              />
            ))}
          </div>
      </div>
      </>
  );
};

export default AnimatedCube;
