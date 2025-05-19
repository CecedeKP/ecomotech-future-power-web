
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6 animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-bold">About Ecomotech</h2>
              <p className="text-gray-600">
                Founded with a vision of accelerating the world's transition to sustainable energy, Ecomotech provides cutting-edge renewable energy solutions and electric mobility products.
              </p>
              <p className="text-gray-600">
                Our team of experts works tirelessly to deliver the most efficient and reliable clean energy systems tailored to the unique needs of our clients, whether residential, commercial, or industrial.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  'Certified professional team',
                  '10+ years industry experience',
                  'Sustainable business practices',
                  'Customized energy solutions',
                  'Top-tier product quality',
                  'Comprehensive after-sales support'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-eco-green" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-eco-green to-eco-blue rounded-lg blur opacity-30"></div>
              <Card className="relative overflow-hidden h-72 sm:h-80 md:h-96">
                <CardContent className="p-0 h-full">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1469474968028-56623f02e42e')] bg-cover bg-center"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/50 to-transparent flex flex-col justify-end p-6">
                    <div className="text-white space-y-2">
                      <h3 className="text-xl font-semibold">Our Mission</h3>
                      <p className="text-sm sm:text-base text-white/90">
                        To accelerate the world's transition to sustainable energy through innovative solutions and exceptional service.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
