import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "Building the Future of Finance",
    description:
      "For over five years, CF BANQUE INVESTMENT has championed institutional excellence, strategic advisory and global capital mobilization across nine countries.",
    link: "/about",
    linkLabel: "Learn more",
    image: "/images/atl-hero1.png",
  },
  {
    title: "Expanding Our Global Footprint",
    description:
      "CF BANQUE INVESTMENT continues to grow its international presence, strengthening partnerships in major financial centers and emerging markets worldwide.",
    link: "/about",
    linkLabel: "Learn more",
    image: "/images/banner-building-financial-security-and-resilience.png",
  },
  {
    title: "Committed to Sustainable Growth",
    description:
      "Our ESG-integrated strategies and sustainable investment frameworks are driving positive impact for clients, communities and the environment.",
    link: "/asset-management#esg",
    linkLabel: "Learn more",
    image: "/images/banner-miami.jpg",
  },
  {
    title: "Delivering Excellence in Advisory",
    description:
      "From M&A to structured finance, our investment banking teams deliver best-in-class strategic advisory and capital markets solutions.",
    link: "/investment-banking",
    linkLabel: "Learn more",
    image: "/images/banner-bengaluru-india.jpg",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content — positioned lower like JPMorgan */}
      <div className="relative h-full flex items-end pb-32 lg:pb-40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-bold leading-[1.1] mb-5">
                {slides[current].title}
              </h1>
              <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-xl">
                {slides[current].description}
              </p>
              <Link
                to={slides[current].link}
                className="inline-flex items-center gap-2 text-white font-semibold text-sm tracking-wide hover:gap-3 transition-all duration-300 border-b border-white/40 pb-1 hover:border-white"
              >
                {slides[current].linkLabel}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Minimal navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center text-white/60 hover:text-white transition-colors duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-7 h-7" />
      </button>
      <button
        onClick={next}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center text-white/60 hover:text-white transition-colors duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-7 h-7" />
      </button>

      {/* JPMorgan-style bottom indicators */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-10">
          <div className="flex items-center gap-6">
            <span className="text-white/40 text-sm font-sans tabular-nums tracking-wide">
              {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </span>
            <div className="flex gap-1.5 flex-1 max-w-[200px]">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="relative h-[2px] flex-1 bg-white/20 overflow-hidden"
                  aria-label={`Go to slide ${i + 1}`}
                >
                  {i === current && (
                    <motion.div
                      className="absolute inset-y-0 left-0 bg-white"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 6, ease: "linear" }}
                    />
                  )}
                  {i < current && (
                    <div className="absolute inset-0 bg-white/60" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
