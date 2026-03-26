import { motion } from "framer-motion";

const CEOQuote = () => (
  <section className="py-24 lg:py-32 bg-primary relative overflow-hidden">
    {/* Background decorative */}
    <div className="absolute top-0 left-0 text-[200px] leading-none text-white/[0.03] font-serif select-none pointer-events-none">
      &ldquo;
    </div>
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <span className="text-accent font-sans text-xs font-bold tracking-[0.25em] uppercase mb-8 block">
          Institutional Vision
        </span>
        <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-medium leading-snug mb-10 italic">
          &ldquo;Enterprises hold extraordinary potential. Our mission is to structure that potential into credible financial architectures capable of accessing international capital markets and sustaining long-term growth.&rdquo;
        </blockquote>
        <div className="flex items-center justify-center gap-4">
          <img
            src="/leadership/laurent-bien-legbane.jpeg"
            alt="Laurent Bien Legbane"
            className="w-14 h-14 rounded-full object-cover border-2 border-accent"
            loading="lazy"
          />
          <div className="text-left">
            <div className="text-white font-semibold text-sm">Laurent Bien Legbane</div>
            <div className="text-white/50 text-xs tracking-wider uppercase">
              CEO — CF Banque Investment Group
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CEOQuote;
