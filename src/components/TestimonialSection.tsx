import { motion } from "framer-motion";
import { Star } from "lucide-react";

const TestimonialSection = () => (
  <section className="py-24 lg:py-32 bg-muted">
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-accent font-sans text-xs font-bold tracking-[0.25em] uppercase mb-4 block">
          Client Testimonial
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground font-bold">
          Building Trusted Financial Architectures
        </h2>
        <p className="text-muted-foreground text-lg mt-4">
          More than 99% customer satisfaction is our success.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="max-w-3xl mx-auto bg-white p-10 lg:p-14 shadow-lg text-center"
      >
        <blockquote className="font-serif text-xl lg:text-2xl text-foreground/80 italic leading-relaxed mb-8">
          &ldquo;The next generation of enterprises requires more than capital. It requires credible financial architectures capable of connecting local ambition with global investment ecosystems. CF Banque Investment delivered exactly that for our group.&rdquo;
        </blockquote>
        <div className="flex items-center justify-center gap-4 mb-4">
          <img
            src="/images/advisory-session.jpg"
            alt="Client"
            className="w-14 h-14 rounded-full object-cover"
            loading="lazy"
          />
          <div className="text-left">
            <div className="font-semibold text-foreground">Senior Executive</div>
            <div className="text-muted-foreground text-sm">Financial Advisory Client</div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-accent text-accent" />
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default TestimonialSection;
