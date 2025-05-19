import React from 'react';
import { Plug } from 'lucide-react';
import SolutionPage from '@/components/SolutionPage';

const ChargingStations = () => {
  return (
    <SolutionPage
      title="Charging Stations"
      description="Power your electric vehicles with our solar-powered charging stations. Our comprehensive charging infrastructure solutions are designed for residential, commercial, and public spaces, ensuring convenient and sustainable charging options for all electric vehicle users."
      icon={Plug}
      color="from-eco-blue to-eco-green"
      imageUrl="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
      features={[
        "Solar-powered charging stations",
        "Fast charging capability",
        "Smart charging management",
        "Multiple connector types",
        "Payment integration",
        "Remote monitoring"
      ]}
      benefits={[
        "Renewable energy charging",
        "Reduced operating costs",
        "Enhanced customer attraction",
        "Future-proof infrastructure",
        "Environmental leadership",
        "Revenue generation opportunity"
      ]}
    />
  );
};

export default ChargingStations; 