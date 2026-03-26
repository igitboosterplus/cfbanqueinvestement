import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/use-count-up";

const stats = [
  { numericValue: 9, prefix: "", suffix: "+", label: "Countries" },
  { numericValue: 5, prefix: "", suffix: "", label: "Core Divisions" },
  { numericValue: 45, prefix: "", suffix: "+", label: "Advisory Mandates" },
  { numericValue: 99, prefix: "", suffix: "%", label: "Client Satisfaction" },
];

const StatItem = ({ stat, i }: { stat: (typeof stats)[number]; i: number }) => {
  const { count, ref } = useCountUp(stat.numericValue, 2000);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1 }}
      className="text-center py-8 lg:py-0"
    >
      <div className="font-serif text-4xl lg:text-5xl font-bold text-white mb-2">
        {stat.prefix}{count.toLocaleString()}{stat.suffix}
      </div>
      <div className="text-white/50 text-sm uppercase tracking-widest font-sans">
        {stat.label}
      </div>
    </motion.div>
  );
};

const StatsSection = () => (
  <section className="relative bg-navy-deep py-20 overflow-hidden">
    <img
      src="/images/team-collaboration.jpg"
      alt=""
      aria-hidden="true"
      className="absolute inset-0 w-full h-full object-cover opacity-10"
      loading="lazy"
    />
    <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-accent font-sans text-xs font-bold tracking-[0.25em] uppercase mb-3 block">
          Pan-African Financial Platform
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-white font-bold">
          Growing With Our Clients
        </h2>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-0 lg:divide-x divide-white/10">
        {stats.map((stat, i) => (
          <StatItem key={stat.label} stat={stat} i={i} />
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
