import { motion } from "framer-motion";
import { Globe, MapPin } from "lucide-react";

const countries = [
  { name: "United Kingdom", flagCode: "gb", pos: "top-[18%] left-[46%]" },
  { name: "USA", flagCode: "us", pos: "top-[25%] left-[22%]" },
  { name: "India", flagCode: "in", pos: "top-[38%] left-[68%]" },
  { name: "Panama", flagCode: "pa", pos: "top-[45%] left-[24%]" },
  { name: "Hong Kong", flagCode: "hk", pos: "top-[35%] left-[78%]" },
  { name: "Singapore", flagCode: "sg", pos: "top-[50%] left-[74%]" },
  { name: "Senegal", flagCode: "sn", pos: "top-[42%] left-[38%]" },
  { name: "Cameroon", flagCode: "cm", pos: "top-[50%] left-[50%]" },
  { name: "Congo", flagCode: "cg", pos: "top-[56%] left-[52%]" },
  { name: "Gabon", flagCode: "ga", pos: "top-[53%] left-[48%]" },
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
                className="inline-flex items-center gap-1.5 bg-white/[0.08] text-white/60 text-xs font-medium px-3 py-1.5"
              >
                <img
                  src={`https://flagcdn.com/w20/${c.flagCode}.png`}
                  srcSet={`https://flagcdn.com/w40/${c.flagCode}.png 2x`}
                  width="16"
                  height="12"
                  alt=""
                  className="inline-block rounded-sm object-cover"
                  loading="lazy"
                />
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
              <Globe className="w-28 h-28 lg:w-36 lg:h-36 text-white/10" strokeWidth={0.5} aria-hidden="true" />
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
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap bg-white text-primary text-[11px] font-semibold px-2.5 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none flex items-center gap-1">
                  <img src={`https://flagcdn.com/w20/${c.flagCode}.png`} width="14" height="10" alt="" className="inline-block rounded-sm" loading="lazy" />
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
