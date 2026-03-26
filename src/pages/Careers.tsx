import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { careerHighlights, careerValues } from "@/content/careersContent";
import { careersQuickLinks } from "@/config/siteRoutes";

const Careers = () => (
  <PageTransition>
    <div className="min-h-screen">
      <SEO
        title="Careers"
        description="Build your career at CF Banque Investment. Join a global team of financial experts across investment banking, asset management and advisory services."
        path="/careers"
      />
      <Navbar />
      <PageHero
        tag="Careers"
        title="Build Your Career With Us"
        description="A talent-driven institution is, by definition, an inclusive one. We're committed to creating a workplace where professionals thrive, innovate and build meaningful careers in global finance."
        image="/images/careers-hero.jpg"
        anchors={careersQuickLinks}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-16"
          >
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-bold mb-4">
              Why CF BANQUE INVESTMENT?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We offer a dynamic, collaborative environment where talented professionals can make an immediate impact while building a long-term career in international finance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {careerHighlights.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-muted p-8"
              >
                <Link to={section.link} className="block h-full">
                  <section.icon className="w-10 h-10 text-accent mb-5" strokeWidth={1.5} />
                  <h3 className="font-serif text-xl text-foreground font-semibold mb-3 hover:text-accent transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {section.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-muted">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-bold mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              These core values guide everything we do from how we serve our clients to how we support one another.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {careerValues.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 text-center"
              >
                <h3 className="font-serif text-xl text-foreground font-semibold mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-br from-[#0a1628] via-[#162a4a] to-[#1a3a5c]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-bold mb-6">
              Ready to Join Our Team?
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
              Explore our current openings and take the first step toward a rewarding career in global finance.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-orange-600 text-white px-8 py-4 font-sans font-semibold text-sm uppercase tracking-wider transition-colors rounded"
            >
              Apply Now <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  </PageTransition>
);

export default Careers;
