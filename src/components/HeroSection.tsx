
import { Github, Instagram, Linkedin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const socialLinks = [{
    Icon: Instagram,
    href: 'https://instagram.com/adilmunawarx',
    label: 'Instagram',
    color: 'hover:text-pink-400',
    bgGradient: 'from-pink-500/20 to-purple-500/20',
    hoverGradient: 'hover:from-pink-500/40 hover:to-purple-500/40',
    borderColor: 'border-pink-400/30 hover:border-pink-400/60',
    shadowColor: 'hover:shadow-pink-500/40',
    dotColor: 'bg-pink-400'
  }, {
    Icon: Github,
    href: 'https://github.com/adilmunawar',
    label: 'GitHub',
    color: 'hover:text-gray-300',
    bgGradient: 'from-gray-500/20 to-slate-500/20',
    hoverGradient: 'hover:from-gray-500/40 hover:to-slate-500/40',
    borderColor: 'border-gray-400/30 hover:border-gray-400/60',
    shadowColor: 'hover:shadow-gray-500/40',
    dotColor: 'bg-gray-300'
  }, {
    Icon: Linkedin,
    href: 'https://linkedin.com/in/adilmunawar',
    label: 'LinkedIn',
    color: 'hover:text-blue-400',
    bgGradient: 'from-blue-500/20 to-indigo-500/20',
    hoverGradient: 'hover:from-blue-500/40 hover:to-indigo-500/40',
    borderColor: 'border-blue-400/30 hover:border-blue-400/60',
    shadowColor: 'hover:shadow-blue-500/40',
    dotColor: 'bg-blue-400'
  }, {
    Icon: Phone,
    href: 'tel:+923244965220',
    label: 'Phone',
    color: 'hover:text-green-400',
    bgGradient: 'from-green-500/20 to-emerald-500/20',
    hoverGradient: 'hover:from-green-500/40 hover:to-emerald-500/40',
    borderColor: 'border-green-400/30 hover:border-green-400/60',
    shadowColor: 'hover:shadow-green-500/40',
    dotColor: 'bg-green-400'
  }];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden">
      {/* Subtle background with slower animations */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark via-cyber-gray/10 to-cyber-dark opacity-90"></div>
      
      {/* Reduced background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl professional-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl professional-pulse" style={{
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
          <div className="flex flex-wrap justify-center gap-2 mb-8 animate-fade-in-up" style={{
            animationDelay: '0.4s'
          }}>
            {['React', 'Node.js', 'TypeScript', 'Python', 'Azure'].map((skill, index) => (
              <span key={skill} className="px-3 py-1 text-sm bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-full text-cyber-cyan backdrop-blur-sm hover:bg-cyber-cyan/20 transition-all duration-300 animate-scale-in" style={{
                animationDelay: `${0.5 + index * 0.1}s`
              }}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Professional social links with tilt and dot effect */}
        <div className="flex justify-center space-x-6 mb-12 animate-scale-in" style={{
          animationDelay: '0.6s'
        }}>
          {socialLinks.map((social, index) => (
            <a 
              key={index} 
              href={social.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`group relative w-16 h-16 bg-gradient-to-br ${social.bgGradient} ${social.hoverGradient} rounded-2xl flex items-center justify-center transition-all duration-500 hover:scale-110 hover:rotate-12 backdrop-blur-sm border-2 ${social.borderColor} hover:shadow-xl ${social.shadowColor} ${social.color}`}
              aria-label={social.label}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <social.Icon size={24} className="transition-all duration-300 group-hover:scale-110" />
              
              {/* Animated notification dot */}
              <div className={`absolute -top-1 -right-1 w-3 h-3 ${social.dotColor} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse`}></div>
              
              {/* Subtle hover effects */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${social.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              <div className="absolute inset-0 rounded-2xl border-2 border-cyber-cyan/30 scale-95 group-hover:scale-105 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </a>
          ))}
        </div>

        {/* Professional CTA button */}
        <div className="animate-fade-in-up" style={{
          animationDelay: '0.8s'
        }}>
          <Button 
            className="relative bg-cyber-cyan text-black hover:bg-cyber-blue px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 glow-effect hover:shadow-xl hover:shadow-cyber-cyan/30 backdrop-blur-sm border border-cyber-cyan/50 group overflow-hidden" 
            onClick={() => document.getElementById('about')?.scrollIntoView({
              behavior: 'smooth'
            })}
          >
            <span className="relative z-10 flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300">
              Explore My Work →
            </span>
            
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue to-cyber-cyan transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
