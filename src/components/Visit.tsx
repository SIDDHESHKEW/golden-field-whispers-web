
import { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Visit = () => {
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

  const activities = [
    {
      title: "Farm Tours",
      description: "Join us for a guided walk through our fields, orchards, and gardens. Learn about our growing practices and the story behind our farm.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Seasonal Workshops",
      description: "Get hands-on with seasonal activities like honey harvesting, fruit picking, or learning to make preserves from our kitchen garden.",
      image: "https://images.unsplash.com/photo-1589923188651-268a9765e432?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Farm-to-Table Dinners",
      description: "Experience the true meaning of fresh with our monthly communal dinners featuring the best seasonal ingredients from our farm.",
      image: "https://images.unsplash.com/photo-1600046452754-25c780a99f73?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="visit" ref={sectionRef} className="relative bg-cream section-padding">
      <div className="absolute top-0 left-0 w-full h-32 bg-sage/10"></div>
      <div className="absolute top-32 left-0 w-full h-16 bg-cream rounded-t-[50%]"></div>
      
      <div className="container mx-auto pt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-medium text-soil animate-on-scroll">
            Visit the Land
          </h2>
          <div className="w-16 h-1 bg-wheat mx-auto my-8 animate-on-scroll"></div>
          <p className="text-lg text-soil-light animate-on-scroll">
            Experience the magic of our farm firsthand. Connect with the land, 
            learn about sustainable agriculture, and create lasting memories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {activities.map((activity, index) => (
            <div key={index} className="animate-on-scroll" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="relative overflow-hidden rounded-lg h-60 mb-4">
                <img 
                  src={activity.image} 
                  alt={activity.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-playfair text-soil mb-2">
                {activity.title}
              </h3>
              <p className="text-soil-light">
                {activity.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 relative animate-on-scroll">
          {/* Decorative background elements */}
          <div className="absolute -left-4 -top-4 w-20 h-20 bg-wheat/20 rounded-full"></div>
          <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-sage/10 rounded-full"></div>
          
          <div className="relative bg-cream-light border border-sage/10 p-10 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-playfair text-soil mb-4">
                  Plan Your Visit
                </h3>
                <p className="text-soil-light mb-6">
                  We welcome visitors throughout the growing season. Whether you're looking 
                  for a family outing, a peaceful escape, or a chance to learn about 
                  sustainable farming, we have something for everyone.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-sage mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <h4 className="font-medium text-soil">Location</h4>
                      <p className="text-soil-light">123 Harvest Road, Greenfield, CA 95432</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-sage mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-medium text-soil">Hours</h4>
                      <p className="text-soil-light">Wednesday - Sunday: 9am - 5pm<br />Farm Stand: Daily 8am - 6pm</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <form className="bg-cream p-6 rounded-lg border border-sage/20">
                  <h4 className="text-xl font-playfair text-soil mb-4">
                    Book a Tour
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-soil mb-1">Name</label>
                      <input 
                        type="text" 
                        id="name"
                        className="w-full px-4 py-2 border border-sage/20 rounded-md focus:outline-none focus:ring-2 focus:ring-sage"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-soil mb-1">Email</label>
                      <input 
                        type="email" 
                        id="email"
                        className="w-full px-4 py-2 border border-sage/20 rounded-md focus:outline-none focus:ring-2 focus:ring-sage"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-soil mb-1">Preferred Date</label>
                      <input 
                        type="date" 
                        id="date"
                        className="w-full px-4 py-2 border border-sage/20 rounded-md focus:outline-none focus:ring-2 focus:ring-sage"
                      />
                    </div>
                    <div>
                      <label htmlFor="guests" className="block text-sm font-medium text-soil mb-1">Number of Guests</label>
                      <select 
                        id="guests"
                        className="w-full px-4 py-2 border border-sage/20 rounded-md focus:outline-none focus:ring-2 focus:ring-sage"
                      >
                        <option value="1-2">1-2 guests</option>
                        <option value="3-5">3-5 guests</option>
                        <option value="6-10">6-10 guests</option>
                        <option value="10+">10+ guests</option>
                      </select>
                    </div>
                    <Button className="w-full bg-sage hover:bg-sage-dark text-cream-light">
                      Request Booking
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visit;
