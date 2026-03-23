import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => (
  <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-primary">
    {/* Subtle geometric pattern */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 right-0 w-1/2 h-full" style={{
        background: "linear-gradient(135deg, transparent 25%, hsl(var(--gold) / 0.3) 50%, transparent 75%)",
      }} />
      <div className="absolute bottom-0 left-0 w-full h-1/3" style={{
        background: "linear-gradient(0deg, hsl(var(--navy-deep)) 0%, transparent 100%)",
      }} />
    </div>

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-accent font-sans text-sm font-semibold tracking-[0.2em] uppercase mb-6">
            Global Financial Institution
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-primary-foreground font-bold leading-[1.1] mb-6">
            We Built The World
            <br />
            <span className="text-accent">Of Tomorrow</span> Today
          </h1>
          <p className="text-primary-foreground/70 text-lg sm:text-xl leading-relaxed max-w-2xl mb-10">
            An international financial institution specializing in investment banking, capital markets, strategic financial advisory and institutional asset management.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            to="/about"
            className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-orange-light text-accent-foreground px-8 py-4 font-sans font-semibold text-sm uppercase tracking-wider transition-colors rounded"
          >
            Discover Our Platform
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 border border-primary-foreground/30 hover:border-primary-foreground/60 text-primary-foreground px-8 py-4 font-sans font-semibold text-sm uppercase tracking-wider transition-colors rounded"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
