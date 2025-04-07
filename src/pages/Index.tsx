
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Story from '@/components/Story';
import Harvest from '@/components/Harvest';
import Visit from '@/components/Visit';
import Journal from '@/components/Journal';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollAnimation from '@/components/ScrollAnimation';

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "Earthen Harvest - Sustainable Farming";
  }, []);

  return (
    <div className="bg-cream">
      {/* Grain overlay for texture */}
      <div className="grain-overlay"></div>
      
      {/* Main content */}
      <Navbar />
      <Hero />
      <Story />
      <Harvest />
      <Visit />
      <Journal />
      <Contact />
      <Footer />
      
      {/* Initialize scroll animations */}
      <ScrollAnimation />
    </div>
  );
};

export default Index;
