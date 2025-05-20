
import React, { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import { Sun, BatteryCharging, Plug, Bus, Lightbulb } from 'lucide-react';

const categories = [
  {
    id: 'all',
    name: 'All Projects',
    icon: null,
  },
  {
    id: 'solar-pv',
    name: 'Solar PV',
    icon: Sun,
  },
  {
    id: 'battery-storage',
    name: 'Battery Storage',
    icon: BatteryCharging,
  },
  {
    id: 'charging-stations',
    name: 'Charging Stations', 
    icon: Plug,
  },
  {
    id: 'electric-transport',
    name: 'Electric Transport',
    icon: Bus,
  },
  {
    id: 'street-lighting',
    name: 'Street Lighting',
    icon: Lightbulb,
  },
];

const projects = [
  {
    id: 1,
    title: 'Residential Solar Array',
    category: 'solar-pv',
    location: 'Accra, Ghana',
    description: 'A 10kW residential solar installation powering a family home with clean energy.',
    imageUrl: 'https://images.unsplash.com/photo-1592833167665-45fa96d33b8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    completionDate: 'January 2023',
  },
  {
    id: 2,
    title: 'Commercial Office Building',
    category: 'solar-pv',
    location: 'Lagos, Nigeria',
    description: '50kW rooftop solar system for a corporate office building reducing grid dependency.',
    imageUrl: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80',
    completionDate: 'March 2023',
  },
  {
    id: 3,
    title: 'Healthcare Facility Backup',
    category: 'battery-storage',
    location: 'Nairobi, Kenya',
    description: '200kWh battery storage system ensuring uninterrupted power for critical medical equipment.',
    imageUrl: 'https://images.unsplash.com/photo-1593867482346-1e390522668f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    completionDate: 'April 2023',
  },
  {
    id: 4,
    title: 'University Microgrid',
    category: 'battery-storage',
    location: 'Cape Town, South Africa',
    description: '500kWh integrated battery storage system for a university campus microgrid.',
    imageUrl: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    completionDate: 'June 2023',
  },
  {
    id: 5,
    title: 'Shopping Mall Charging Hub',
    category: 'charging-stations',
    location: 'Kampala, Uganda',
    description: '10-port EV charging station at a major shopping center with solar canopy integration.',
    imageUrl: 'https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    completionDate: 'August 2023',
  },
  {
    id: 6,
    title: 'Highway Corridor Chargers',
    category: 'charging-stations',
    location: 'Addis Ababa, Ethiopia',
    description: 'Series of fast-charging stations along a 200km highway corridor enabling long-distance EV travel.',
    imageUrl: 'https://images.unsplash.com/photo-1651278146548-14d868356e0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
    completionDate: 'September 2023',
  },
  {
    id: 7,
    title: 'City Bus Fleet Electrification',
    category: 'electric-transport',
    location: 'Kigali, Rwanda',
    description: 'Conversion of 15 city buses to electric power with depot charging infrastructure.',
    imageUrl: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    completionDate: 'October 2023',
  },
  {
    id: 8,
    title: 'Corporate E-Bike Fleet',
    category: 'electric-transport',
    location: 'Dakar, Senegal',
    description: '50 e-bikes deployment for a corporate campus with solar charging stations.',
    imageUrl: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    completionDate: 'November 2023',
  },
  {
    id: 9,
    title: 'Rural Community Lighting',
    category: 'street-lighting',
    location: 'Serengeti Region, Tanzania',
    description: '100 solar street lights installation across 5 previously unelectrified villages.',
    imageUrl: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    completionDate: 'December 2023',
  },
  {
    id: 10,
    title: 'Urban Smart Lighting',
    category: 'street-lighting',
    location: 'Maputo, Mozambique',
    description: '250 smart solar street lights with motion sensing and remote monitoring capabilities.',
    imageUrl: 'https://images.unsplash.com/photo-1542396601-1bf426b43d4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
    completionDate: 'February 2024',
  },
];

const ProjectCategories = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredProjects = projects.filter(project => 
    activeCategory === 'all' ? true : project.category === activeCategory
  );

  const projectStats = categories.map(category => {
    if (category.id === 'all') {
      return { id: category.id, count: projects.length };
    }
    return { 
      id: category.id, 
      count: projects.filter(project => project.category === category.id).length 
    };
  });

  return (
    <div className="space-y-12">
      <div className="flex flex-wrap justify-center gap-3 md:gap-4">
        {categories.map((category) => {
          const count = projectStats.find(stat => stat.id === category.id)?.count || 0;
          const isActive = activeCategory === category.id;
          
          return (
            <Button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              variant={isActive ? "default" : "outline"}
              className={`transition-all px-4 py-2 ${
                isActive 
                  ? "bg-gradient-to-r from-eco-green to-eco-blue-dark text-white" 
                  : "hover:bg-gradient-to-r hover:from-eco-green/10 hover:to-eco-blue-dark/10"
              }`}
            >
              {category.icon && <category.icon className="h-4 w-4 mr-2" />}
              {category.name} ({count})
            </Button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <div className="col-span-3 text-center py-10">
            <p className="text-lg text-gray-500">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCategories;
