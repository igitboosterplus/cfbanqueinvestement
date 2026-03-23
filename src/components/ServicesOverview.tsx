import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TrendingUp, BarChart3, Shield, Landmark, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Landmark,
    title: "Investment Banking",
    description: "Strategic advisory, M&A, corporate financing, equity and debt capital markets, structured finance and leveraged finance.",
    link: "/investment-banking",
  },
  {
    icon: BarChart3,
    title: "Asset Management",
    description: "Multi-asset portfolio management, fixed income expertise, alternative investments and ESG-integrated strategies.",
    link: "/asset-management",
  },
  {
    icon: TrendingUp,
    title: "Wealth Management",
    description: "Comprehensive wealth advisory, private banking, succession planning and bespoke lending solutions for HNWI and UHNWI.",
    link: "/wealth-management",
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Advanced derivatives, hedging strategies, interest rate and currency swaps, and structured derivative products.",
    link: "/about#governance",
  },
];

const ServicesOverview = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-accent font-sans text-sm font-semibold tracking-[0.2em] uppercase">
          Our Expertise
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground font-bold mt-3">
          Integrated Financial Services
        </h2>
        <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
          A comprehensive platform combining advisory, capital markets and asset management capabilities.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Link
              to={service.link}
              className="group block bg-card border rounded-lg p-8 lg:p-10 hover:shadow-lg hover:border-accent/30 transition-all duration-300 h-full"
            >
              <service.icon className="w-10 h-10 text-accent mb-5" strokeWidth={1.5} />
              <h3 className="font-serif text-xl lg:text-2xl text-card-foreground font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-5">{service.description}</p>
              <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesOverview;
