import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const cards = [
  {
    title: "Investment Banking & Advisory",
    description:
      "Strategic M&A advisory, capital raising, structured finance and cross-border transaction execution for corporations, financial institutions and sovereigns across emerging markets.",
    link: "/investment-banking",
    linkLabel: "Explore Investment Banking",
    image: "/images/banner-baltimore-skyline.jpg",
  },
  {
    title: "Asset & Wealth Management",
    description:
      "Comprehensive portfolio solutions spanning multi-asset strategies, fixed income, ESG-integrated investing and bespoke private banking for institutional and HNWI clients worldwide.",
    link: "/asset-management",
    linkLabel: "Explore Asset Management",
    image: "/images/about-us-hero.png",
  },
];

const OpportunitySection = () => (
  <section className="py-24 lg:py-32 bg-muted">
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground font-bold leading-tight mb-4">
          Creating Financial Growth for All
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl">
          We leverage the best of our firm to help clients, institutions and
          communities grow and succeed.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
          >
            <Link
              to={card.link}
              className="group block bg-white hover:shadow-lg transition-all duration-300 h-full overflow-hidden"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-8 lg:p-10">
                <h3 className="font-serif text-2xl text-foreground font-semibold mb-3">
                  {card.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {card.description}
                </p>
                <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm tracking-wide group-hover:gap-3 transition-all border-b border-primary/30 pb-1">
                  {card.linkLabel} <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default OpportunitySection;
