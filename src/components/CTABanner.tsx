import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTABanner = () => (
  <section className="py-20 lg:py-28 bg-primary">
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl"
      >
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-bold leading-tight mb-6">
          Let's Build Your Financial Future Together
        </h2>
        <p className="text-white/50 text-lg leading-relaxed mb-10 max-w-2xl">
          Whether you're seeking strategic advisory, asset management or wealth solutions — our global team is ready to deliver.
        </p>
        <div className="flex flex-wrap items-center gap-8">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-white font-semibold text-sm tracking-wide hover:gap-3 transition-all duration-300 border-b border-white/40 pb-1 hover:border-white"
          >
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-white/60 font-semibold text-sm tracking-wide hover:gap-3 hover:text-white transition-all duration-300 border-b border-white/20 pb-1 hover:border-white/50"
          >
            Learn More <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTABanner;
