import { motion } from "framer-motion";
import { Globe, MapPin } from "lucide-react";

const countries = [
  { name: "France", pos: "top-[18%] left-[48%]" },
  { name: "Switzerland", pos: "top-[22%] left-[52%]" },
  { name: "Ivory Coast", pos: "top-[48%] left-[42%]" },
  { name: "Senegal", pos: "top-[40%] left-[36%]" },
  { name: "Cameroon", pos: "top-[52%] left-[50%]" },
  { name: "Congo", pos: "top-[58%] left-[52%]" },
  { name: "Gabon", pos: "top-[55%] left-[48%]" },
  { name: "UAE", pos: "top-[35%] left-[65%]" },
  { name: "Morocco", pos: "top-[32%] left-[42%]" },
];

const capabilities = [
  "Cross-border transaction execution",
  "Global capital mobilization",
  "Regulatory coordination across jurisdictions",
  "Strategic geopolitical analysis",
];

const GlobalPresence = () => (
  <section className="py-24 lg:py-32 bg-primary overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-bold mb-6">
            A Global Financial Network
          </h2>
          <p className="text-white/60 leading-relaxed mb-8">
            CF Banque Investment operates across nine countries and maintains an extensive network of senior advisors and special envoys positioned in major global financial centers. This international footprint allows the firm to operate effectively within the global financial ecosystem.
          </p>
          <ul className="space-y-3 mb-10">
            {capabilities.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <div className="w-1 h-1 rounded-full bg-white/40 mt-2.5 shrink-0" />
                <span className="text-white/70">{item}</span>
              </li>
            ))}
          </ul>
          {/* Country tags */}
          <div className="flex flex-wrap gap-2">
            {countries.map((c) => (
              <span
                key={c.name}
                className="inline-flex items-center gap-1.5 bg-white/8 text-white/60 text-xs font-medium px-3 py-1.5"
              >
                <MapPin className="w-3 h-3 text-white/40" />
                {c.name}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative w-80 h-80 lg:w-[420px] lg:h-[420px]">
            {/* Orbital rings */}
            <div className="absolute inset-0 rounded-full border border-white/10" />
            <div className="absolute inset-6 rounded-full border border-white/[0.07]" />
            <div className="absolute inset-14 rounded-full border border-white/[0.05]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Globe className="w-28 h-28 lg:w-36 lg:h-36 text-white/10" strokeWidth={0.5} />
            </div>
            {/* Country dots with tooltips */}
            {countries.map((c, i) => (
              <motion.div
                key={c.name}
                className={`absolute ${c.pos} group`}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.08, type: "spring" }}
              >
                <motion.div
                  className="w-2.5 h-2.5 rounded-full bg-white/60 cursor-pointer"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.25 }}
                />
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap bg-white text-primary text-[11px] font-semibold px-2.5 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {c.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default GlobalPresence;
