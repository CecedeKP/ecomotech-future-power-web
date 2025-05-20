
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, MapPinIcon } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  description: string;
  imageUrl: string;
  completionDate: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const getCategoryName = (categoryId: string) => {
    const categoryMap: Record<string, string> = {
      'solar-pv': 'Solar PV',
      'battery-storage': 'Battery Storage',
      'charging-stations': 'Charging Stations',
      'electric-transport': 'Electric Transport',
      'street-lighting': 'Street Lighting'
    };
    
    return categoryMap[categoryId] || categoryId;
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <Badge 
          className="absolute top-3 right-3 bg-gradient-to-r from-eco-green to-eco-blue-dark"
        >
          {getCategoryName(project.category)}
        </Badge>
      </div>
      
      <CardHeader className="pb-2">
        <h3 className="font-bold text-xl">{project.title}</h3>
      </CardHeader>
      
      <CardContent>
        <p className="text-gray-700 mb-4">{project.description}</p>
        
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <MapPinIcon className="h-4 w-4 mr-2" />
          <span>{project.location}</span>
        </div>
        
        <div className="flex items-center text-sm text-gray-500">
          <CalendarIcon className="h-4 w-4 mr-2" />
          <span>Completed: {project.completionDate}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
