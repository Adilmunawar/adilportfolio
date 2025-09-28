'use client';
import { Github, Instagram, Linkedin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import React, { useRef, useState, useEffect } from 'react';

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

  const skills = ['React', 'Node.js', 'TypeScript', 'Python', 'Azure'];
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent, index: number) => {
      const ref = skillRefs.current[index];
      if (!ref) return;

      const rect = ref.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateX = (y / rect.height - 0.5) * -20; // Tilt range
      const rotateY = (x / rect.width - 0.5) * 20;

      ref.style.setProperty('--rotate-x', `${rotateX}deg`);
      ref.style.setProperty('--rotate-y', `${rotateY}deg`);
      ref.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    };

    const handleMouseLeave = (index: number) => {
      const ref = skillRefs.current[index];
      if (!ref) return;
      ref.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    };

    skillRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.addEventListener('mousemove', (e) => handleMouseMove(e, index));
        ref.addEventListener('mouseleave', () => handleMouseLeave(index));
      }
    });

    return () => {
      skillRefs.current.forEach((ref, index) => {
        if (ref) {
          ref.removeEventListener('mousemove', (e) => handleMouseMove(e, index));
          ref.removeEventListener('mouseleave', () => handleMouseLeave(index));
        }
      });
    };
  }, []);

  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateX = (y / rect.height - 0.5) * -15;
      const rotateY = (x / rect.width - 0.5) * 15;

      button.style.setProperty('--glow-x', `${x}px`);
      button.style.setProperty('--glow-y', `${y}px`);
      button.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    };

    const handleMouseLeave = () => {
      button.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

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
          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {skills.map((skill, index) => (
              <div
                key={skill}
                ref={(el) => (skillRefs.current[index] = el)}
                className="group relative px-4 py-2 rounded-full transition-all duration-300 bg-gray-800/40 border border-cyber-cyan/20 backdrop-blur-sm"
                style={{ transition: 'transform 0.1s ease-out' }}
              >
                <span className="relative text-gray-300 text-sm font-medium transition-colors duration-300 group-hover:text-cyber-cyan">
                  {skill}
                </span>
                <div className="absolute -inset-px rounded-full bg-cyber-cyan/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Redesigned social links with advanced animations */}
        <div className="flex justify-center space-x-4 mb-12 animate-scale-in" style={{
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
                >
                  <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 opacity-0 group-hover:opacity-75 transition-all duration-300 blur-md animate-pulse group-hover:animate-none"></div>
                  <div className="relative w-14 h-14 bg-cyber-dark rounded-full transition-all duration-300 group-hover:scale-110 flex items-center justify-center border-2 border-gray-700/60 group-hover:border-gray-600/80">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 opacity-80 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <social.Icon size={26} className={`${social.color} transition-all duration-300 group-hover:scale-125 relative z-10`} />
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
        <div className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <Button
            ref={buttonRef}
            className="group relative inline-flex items-center justify-center rounded-full bg-transparent px-8 py-4 text-lg font-bold text-white overflow-hidden"
            style={{
              transition: 'transform 0.1s ease-out',
              transformStyle: 'preserve-3d',
              '--aurora-speed': '30s',
              '--aurora-size': '400%',
              '--aurora-x': '50%',
              '--aurora-y': '50%',
            } as React.CSSProperties}
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="absolute inset-[-2px] rounded-full bg-gradient-to-r from-cyber-cyan via-cyber-blue to-cyber-purple opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 rounded-full bg-cyber-dark"></div>
            <div
              className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_var(--glow-x)_var(--glow-y),_rgba(0,255,255,0.3)_0%,_rgba(0,128,255,0)_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ '--glow-x': '50%', '--glow-y': '50%' } as React.CSSProperties}
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
