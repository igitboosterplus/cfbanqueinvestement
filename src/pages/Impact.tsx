import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { impactAreas } from "@/content/impactContent";
import { impactQuickLinks, newsroomRoutes } from "@/config/siteRoutes";

const Impact = () => (
  <PageTransition>
    <div className="min-h-screen">
      <SEO
        title="Impact"
        description="Creating economic opportunity for all through business growth, community development, sustainability and financial health initiatives — CF Banque Investment."
        path="/impact"
      />
      <Navbar />
      <PageHero
        tag="Impact"
        title="Creating Economic Opportunity for All"
        description="We leverage our expertise, capital and global reach to drive inclusive economic growth and create lasting positive impact for clients, communities and employees."
        image="/images/banner-miami.jpg"
        anchors={impactQuickLinks}
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
              Our Areas of Impact
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We help power economic growth by creating opportunities for all through business and community investments, local collaborations and policy advocacy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactAreas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={area.link}
                  className="group block bg-muted p-8 lg:p-10 h-full hover:shadow-lg transition-all duration-300"
                >
                  <area.icon className="w-10 h-10 text-accent mb-5" strokeWidth={1.5} />
                  <h3 className="font-serif text-xl text-foreground font-semibold mb-3">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-5">
                    {area.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
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
              Stay Informed
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
              Get the latest insights on our impact initiatives, research reports and community investment stories from around the world.
            </p>
            <Link
              to={newsroomRoutes.overview}
              className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all"
            >
              Visit our newsroom <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  </PageTransition>
);

export default Impact;
