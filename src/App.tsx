import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "./components/ui/toaster";
import ErrorBoundary from "./components/ErrorBoundary";
import ScrollToTop from "./components/ScrollToTop";

// Eager-load the homepage for fastest initial paint
import Index from "./pages/Index";

// Lazy-load all other pages for code splitting
const About = lazy(() => import("./pages/About"));
const Leadership = lazy(() => import("./pages/Leadership"));
const LeadershipProfile = lazy(() => import("./pages/LeadershipProfile"));
const Governance = lazy(() => import("./pages/Governance"));
const History = lazy(() => import("./pages/History"));
const Technology = lazy(() => import("./pages/Technology"));
const Diversity = lazy(() => import("./pages/Diversity"));
const InvestmentBanking = lazy(() => import("./pages/InvestmentBanking"));
const AssetManagement = lazy(() => import("./pages/AssetManagement"));
const WealthManagement = lazy(() => import("./pages/WealthManagement"));
const Contact = lazy(() => import("./pages/Contact"));
const Communities = lazy(() => import("./pages/Communities"));
const CommunitiesTopic = lazy(() => import("./pages/CommunitiesTopic"));
const Impact = lazy(() => import("./pages/Impact"));
const ImpactTopic = lazy(() => import("./pages/ImpactTopic"));
const Institute = lazy(() => import("./pages/Institute"));
const Careers = lazy(() => import("./pages/Careers"));
const CareersTopic = lazy(() => import("./pages/CareersTopic"));
const InvestorRelations = lazy(() => import("./pages/InvestorRelations"));
const InvestorRelationsTopic = lazy(() => import("./pages/InvestorRelationsTopic"));
const Newsroom = lazy(() => import("./pages/Newsroom"));
const NewsroomTopic = lazy(() => import("./pages/NewsroomTopic"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Cookies = lazy(() => import("./pages/Cookies"));
const Accessibility = lazy(() => import("./pages/Accessibility"));
const ChairmanLetter = lazy(() => import("./pages/ChairmanLetter"));
const LegalNotices = lazy(() => import("./pages/LegalNotices"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="animate-pulse text-muted-foreground text-sm tracking-widest uppercase">Loading…</div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <ErrorBoundary>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/leadership/:slug" element={<LeadershipProfile />} />
          <Route path="/governance" element={<Governance />} />
          <Route path="/history" element={<History />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/diversity" element={<Diversity />} />
          <Route path="/chairman-letter" element={<ChairmanLetter />} />
          <Route path="/investment-banking" element={<InvestmentBanking />} />
          <Route path="/asset-management" element={<AssetManagement />} />
          <Route path="/wealth-management" element={<WealthManagement />} />
          <Route path="/communities" element={<Communities />} />
          <Route path="/communities/:slug" element={<CommunitiesTopic />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/impact/:slug" element={<ImpactTopic />} />
          <Route path="/institute" element={<Institute />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/:slug" element={<CareersTopic />} />
          <Route path="/investor-relations" element={<InvestorRelations />} />
          <Route path="/investor-relations/:slug" element={<InvestorRelationsTopic />} />
          <Route path="/newsroom" element={<Newsroom />} />
          <Route path="/newsroom/:slug" element={<NewsroomTopic />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/legal-notices" element={<LegalNotices />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
        </ErrorBoundary>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
