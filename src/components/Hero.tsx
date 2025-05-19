
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:py-32 hero-gradient overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Hero Content */}
          <div className="flex-1 text-center md:text-left animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-eco-green-dark to-eco-blue-dark bg-clip-text text-transparent">
                Powering a Sustainable Future
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-2xl mx-auto md:mx-0">
              Ecomotech provides innovative renewable energy and electric mobility solutions for a cleaner, more sustainable world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-eco-green hover:bg-eco-green-dark">
                Explore Solutions
              </Button>
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="flex-1 mt-8 md:mt-0">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-eco-green to-eco-blue rounded-lg blur opacity-30"></div>
              <div className={cn(
                "relative overflow-hidden rounded-lg bg-white shadow-xl animate-fade-in",
                "p-2 md:p-6 h-72 md:h-96"
              )}>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-eco-green/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
