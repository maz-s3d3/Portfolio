import '../Styles/3D Styles/Pyramid.css';
import { useState, useEffect } from 'react';

const Pyramid = ({
  size = 6,
  baseColor = 'rgb(0,0,0)',
  rotationSpeed = 10,
}) => {
  const [Height, setHeight] = useState(200);
  const [Width, setWidth] = useState(200);

  useEffect(() => {
    let width = `${Math.ceil(size / 4)}00`; // Fixing string formatting
    let height = `${Math.ceil(size / 4)}00`;
    setWidth(width);
    setHeight(height);
  }, [size]); // Runs only when `size` changes

  const faces = [
    { name: 'front', },
    { name: 'back' },
    { name: 'left' },
    { name: 'right' },
  ];

  return (
    <div className="pyramid" style={{ animationDuration: `${rotationSpeed}s` }}>
      {faces.map((face) => (
        <div
          key={face.name}
          className={`face ${face.name} transition-all`}
          style={{
            height: `${Height}px`,
            width: `${Width}px`,
            backgroundColor: baseColor,
          }}
        />
      ))}
      <div
        className="base"
        style={{
          height: `${Height}px`,
          width: `${Width}px`,
          backgroundColor: baseColor,
        }}
      />
    </div>
  );
};

export default Pyramid;
