'use client';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const sections = navItems.map(item => document.querySelector(item.href) as HTMLElement);
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
          const sectionId = section.getAttribute('id');
          if (sectionId) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getSectionIdFromHref = (href: string) => href.substring(1);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 border-b border-cyber-cyan/20 transition-all duration-300",
      scrolled ? "bg-cyber-dark/80 backdrop-blur-lg" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="#home" className="text-2xl font-bold text-gradient animate-shimmer">
              ADILMUNAWAR
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-gray-300 hover:text-cyber-cyan px-3 py-2 text-sm font-medium transition-all duration-300 relative group",
                    activeSection === getSectionIdFromHref(item.href) && "text-cyber-cyan"
                  )}
                >
                  {item.name}
                  <span className={cn(
                    "absolute bottom-0 left-0 w-0 h-0.5 bg-cyber-cyan transition-all duration-300 group-hover:w-full",
                    activeSection === getSectionIdFromHref(item.href) && "w-full"
                  )}></span>
                  
                  <div className="absolute inset-0 bg-cyber-cyan/10 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></div>
                </Link>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-cyber-cyan transition-colors duration-300"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden transform transition-transform duration-300 ease-in-out">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-cyber-dark/90 backdrop-blur-lg border-t border-cyber-cyan/20">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-cyber-cyan block px-3 py-2 text-base font-medium transition-all duration-300 hover:bg-cyber-cyan/10 rounded animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

    