import { motion } from "framer-motion";
import { Building2, RefreshCw, Globe, Briefcase, BarChart3, Shield } from "lucide-react";

const items = [
  {
    number: "01",
    icon: Building2,
    title: "Strategic Financial Architecture",
    description:
      "We design sophisticated financial structures that align enterprises with international investment standards, enabling them to operate credibly within global capital markets.",
  },
  {
    number: "02",
    icon: RefreshCw,
    title: "Corporate Transformation & Structuring",
    description:
      "We support companies through structural transformation, optimizing governance, financial frameworks, and operational models to meet the expectations of institutional investors.",
  },
  {
    number: "03",
    icon: Globe,
    title: "Access to International Capital",
    description:
      "Through our global financial architecture, we connect enterprises with institutional capital, sovereign funds, and international financing mechanisms.",
  },
];

const secondaryItems = [
  {
    icon: Briefcase,
    title: "Strategic Advisory",
    description:
      "Deep financial and institutional advisory designed to guide enterprises through complex strategic and capital decisions.",
  },
  {
    icon: BarChart3,
    title: "Financial Structuring",
    description:
      "Development of robust financial architectures compliant with international standards such as IFRS and US GAAP.",
  },
  {
    icon: Shield,
    title: "Risk & Governance Framework",
    description:
      "Implementation of governance and financial control structures required by global investors and multilateral financial institutions.",
  },
];

const StrategicArchitecture = () => (
  <section className="py-24 lg:py-32 bg-primary text-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-accent font-sans text-xs font-bold tracking-[0.25em] uppercase mb-4 block">
          Our Framework
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Strategic Financial Architecture{" "}
          <span className="text-accent">for Sustainable Growth</span>
        </h2>
      </motion.div>

      {/* Numbered steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {items.map((item, i) => (
          <motion.div
            key={item.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="relative p-8 lg:p-10 border border-white/10 hover:border-accent/30 transition-all duration-300 group"
          >
            <span className="text-accent/30 font-serif text-6xl font-bold absolute -top-2 right-6">
              {item.number}
            </span>
            <item.icon
              className="w-10 h-10 text-accent mb-5"
              strokeWidth={1.5}
            />
            <h3 className="font-serif text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Secondary grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {secondaryItems.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-start gap-4 p-6 bg-white/[0.04] hover:bg-white/[0.08] transition-colors duration-300"
          >
            <item.icon className="w-8 h-8 text-accent shrink-0 mt-1" strokeWidth={1.5} />
            <div>
              <h4 className="font-serif text-lg font-bold mb-2">{item.title}</h4>
              <p className="text-white/40 text-sm leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StrategicArchitecture;
