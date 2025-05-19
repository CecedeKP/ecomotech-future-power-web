
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Ecomotech</h3>
            <p className="mb-4 text-gray-400">
              Powering a sustainable future through renewable energy solutions and electric mobility products.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4 text-white">Solutions</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-eco-green-light transition-colors">Solar PV Systems</a></li>
              <li><a href="#" className="hover:text-eco-green-light transition-colors">Battery Energy Storage</a></li>
              <li><a href="#" className="hover:text-eco-green-light transition-colors">Electric Mobility</a></li>
              <li><a href="#" className="hover:text-eco-green-light transition-colors">Charging Stations</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4 text-white">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-eco-green-light transition-colors">Solar PV Installation</a></li>
              <li><a href="#" className="hover:text-eco-green-light transition-colors">Energy Efficiency Assessment</a></li>
              <li><a href="#" className="hover:text-eco-green-light transition-colors">Solar Farm Maintenance</a></li>
              <li><a href="#" className="hover:text-eco-green-light transition-colors">EV Repair</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4 text-white">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-eco-green-light transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-eco-green-light transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-eco-green-light transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-eco-green-light transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Ecomotech. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#" className="hover:text-eco-green-light transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-eco-green-light transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
