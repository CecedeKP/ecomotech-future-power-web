import React from 'react';
import { Sun, Leaf, Factory, Car, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const services = [
  {
    id: 1,
    title: 'Solar PV Installation',
    description: 'Professional installation services for residential, commercial, and industrial solar systems.',
    icon: Sun,
    url: '/services/solar-pv-installation'
  },
  {
    id: 2,
    title: 'Energy Efficiency Assessment',
    description: 'Comprehensive energy audits to optimize power usage and reduce consumption.',
    icon: Leaf,
    url: '/services/energy-efficiency-assessment'
  },
  {
    id: 3,
    title: 'Solar Farm Maintenance',
    description: 'Regular maintenance and servicing of large-scale solar installations.',
    icon: Factory,
    url: '/services/solar-farm-maintenance'
  },
  {
    id: 4,
    title: 'EV Repair & Maintenance',
    description: 'Specialized repair and maintenance services for electric vehicles and e-mobility products.',
    icon: Car,
    url: '/services/ev-repair-maintenance'
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our expert team provides comprehensive services to ensure your renewable energy and mobility systems operate at peak efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={cn(
                "flex flex-col p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow",
                "animate-fade-up",
                index % 2 === 0 ? "md:border-l-4 border-eco-green" : "md:border-l-4 border-eco-blue"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row gap-5 mb-4">
                <div className={cn(
                  "p-3 rounded-full w-14 h-14 flex items-center justify-center shrink-0",
                  index % 2 === 0 ? "bg-eco-green/10 text-eco-green" : "bg-eco-blue/10 text-eco-blue"
                )}>
                  <service.icon className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
              <Button 
                variant="outline" 
                className="w-full group mt-auto"
                asChild
              >
                <a href={service.url} className="flex items-center justify-center gap-2">
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
