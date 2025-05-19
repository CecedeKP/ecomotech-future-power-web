import React from 'react';
import { Factory } from 'lucide-react';
import SolutionPage from '@/components/SolutionPage';

const IndustrialSolutions = () => {
  return (
    <SolutionPage
      title="Industrial Solutions"
      description="Power your industrial operations with our custom renewable energy systems. We design and implement comprehensive energy solutions for manufacturing facilities and industrial applications, helping you reduce costs and meet sustainability goals."
      icon={Factory}
      color="from-eco-green-dark to-eco-green-light"
      imageUrl="https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      features={[
        "Custom energy systems",
        "Large-scale solar installations",
        "Industrial battery storage",
        "Energy management systems",
        "Process optimization",
        "24/7 monitoring"
      ]}
      benefits={[
        "Reduced energy costs",
        "Enhanced sustainability",
        "Improved efficiency",
        "Regulatory compliance",
        "Energy security",
        "Competitive advantage"
      ]}
    />
  );
};

export default IndustrialSolutions; 