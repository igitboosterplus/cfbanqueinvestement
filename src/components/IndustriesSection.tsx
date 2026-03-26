import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Building2,
  Zap,
  Wheat,
  Banknote,
  Factory,
  Cpu,
  Radio,
  HeartPulse,
  Building,
  Landmark,
} from "lucide-react";

const industries = [
  { icon: Building2, label: "Infrastructure & Transportation", link: "/investment-banking" },
  { icon: Zap, label: "Energy & Natural Resources", link: "/investment-banking" },
  { icon: Wheat, label: "Agriculture & Agribusiness", link: "/investment-banking" },
  { icon: Banknote, label: "Financial Services", link: "/investment-banking" },
  { icon: Factory, label: "Industrial Manufacturing", link: "/investment-banking" },
  { icon: Cpu, label: "Technology & Digital Economy", link: "/investment-banking" },
  { icon: Radio, label: "Telecommunications", link: "/investment-banking" },
  { icon: HeartPulse, label: "Healthcare & Life Sciences", link: "/investment-banking" },
  { icon: Building, label: "Real Estate & Urban Development", link: "/investment-banking" },
  { icon: Landmark, label: "Public Sector & Government", link: "/investment-banking" },
];

const IndustriesSection = () => (
  <section className="py-24 lg:py-32 bg-white">
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-accent font-sans text-xs font-bold tracking-[0.25em] uppercase mb-4 block">
          Industries
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground font-bold mb-4">
          Key Industries{" "}
          <span className="text-accent">We Serve</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          We support strategic sectors of the economy by providing advanced financial structuring, capital market access, and institutional advisory services tailored to each industry.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {industries.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <Link
              to={item.link}
              className="group flex flex-col items-center text-center p-6 bg-gray-50 hover:bg-primary hover:text-white transition-all duration-400 h-full"
            >
              <item.icon
                className="w-10 h-10 text-accent group-hover:text-white mb-4 transition-colors duration-400"
                strokeWidth={1.5}
              />
              <span className="text-sm font-medium text-foreground/70 group-hover:text-white transition-colors duration-400 leading-snug">
                {item.label}
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default IndustriesSection;
