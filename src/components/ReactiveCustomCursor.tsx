
import { useState, useEffect } from 'react';

const ReactiveCustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.matches('a, button, [role="button"], .cursor-pointer')) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.matches('a, button, [role="button"], .cursor-pointer')) {
        setIsHovering(false);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        className={`fixed pointer-events-none z-50 transition-all duration-200 ease-out ${
          isHovering ? 'scale-150' : 'scale-100'
        } ${isClicking ? 'scale-75' : ''}`}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        {/* Outer ring */}
        <div className={`w-8 h-8 border-2 border-cyber-cyan rounded-full ${
          isHovering ? 'border-cyber-blue' : 'border-cyber-cyan'
        } ${isClicking ? 'bg-cyber-cyan/20' : 'bg-transparent'}`}>
          {/* Inner dot */}
          <div className={`absolute top-1/2 left-1/2 w-2 h-2 bg-cyber-cyan rounded-full transform -translate-x-1/2 -translate-y-1/2 ${
            isHovering ? 'bg-cyber-blue' : 'bg-cyber-cyan'
          }`}></div>
          
          {/* Animated particles */}
          <div className="absolute inset-0">
            <div className={`absolute w-1 h-1 bg-cyber-cyan rounded-full animate-ping ${
              isHovering ? 'bg-cyber-blue' : 'bg-cyber-cyan'
            }`} style={{ top: '-2px', left: '50%', transform: 'translateX(-50%)' }}></div>
            <div className={`absolute w-1 h-1 bg-cyber-cyan rounded-full animate-ping ${
              isHovering ? 'bg-cyber-blue' : 'bg-cyber-cyan'
            }`} style={{ bottom: '-2px', left: '50%', transform: 'translateX(-50%)', animationDelay: '0.5s' }}></div>
            <div className={`absolute w-1 h-1 bg-cyber-cyan rounded-full animate-ping ${
              isHovering ? 'bg-cyber-blue' : 'bg-cyber-cyan'
            }`} style={{ left: '-2px', top: '50%', transform: 'translateY(-50%)', animationDelay: '1s' }}></div>
            <div className={`absolute w-1 h-1 bg-cyber-cyan rounded-full animate-ping ${
              isHovering ? 'bg-cyber-blue' : 'bg-cyber-cyan'
            }`} style={{ right: '-2px', top: '50%', transform: 'translateY(-50%)', animationDelay: '1.5s' }}></div>
          </div>
        </div>
        
        {/* Glow effect */}
        <div className={`absolute inset-0 w-8 h-8 rounded-full blur-sm ${
          isHovering ? 'bg-cyber-blue/30' : 'bg-cyber-cyan/20'
        } ${isClicking ? 'bg-cyber-cyan/50' : ''}`}></div>
      </div>

      {/* Trail cursor */}
      <div
        className="fixed pointer-events-none z-40 transition-all duration-300 ease-out"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className={`w-12 h-12 border border-cyber-cyan/30 rounded-full transition-all duration-300 ${
          isHovering ? 'scale-200 border-cyber-blue/40' : 'scale-100'
        }`}></div>
      </div>
    </>
  );
};

export default ReactiveCustomCursor;
