import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    title: "CF BANQUE INVESTMENT Opens New Dakar Office, Expands West African Footprint",
    summary:
      "New strategic presence in Senegal strengthens the firm's advisory and capital markets capabilities across West Africa's largest francophone economies.",
    link: "/newsroom",
    date: "June 2026",
    image: "/images/about-finhealth.png",
  },
  {
    title: "Green Bonds for Africa: $200M Renewable Energy Commitment",
    summary:
      "CF BANQUE INVESTMENT structures and places green bonds financing solar and wind energy projects, accelerating Africa's clean energy transition.",
    link: "/newsroom",
    date: "April 2026",
    image: "/images/banner-2025-student-debt-IDR-and-wage-garnishment.png",
  },
  {
    title: "Record Q1 2026: $450M Capital Deployed Across Emerging Markets",
    summary:
      "Strong first-quarter performance with a 35% year-over-year increase driven by demand in structured finance and ESG-linked instruments.",
    link: "/newsroom",
    date: "May 2026",
    image: "/images/banner-convenience-or-liquidity-valve-buy-now-pay-later.jpg",
  },
];

const NewsSection = () => (
  <section className="py-24 lg:py-32 bg-white">
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-end justify-between mb-14"
      >
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground font-bold">
          In the News
        </h2>
        <Link
          to="/newsroom"
          className="hidden sm:inline-flex items-center gap-2 text-primary font-semibold text-sm tracking-wide hover:gap-3 transition-all border-b border-primary/30 pb-1 hover:border-primary"
        >
          View all <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article, i) => (
          <motion.article
            key={article.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
          >
            <Link
              to={article.link}
              className="group block h-full"
            >
              <div className="aspect-[16/9] bg-gray-100 mb-5 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <span className="inline-block text-muted-foreground text-xs tracking-wider uppercase">
                {article.date}
              </span>
              <h3 className="font-serif text-lg lg:text-xl text-foreground font-semibold mb-2 mt-2 leading-snug group-hover:text-primary transition-colors duration-300">
                {article.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {article.summary}
              </p>
            </Link>
          </motion.article>
        ))}
      </div>

      <Link
        to="/newsroom"
        className="sm:hidden inline-flex items-center gap-2 text-primary font-semibold text-sm tracking-wide mt-10 hover:gap-3 transition-all border-b border-primary/30 pb-1"
      >
        View all <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  </section>
);

export default NewsSection;
