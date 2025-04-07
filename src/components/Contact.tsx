
import { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      animatedElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="relative bg-cream section-padding">
      <div className="absolute top-0 left-0 w-full h-32 bg-sage/10"></div>
      <div className="absolute top-32 left-0 w-full h-16 bg-cream rounded-t-[50%]"></div>

      <div className="container mx-auto pt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-medium text-soil animate-on-scroll">
            Join Our Community
          </h2>
          <div className="w-16 h-1 bg-wheat mx-auto my-8 animate-on-scroll"></div>
          <p className="text-lg text-soil-light animate-on-scroll">
            Connect with us to learn more about our farm and stay updated on 
            seasonal offerings, events, and opportunities to get involved.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
          <div className="animate-on-scroll">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-soil mb-1">First Name</label>
                  <input 
                    type="text" 
                    id="first-name"
                    className="w-full px-4 py-3 border border-sage/20 rounded-md focus:outline-none focus:ring-2 focus:ring-sage"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-soil mb-1">Last Name</label>
                  <input 
                    type="text" 
                    id="last-name"
                    className="w-full px-4 py-3 border border-sage/20 rounded-md focus:outline-none focus:ring-2 focus:ring-sage"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-soil mb-1">Email</label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full px-4 py-3 border border-sage/20 rounded-md focus:outline-none focus:ring-2 focus:ring-sage"
                />
              </div>
              <div>
                <label htmlFor="interests" className="block text-sm font-medium text-soil mb-1">I'm interested in...</label>
                <select 
                  id="interests"
                  className="w-full px-4 py-3 border border-sage/20 rounded-md focus:outline-none focus:ring-2 focus:ring-sage"
                >
                  <option value="">Select an option</option>
                  <option value="csa">Farm Share/CSA Program</option>
                  <option value="volunteer">Volunteer Opportunities</option>
                  <option value="events">Farm Events & Workshops</option>
                  <option value="wholesale">Wholesale Partnerships</option>
                  <option value="general">General Information</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-soil mb-1">Message</label>
                <textarea 
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-sage/20 rounded-md focus:outline-none focus:ring-2 focus:ring-sage"
                ></textarea>
              </div>
              <div className="flex items-start">
                <input 
                  type="checkbox" 
                  id="newsletter"
                  className="mt-1 focus:ring-sage"
                />
                <label htmlFor="newsletter" className="ml-2 block text-sm text-soil-light">
                  Sign me up for the monthly newsletter with seasonal updates and farm news.
                </label>
              </div>
              <Button className="w-full bg-sage hover:bg-sage-dark text-cream-light py-6">
                Get in Touch
              </Button>
            </form>
          </div>

          <div className="space-y-8 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            <div>
              <h3 className="text-xl font-playfair text-soil mb-4">Visit the Farm</h3>
              <p className="text-soil-light mb-2">123 Harvest Road</p>
              <p className="text-soil-light mb-2">Greenfield, CA 95432</p>
              <p className="text-soil-light">Open Wednesday - Sunday: 9am - 5pm</p>
            </div>
            
            <div>
              <h3 className="text-xl font-playfair text-soil mb-4">Get in Touch</h3>
              <p className="text-soil-light mb-2">info@earthenharvest.com</p>
              <p className="text-soil-light">+1 (555) 123-4567</p>
            </div>

            <div>
              <h3 className="text-xl font-playfair text-soil mb-4">Follow Our Journey</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center text-sage hover:bg-sage hover:text-cream transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center text-sage hover:bg-sage hover:text-cream transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center text-sage hover:bg-sage hover:text-cream transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center text-sage hover:bg-sage hover:text-cream transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="bg-wheat/20 p-6 rounded-lg border border-wheat/30 mt-8">
              <h3 className="text-xl font-playfair text-soil mb-4">Our Newsletter</h3>
              <p className="text-soil-light mb-4">
                Subscribe to our monthly newsletter for seasonal recipes, farm updates, and exclusive offers.
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 border border-sage/20 rounded-l-md focus:outline-none focus:ring-2 focus:ring-sage"
                />
                <Button className="bg-sage hover:bg-sage-dark text-cream-light rounded-l-none">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
