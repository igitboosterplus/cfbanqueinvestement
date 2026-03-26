import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CareerSection = () => (
  <section className="py-24 lg:py-32 bg-white">
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative aspect-[4/3] overflow-hidden"
        >
          <img
            src="/images/about-us-hero.png"
            alt="CF Banque Investment team collaborating in modern office"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-bold leading-tight mb-6">
            Prioritizing Talent and Career Growth
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            A talent-driven institution is, by definition, an inclusive one. We
            are committed to creating a workplace where professionals thrive,
            innovate and build meaningful careers in global finance.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            With 1,200+ employees across 9 countries, we invest in development
            programs, global rotations and leadership tracks that prepare our
            people for the challenges of tomorrow. From analyst programs to
            executive mentoring — there's a path for every ambition.
          </p>
          <Link
            to="/careers"
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm tracking-wide hover:gap-3 transition-all duration-300 border-b border-primary/30 pb-1 hover:border-primary"
          >
            Explore careers <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  </section>
);

export default CareerSection;
