import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";
import HeroCarousel from "@/components/HeroCarousel";
import FeatureCards from "@/components/FeatureCards";
import PurposeSection from "@/components/PurposeSection";
import ServicesOverview from "@/components/ServicesOverview";
import IndustriesSection from "@/components/IndustriesSection";
import StrategicArchitecture from "@/components/StrategicArchitecture";
import CEOQuote from "@/components/CEOQuote";
import ProcessSteps from "@/components/ProcessSteps";
import StatsSection from "@/components/StatsSection";
import TestimonialSection from "@/components/TestimonialSection";
import GlobalPresence from "@/components/GlobalPresence";
import ImpactStoriesSection from "@/components/ImpactStoriesSection";
import NewsSection from "@/components/NewsSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const Index = () => (
  <PageTransition>
    <div className="min-h-screen">
      <SEO title="Home" description="CF Banque Investment — International financial institution specializing in investment banking, capital markets, strategic financial advisory and institutional asset management across 10+ countries." path="/" />
      <Navbar />
      <main>
        <HeroCarousel />
        <FeatureCards />
        <PurposeSection />
        <ServicesOverview />
        <IndustriesSection />
        <StrategicArchitecture />
        <CEOQuote />
        <ProcessSteps />
        <StatsSection />
        <TestimonialSection />
        <GlobalPresence />
        <ImpactStoriesSection />
        <NewsSection />
      </main>
      <CTABanner />
      <Footer />
    </div>
  </PageTransition>
);

export default Index;
