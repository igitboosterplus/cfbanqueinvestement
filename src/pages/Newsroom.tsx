import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const pressReleases = [
  {
    date: "March 2026",
    title: "CF BANQUE INVESTMENT Expands Advisory Operations in West Africa",
    summary: "New strategic partnerships strengthen the firm's presence across key emerging markets in the region.",
  },
  {
    date: "February 2026",
    title: "Sustainable Finance: Integrating ESG into Capital Markets",
    summary: "Our latest ESG framework outlines pathways for responsible investment and long-term value creation.",
  },
  {
    date: "January 2026",
    title: "Strategic M&A Advisory: Driving Cross-Border Growth",
    summary: "CF BANQUE INVESTMENT advises on landmark transactions across multiple jurisdictions.",
  },
  {
    date: "December 2025",
    title: "CF BANQUE INVESTMENT Launches New Wealth Management Division",
    summary: "Expanded private banking and wealth advisory services for HNWI and UHNWI clients globally.",
  },
  {
    date: "November 2025",
    title: "Annual Summit: The Future of African Capital Markets",
    summary: "Senior leaders convene to discuss investment opportunities and regulatory developments across the continent.",
  },
  {
    date: "October 2025",
    title: "CF BANQUE INVESTMENT Recognized for Excellence in Advisory",
    summary: "The firm receives industry recognition for its innovative approach to structured finance and capital markets.",
  },
];

const stories = [
  {
    title: "Building Resilient Communities Through Investment",
    category: "Impact Stories",
    description: "How our community development initiatives are creating lasting economic opportunities in underserved regions.",
  },
  {
    title: "Inside Our Global Headquarters",
    category: "Company Culture",
    description: "A look at how our offices foster collaboration, innovation and professional growth across borders.",
  },
  {
    title: "Women in Finance: Leading the Way",
    category: "Diversity & Inclusion",
    description: "Profiles of women leaders at CF BANQUE INVESTMENT who are shaping the future of global finance.",
  },
];

const Newsroom = () => (
  <PageTransition>
  <div className="min-h-screen">
    <Navbar />
    <PageHero
      tag="Newsroom"
      title="Newsroom"
      description="The latest news, press releases and stories from CF BANQUE INVESTMENT. Stay informed about our business, impact and people."
      image="/images/atl-hero1.png"
    />

    {/* Press Releases */}
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-bold">
            Press Releases
          </h2>
        </motion.div>

        <div className="divide-y divide-gray-100">
          {pressReleases.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="py-8 group cursor-pointer"
            >
              <span className="text-muted-foreground text-sm">{item.date}</span>
              <h3 className="font-serif text-xl lg:text-2xl text-foreground font-semibold mt-2 mb-2 group-hover:text-accent transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-3xl">
                {item.summary}
              </p>
              <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider mt-4 group-hover:gap-3 transition-all">
                Read more <ArrowRight className="w-4 h-4" />
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>

    {/* Stories */}
    <section className="py-20 lg:py-28 bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-bold">
            Stories
          </h2>
          <p className="text-muted-foreground text-lg mt-3">
            Access stories about our impact and employees from around the world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, i) => (
            <motion.article
              key={story.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
            >
              <span className="text-accent text-xs font-semibold uppercase tracking-wider">
                {story.category}
              </span>
              <h3 className="font-serif text-lg text-foreground font-semibold mt-3 mb-3 leading-snug group-hover:text-accent transition-colors">
                {story.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {story.description}
              </p>
              <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                Read more <ArrowRight className="w-4 h-4" />
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>

    {/* Media Contacts */}
    <section className="py-16 bg-gradient-to-br from-[#0a1628] via-[#162a4a] to-[#1a3a5c]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-2xl sm:text-3xl text-white font-bold mb-4">
            Media Contacts
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-6">
            For press inquiries, interviews and media requests, please reach out to our communications team.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all"
          >
            Contact our press team <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>

    <CTABanner />
    <Footer />
  </div>
  </PageTransition>
);

export default Newsroom;
