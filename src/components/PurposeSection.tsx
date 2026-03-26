import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useCountUp } from "@/hooks/use-count-up";

const stats = [
  { numericValue: 500, prefix: "", suffix: "+", label: "Clients Worldwide" },
  { numericValue: 9, prefix: "", suffix: "+", label: "Countries" },
  { numericValue: 2.4, prefix: "$", suffix: "B", label: "Assets Managed", decimals: 1 },
  { numericValue: 1200, prefix: "", suffix: "+", label: "Professionals" },
];

const StatItem = ({ stat }: { stat: (typeof stats)[number] }) => {
  const { count, ref } = useCountUp(
    stat.decimals ? stat.numericValue * 10 : stat.numericValue,
    2200,
  );
  const display = stat.decimals
    ? `${stat.prefix}${(count / 10).toFixed(1)}${stat.suffix}`
    : `${stat.prefix}${count.toLocaleString()}${stat.suffix}`;

  return (
    <div ref={ref} className="text-center">
      <div className="font-serif text-3xl sm:text-4xl text-accent font-bold mb-1">
        {display}
      </div>
      <div className="text-muted-foreground text-xs tracking-wider uppercase font-sans">
        {stat.label}
      </div>
    </div>
  );
};

const PurposeSection = () => (
  <section className="py-24 lg:py-32 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        {/* Left: Text content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-accent font-sans text-xs font-bold tracking-[0.25em] uppercase mb-4 block">
            Welcome to CF Banque Investment
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground font-bold leading-tight mb-6">
            We Work with You to Make Your Vision a Reality
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-5">
            CF Banque Investment is an international financial institution dedicated to supporting enterprises in their structural transformation, regional expansion, and integration into global financial markets.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Our approach combines deep knowledge of economic environments with advanced international financial engineering capabilities. This dual expertise allows us to design financial structures aligned with the expectations of institutional investors, sovereign wealth funds, and global capital markets.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-orange-light text-white font-semibold text-sm tracking-[0.15em] uppercase transition-all duration-300"
          >
            More About Us <ArrowRight className="w-4 h-4 ml-2" />
          </Link>

          {/* Who We Serve tags */}
          <div className="mt-10 pt-8 border-t border-gray-200">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-foreground/40 mb-4 block font-sans">
              Who We Serve
            </span>
            <div className="flex flex-wrap gap-3">
              {["Public Companies", "Family Offices", "Private Companies", "Financial Sponsors"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="text-sm text-primary/70 font-medium border border-primary/15 px-4 py-2 bg-primary/[0.03]"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </div>
        </motion.div>

        {/* Right: Image + Stats overlay */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative">
            <img
              src="/images/about-us-hero.png"
              alt="CF Banque Investment team"
              className="w-full h-auto object-cover shadow-2xl"
              loading="lazy"
            />
            {/* Stats grid overlay */}
            <div className="absolute -bottom-10 -left-6 right-6 lg:-left-10 lg:right-10 bg-white shadow-xl p-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <StatItem key={stat.label} stat={stat} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default PurposeSection;
