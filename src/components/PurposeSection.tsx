import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useCountUp } from "@/hooks/use-count-up";

const stats = [
  { numericValue: 9, prefix: "", suffix: "+", label: "Countries" },
  { numericValue: 2.4, prefix: "$", suffix: "B", label: "Assets Under Management", decimals: 1 },
  { numericValue: 500, prefix: "", suffix: "+", label: "Institutional Clients" },
  { numericValue: 1200, prefix: "", suffix: "+", label: "Employees Worldwide" },
];

const StatItem = ({ stat }: { stat: typeof stats[number] }) => {
  const { count, ref } = useCountUp(
    stat.decimals ? stat.numericValue * 10 : stat.numericValue,
    2200
  );
  const display = stat.decimals
    ? `${stat.prefix}${(count / 10).toFixed(1)}${stat.suffix}`
    : `${stat.prefix}${count.toLocaleString()}${stat.suffix}`;

  return (
    <div ref={ref} className="text-center py-8 lg:py-0">
      <div className="font-serif text-4xl sm:text-5xl text-white font-bold mb-2">
        {display}
      </div>
      <div className="text-white/50 text-sm tracking-wide uppercase">
        {stat.label}
      </div>
    </div>
  );
};

const PurposeSection = () => (
  <>
    {/* Text content */}
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground font-bold leading-tight mb-6">
            Serving with Purpose
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed mb-8">
            We are united by a commitment to institutional excellence. Our integrated
            platform combines investment banking, asset management and wealth management
            capabilities to deliver sustainable value for clients, investors and
            communities across borders. We support global and local economies —
            investing in the progress of everyone we serve.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm tracking-wide hover:gap-3 transition-all duration-300 border-b border-primary/30 pb-1 hover:border-primary"
          >
            See how we do business <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>

    {/* Dark navy stats strip — JPMorgan style */}
    <section className="bg-primary py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-0 lg:divide-x divide-white/15">
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  </>
);

export default PurposeSection;
