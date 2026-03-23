import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import { Heart, Users, Globe, Handshake } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const areas = [
  {
    icon: Heart,
    title: "Community Relief",
    description:
      "Rapid response support and long-term recovery assistance for communities impacted by natural disasters, economic downturns and humanitarian crises across our operational regions.",
  },
  {
    icon: Users,
    title: "Volunteerism",
    description:
      "Our employees dedicate thousands of hours annually to mentoring, financial literacy programs and skill-building initiatives in local communities around the world.",
  },
  {
    icon: Globe,
    title: "Local Partnerships",
    description:
      "Strategic collaborations with local governments, NGOs and community organizations to create lasting economic opportunities and build resilient communities.",
  },
  {
    icon: Handshake,
    title: "Financial Inclusion",
    description:
      "Programs designed to expand access to financial services, banking and investment opportunities for underserved populations across emerging and frontier markets.",
  },
];

const Communities = () => (
  <PageTransition>
  <div className="min-h-screen">
    <Navbar />
    <PageHero
      tag="Communities"
      title="Making an Impact Where We Operate"
      description="We are committed to making a lasting positive impact in the communities where we live and work through long-term business investments and philanthropic efforts."
      image="/images/banner-columbus-group-helping-women-of-color-build-wealth.jpg"
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
            Our Community Commitment
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            For more than five years, CF BANQUE INVESTMENT has championed the essential role of banking in communities. Our senior leaders engage directly with local stakeholders to identify opportunities where business growth and community investment intersect.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {areas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#f7f7f7] p-8 lg:p-10"
            >
              <area.icon className="w-10 h-10 text-accent mb-5" strokeWidth={1.5} />
              <h3 className="font-serif text-xl lg:text-2xl text-foreground font-semibold mb-3">
                {area.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 lg:py-28 bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-bold mb-6">
            Get Involved
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Join us in building stronger communities. Whether through partnerships, employment or investment, there are many ways to make a difference.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all"
          >
            Contact us to learn more <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>

    <CTABanner />
    <Footer />
  </div>
  </PageTransition>
);

export default Communities;
