'use client';
import { Card } from '@/components/ui/card';
import ProfileCard from './ProfileCard';
import { useState, useEffect } from 'react';

const AboutSection = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const dynamicTexts = [
    "Passionate Developer",
    "Full-Stack Engineer",
    "Problem Solver",
    "Innovation Driver"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % dynamicTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [dynamicTexts.length]);

  useEffect(() => {
    const aboutSection = document.getElementById('about-section-observer');
    if (!aboutSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } // Trigger when 20% is visible
    );

    observer.observe(aboutSection);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="min-h-screen py-20 px-4 relative overflow-hidden">
      <div id="about-section-observer" className="max-w-6xl mx-auto relative z-10">
        {/* Clean, professional title section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-gradient animate-shimmer">
            About Me
          </h2>
          
          <div className="h-10 mb-8">
            <h3 className="text-2xl md:text-3xl font-medium text-cyber-cyan">
              {dynamicTexts[currentTextIndex]}
            </h3>
          </div>
        </div>

        {/* Clean, balanced layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Animated ProfileCard */}
          <div className={`flex justify-center transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <ProfileCard
              name="Adil Munawar"
              title="Prompt Engineer"
              handle="Adil Munawar"
              status="Online"
              contactText="Contact Me"
              avatarUrl="/lovable-uploads/eaf50e40-682a-4730-ac3c-407cf3e4896e.png"
              miniAvatarUrl="/lovable-uploads/eaf50e40-682a-4730-ac3c-407cf3e4896e.png"
              showUserInfo={true}
              enableTilt={true}
              onContactClick={() => console.log('Contact clicked')}
            />
          </div>

          {/* Clean content */}
          <div className={`space-y-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Main about card */}
            <Card className="relative group overflow-hidden bg-cyber-gray/10 border-cyber-cyan/20 backdrop-blur-xl hover:border-cyber-cyan/40 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/5 via-transparent to-cyber-blue/5 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              
              <div className="p-6 relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-1 h-6 bg-gradient-to-b from-cyber-cyan to-cyber-blue rounded-full mr-3"></div>
                  <h3 className="text-2xl font-bold text-cyber-cyan">Who I Am</h3>
                </div>
                
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p className="text-lg group-hover:text-white transition-colors duration-500">
                    I am a <span className="text-cyber-cyan font-semibold">passionate and results-driven developer</span> with extensive experience in frontend development, backend systems, and mobile/web app integration.
                  </p>
                  <p className="group-hover:text-white transition-colors duration-500">
                    Over the years, I've built a strong presence in the tech space through innovative projects, each crafted to solve real-world problems and push the boundaries of design and functionality.
                  </p>
                </div>
              </div>
            </Card>

            {/* Clean info cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="relative group overflow-hidden bg-cyber-gray/10 border-cyber-cyan/20 backdrop-blur-xl hover:border-cyber-cyan/40 transition-all duration-500 p-4">
                  <p className="text-cyber-cyan font-semibold text-xs uppercase tracking-wider mb-1">Contact</p>
                  <p className="text-white font-mono text-sm">+92 324 4965220</p>
              </Card>
              
              <Card className="relative group overflow-hidden bg-cyber-gray/10 border-cyber-cyan/20 backdrop-blur-xl hover:border-cyber-cyan/40 transition-all duration-500 p-4">
                  <p className="text-cyber-blue font-semibold text-xs uppercase tracking-wider mb-1">Specialization</p>
                  <p className="text-white font-mono text-sm">Full-Stack Development</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
