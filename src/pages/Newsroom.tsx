import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  newsroomHighlights,
  newsroomPressReleases,
  newsroomStories,
} from "@/content/newsroomContent";
import { newsroomQuickLinks, newsroomRoutes } from "@/config/siteRoutes";

const Newsroom = () => (
  <PageTransition>
    <div className="min-h-screen">
      <SEO
        title="Newsroom"
        description="Latest news, press releases and stories from CF Banque Investment. Stay informed about our business, impact and people."
        path="/newsroom"
      />
      <Navbar />
      <PageHero
        tag="Newsroom"
        title="Newsroom"
        description="The latest news, press releases and stories from CF BANQUE INVESTMENT. Stay informed about our business, impact and people."
        image="/images/atl-hero1.png"
        anchors={newsroomQuickLinks}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-16"
          >
            <span className="text-accent font-sans text-sm font-semibold tracking-[0.2em] uppercase">
              Newsroom hub
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-bold mt-3 mb-4">
              Explore the latest updates from the firm
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Press releases, feature stories and media contacts now live on
              dedicated pages so visitors can get to the right information
              faster.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsroomHighlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={item.link}
                  className="group block bg-muted p-8 lg:p-10 h-full border hover:shadow-lg transition-all duration-300"
                >
                  <item.icon
                    className="w-10 h-10 text-accent mb-5"
                    strokeWidth={1.5}
                  />
                  <h3 className="font-serif text-xl lg:text-2xl text-foreground font-semibold mb-3 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-5">
                    {item.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                    Explore <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-muted">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <span className="text-accent font-sans text-sm font-semibold tracking-[0.2em] uppercase">
                Latest releases
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-bold mt-3 mb-3">
                Recent press announcements
              </h2>
              <p className="text-muted-foreground text-lg">
                A preview of the latest stories from our press office.
              </p>
            </motion.div>
            <Link
              to={newsroomRoutes.pressReleases}
              className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all"
            >
              View all press releases <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {newsroomPressReleases.slice(0, 3).map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white overflow-hidden border"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-8">
                  <span className="text-muted-foreground text-sm">
                    {item.date}
                  </span>
                  <h3 className="font-serif text-xl lg:text-2xl text-foreground font-semibold mt-2 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <span className="text-accent font-sans text-sm font-semibold tracking-[0.2em] uppercase">
                Featured stories
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-bold mt-3 mb-3">
                Stories from across the group
              </h2>
              <p className="text-muted-foreground text-lg">
                Human-centered stories that highlight our people, partners and
                communities.
              </p>
            </motion.div>
            <Link
              to={newsroomRoutes.stories}
              className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all"
            >
              Explore stories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsroomStories.map((story, i) => (
              <motion.article
                key={story.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-muted overflow-hidden border"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-8">
                  <span className="text-accent text-xs font-semibold uppercase tracking-wider">
                    {story.category}
                  </span>
                  <h3 className="font-serif text-lg text-foreground font-semibold mt-3 mb-3 leading-snug">
                    {story.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {story.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-br from-[#0a1628] via-[#162a4a] to-[#1a3a5c]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-bold mb-6">
                Need to speak with us?
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                For press inquiries, interviews and media requests, please use
                our media contacts page or contact form.
              </p>
              <Link
                to={newsroomRoutes.mediaContacts}
                className="inline-flex items-center gap-2 bg-accent hover:bg-orange-600 text-white px-8 py-4 font-sans font-semibold text-sm uppercase tracking-wider transition-colors rounded"
              >
                Media contacts <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {[
                "Executive interviews and commentary",
                "Press statements and approvals",
                "Image, logo and brand asset requests",
                "Background briefings and fact checks",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-white/10 border border-white/10 p-5 text-white/90 text-sm font-medium"
                >
                  {item}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  </PageTransition>
);

export default Newsroom;
