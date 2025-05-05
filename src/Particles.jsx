 import { useEffect, useRef } from 'react';

 export default function ParticleScene(reversetheme) {
   const canvasRef = useRef(null);
   useEffect(() => {
     const canvas = canvasRef.current;
     const ctx = canvas.getContext('2d');  
     // Make canvas fill the parent container
     const resizeCanvas = () => {
       canvas.width = canvas.parentElement.clientWidth;
       canvas.height = canvas.parentElement.clientHeight;
     };  
     window.addEventListener('resize', resizeCanvas);
     resizeCanvas();  
     // Particle settings
     const particleCount = 700;
     const particles = [];  
     // Colors that match a modern portfolio
     const colors = ['#4a90e2', '#50e3c2', '#b8e986'];  
     // Initialize particles
     for (let i = 0; i < particleCount; i++) {
       particles.push({
         x: Math.random() * canvas.width,
         y: Math.random() * canvas.height,
         radius: Math.random() * 3 + 1,
         color: colors[Math.floor(Math.random() * colors.length)],
         speed: Math.random() * 1 + 0.9,
         direction: Math.random() * Math.PI * 2,
         opacity: Math.random() * 0.5 + 0.2
       });
     }  
     // Animate particles
     const animate = () => {
       ctx.clearRect(0, 0, canvas.width, canvas.height);    
       // Draw and update particles
       particles.forEach(particle => {
         // Draw particle
         ctx.beginPath();
         ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
         ctx.fillStyle = particle.color.replace(')', `, ${particle.opacity})`).replace('rgb', 'rgba');
         ctx.fill();      
         // Update position
         particle.x += Math.cos(particle.direction) * particle.speed;
         particle.y += Math.sin(particle.direction) * particle.speed;      
         // Bounce off walls
         if (particle.x < 0 || particle.x > canvas.width) {
           particle.direction = Math.PI - particle.direction;
         }
         if (particle.y < 0 || particle.y > canvas.height) {
           particle.direction = -particle.direction;
         }      
         // Connect particles that are close to each other
         particles.forEach(otherParticle => {
           const dx = particle.x - otherParticle.x;
           const dy = particle.y - otherParticle.y;
           const distance = Math.sqrt(dx * dx + dy * dy);        
           if (distance < 100) {
             ctx.beginPath();
             ctx.strokeStyle = particle.color.replace(')', `, ${0.1 * (1 - distance / 100)})`).replace('rgb', 'rgba');
             ctx.lineWidth = 0.8;
             ctx.moveTo(particle.x, particle.y);
             ctx.lineTo(otherParticle.x, otherParticle.y);
             ctx.stroke();
           }
         });
       });    
       requestAnimationFrame(animate);
     };  
     const animationId = requestAnimationFrame(animate);  
     // Cleanup function
     return () => {
       window.removeEventListener('resize', resizeCanvas);
       cancelAnimationFrame(animationId);
     };
   }, []);
   return (
     <div className="absolute inset-0 z-0">
       <canvas 
         ref={canvasRef} 
         className="w-full h-full"
       />
     </div>
   );
 }






