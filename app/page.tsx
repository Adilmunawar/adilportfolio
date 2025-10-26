import Spline from '@splinetool/react-spline/next';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-cyber-dark">
      <div style={{
        width: '105vw',
        height: '105vh',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%) scale(1.1)',
        zIndex: 0,
        pointerEvents: 'none'
      }}>
        <Spline
          scene="https://prod.spline.design/AvF-dvRCaMAo12qX/scene.splinecode"
        />
      </div>
      <Navigation />
      
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}
