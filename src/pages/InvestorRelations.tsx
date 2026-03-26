import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import {
  investorRelationsEvents,
  investorRelationsFinancialHighlights,
  investorRelationsHighlights,
  investorRelationsMetrics,
  investorRelationsReports,
} from "@/content/investorRelationsContent";
import {
  investorRelationsQuickLinks,
  investorRelationsRoutes,
} from "@/config/siteRoutes";

const InvestorRelations = () => (
  <PageTransition>
    <div className="min-h-screen">
      <SEO
        title="Investor Relations"
        description="Annual reports, quarterly results, ESG disclosures, governance documents and shareholder information - CF Banque Investment."
        path="/investor-relations"
      />
      <Navbar />
      <PageHero
        tag="Investor Relations"
        title="Investor Relations"
        description="Financial performance, reports, governance and shareholder support for CF BANQUE INVESTMENT."
        image="/images/financial-report.jpg"
        anchors={investorRelationsQuickLinks}
      />

      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {investorRelationsMetrics.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <item.icon
                  className="w-8 h-8 text-accent mx-auto mb-3"
                  strokeWidth={1.5}
                />
                <div className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-1">
                  {item.value}
                </div>
                <div className="text-muted-foreground text-sm uppercase tracking-wider">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-16"
          >
            <span className="text-accent font-sans text-sm font-semibold tracking-[0.2em] uppercase">
              Investor hub
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-bold mt-3 mb-4">
              Everything investors need, organized by topic
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Jump directly to the financial, governance and reporting
              information you need without digging through a single long page.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-8">
            {investorRelationsHighlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to={item.link}
                  className="group block bg-muted p-8 h-full border hover:shadow-lg transition-all duration-300"
                >
                  <item.icon
                    className="w-10 h-10 text-accent mb-5"
                    strokeWidth={1.5}
                  />
                  <h3 className="font-serif text-xl text-foreground font-semibold mb-3 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {item.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                    Open page <ArrowRight className="w-4 h-4" />
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
                Performance snapshot
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-bold mt-3 mb-3">
                A short view of the latest numbers
              </h2>
              <p className="text-muted-foreground text-lg">
                These indicators highlight the scale and momentum behind our
                current business trajectory.
              </p>
            </motion.div>
            <div className="flex flex-wrap gap-3">
              <Link
                to={investorRelationsRoutes.financialPerformance}
                className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all"
              >
                Financial performance <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to={investorRelationsRoutes.reportsFilings}
                className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all"
              >
                Reports & filings <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {investorRelationsFinancialHighlights.map((item, i) => (
              <motion.div
                key={item.metric}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white p-6"
              >
                <div className="text-muted-foreground text-sm uppercase tracking-wider mb-2">
                  {item.metric}
                </div>
                <div className="font-serif text-2xl lg:text-3xl font-bold text-foreground mb-1">
                  {item.value}
                </div>
                <div className="text-accent text-sm font-semibold">
                  {item.change}
                </div>
              </motion.div>
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
                Latest documents
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-bold mt-3 mb-3">
                Recent reports and upcoming events
              </h2>
              <p className="text-muted-foreground text-lg">
                A preview of the latest disclosures and calendar items from the
                investor relations desk.
              </p>
            </motion.div>
            <Link
              to={investorRelationsRoutes.eventsCalendar}
              className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all"
            >
              View full calendar <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-serif text-xl text-foreground font-semibold">
                  Reports preview
                </h3>
                <Link
                  to={investorRelationsRoutes.reportsFilings}
                  className="text-accent text-sm font-semibold uppercase tracking-wider inline-flex items-center gap-2 hover:gap-3 transition-all"
                >
                  All reports <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="space-y-4">
                {investorRelationsReports.slice(0, 3).map((report, i) => (
                  <motion.article
                    key={report.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="bg-muted border overflow-hidden"
                  >
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="sm:w-40 shrink-0">
                        <img
                          src={report.image}
                          alt={report.title}
                          className="w-full h-full object-cover aspect-[16/10]"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-5 flex-1">
                        <span className="text-accent text-xs font-semibold uppercase tracking-wider">
                          {report.category}
                        </span>
                        <h4 className="font-serif text-lg text-foreground font-semibold mt-2 mb-2">
                          {report.title}
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {report.description}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-serif text-xl text-foreground font-semibold">
                  Upcoming events
                </h3>
                <Link
                  to={investorRelationsRoutes.eventsCalendar}
                  className="text-accent text-sm font-semibold uppercase tracking-wider inline-flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Events page <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="bg-muted border divide-y divide-gray-100">
                {investorRelationsEvents.slice(0, 3).map((event, i) => (
                  <motion.div
                    key={event.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="p-6 flex flex-col sm:flex-row sm:items-center gap-4"
                  >
                    <div className="sm:w-40 shrink-0">
                      <div className="flex items-center gap-2 text-accent font-semibold text-sm">
                        <Calendar className="w-4 h-4" />
                        {event.date}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-serif text-lg text-foreground font-semibold mb-1">
                        {event.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {event.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-br from-[#0a1628] via-[#162a4a] to-[#1a3a5c]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-bold mb-6">
                Questions from investors?
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Our investor relations team can help with documents, event
                details, governance questions and general shareholder support.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-accent hover:bg-orange-600 text-white px-8 py-4 font-sans font-semibold text-sm uppercase tracking-wider transition-colors rounded"
              >
                Contact investor relations <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {[
                "Annual and quarterly report requests",
                "AGM and investor day information",
                "Governance and disclosure questions",
                "Shareholder support and contacts",
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

export default InvestorRelations;
