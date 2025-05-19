import React from 'react';
import { Wind } from 'lucide-react';
import SolutionPage from '@/components/SolutionPage';

const WindEnergy = () => {
  return (
    <SolutionPage
      title="Wind Energy"
      description="Harness the power of wind with our small-scale wind turbine solutions. Ideal for rural and remote locations with good wind resources, our wind energy systems provide reliable, clean energy generation for various applications."
      icon={Wind}
      color="from-eco-blue-dark to-eco-blue-light"
      imageUrl="https://images.unsplash.com/photo-1541872703-74c5e44368f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      features={[
        "Small-scale wind turbines",
        "Hybrid wind-solar systems",
        "Grid-tied and off-grid options",
        "Remote monitoring",
        "Low maintenance design",
        "Custom installation"
      ]}
      benefits={[
        "Clean, renewable energy",
        "Energy independence",
        "Low operating costs",
        "Reduced carbon footprint",
        "Suitable for remote locations",
        "Long-term energy security"
      ]}
    />
  );
};

export default WindEnergy; 