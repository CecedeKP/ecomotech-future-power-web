
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { SolarPanel, Battery, Car, Wind, Plug, Factory } from 'lucide-react';

const solutions = [
  {
    id: 1,
    title: 'Solar PV Systems',
    description: 'Residential, commercial, and industrial solar photovoltaic systems for clean energy production.',
    icon: SolarPanel,
    color: 'from-eco-green-light to-eco-green-dark'
  },
  {
    id: 2,
    title: 'Battery Storage',
    description: 'Energy storage solutions for homes and businesses to maximize renewable energy usage.',
    icon: Battery,
    color: 'from-eco-blue-light to-eco-blue-dark'
  },
  {
    id: 3,
    title: 'Electric Mobility',
    description: 'Electric motorcycles, tricycles, and fleet solutions for sustainable transportation.',
    icon: Car,
    color: 'from-eco-green to-eco-blue'
  },
  {
    id: 4,
    title: 'Charging Stations',
    description: 'Solar PV-powered charging stations for electric vehicles and other e-mobility solutions.',
    icon: Plug,
    color: 'from-eco-blue to-eco-green'
  },
  {
    id: 5,
    title: 'Wind Energy',
    description: 'Small-scale wind turbines ideal for rural and remote locations with good wind resources.',
    icon: Wind,
    color: 'from-eco-blue-dark to-eco-blue-light'
  },
  {
    id: 6,
    title: 'Industrial Solutions',
    description: 'Custom renewable energy systems for manufacturing facilities and industrial applications.',
    icon: Factory,
    color: 'from-eco-green-dark to-eco-green-light'
  },
];

const Solutions = () => {
  return (
    <section id="solutions" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Renewable Solutions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our range of sustainable energy and mobility solutions designed to reduce carbon footprint and promote clean energy adoption.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {solutions.map((solution) => (
            <Card key={solution.id} className="overflow-hidden card-hover border border-gray-100">
              <CardContent className="p-6">
                <div className={`p-3 rounded-full bg-gradient-to-r ${solution.color} w-14 h-14 flex items-center justify-center mb-4`}>
                  <solution.icon className="text-white h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
