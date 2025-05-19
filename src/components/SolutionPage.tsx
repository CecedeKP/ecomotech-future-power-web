import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SolutionPageProps {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  features: string[];
  benefits: string[];
  imageUrl: string;
}

const SolutionPage: React.FC<SolutionPageProps> = ({
  title,
  description,
  icon: Icon,
  color,
  features,
  benefits,
  imageUrl
}) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            className="mb-8 group"
            asChild
          >
            <a href="/#solutions" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Solutions
            </a>
          </Button>
          
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1">
              <div className={`inline-block p-3 rounded-full bg-gradient-to-r ${color} mb-6`}>
                <Icon className="text-white h-8 w-8" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
              <p className="text-xl text-gray-600 mb-8">{description}</p>
              <Button size="lg" className="bg-eco-green hover:bg-eco-green-dark">
                Get Started
              </Button>
            </div>
            
            <div className="w-full md:w-1/2">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-video relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
                    <img
                      src={imageUrl}
                      alt={title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{feature}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={cn(
                  "p-6 rounded-lg",
                  index % 2 === 0 ? "bg-eco-green/5" : "bg-eco-blue/5"
                )}
              >
                <h3 className="text-lg font-semibold mb-2">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about our {title.toLowerCase()} and how we can help you achieve your sustainability goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-eco-green hover:bg-eco-green-dark">
              Contact Us
            </Button>
            <Button size="lg" variant="outline">
              Request a Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionPage; 