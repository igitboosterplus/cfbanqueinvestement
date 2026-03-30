import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MapPin, Mail, Phone } from "lucide-react";

const benefits = [
  "Orientation for Business",
  "Analyze the Problems You Are Facing",
  "Strategic Analysis for Business",
  "24/7 Support at Any Time",
  "Qualified Consultants",
  "Free Consultation Until Cooperation",
];

const CTABanner = () => (
  <section className="py-24 lg:py-32 bg-muted relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left: Benefits + Contact info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-accent font-sans text-xs font-bold tracking-[0.25em] uppercase mb-4 block">
            Get in Touch
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground font-bold leading-tight mb-6">
            You Need the Right Direction for Your Business.{" "}
            <span className="text-accent">We'll Help You Do That.</span>
          </h2>

          <div className="mb-10">
            <h3 className="text-sm font-bold tracking-[0.15em] uppercase text-foreground/50 mb-5">
              Your Benefits When Contacting Us
            </h3>
            <ul className="space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-foreground/70">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-gray-200">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold tracking-wider uppercase text-foreground/40 mb-1">
                  Address
                </div>
                <span className="text-sm text-foreground/70 leading-relaxed">
                  25 Cabot Square, Canary Wharf, London E14 4QA
                </span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold tracking-wider uppercase text-foreground/40 mb-1">
                  Email
                </div>
                <a
                  href="mailto:customer@cfbanque.com"
                  className="text-sm text-foreground/70 hover:text-accent transition-colors"
                >
                  customer@cfbanque.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold tracking-wider uppercase text-foreground/40 mb-1">
                  Phone
                </div>
                <a
                  href="tel:+442039625751"
                  className="text-sm text-foreground/70 hover:text-accent transition-colors"
                >
                  +44 20 3962 5751
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: CTA Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-primary p-10 lg:p-14 text-white"
        >
          <h3 className="font-serif text-2xl lg:text-3xl font-bold mb-4">
            Schedule a Free Consultation
          </h3>
          <p className="text-white/60 leading-relaxed mb-8">
            Let our team of qualified financial consultants guide you through the complexities of international capital markets and help structure your path to sustainable growth.
          </p>
          <div className="space-y-4 mb-8">
            <Link
              to="/contact"
              className="w-full inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-orange-light text-white font-semibold text-sm tracking-[0.15em] uppercase transition-all duration-300"
            >
              Contact Us Now <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              to="/about"
              className="w-full inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 hover:border-white text-white font-semibold text-sm tracking-[0.15em] uppercase transition-all duration-300 hover:bg-white/10"
            >
              Learn More About Us
            </Link>
          </div>
          <p className="text-white/30 text-xs text-center">
            No commitment required. 100% confidential.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default CTABanner;
