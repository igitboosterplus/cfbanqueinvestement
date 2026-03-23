import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import PurposeSection from "@/components/PurposeSection";
import OpportunitySection from "@/components/OpportunitySection";
import CareerSection from "@/components/CareerSection";
import ImpactStoriesSection from "@/components/ImpactStoriesSection";
import NewsSection from "@/components/NewsSection";
import GlobalPresence from "@/components/GlobalPresence";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const Index = () => (
  <PageTransition>
    <div className="min-h-screen">
      <Navbar />
      <HeroCarousel />
      <PurposeSection />
      <OpportunitySection />
      <GlobalPresence />
      <CareerSection />
      <ImpactStoriesSection />
      <NewsSection />
      <CTABanner />
      <Footer />
    </div>
  </PageTransition>
);

export default Index;
