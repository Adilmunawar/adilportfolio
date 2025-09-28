
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Play, Pause, Code2, Sparkles } from 'lucide-react';
import { useState } from 'react';

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'AdiNox',
      description: 'A cutting-edge web application built with modern technologies featuring responsive design and advanced functionality.',
      longDescription: 'AdiNox is a comprehensive web platform that showcases modern development practices with React, TypeScript, and advanced UI components. Features include real-time data processing, responsive design, and optimized performance.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
      github: 'https://github.com/adilmunawar/adinox',
      live: 'https://adinox.vercel.app',
      status: 'live',
      statusColor: 'text-emerald-400',
      statusBg: 'bg-emerald-500/10',
      statusBorder: 'border-emerald-400/20',
      statusIcon: Play,
      gradient: 'from-emerald-500/5 to-green-500/5',
      hoverGradient: 'hover:from-emerald-500/15 hover:to-green-500/15',
      borderColor: 'border-emerald-400/20 hover:border-emerald-400/40',
      accentColor: 'text-emerald-400'
    },
    {
      title: 'Aditron',
      description: 'An innovative platform showcasing advanced web technologies with sleek design and powerful features.',
      longDescription: 'Aditron demonstrates expertise in full-stack development with advanced features like real-time updates, interactive dashboards, and seamless user experience across all devices.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
      tech: ['Next.js', 'React', 'MongoDB', 'Express'],
      github: 'https://github.com/adilmunawar/aditron',
      live: 'https://aditron.vercel.app',
      status: 'paused',
      statusColor: 'text-amber-400',
      statusBg: 'bg-amber-500/10',
      statusBorder: 'border-amber-400/20',
      statusIcon: Pause,
      gradient: 'from-amber-500/5 to-orange-500/5',
      hoverGradient: 'hover:from-amber-500/15 hover:to-orange-500/15',
      borderColor: 'border-amber-400/20 hover:border-amber-400/40',
      accentColor: 'text-amber-400'
    },
    {
      title: 'AdiCorp',
      description: 'A sophisticated corporate platform featuring modern design principles and enterprise-level functionality.',
      longDescription: 'AdiCorp represents enterprise-grade development with advanced authentication, data visualization, and comprehensive admin panels. Built with scalability and performance in mind.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      tech: ['React', 'Python', 'PostgreSQL', 'Docker'],
      github: 'https://github.com/adilmunawar/adicorp',
      live: 'https://adicorp.vercel.app',
      status: 'development',
      statusColor: 'text-blue-400',
      statusBg: 'bg-blue-500/10',
      statusBorder: 'border-blue-400/20',
      statusIcon: Code2,
      gradient: 'from-blue-500/5 to-cyan-500/5',
      hoverGradient: 'hover:from-blue-500/15 hover:to-cyan-500/15',
      borderColor: 'border-blue-400/20 hover:border-blue-400/40',
      accentColor: 'text-blue-400'
    }
  ];

  const getStatusText = (status: string) => {
    switch (status) {
      case 'live': return 'Live';
      case 'paused': return 'Paused';
      case 'development': return 'In Development';
      default: return status;
    }
  };

  return (
    <section id="projects" className="min-h-screen py-20 px-4 relative overflow-hidden bg-gradient-to-b from-cyber-dark to-gray-900">
      {/* Dark theme background */}
      <div className="absolute inset-0 bg-cyber-dark/90"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Floating background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl animate-float-delayed"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-green-500/3 to-emerald-500/3 rounded-full blur-3xl animate-drift-1"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-block mb-8">
            <span className="text-cyber-cyan text-sm font-semibold tracking-widest uppercase bg-cyber-cyan/5 px-6 py-3 rounded-full border border-cyber-cyan/20 backdrop-blur-sm">
              <Sparkles className="inline w-4 h-4 mr-2" />
              Featured Work
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-gradient-slow drop-shadow-2xl">
            My Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Explore my latest creations showcasing modern web technologies, 
            <span className="text-cyber-cyan font-semibold"> innovative solutions</span>, and 
            cutting-edge design principles
          </p>
        </div>

        {/* Enhanced projects grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`group relative bg-gray-900/40 backdrop-blur-xl border-2 ${project.borderColor} rounded-3xl overflow-hidden transition-all duration-700 hover:scale-[1.02] cursor-pointer animate-scale-in shadow-2xl hover:shadow-3xl`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Status badge */}
              <div className="absolute top-4 right-4 z-20">
                <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${project.statusBg} border ${project.statusBorder} backdrop-blur-sm`}>
                  <project.statusIcon size={12} className={project.statusColor} />
                  <span className={`text-xs font-semibold ${project.statusColor}`}>
                    {getStatusText(project.status)}
                  </span>
                </div>
              </div>

              {/* Enhanced image container */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                
                {/* Overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                {/* Floating action buttons */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 flex gap-4 z-20">
                  <Button
                    size="sm"
                    className="bg-cyber-cyan/90 text-black hover:bg-cyber-cyan rounded-full px-4 py-2 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-110"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.live, '_blank');
                    }}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-gray-800/60 text-gray-200 border-gray-600/30 hover:bg-gray-700/60 rounded-full px-4 py-2 backdrop-blur-sm transition-all duration-300 hover:scale-110"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.github, '_blank');
                    }}
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                </div>
              </div>

              {/* Enhanced content */}
              <div className="p-8 relative">
                {/* Tech stack pills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 text-xs rounded-full bg-gray-800/40 border border-gray-700/50 ${project.accentColor} backdrop-blur-sm transition-all duration-300 hover:bg-gray-700/60 hover:scale-105`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-200 mb-3 group-hover:text-cyber-cyan transition-colors duration-500">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors duration-500 leading-relaxed">
                  {hoveredProject === index ? project.longDescription : project.description}
                </p>

                {/* Action buttons */}
                <div className="flex gap-3 pt-4 border-t border-gray-700/30">
                  <Button
                    size="sm"
                    className={`flex-1 bg-gray-800/40 border border-gray-700/50 ${project.accentColor} hover:bg-gray-700/60 hover:text-white transition-all duration-500 hover:scale-105 backdrop-blur-sm rounded-xl`}
                    onClick={() => window.open(project.live, '_blank')}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    View Live
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-gray-700/50 text-gray-400 hover:bg-gray-800/40 hover:text-gray-200 transition-all duration-500 hover:scale-105 backdrop-blur-sm rounded-xl"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github size={16} className="mr-2" />
                    GitHub
                  </Button>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-gradient-to-r ${project.gradient} blur-xl`}></div>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className={`absolute inset-0 rounded-3xl border-2 ${project.borderColor} animate-pulse`}></div>
              </div>
            </Card>
          ))}
        </div>

        {/* Enhanced CTA section */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="relative inline-block">
            <Button 
              className="bg-gradient-to-r from-cyber-cyan to-blue-500 text-black hover:from-blue-500 hover:to-purple-500 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-700 hover:scale-110 shadow-2xl shadow-cyber-cyan/20 hover:shadow-blue-500/30 backdrop-blur-sm border border-white/20 group relative overflow-hidden"
              onClick={() => window.open('https://github.com/adilmunawar', '_blank')}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Github size={20} />
                View All Projects
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
              
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
