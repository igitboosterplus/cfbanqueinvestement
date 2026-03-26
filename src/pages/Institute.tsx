import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import { BookOpen, BarChart3, Globe, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const researchAreas = [
  {
    icon: BarChart3,
    title: "Economic Research",
    description:
      "In-depth analysis of macroeconomic trends, monetary policy shifts and their implications for global capital markets and investment strategies.",
  },
  {
    icon: Globe,
    title: "Geopolitical Analysis",
    description:
      "Expert insights on geopolitical developments, trade dynamics and regulatory changes affecting cross-border transactions and international investments.",
  },
  {
    icon: TrendingUp,
    title: "Market Insights",
    description:
      "Real-time market commentary, sector analysis and investment outlook bridging the gap between academic research and practical financial applications.",
  },
  {
    icon: BookOpen,
    title: "Policy & Thought Leadership",
    description:
      "Original research and white papers on financial inclusion, sustainable development and the future of institutional banking across emerging markets.",
  },
];

const reports = [
  {
    title: "2025 Global Investment Outlook",
    category: "Market Research",
    description: "Comprehensive analysis of global investment trends and opportunities for the year ahead.",
    image: "/images/market-analysis.jpg",
  },
  {
    title: "ESG in Emerging Markets: Challenges & Opportunities",
    category: "Sustainability",
    description: "How sustainable investing is reshaping capital flows in frontier and emerging markets.",
    image: "/images/esg-commitment.jpg",
  },
  {
    title: "The Future of Cross-Border Finance in Africa",
    category: "Regional Analysis",
    description: "A deep dive into financial integration, regulatory harmonization and investment opportunities across the continent.",
    image: "/images/global-trading.jpg",
  },
];

const Institute = () => (
  <PageTransition>
  <div className="min-h-screen">
    <SEO title="Institute" description="Research, data-driven analysis and thought leadership informing strategic decision-making across global markets — CF Banque Investment Institute." path="/institute" />
    <Navbar />
    <PageHero
      tag="Institute"
      title="CF BANQUE Investment Institute"
      description="Our research institute delivers original insights, data-driven analysis and thought leadership to inform strategic decision-making across global markets."
      image="/images/institute-hero.jpg"
      anchors={[
        { label: "Research", href: "#research-areas" },
        { label: "Publications", href: "#publications" },
      ]}
    />

    <section id="research-areas" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-bold mb-4">
            Research Areas
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Our interdisciplinary team of analysts, economists and strategists delivers actionable intelligence spanning macroeconomics, geopolitics and sector-specific trends.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {researchAreas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-muted p-8 lg:p-10"
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

    <section id="publications" className="py-20 lg:py-28 bg-muted">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-12"
        >
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-bold">
            Latest Publications
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reports.map((report, i) => (
            <motion.article
              key={report.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={report.image}
                  alt={report.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-8">
              <span className="text-accent text-xs font-semibold uppercase tracking-wider">
                {report.category}
              </span>
              <h3 className="font-serif text-lg text-foreground font-semibold mt-3 mb-3 leading-snug">
                {report.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {report.description}
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all">
                Read more <ArrowRight className="w-4 h-4" />
              </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>

    <CTABanner />
    <Footer />
  </div>
  </PageTransition>
);

export default Institute;
