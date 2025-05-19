import React from 'react';
import { Car } from 'lucide-react';
import SolutionPage from '@/components/SolutionPage';

const ElectricMobility = () => {
  return (
    <SolutionPage
      title="Electric Mobility"
      description="Transform your transportation with our range of electric vehicles and mobility solutions. From electric motorcycles and tricycles to fleet management systems, we provide sustainable transportation options that reduce emissions and operating costs."
      icon={Car}
      color="from-eco-green to-eco-blue"
      imageUrl="https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
      features={[
        "Electric motorcycles",
        "Electric tricycles",
        "Fleet management solutions",
        "Charging infrastructure",
        "Battery swapping stations",
        "Maintenance services"
      ]}
      benefits={[
        "Zero emissions transportation",
        "Lower operating costs",
        "Reduced maintenance",
        "Government incentives",
        "Improved air quality",
        "Sustainable urban mobility"
      ]}
    />
  );
};

export default ElectricMobility; 