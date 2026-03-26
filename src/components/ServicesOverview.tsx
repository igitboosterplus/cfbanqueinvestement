import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { aboutRoutes } from "@/config/aboutRoutes";

const services = [
  {
    tab: "Investment Banking",
    title: "Strategic Financial Engineering",
    description:
      "We design advanced financial structures based on rigorous analysis of balance sheets, cash flows, macroeconomic risks, and long-term corporate strategy. Our objective is to optimize capital structures and strengthen the financial resilience of enterprises.",
    bullets: [
      "Capital Structure Optimization",
      "Debt & Equity Structuring",
      "Financial Risk Modeling",
      "M&A Advisory & Execution",
      "Strategic Financial Planning",
    ],
    image: "/images/investment-team.jpg",
    link: "/investment-banking",
  },
  {
    tab: "Asset Management",
    title: "Multi-Asset Portfolio Solutions",
    description:
      "Our asset management platform delivers institutional-grade portfolio management spanning multi-asset strategies, fixed income, alternative investments and ESG-integrated approaches to generate sustainable risk-adjusted returns.",
    bullets: [
      "Multi-Asset Portfolio Management",
      "Fixed Income Expertise",
      "Alternative Investments",
      "ESG-Integrated Strategies",
      "Institutional Advisory",
    ],
    image: "/images/client-meeting.jpg",
    link: "/asset-management",
  },
  {
    tab: "Wealth Management",
    title: "Bespoke Wealth Advisory",
    description:
      "Comprehensive wealth advisory, private banking, succession planning and bespoke lending solutions designed for high-net-worth and ultra-high-net-worth individuals and families seeking sophisticated financial stewardship.",
    bullets: [
      "Private Banking Solutions",
      "Succession & Estate Planning",
      "Bespoke Lending",
      "Tax-Efficient Structuring",
      "Family Office Services",
    ],
    image: "/images/wealth-advisory.jpg",
    link: "/wealth-management",
  },
  {
    tab: "Risk Management",
    title: "Advanced Risk & Governance",
    description:
      "Implementation of governance and financial control structures required by global investors and multilateral financial institutions. Advanced derivatives, hedging strategies, and structured derivative products.",
    bullets: [
      "Derivatives & Hedging",
      "Interest Rate & Currency Swaps",
      "Regulatory Compliance",
      "Governance Frameworks",
      "Portfolio Risk Analytics",
    ],
    image: "/images/corporate-governance.jpg",
    link: aboutRoutes.governance,
  },
];

const ServicesOverview = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 lg:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-accent font-sans text-xs font-bold tracking-[0.25em] uppercase mb-4 block">
            Investment Banking
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground font-bold">
            What We Do
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {services.map((s, i) => (
            <button
              key={s.tab}
              onClick={() => setActive(i)}
              className={`px-6 py-3 text-sm font-semibold tracking-wide uppercase transition-all duration-300 ${
                active === i
                  ? "bg-accent text-white shadow-lg shadow-accent/20"
                  : "bg-white text-foreground/60 hover:text-primary hover:shadow-md"
              }`}
            >
              {s.tab}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Image */}
            <div className="overflow-hidden shadow-xl">
              <img
                src={services[active].image}
                alt={services[active].title}
                className="w-full h-[400px] lg:h-[500px] object-cover"
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div>
              <h3 className="font-serif text-2xl lg:text-3xl text-foreground font-bold mb-4">
                {services[active].title}
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {services[active].description}
              </p>
              <ul className="space-y-3 mb-8">
                {services[active].bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-foreground/80">{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <Link
                  to={services[active].link}
                  className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-orange-light text-white font-semibold text-sm tracking-[0.15em] uppercase transition-all duration-300"
                >
                  Explore the Service <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link
                  to="/investment-banking"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary/20 hover:border-primary text-primary font-semibold text-sm tracking-[0.15em] uppercase transition-all duration-300"
                >
                  Explore More Services
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ServicesOverview;
