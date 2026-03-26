import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Strategic Financial Diagnosis",
    description:
      "We begin with an in-depth analysis of your company's financial structure, governance model and growth ambitions in order to identify structural opportunities and constraints within international capital markets.",
  },
  {
    number: "02",
    title: "Financial Architecture & Structuring",
    description:
      "Our experts design robust financial architectures aligned with international standards such as IFRS and US GAAP, enabling your company to become investment-ready and scalable.",
  },
  {
    number: "03",
    title: "Capital Market Access",
    description:
      "Through our international network of investors and financial institutions, we facilitate your access to capital markets, strategic partners and institutional funding opportunities.",
  },
];

const ProcessSteps = () => (
  <section className="py-24 lg:py-32 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Steps */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-sans text-xs font-bold tracking-[0.25em] uppercase mb-4 block">
              Strategic Process
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground font-bold mb-12">
              Our Strategic Approach to{" "}
              <span className="text-accent">Financial Transformation</span>
            </h2>
          </motion.div>

          <div className="space-y-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex gap-6"
              >
                <div className="shrink-0">
                  <span className="inline-flex items-center justify-center w-14 h-14 bg-accent text-white font-serif text-xl font-bold">
                    {step.number}
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-orange-light text-white font-semibold text-sm tracking-[0.15em] uppercase transition-all duration-300"
            >
              Discover Our Financial Solutions <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </motion.div>
        </div>

        {/* Right: Image + Counter */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <img
            src="/images/finance-strategy.jpg"
            alt="Financial strategy and analysis"
            className="w-full h-auto object-cover shadow-2xl"
            loading="lazy"
          />
          {/* Stats overlay */}
          <div className="absolute -bottom-8 -left-6 lg:-left-12 bg-accent text-white p-8 shadow-xl">
            <div className="font-serif text-4xl font-bold mb-1">500+</div>
            <div className="text-white/80 text-sm uppercase tracking-wider">Clients Served</div>
            <p className="text-white/60 text-xs mt-3 leading-relaxed max-w-[200px]">
              We support enterprises in structuring their financial future.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ProcessSteps;
