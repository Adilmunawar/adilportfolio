'use client';
import { Github, Instagram, Linkedin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const HeroSection = () => {
  const socialLinks = [{
    Icon: Instagram,
    href: 'https://instagram.com/adilmunawarx',
    label: 'Instagram',
    color: 'text-pink-400',
    shadow: 'shadow-pink-500/50',
    buttonBg: 'bg-pink-500',
    glowColor: 'from-pink-500'
  }, {
    Icon: Github,
    href: 'https://github.com/adilmunawar',
    label: 'GitHub',
    color: 'text-gray-300',
    shadow: 'shadow-gray-500/50',
    buttonBg: 'bg-gray-500',
    glowColor: 'from-gray-500'
  }, {
    Icon: Linkedin,
    href: 'https://linkedin.com/in/adilmunawar',
    label: 'LinkedIn',
    color: 'text-blue-400',
    shadow: 'shadow-blue-500/50',
    buttonBg: 'bg-blue-500',
    glowColor: 'from-blue-500'
  }, {
    Icon: Phone,
    href: 'tel:+923244965220',
    label: 'Phone',
    color: 'text-green-400',
    shadow: 'shadow-green-500/50',
    buttonBg: 'bg-green-500',
    glowColor: 'from-green-500'
  }];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden">
      {/* Subtle background with slower animations */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark via-cyber-gray/10 to-cyber-dark opacity-90"></div>
      
      {/* Reduced background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full professional-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full professional-pulse" style={{
          animationDelay: '2s'
        }}></div>
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-grid-pattern"></div>
      </div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="animate-fade-in-up">
          {/* Status indicator */}
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/20 rounded-full border border-emerald-500/30 backdrop-blur-sm">
              <div className="w-2 h-2 bg-emerald-500 rounded-full professional-pulse"></div>
              <span className="text-emerald-400 text-sm font-medium">Available for work</span>
            </div>
          </div>

          <h2 className="text-lg md:text-xl text-cyber-cyan mb-4 font-medium tracking-wider">
            Hello, I'm
          </h2>
          
          {/* Professional name with subtle effects */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg relative">
            <span className="text-gradient-slow relative z-10">Adil Munawar</span>
          </h1>
          
          {/* Professional subtitle */}
          <div className="relative mb-8">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-200 drop-shadow-md animate-fade-in-up" style={{
              animationDelay: '0.3s'
            }}>
              Full-Stack Developer
            </h3>
          </div>

          {/* Skills preview */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in-up" style={{
            animationDelay: '0.4s'
          }}>
            {['React', 'Node.js', 'TypeScript', 'Python', 'Azure'].map((skill, index) => (
              <div 
                key={skill} 
                className="group relative px-4 py-2 rounded-full transition-all duration-300 animate-scale-in"
                style={{
                  animationDelay: `${0.5 + index * 0.1}s`,
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="absolute inset-0 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 backdrop-blur-sm group-hover:bg-cyber-cyan/20 transition-all duration-300"></div>
                
                {/* Animated gradient border */}
                <div className="absolute -inset-px rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                
                {/* Glow effect */}
                <div className="absolute -inset-2 rounded-full bg-cyber-cyan/20 blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                
                <span className="relative text-cyber-cyan text-sm font-medium transition-colors duration-300 group-hover:text-white" style={{ textShadow: '0 0 5px rgba(0, 255, 255, 0.5)' }}>
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Redesigned social links with advanced animations */}
        <div className="flex justify-center space-x-6 mb-12 animate-scale-in" style={{
          animationDelay: '0.6s'
        }}>
          {socialLinks.map((social, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <Link 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group relative"
                  aria-label={social.label}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`absolute -inset-1 bg-gradient-to-r ${social.glowColor} to-cyber-blue rounded-full blur-md opacity-50 group-hover:opacity-100 transition duration-500 animate-pulse group-hover:animate-none`}></div>
                  <div className="relative w-16 h-16 bg-cyber-dark rounded-full transition-transform duration-300 group-hover:scale-95">
                    <div className={`absolute inset-0.5 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full`}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div 
                        className={`w-full h-full rounded-full transition-all duration-300 group-hover:translate-y-0.5
                                    bg-gray-900 border-2 border-gray-700/50 
                                    flex items-center justify-center`}
                      >
                         <social.Icon size={28} className={`${social.color} transition-all duration-300 group-hover:scale-110`} />
                      </div>
                    </div>
                  </div>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{social.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>

        {/* Professional CTA button */}
        <div className="animate-fade-in-up" style={{
          animationDelay: '0.8s'
        }}>
          <Button 
            className="group relative inline-flex items-center justify-center rounded-full bg-transparent px-8 py-4 text-lg font-bold text-white transition-all duration-500 overflow-hidden" 
            style={{
              border: '2px solid transparent',
              backgroundOrigin: 'border-box',
              backgroundClip: 'content-box, border-box',
              backgroundImage: `linear-gradient(to right, #1a1a2e, #1a1a2e), linear-gradient(90deg, #00ffff, #0080ff, #8000ff, #ff0080)`,
              animation: 'professionalGradientMove 15s ease infinite',
              backgroundSize: '100% 100%, 400% 400%',
              transformStyle: 'preserve-3d',
            }}
            onClick={() => document.getElementById('about')?.scrollIntoView({
              behavior: 'smooth'
            })}
          >
            <div className="absolute inset-0 bg-cyber-dark opacity-40 group-hover:opacity-20 transition-opacity duration-500"></div>
            <div 
              className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{
                background: 'radial-gradient(circle at 50% 50%, rgba(0, 255, 255, 0.25) 0%, rgba(0, 128, 255, 0) 60%)',
              }}
            ></div>
            <span className="relative z-10 flex items-center gap-2 group-hover:scale-105 transition-transform duration-500" style={{ textShadow: '0 0 15px rgba(0, 255, 255, 0.5)' }}>
              Explore My Work →
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

    