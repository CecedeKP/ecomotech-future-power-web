import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X, Sun, Leaf, Factory, Car } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from 'react-router-dom';

const solutions = [
  {
    id: 1,
    title: 'Solar PV Systems',
    description: 'Residential, commercial, and industrial solar photovoltaic systems for clean energy production.',
    url: '/solutions/solar-pv-systems'
  },
  {
    id: 2,
    title: 'Battery Storage',
    description: 'Energy storage solutions for homes and businesses to maximize renewable energy usage.',
    url: '/solutions/battery-storage'
  },
  {
    id: 3,
    title: 'Electric Mobility',
    description: 'Electric motorcycles, tricycles, and fleet solutions for sustainable transportation.',
    url: '/solutions/electric-mobility'
  },
  {
    id: 4,
    title: 'Charging Stations',
    description: 'Solar PV-powered charging stations for electric vehicles and other e-mobility solutions.',
    url: '/solutions/charging-stations'
  },
  {
    id: 5,
    title: 'Wind Energy',
    description: 'Small-scale wind turbines ideal for rural and remote locations with good wind resources.',
    url: '/solutions/wind-energy'
  },
  {
    id: 6,
    title: 'Industrial Solutions',
    description: 'Custom renewable energy systems for manufacturing facilities and industrial applications.',
    url: '/solutions/industrial-solutions'
  },
];

const services = [
  {
    id: 1,
    title: 'Solar PV Installation',
    description: 'Professional installation services for residential, commercial, and industrial solar systems.',
    icon: Sun,
    url: '/services/solar-pv-installation'
  },
  {
    id: 2,
    title: 'Energy Efficiency Assessment',
    description: 'Comprehensive energy audits to optimize power usage and reduce consumption.',
    icon: Leaf,
    url: '/services/energy-efficiency-assessment'
  },
  {
    id: 3,
    title: 'Solar Farm Maintenance',
    description: 'Regular maintenance and servicing of large-scale solar installations.',
    icon: Factory,
    url: '/services/solar-farm-maintenance'
  },
  {
    id: 4,
    title: 'EV Repair & Maintenance',
    description: 'Specialized repair and maintenance services for electric vehicles and e-mobility products.',
    icon: Car,
    url: '/services/ev-repair-maintenance'
  }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-bold bg-gradient-to-r from-eco-green to-eco-blue-dark bg-clip-text text-transparent">
              Ecomotech
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {solutions.map((solution) => (
                        <li key={solution.id}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={solution.url}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{solution.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {solution.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      {services.map((service) => (
                        <li key={service.id}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={service.url}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="flex items-center gap-2">
                                <service.icon className="h-4 w-4" />
                                <div className="text-sm font-medium leading-none">{service.title}</div>
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-2">
                                {service.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link to="/#about" className="text-foreground hover:text-primary transition-colors">About</Link>
            <Link to="/#contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
          </nav>

          <div className="hidden md:flex">
            <Button>Get in Touch</Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <div className="space-y-2">
                <div className="font-medium text-foreground py-2">Solutions</div>
                {solutions.map((solution) => (
                  <Link
                    key={solution.id}
                    to={solution.url}
                    className="block pl-4 text-foreground hover:text-primary transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {solution.title}
                  </Link>
                ))}
              </div>

              <div className="space-y-2">
                <div className="font-medium text-foreground py-2">Services</div>
                {services.map((service) => (
                  <Link
                    key={service.id}
                    to={service.url}
                    className="block pl-4 text-foreground hover:text-primary transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="flex items-center gap-2">
                      <service.icon className="h-4 w-4" />
                      {service.title}
                    </div>
                  </Link>
                ))}
              </div>

              <Link 
                to="/#about" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/#contact" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Button className="mt-2">Get in Touch</Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
