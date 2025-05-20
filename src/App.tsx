
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SolarPVSystems from "./pages/solutions/solar-pv-systems";
import BatteryStorage from "./pages/solutions/battery-storage";
import ElectricMobility from "./pages/solutions/electric-mobility";
import ChargingStations from "./pages/solutions/charging-stations";
import WindEnergy from "./pages/solutions/wind-energy";
import IndustrialSolutions from "./pages/solutions/industrial-solutions";
import Projects from "./pages/Projects";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
