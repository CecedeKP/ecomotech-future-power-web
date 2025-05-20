import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SolarPVSystems from "./pages/solutions/solar-pv-systems";
import BatteryStorage from "./pages/solutions/battery-storage";
import ElectricMobility from "./pages/solutions/electric-mobility";
import ChargingStations from "./pages/solutions/charging-stations";
import WindEnergy from "./pages/solutions/wind-energy";
import IndustrialSolutions from "./pages/solutions/industrial-solutions";
import Projects from "./pages/Projects";

// Create a client
const queryClient = new QueryClient();

// Lazy load pages
const HomePage = lazy(() => import('@/pages/Index'));
const ContactPage = lazy(() => import('@/pages/Contact'));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-eco-green"></div>
  </div>
);

const App = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Router>
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-grow">
                <Suspense fallback={<PageLoader />}>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    {/* Solution Routes */}
                    <Route path="/solutions/solar-pv-systems" element={<SolarPVSystems />} />
                    <Route path="/solutions/battery-storage" element={<BatteryStorage />} />
                    <Route path="/solutions/electric-mobility" element={<ElectricMobility />} />
                    <Route path="/solutions/charging-stations" element={<ChargingStations />} />
                    <Route path="/solutions/wind-energy" element={<WindEnergy />} />
                    <Route path="/solutions/industrial-solutions" element={<IndustrialSolutions />} />
                    {/* Projects Route */}
                    <Route path="/projects" element={<Projects />} />
                    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </main>
              <Footer />
            </div>
          </Router>
        </TooltipProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
