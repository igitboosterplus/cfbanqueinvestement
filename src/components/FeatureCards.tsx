import { motion } from "framer-motion";
import { DollarSign, Cpu, Award, TrendingUp } from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "Cost-Effectiveness",
    description:
      "Our financial consulting services help businesses reduce operational costs while improving profitability and long-term growth.",
  },
  {
    icon: Cpu,
    title: "Innovative Technology",
    description:
      "We leverage modern financial technologies and data-driven insights to provide innovative consulting and investment solutions.",
  },
  {
    icon: Award,
    title: "Industry Expertise",
    description:
      "Deep sector knowledge across financial services, energy, infrastructure and technology delivers tailored strategic solutions.",
  },
  {
    icon: TrendingUp,
    title: "Scalability",
    description:
      "Our consultants specialize in key sectors such as finance, healthcare and manufacturing, delivering scalable solutions.",
  },
];

const FeatureCards = () => (
  <section className="relative z-10 -mt-20 pb-16">
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className={`group p-8 lg:p-10 ${
              i % 2 === 0 ? "bg-primary text-white" : "bg-navy-deep text-white"
            } hover:bg-accent transition-colors duration-500`}
          >
            <feature.icon
              className="w-12 h-12 text-accent group-hover:text-white mb-6 transition-colors duration-500"
              strokeWidth={1.5}
            />
            <h3 className="font-serif text-xl font-bold mb-3">{feature.title}</h3>
            <p className="text-white/60 group-hover:text-white/80 text-sm leading-relaxed transition-colors duration-500">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeatureCards;
