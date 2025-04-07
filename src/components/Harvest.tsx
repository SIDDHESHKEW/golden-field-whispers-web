
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

type ProduceItem = {
  id: number;
  name: string;
  season: string;
  image: string;
  description: string;
};

const produceItems: ProduceItem[] = [
  {
    id: 1,
    name: "Heritage Tomatoes",
    season: "Summer",
    image: "https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Our vibrant tomatoes come in a rainbow of colors with rich, complex flavors that store-bought varieties can't match."
  },
  {
    id: 2,
    name: "Winter Squash",
    season: "Fall",
    image: "https://images.unsplash.com/photo-1506917728037-b6af01a7d403?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "From butternut to kabocha, our winter squashes are sweet, nutty, and perfect for hearty cool-weather dishes."
  },
  {
    id: 3,
    name: "Spring Greens",
    season: "Spring",
    image: "https://images.unsplash.com/photo-1524179091875-bf99a9a6af57?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Tender lettuces, spinach, and arugula grown in our hoop houses for early season freshness and vitality."
  },
  {
    id: 4,
    name: "Honey",
    season: "Year-round",
    image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Raw, unfiltered honey produced by our happy bees who pollinate our crops and forage on wildflowers."
  },
  {
    id: 5,
    name: "Heirloom Apples",
    season: "Fall",
    image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Old-variety apples with complex flavors ranging from sweet to tart, perfect for eating fresh or baking."
  },
  {
    id: 6,
    name: "Lavender",
    season: "Summer",
    image: "https://images.unsplash.com/photo-1498733470672-c2ccd552f961?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Fragrant lavender cultivated for culinary use, tea blends, and artisanal bath products."
  }
];

const Harvest = () => {
  const [selectedProduce, setSelectedProduce] = useState<ProduceItem | null>(null);
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
    <section id="harvest" ref={sectionRef} className="bg-sage/10 section-padding">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-medium text-soil animate-on-scroll">
            Our Harvest & Goods
          </h2>
          <div className="w-16 h-1 bg-wheat mx-auto my-8 animate-on-scroll"></div>
          <p className="text-lg text-soil-light animate-on-scroll">
            Our bounty changes with the seasons, reflecting nature's diverse offerings 
            and the rhythms of the earth. Here's what we're currently harvesting and creating.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {produceItems.map((item) => (
            <div 
              key={item.id}
              className="group relative cursor-pointer animate-on-scroll"
              onClick={() => setSelectedProduce(item)}
            >
              <div className="overflow-hidden rounded-lg">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-72 object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-soil-dark/90 to-transparent text-cream">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-playfair">{item.name}</h3>
                  <span className="text-sm bg-wheat text-soil-dark px-3 py-1 rounded-full">
                    {item.season}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Product Detail Modal */}
        {selectedProduce && (
          <div 
            className="fixed inset-0 bg-soil-dark/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedProduce(null)}
          >
            <div 
              className="bg-cream max-w-4xl w-full rounded-lg overflow-hidden shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-full">
                  <img 
                    src={selectedProduce.image} 
                    alt={selectedProduce.name} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-playfair text-soil">{selectedProduce.name}</h3>
                    <span className="text-sm bg-wheat text-soil-dark px-3 py-1 rounded-full">
                      {selectedProduce.season}
                    </span>
                  </div>
                  <p className="text-soil-light mb-6">{selectedProduce.description}</p>

                  <div className="space-y-4">
                    <h4 className="font-playfair text-soil">Growing Practices:</h4>
                    <ul className="space-y-2 text-soil-light">
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-sage mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Organically grown without synthetic chemicals
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-sage mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Hand-harvested at peak ripeness
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-sage mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Grown with regenerative soil practices
                      </li>
                    </ul>
                  </div>

                  <div className="mt-8 flex justify-end">
                    <button 
                      className="px-4 py-2 bg-sage text-cream rounded-full hover:bg-sage-dark transition-colors"
                      onClick={() => setSelectedProduce(null)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Harvest;
