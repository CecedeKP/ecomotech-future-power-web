import React from 'react';
import Navbar from '@/components/Navbar';
import ProjectCategories from '@/components/ProjectCategories';
import { Toaster } from '@/components/ui/sonner';

const Projects = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-eco-green to-eco-blue-dark bg-clip-text text-transparent mb-4">
              Our Projects
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Explore our successfully executed renewable energy and electric mobility projects 
              across various sectors, demonstrating our commitment to sustainable solutions.
            </p>
          </div>
          
          <ProjectCategories />
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Projects;
