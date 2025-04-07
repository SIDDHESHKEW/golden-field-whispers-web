
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navLinks = [
    { name: 'Our Story', href: '#story' },
    { name: 'Harvest & Goods', href: '#harvest' },
    { name: 'Visit the Land', href: '#visit' },
    { name: 'Journal', href: '#journal' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 lg:px-24',
        scrolled 
          ? 'bg-cream/90 backdrop-blur-sm py-2 shadow-sm' 
          : 'bg-transparent py-4'
      )}
    >
      <div className="flex items-center justify-between">
        <a href="#" className="font-playfair text-2xl font-semibold text-sage-dark">
          Earthen <span className="text-wheat">Harvest</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="relative text-soil transition-colors duration-300 hover:text-sage-dark
                after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 
                after:bottom-0 after:left-0 after:bg-sage-dark after:origin-bottom-right 
                after:transition-transform after:duration-300 hover:after:scale-x-100 
                hover:after:origin-bottom-left"
            >
              {link.name}
            </a>
          ))}
          <Button 
            className="bg-sage hover:bg-sage-dark text-cream-light rounded-full px-6"
          >
            Join The Community
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="flex flex-col space-y-1.5">
            <span className={cn(
              "block w-6 h-0.5 bg-soil transition-transform duration-300",
              mobileMenuOpen && "rotate-45 translate-y-2"
            )}></span>
            <span className={cn(
              "block w-6 h-0.5 bg-soil transition-opacity duration-300",
              mobileMenuOpen && "opacity-0"
            )}></span>
            <span className={cn(
              "block w-6 h-0.5 bg-soil transition-transform duration-300",
              mobileMenuOpen && "-rotate-45 -translate-y-2"
            )}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "lg:hidden absolute top-full left-0 right-0 bg-cream-light shadow-md transition-all duration-300 overflow-hidden",
        mobileMenuOpen ? "max-h-[400px] py-4 border-t border-sage/20" : "max-h-0"
      )}>
        <div className="flex flex-col space-y-3 px-6">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="py-2 text-soil hover:text-sage-dark"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button 
            className="bg-sage hover:bg-sage-dark text-cream-light w-full rounded-full mt-2"
          >
            Join The Community
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
