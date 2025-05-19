import React from 'react';
import { Battery } from 'lucide-react';
import SolutionPage from '@/components/SolutionPage';

const BatteryStorage = () => {
  return (
    <SolutionPage
      title="Battery Storage"
      description="Maximize your renewable energy investment with our advanced battery storage solutions. Store excess energy generated during peak production hours and use it when you need it most, ensuring reliable power supply and energy independence."
      icon={Battery}
      color="from-eco-blue-light to-eco-blue-dark"
      imageUrl="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
      features={[
        "High-capacity lithium-ion batteries",
        "Smart energy management",
        "Seamless solar integration",
        "Backup power capability",
        "Remote monitoring",
        "Scalable solutions"
      ]}
      benefits={[
        "Energy independence",
        "Peak shaving and load shifting",
        "Emergency backup power",
        "Reduced grid dependency",
        "Lower energy costs",
        "Enhanced sustainability"
      ]}
    />
  );
};

export default BatteryStorage; 