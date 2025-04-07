
import { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Journal = () => {
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

  const journalPosts = [
    {
      title: "The Spring Awakening",
      category: "Seasons",
      date: "April 12, 2025",
      excerpt: "As the first green shoots emerge, we reflect on the quiet renewal taking place beneath the soil and our preparations for the growing season ahead.",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Harvesting Summer's Bounty",
      category: "Field Notes",
      date: "July 8, 2025",
      excerpt: "Our fields are bursting with color and life as we gather tomatoes, peppers, and stone fruits. Here's how we preserve this abundance for cooler months.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Autumn Feast: Squash Soup Recipe",
      category: "Recipes",
      date: "October 15, 2025",
      excerpt: "Our kitchen's celebration of fall's harvest with a warming butternut squash soup featuring herbs from our garden and local goat cheese.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="journal" ref={sectionRef} className="bg-sage/10 section-padding">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-medium text-soil animate-on-scroll">
            Journal
          </h2>
          <div className="w-16 h-1 bg-wheat mx-auto my-8 animate-on-scroll"></div>
          <p className="text-lg text-soil-light animate-on-scroll">
            Stories from the field, seasonal reflections, and recipes that celebrate 
            the farm's bounty throughout the year.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {journalPosts.map((post, index) => (
            <div 
              key={index} 
              className="bg-cream rounded-lg overflow-hidden shadow-sm border border-sage/10 hover:shadow-md transition-shadow duration-300 animate-on-scroll"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-sage-dark bg-sage/10 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-soil-light">{post.date}</span>
                </div>
                <h3 className="text-lg font-playfair text-soil mb-3">
                  {post.title}
                </h3>
                <p className="text-soil-light text-sm mb-4">
                  {post.excerpt}
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-sage font-medium hover:text-sage-dark transition-colors"
                >
                  Read more
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button className="bg-sage hover:bg-sage-dark text-cream-light px-8">
            View All Journal Entries
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Journal;
