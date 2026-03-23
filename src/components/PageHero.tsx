import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  tag: string;
  title: string;
  description: string;
  image?: string;
}

const PageHero = ({ tag, title, description, image }: PageHeroProps) => (
  <section className="relative bg-gradient-to-br from-[#0a1628] via-[#162a4a] to-[#1a3a5c] py-24 lg:py-32 overflow-hidden">
    {image && (
      <>
        <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#162a4a]/75 to-[#1a3a5c]/60" />
      </>
    )}
    <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      {/* Breadcrumb */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex items-center gap-2 text-white/50 text-sm mb-8"
        aria-label="Breadcrumb"
      >
        <Link to="/" className="hover:text-white transition-colors">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-white/80">{tag}</span>
      </motion.nav>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-bold leading-tight mb-6">
          {title}
        </h1>
        <p className="text-white/60 text-lg sm:text-xl leading-relaxed">
          {description}
        </p>
      </motion.div>
    </div>
  </section>
);

export default PageHero;
