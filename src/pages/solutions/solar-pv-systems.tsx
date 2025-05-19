import React from 'react';
import { Sun } from 'lucide-react';
import SolutionPage from '@/components/SolutionPage';

const SolarPVSystems = () => {
  return (
    <SolutionPage
      title="Solar PV Systems"
      description="Harness the power of the sun with our comprehensive solar photovoltaic systems, designed for residential, commercial, and industrial applications. Our solutions help you generate clean, renewable energy while reducing your carbon footprint and energy costs."
      icon={Sun}
      color="from-eco-green-light to-eco-green-dark"
      imageUrl="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
      features={[
        "High-efficiency solar panels",
        "Smart monitoring systems",
        "Grid-tied and off-grid options",
        "Battery storage integration",
        "Professional installation",
        "Comprehensive maintenance"
      ]}
      benefits={[
        "Significant reduction in electricity bills",
        "Lower carbon footprint",
        "Increased property value",
        "Energy independence",
        "Government incentives and tax benefits",
        "Long-term investment with high ROI"
      ]}
    />
  );
};

export default SolarPVSystems; 