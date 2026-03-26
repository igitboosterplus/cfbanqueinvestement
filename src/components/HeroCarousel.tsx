import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const slides = [
  {
    label: "GLOBAL FINANCIAL ARCHITECTURE",
    title: "Building the Future",
    titleHighlight: "of Finance",
    description:
      "For over five years, CF BANQUE INVESTMENT has championed institutional excellence, strategic advisory and global capital mobilization across nine countries.",
    image: "/images/atl-hero1.png",
  },
  {
    label: "STRATEGIC FINANCIAL ENGINEERING",
    title: "Designing Capital Structures",
    titleHighlight: "For Long-Term Growth",
    description:
      "Our team designs sophisticated financial structures combining debt, equity, and hybrid instruments to optimize capital and strengthen institutional credibility.",
    image: "/images/banner-building-financial-security-and-resilience.png",
  },
  {
    label: "INTERNATIONAL MARKETS",
    title: "Expanding Our Global",
    titleHighlight: "Footprint",
    description:
      "CF BANQUE INVESTMENT continues to grow its international presence, strengthening partnerships in major financial centers and emerging markets worldwide.",
    image: "/images/banner-miami.jpg",
  },
  {
    label: "INVESTMENT BANKING EXCELLENCE",
    title: "Delivering Excellence",
    titleHighlight: "in Advisory",
    description:
      "From M&A to structured finance, our investment banking teams deliver best-in-class strategic advisory and capital markets solutions.",
    image: "/images/banner-bengaluru-india.jpg",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next, paused]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  }, [next, prev]);

  return (
    <section
      id="main-content"
      className="relative h-[100dvh] min-h-[600px] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={handleKeyDown}
      role="region"
      aria-label="Hero slideshow"
      aria-roledescription="carousel"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="absolute inset-0 w-full h-full object-cover"
            loading={current === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/25" />
        </motion.div>
      </AnimatePresence>

      {/* Content — centered vertically */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="max-w-3xl"
            >
              {/* Category label */}
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="inline-block text-accent font-sans text-xs sm:text-sm font-bold tracking-[0.25em] uppercase mb-6"
              >
                {slides[current].label}
              </motion.span>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white font-bold leading-[1.08] mb-4">
                {slides[current].title}
                <br />
                <span className="text-accent">{slides[current].titleHighlight}</span>
              </h1>

              <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl">
                {slides[current].description}
              </p>

              {/* Dual CTA buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-orange-light text-white font-semibold text-sm tracking-[0.15em] uppercase transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
                >
                  Schedule a Free Consultation
                </Link>
                <Link
                  to="/investment-banking"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 hover:border-white text-white font-semibold text-sm tracking-[0.15em] uppercase transition-all duration-300 hover:bg-white/10"
                >
                  Explore Our Expertise
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all duration-300 rounded-full"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all duration-300 rounded-full"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Bottom indicators + scroll hint */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="text-white/40 text-sm font-sans tabular-nums tracking-wide">
                {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
              </span>
              <div className="flex gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className="relative h-[3px] w-12 bg-white/20 overflow-hidden"
                    aria-label={`Go to slide ${i + 1}`}
                  >
                    {i === current && (
                      <motion.div
                        className="absolute inset-y-0 left-0 bg-accent"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 6, ease: "linear" }}
                      />
                    )}
                    {i < current && (
                      <div className="absolute inset-0 bg-white/50" />
                    )}
                  </button>
                ))}
              </div>
            </div>
            {/* Scroll hint */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="hidden md:flex flex-col items-center gap-1 text-white/40 text-xs tracking-wider uppercase"
            >
              <span>Scroll</span>
              <div className="w-px h-6 bg-white/30" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
