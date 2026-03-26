import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { investorRelationsRoutes } from "@/config/siteRoutes";

const items = [
  {
    title: "See Our Impact in Action",
    description:
      "From financing affordable housing in West Africa to deploying $200M in green bonds — discover how we're creating lasting economic opportunity for clients, communities and employees worldwide.",
    link: "/impact",
    linkLabel: "Explore our impact",
    image: "/images/banner-columbus-group-helping-women-of-color-build-wealth.jpg",
  },
  {
    title: "2025 Annual Report & Financial Results",
    description:
      "Revenue growth of +18%, $2.4B in AUM and 45+ advisory mandates completed. Read our latest report for a full review of financial performance, strategic initiatives and our outlook.",
    link: investorRelationsRoutes.overview,
    linkLabel: "Read the report",
    image: "/images/banner-building-financial-security-and-resilience.png",
  },
];

const ImpactStoriesSection = () => (
  <section className="py-24 lg:py-32 bg-muted">
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
          >
            <Link
              to={item.link}
              className="group relative overflow-hidden min-h-[400px] lg:min-h-[480px] flex flex-col justify-end p-10 lg:p-12 h-full"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="relative z-10">
                <h3 className="font-serif text-2xl lg:text-3xl text-white font-bold mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-white/70 leading-relaxed mb-6 max-w-md text-sm">
                  {item.description}
                </p>
                <span className="inline-flex items-center gap-2 text-white font-semibold text-sm tracking-wide group-hover:gap-3 transition-all border-b border-white/40 pb-1">
                  {item.linkLabel} <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ImpactStoriesSection;
