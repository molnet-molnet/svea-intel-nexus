
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PersonSearch from "./pages/PersonSearch";
import CompanySearch from "./pages/CompanySearch";
import PhoneSearch from "./pages/PhoneSearch";
import SocialSearch from "./pages/SocialSearch";
import About from "./pages/About";
import Compliance from "./pages/Compliance";
import Sources from "./pages/Sources";
import Settings from "./pages/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/search/person" element={<PersonSearch />} />
          <Route path="/search/company" element={<CompanySearch />} />
          <Route path="/search/phone" element={<PhoneSearch />} />
          <Route path="/search/social" element={<SocialSearch />} />
          <Route path="/about" element={<About />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/sources" element={<Sources />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
