import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import InvestmentBanking from "./pages/InvestmentBanking.tsx";
import AssetManagement from "./pages/AssetManagement.tsx";
import WealthManagement from "./pages/WealthManagement.tsx";
import Contact from "./pages/Contact.tsx";
import Communities from "./pages/Communities.tsx";
import Impact from "./pages/Impact.tsx";
import Institute from "./pages/Institute.tsx";
import Careers from "./pages/Careers.tsx";
import InvestorRelations from "./pages/InvestorRelations.tsx";
import Newsroom from "./pages/Newsroom.tsx";
import NotFound from "./pages/NotFound.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/investment-banking" element={<InvestmentBanking />} />
          <Route path="/asset-management" element={<AssetManagement />} />
          <Route path="/wealth-management" element={<WealthManagement />} />
          <Route path="/communities" element={<Communities />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/institute" element={<Institute />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/investor-relations" element={<InvestorRelations />} />
          <Route path="/newsroom" element={<Newsroom />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
