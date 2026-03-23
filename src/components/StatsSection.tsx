import { motion } from "framer-motion";

const stats = [
  { value: "9+", label: "Countries" },
  { value: "2019", label: "Founded" },
  { value: "5", label: "Core Divisions" },
  { value: "24/7", label: "Global Coverage" },
];

const StatsSection = () => (
  <section className="bg-navy-deep py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="font-serif text-4xl lg:text-5xl font-bold text-accent mb-2">
              {stat.value}
            </div>
            <div className="text-primary-foreground/60 text-sm uppercase tracking-widest font-sans">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
