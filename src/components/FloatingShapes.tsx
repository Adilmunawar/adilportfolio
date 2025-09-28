'use client';
import { useState, useEffect } from 'react';

const FloatingShapes = () => {
  const developmentElements = [
    // Frontend Technologies
    {
      name: 'React',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      top: '8%',
      left: '5%',
      animation: 'animate-float-tech-1'
    },
    {
      name: 'TypeScript',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      bottom: '25%',
      left: '8%',
      animation: 'animate-float-tech-4'
    },
    {
      name: 'JavaScript',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      top: '40%',
      left: '3%',
      animation: 'animate-float-tech-5'
    },
    {
      name: 'HTML5',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      top: '55%',
      left: '20%',
      animation: 'animate-float-tech-6'
    },
    {
      name: 'CSS3',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      bottom: '45%',
      left: '25%',
      animation: 'animate-float-tech-1'
    },
    {
      name: 'Tailwind CSS',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
      bottom: '60%',
      left: '35%',
      animation: 'animate-float-tech-3'
    },
    
    // Backend Technologies
    {
      name: 'Node.js',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      top: '20%',
      right: '8%',
      animation: 'animate-float-tech-4'
    },
    {
      name: 'Python',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      top: '35%',
      right: '15%',
      animation: 'animate-float-tech-5'
    },
    
    // Databases
    {
      name: 'PostgreSQL',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      top: '65%',
      right: '25%',
      animation: 'animate-float-tech-3'
    },
    
    // Cloud & Tools
    {
      name: 'Docker',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      bottom: '20%',
      right: '45%',
      animation: 'animate-float-tech-6'
    },
    {
      name: 'Azure',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
      bottom: '80%',
      left: '50%',
      animation: 'animate-float-tech-2'
    },
    {
      name: 'Firebase',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
      top: '45%',
      left: '60%',
      animation: 'animate-float-tech-3'
    },
    {
      name: 'GitHub',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      top: '30%',
      left: '45%',
      animation: 'animate-float-tech-5'
    },
    {
      name: 'VS Code',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
      bottom: '30%',
      left: '55%',
      animation: 'animate-float-tech-6'
    },
    {
      name: 'Git',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      top: '60%',
      left: '70%',
      animation: 'animate-float-tech-1'
    }
  ];

  const geometricShapes = [
    { shape: '◇', top: '18%', left: '30%', color: 'text-cyber-cyan/30', size: 'text-xl', animation: 'animate-drift-1' },
    { shape: '○', bottom: '28%', right: '50%', color: 'text-cyber-blue/25', size: 'text-2xl', animation: 'animate-drift-2' },
    { shape: '△', top: '75%', left: '45%', color: 'text-cyber-cyan/28', size: 'text-lg', animation: 'animate-drift-3' }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Development Elements - Bigger and more visible */}
      {developmentElements.map((element, index) => (
        <div
          key={`dev-${index}`}
          className={`absolute w-12 h-12 ${element.animation} opacity-25 transition-all duration-300 ease-in-out`}
          style={{
            top: element.top,
            left: element.left,
            right: element.right,
            bottom: element.bottom,
            filter: `drop-shadow(0 0 8px rgba(0, 255, 255, 0.25)) brightness(1.1) contrast(1.1)`,
            animationDelay: `${index * 0.6}s`,
            animationDuration: `${18 + (index % 8)}s`
          }}
        >
          <img 
            src={element.image} 
            alt={element.name}
            className="w-full h-full object-contain transition-all duration-300"
            style={{
              filter: 'contrast(1.2) brightness(1.1) saturate(1.1)'
            }}
          />
          
          {/* Enhanced ring with tilt animation */}
          <div 
            className="absolute inset-0 rounded-full border border-cyber-cyan/10 animate-rotate-slow"
            style={{
              transform: 'scale(1.4)',
              animationDelay: `${index * 0.4}s`
            }}
          ></div>
        </div>
      ))}

      {/* Geometric Shapes - More visible */}
      {geometricShapes.map((shape, index) => (
        <div
          key={`shape-${index}`}
          className={`absolute ${shape.color} ${shape.size} ${shape.animation} transition-all duration-1000 animate-subtle-tilt`}
          style={{
            top: shape.top,
            left: shape.left,
            right: shape.right,
            bottom: shape.bottom,
            animationDelay: `${index * 1.2}s`,
            animationDuration: `${15 + (index % 4)}s`,
            textShadow: '0 0 12px currentColor',
            filter: 'brightness(1.2)'
          }}
        >
          {shape.shape}
        </div>
      ))}
      
      {/* Enhanced ambient light effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-cyber-cyan/4 via-cyber-cyan/2 to-transparent rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-radial from-cyber-blue/4 via-cyber-blue/2 to-transparent rounded-full blur-3xl opacity-25"></div>
      <div className="absolute top-2/3 left-1/2 w-64 h-64 bg-gradient-radial from-cyber-cyan/3 via-cyber-cyan/2 to-transparent rounded-full blur-3xl opacity-20"></div>
    </div>
  );
};

export default FloatingShapes;
