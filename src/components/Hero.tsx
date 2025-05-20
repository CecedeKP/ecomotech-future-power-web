import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const backgroundImages = [
  'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072', // Solar farm
  'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072', // Solar panels close up
  'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070', // Wind turbines
  'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013', // Electric vehicle charging
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
        setIsTransitioning(false);
      }, 1000); // This matches the CSS transition duration
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[80vh] flex items-center">
      {/* Background Images with Overlay */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <div
            key={image}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000",
              index === currentImageIndex && !isTransitioning ? "opacity-100" : "opacity-0"
            )}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-24">
        <div className="max-w-3xl">
          <div className="animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white">
              Powering a Sustainable Future
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl">
              Ecomotech provides innovative renewable energy and electric mobility solutions for a cleaner, more sustainable world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-eco-green hover:bg-eco-green-dark text-white">
                Explore Solutions
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Image Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(() => {
                setCurrentImageIndex(index);
                setIsTransitioning(false);
              }, 1000);
            }}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              index === currentImageIndex ? "bg-white w-4" : "bg-white/50 hover:bg-white/75"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
