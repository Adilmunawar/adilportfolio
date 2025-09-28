
import { Card } from '@/components/ui/card';
import { Code, Smartphone, Search, Wrench, TrendingUp, Zap } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      Icon: Code,
      title: 'Full-Stack Development',
      description: 'End-to-end web application development using modern technologies like React, Node.js, and cloud platforms. Creating scalable and efficient solutions for your business needs.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      Icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Cross-platform mobile applications with seamless user experiences. Specializing in React Native and hybrid app development with native performance.',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      Icon: TrendingUp,
      title: 'Digital Solutions',
      description: 'Custom digital solutions including corporate management systems, social platforms, and automation tools designed to streamline business operations.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      Icon: Wrench,
      title: 'System Integration',
      description: 'Seamless integration of various systems and APIs to create unified digital ecosystems. Database management and server configuration expertise.',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      Icon: Search,
      title: 'Performance Optimization',
      description: 'Website and application performance optimization, SEO implementation, and user experience enhancement to maximize your digital presence.',
      gradient: 'from-teal-500 to-blue-500',
    },
    {
      Icon: Zap,
      title: 'Rapid Prototyping',
      description: 'Quick development of MVPs and prototypes to validate ideas and accelerate time-to-market using agile development methodologies.',
      gradient: 'from-yellow-500 to-orange-500',
    },
  ];

  return (
    <section id="services" className="min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark via-cyber-gray/10 to-cyber-dark"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient animate-fade-in-up drop-shadow-lg">
            Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up drop-shadow-md" style={{ animationDelay: '0.2s' }}>
            Delivering cutting-edge solutions with modern technologies and best practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group relative p-8 bg-cyber-gray/30 border-cyber-cyan/30 hover:border-cyber-cyan/60 transition-all duration-700 hover:scale-105 backdrop-blur-xl animate-scale-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-all duration-700`}></div>
              
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyber-cyan/20 to-cyber-blue/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              
              <div className="relative text-center">
                <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 shadow-lg group-hover:shadow-2xl backdrop-blur-sm border border-white/20`}>
                  <service.Icon size={36} className="text-white drop-shadow-lg group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white drop-shadow-md group-hover:text-cyber-cyan transition-colors duration-500">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-500 drop-shadow-sm">{service.description}</p>
              </div>

              {/* Hover border animation */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyber-cyan/40 rounded-lg transition-all duration-700"></div>
              
              {/* Corner accents */}
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-cyber-cyan/30 group-hover:border-cyber-cyan/60 transition-colors duration-500"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-cyber-cyan/30 group-hover:border-cyber-cyan/60 transition-colors duration-500"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
