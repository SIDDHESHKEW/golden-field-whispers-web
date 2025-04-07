
import { useEffect, useRef } from 'react';

const Story = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

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
    <section id="story" ref={sectionRef} className="relative bg-cream section-padding pb-40">
      <div className="absolute top-0 left-0 w-full h-32 bg-soil-light"></div>
      <div className="absolute top-32 left-0 w-full h-16 bg-cream rounded-t-[50%]"></div>

      <div className="container mx-auto pt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-medium text-soil animate-on-scroll">
            Our Story
          </h2>
          <div className="w-16 h-1 bg-wheat mx-auto my-8 animate-on-scroll"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
          <div className="relative animate-on-scroll">
            <div className="absolute -left-4 -top-4 w-full h-full border-2 border-sage/30 rounded-lg"></div>
            <img 
              src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Rows of crops with sunlight filtering through" 
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-playfair text-soil animate-on-scroll">
              Rooted in Tradition, <br />Growing with Purpose
            </h3>
            <p className="text-soil animate-on-scroll">
              Our journey began in 1978 when the Robertson family acquired a plot of land that had been overtaken by industrial farming. With determination and a deep respect for nature's wisdom, they set out to restore the soil to its former glory.
            </p>
            <p className="text-soil animate-on-scroll">
              Forty years later, our farm stands as a testament to sustainable agriculture—a place where we work in harmony with natural cycles, prioritize biodiversity, and cultivate food that nourishes both people and the planet.
            </p>
            <p className="text-soil animate-on-scroll">
              Every plant we grow and every practice we implement is guided by our commitment to be caretakers of this land for future generations. We believe that when we treat the earth with reverence, it responds with abundance.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          <div className="bg-cream-light p-8 rounded-lg shadow-sm border border-sage/10 transform hover:-translate-y-1 transition-transform duration-300 animate-on-scroll">
            <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-xl font-playfair font-medium text-soil">Sustainable Practices</h4>
            <p className="text-soil-light mt-3">We employ regenerative farming techniques that build soil health, conserve water, and foster biodiversity.</p>
          </div>
          <div className="bg-cream-light p-8 rounded-lg shadow-sm border border-sage/10 transform hover:-translate-y-1 transition-transform duration-300 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
              </svg>
            </div>
            <h4 className="text-xl font-playfair font-medium text-soil">Local Community</h4>
            <p className="text-soil-light mt-3">We believe in strengthening our local food system and creating meaningful connections with our community.</p>
          </div>
          <div className="bg-cream-light p-8 rounded-lg shadow-sm border border-sage/10 transform hover:-translate-y-1 transition-transform duration-300 animate-on-scroll" style={{ animationDelay: '0.4s' }}>
            <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
              </svg>
            </div>
            <h4 className="text-xl font-playfair font-medium text-soil">Seasonal Rhythms</h4>
            <p className="text-soil-light mt-3">We embrace the natural cycles of growth and rest, producing food that's in harmony with nature's seasons.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
