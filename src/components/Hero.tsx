
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create pollen particle effect
    const container = particlesRef.current;
    if (!container) return;

    // Remove any existing particles
    container.innerHTML = '';

    // Add new particles
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      
      // Randomize particle positions and animations
      const size = Math.random() * 6 + 2;
      const left = Math.random() * 100;
      const animationDuration = Math.random() * 12 + 8;
      const animationDelay = Math.random() * 5;
      const opacity = Math.random() * 0.3 + 0.2;

      particle.className = 'absolute rounded-full bg-wheat';
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${left}%`;
      particle.style.bottom = '5%';
      particle.style.opacity = opacity.toString();
      particle.style.animation = `pollen-float ${animationDuration}s ease-in-out ${animationDelay}s infinite`;

      container.appendChild(particle);
    }
  }, []);

  return (
    <section className="relative pt-20 min-h-screen flex items-center bg-soil-light overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-soil/60 to-soil-dark/80"></div>
      </div>

      {/* Pollen particles container */}
      <div ref={particlesRef} className="absolute inset-0 overflow-hidden z-10"></div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-20 mt-10">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-medium text-cream animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            Growing with <br />
            <span className="text-wheat">Nature's Wisdom</span>
          </h1>
          
          <p className="text-lg md:text-xl text-cream-light/90 max-w-2xl animate-fade-in-up opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            Sustainable farming that honors the earth's quiet beauty and nurtures the 
            timeless bond between people and the land.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
            <Button className="bg-sage hover:bg-sage-dark text-cream-light font-medium text-lg rounded-full px-8 py-6">
              Explore Our Harvest
            </Button>
            <Button variant="outline" className="bg-transparent border-cream text-cream-light hover:bg-cream-light/10 font-medium text-lg rounded-full px-8 py-6">
              Our Story
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-cream-light text-sm mb-2">Scroll</span>
          <svg className="w-6 h-6 text-cream-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
