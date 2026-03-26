import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface PageAnchor {
  label: string;
  href: string;
}

interface PageHeroProps {
  tag: string;
  title: string;
  description: string;
  image?: string;
  anchors?: ReadonlyArray<PageAnchor>;
}

const PageHero = ({ tag, title, description, image, anchors }: PageHeroProps) => (
  <section className="relative bg-gradient-to-br from-[#0a1628] via-[#162a4a] to-[#1a3a5c] py-24 lg:py-32 overflow-hidden">
    {image && (
      <>
        <img src={image} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
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
        {anchors?.length ? (
          <motion.nav
            aria-label="Section shortcuts"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="mt-10"
          >
            <span className="block text-white/40 text-[11px] font-semibold tracking-[0.28em] uppercase mb-4">
              Quick links
            </span>
            <div className="flex flex-wrap gap-3">
              {anchors.map((anchor) => (
                anchor.href.startsWith("/") ? (
                  <Link
                    key={anchor.href}
                    to={anchor.href}
                    className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/75 backdrop-blur-sm transition-colors hover:border-white/40 hover:bg-white/20 hover:text-white"
                  >
                    {anchor.label}
                  </Link>
                ) : (
                  <a
                    key={anchor.href}
                    href={anchor.href}
                    className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/75 backdrop-blur-sm transition-colors hover:border-white/40 hover:bg-white/20 hover:text-white"
                  >
                    {anchor.label}
                  </a>
                )
              ))}
            </div>
          </motion.nav>
        ) : null}
      </motion.div>
    </div>
  </section>
);

export default PageHero;
