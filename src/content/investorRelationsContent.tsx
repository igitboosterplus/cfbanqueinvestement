import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Calendar,
  Download,
  FileText,
  Landmark,
  Mail,
  Phone,
  Shield,
  TrendingUp,
  Users,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import type { TopicPageConfig } from "@/components/TopicPage";
import { investorRelationsRoutes } from "@/config/siteRoutes";

export const investorRelationsMetrics = [
  { label: "Latest Annual Report", value: "2025", icon: FileText },
  { label: "Revenue Growth (YoY)", value: "+18%", icon: TrendingUp },
  { label: "Founded", value: "2019", icon: Calendar },
  { label: "Operating Countries", value: "9+", icon: BarChart3 },
] as const;

export const investorRelationsHighlights = [
  {
    icon: TrendingUp,
    title: "Financial Performance",
    description:
      "A closer look at revenue, assets under management and the key drivers behind our growth.",
    link: investorRelationsRoutes.financialPerformance,
  },
  {
    icon: Download,
    title: "Reports & Filings",
    description:
      "Annual reports, quarterly results, ESG disclosures and regulatory filings.",
    link: investorRelationsRoutes.reportsFilings,
  },
  {
    icon: Shield,
    title: "Governance",
    description:
      "Board oversight, committee structure and shareholder-friendly governance practices.",
    link: investorRelationsRoutes.governance,
  },
  {
    icon: Calendar,
    title: "Events & Calendar",
    description:
      "Upcoming earnings releases, annual meetings and investor day updates.",
    link: investorRelationsRoutes.eventsCalendar,
  },
  {
    icon: Users,
    title: "Shareholder Services",
    description:
      "How to contact our investor relations team and access shareholder support.",
    link: investorRelationsRoutes.shareholderServices,
  },
] as const;

export const investorRelationsFinancialHighlights = [
  { metric: "Total Revenue", value: "$185M", change: "+18% YoY" },
  { metric: "Assets Under Management", value: "$2.4B", change: "+22% YoY" },
  { metric: "Net Income", value: "$42M", change: "+15% YoY" },
  { metric: "Advisory Mandates", value: "45+", change: "+30% YoY" },
  { metric: "Capital Deployed", value: "$1.2B", change: "+25% YoY" },
  { metric: "Return on Equity", value: "14.2%", change: "+1.8pp YoY" },
] as const;

export const investorRelationsReports = [
  {
    title: "2025 Annual Report",
    description:
      "Comprehensive overview of the firm's performance, strategic initiatives, capital allocation and financial results for fiscal year 2025.",
    category: "Annual Report",
    image: "/images/1.jpg",
  },
  {
    title: "Q4 2025 Financial Results",
    description:
      "Fourth-quarter earnings summary with operational highlights, revenue mix and forward-looking guidance.",
    category: "Quarterly Results",
    image: "/images/2.jpg",
  },
  {
    title: "Q3 2025 Financial Results",
    description:
      "Third-quarter performance review including advisory pipeline updates and AUM growth progress.",
    category: "Quarterly Results",
    image: "/images/3.jpg",
  },
  {
    title: "2025 ESG and Sustainability Report",
    description:
      "Environmental, social and governance progress, targets and commitments including green bond issuance and diversity data.",
    category: "ESG Report",
    image: "/images/4.jpg",
  },
  {
    title: "2025 Capital Adequacy Report",
    description:
      "Detailed disclosure of the firm's capital structure, risk-weighted assets and liquidity profile.",
    category: "Regulatory Filing",
    image: "/images/5.jpg",
  },
  {
    title: "2024 Annual Report",
    description:
      "Prior-year performance report and strategic review including the first full-year wealth management division results.",
    category: "Annual Report",
    image: "/images/6.jpg",
  },
] as const;

export const investorRelationsGovernanceItems = [
  {
    icon: Users,
    title: "Board of Directors",
    description:
      "Our board brings experience across finance, technology, governance and international development, with a balance of executive and non-executive oversight.",
  },
  {
    icon: Shield,
    title: "Governance Framework",
    description:
      "Transparent policies and structures covering audit, risk, compensation and nomination oversight, plus strong internal controls.",
  },
  {
    icon: Calendar,
    title: "Shareholder Information",
    description:
      "AGM details, dividend policy resources and important dates for current and prospective investors.",
  },
] as const;

export const investorRelationsEvents = [
  {
    date: "April 15, 2026",
    title: "Q1 2026 Earnings Release",
    description: "First-quarter financial results and conference call.",
  },
  {
    date: "June 12, 2026",
    title: "Annual General Meeting",
    description: "Shareholder meeting with board elections and strategic review.",
  },
  {
    date: "July 18, 2026",
    title: "Q2 2026 Earnings Release",
    description: "Second-quarter financial results and half-year review.",
  },
  {
    date: "September 22, 2026",
    title: "Investor Day 2026",
    description: "Strategic outlook presentation with senior leadership Q&A.",
  },
] as const;

export const investorRelationsTopicAnchors = [
  { label: "Overview", href: investorRelationsRoutes.overview },
  { label: "Financial Performance", href: investorRelationsRoutes.financialPerformance },
  { label: "Reports & Filings", href: investorRelationsRoutes.reportsFilings },
  { label: "Governance", href: investorRelationsRoutes.governance },
  { label: "Events & Calendar", href: investorRelationsRoutes.eventsCalendar },
  { label: "Shareholder Services", href: investorRelationsRoutes.shareholderServices },
] as const;

export const investorRelationsTopics: Record<string, TopicPageConfig> = {
  "financial-performance": {
    seoTitle: "Financial Performance",
    seoDescription:
      "Financial performance, growth metrics and business drivers for CF Banque Investment.",
    path: investorRelationsRoutes.financialPerformance,
    tag: "Investor Relations",
    title: "Financial Performance",
    description:
      "Understand the key growth drivers behind our results, including advisory revenue, asset growth and disciplined capital deployment.",
    image: "/images/market-analysis.jpg",
    anchors: investorRelationsTopicAnchors,
    content: (
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-14"
          >
            <span className="text-accent font-sans text-sm font-semibold tracking-[0.2em] uppercase">
              At a glance
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-bold mt-3 mb-4">
              Performance shaped by disciplined growth
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Our results continue to be supported by client demand across
              advisory, wealth management and capital markets activities.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {investorRelationsFinancialHighlights.map((item, i) => (
              <motion.div
                key={item.metric}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-muted p-6"
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

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Landmark,
                title: "Advisory-led growth",
                text: "Corporate finance, M&A and structured finance continue to drive meaningful client activity.",
              },
              {
                icon: TrendingUp,
                title: "Recurring client relationships",
                text: "Stable mandates and long-term partnerships support revenue visibility across business lines.",
              },
              {
                icon: Shield,
                title: "Capital discipline",
                text: "Balanced deployment and risk management help protect returns while supporting growth.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white border p-8"
              >
                <item.icon className="w-10 h-10 text-accent mb-5" strokeWidth={1.5} />
                <h3 className="font-serif text-xl text-foreground font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link
              to={investorRelationsRoutes.reportsFilings}
              className="inline-flex items-center gap-2 bg-accent hover:bg-orange-600 text-white px-6 py-3 font-sans font-semibold text-sm uppercase tracking-wider transition-colors rounded"
            >
              Review reports <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to={investorRelationsRoutes.eventsCalendar}
              className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 font-sans font-semibold text-sm uppercase tracking-wider transition-colors rounded hover:bg-primary hover:text-white"
            >
              View calendar <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    ),
  },
  "reports-filings": {
    seoTitle: "Reports and Filings",
    seoDescription:
      "Annual reports, quarterly results, ESG disclosures and regulatory filings for investors.",
    path: investorRelationsRoutes.reportsFilings,
    tag: "Investor Relations",
    title: "Reports & Filings",
    description:
      "Access the reports and disclosures that track our performance, capital position and governance approach.",
    image: "/images/financial-report.jpg",
    anchors: investorRelationsTopicAnchors,
    content: (
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-14"
          >
            <span className="text-accent font-sans text-sm font-semibold tracking-[0.2em] uppercase">
              Documents center
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-bold mt-3 mb-4">
              Reports designed for transparency
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              We publish regular reports so investors, analysts and partners can
              follow our financial progress and risk profile.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {investorRelationsReports.map((report, i) => (
              <motion.article
                key={report.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white overflow-hidden border"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={report.image}
                    alt={report.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-8">
                  <span className="text-accent text-xs font-semibold uppercase tracking-wider">
                    {report.category}
                  </span>
                  <h3 className="font-serif text-xl text-foreground font-semibold mt-3 mb-3">
                    {report.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {report.description}
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all"
                  >
                    Request copy <Download className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-16 bg-background border p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <span className="text-accent font-sans text-sm font-semibold tracking-[0.2em] uppercase">
                Disclosure rhythm
              </span>
              <h3 className="font-serif text-2xl lg:text-3xl text-foreground font-bold mt-3 mb-4">
                A consistent reporting cadence
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our reporting calendar is designed to keep investors informed on
                a predictable schedule, with quarterly updates, annual reports
                and sustainability disclosures.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                If you need a document that is not listed here, our investor
                relations team can direct your request to the right contact.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                "Quarterly earnings releases and conference calls",
                "Annual reports and governance disclosures",
                "ESG and sustainability reporting",
                "Capital adequacy and regulatory filings",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-muted border p-4 text-foreground text-sm font-medium"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    ),
  },
  governance: {
    seoTitle: "Governance",
    seoDescription:
      "Board oversight, committee structure and governance principles for CF Banque Investment.",
    path: investorRelationsRoutes.governance,
    tag: "Investor Relations",
    title: "Governance",
    description:
      "See how our board and committee structure support accountability, oversight and long-term value creation.",
    image: "/images/corporate-governance.jpg",
    anchors: investorRelationsTopicAnchors,
    content: (
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-14"
          >
            <span className="text-accent font-sans text-sm font-semibold tracking-[0.2em] uppercase">
              Oversight and accountability
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-bold mt-3 mb-4">
              Governance built for trust
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Clear oversight and disciplined controls help us manage risk,
              protect shareholder interests and support responsible growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {investorRelationsGovernanceItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-muted p-8 border"
              >
                <item.icon className="w-10 h-10 text-accent mb-5" strokeWidth={1.5} />
                <h3 className="font-serif text-xl text-foreground font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-serif text-2xl lg:text-3xl text-foreground font-bold mb-4">
                Core governance committees
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our committees review the areas that matter most to investors:
                audit, risk, compensation and nominations.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Audit committee with independent oversight",
                  "Risk committee focused on capital and exposure",
                  "Compensation committee aligned to performance",
                  "Nomination committee supporting board refresh",
                ].map((item) => (
                  <div
                    key={item}
                    className="bg-muted border p-4 text-foreground text-sm font-medium"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-muted border p-8"
            >
              <span className="text-accent font-sans text-sm font-semibold tracking-[0.2em] uppercase">
                Governance principles
              </span>
              <h4 className="font-serif text-xl text-foreground font-semibold mt-3 mb-4">
                What investors can expect
              </h4>
              <ul className="space-y-3">
                {[
                  "Transparent disclosure and timely reporting",
                  "Balanced board composition and oversight",
                  "Strong internal controls and ethical conduct",
                  "Decision-making aligned with long-term value",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-foreground/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    ),
  },
  "events-calendar": {
    seoTitle: "Events and Calendar",
    seoDescription:
      "Investor calendar, earnings dates and shareholder events for CF Banque Investment.",
    path: investorRelationsRoutes.eventsCalendar,
    tag: "Investor Relations",
    title: "Events & Calendar",
    description:
      "Keep track of our results announcements, shareholder meetings and investor day dates.",
    image: "/images/leadership-summit.jpg",
    anchors: investorRelationsTopicAnchors,
    content: (
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-14"
          >
            <span className="text-accent font-sans text-sm font-semibold tracking-[0.2em] uppercase">
              Investor calendar
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-bold mt-3 mb-4">
              Key dates for investors and shareholders
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Our events calendar highlights the milestones that matter most
              throughout the year.
            </p>
          </motion.div>

          <div className="bg-white divide-y divide-gray-100">
            {investorRelationsEvents.map((event, i) => (
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
                  <h3 className="font-serif text-lg text-foreground font-semibold mb-1">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="bg-background border p-8">
              <h3 className="font-serif text-2xl text-foreground font-semibold mb-4">
                How we communicate events
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We announce results and investor events through our official
                channels, including the newsroom and investor relations pages.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                If you would like to be notified about a specific event,
                contact the team and we will point you to the right update.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {[
                "Quarterly earnings releases and calls",
                "Annual general meeting updates",
                "Investor day and strategy sessions",
                "Regulatory announcements and notices",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-muted border p-4 text-foreground text-sm font-medium"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    ),
  },
  "shareholder-services": {
    seoTitle: "Shareholder Services",
    seoDescription:
      "Contact details and support resources for shareholders and investors.",
    path: investorRelationsRoutes.shareholderServices,
    tag: "Investor Relations",
    title: "Shareholder Services",
    description:
      "Reach our investor relations team for documents, event information and shareholder support.",
    image: "/images/client-meeting.jpg",
    anchors: investorRelationsTopicAnchors,
    content: (
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-14"
          >
            <span className="text-accent font-sans text-sm font-semibold tracking-[0.2em] uppercase">
              Support desk
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-bold mt-3 mb-4">
              Fast support for investor questions
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Our team is here to help with document requests, event
              information, governance questions and general shareholder support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-muted border p-6 flex items-start gap-4">
                <Mail className="w-6 h-6 text-accent mt-1" />
                <div>
                  <div className="font-serif text-lg text-foreground font-semibold mb-1">
                    Email
                  </div>
                  <a
                    href="mailto:ir@cfbanqueinvestment.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    ir@cfbanqueinvestment.com
                  </a>
                </div>
              </div>
              <div className="bg-muted border p-6 flex items-start gap-4">
                <Phone className="w-6 h-6 text-accent mt-1" />
                <div>
                  <div className="font-serif text-lg text-foreground font-semibold mb-1">
                    Phone
                  </div>
                  <a
                    href="tel:+442039625751"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +44 20 3962 5751
                  </a>
                </div>
              </div>
              <div className="bg-muted border p-6">
                <div className="font-serif text-lg text-foreground font-semibold mb-2">
                  Mailing address
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Investor Relations
                  <br />
                  CF Banque Investment
                  <br />
                  25 Cabot Square, Canary Wharf
                  <br />
                  London E14 4QA
                </p>
              </div>
            </div>

            <div className="bg-muted border p-8">
              <span className="text-accent font-sans text-sm font-semibold tracking-[0.2em] uppercase">
                What we can help with
              </span>
              <h3 className="font-serif text-2xl text-foreground font-semibold mt-3 mb-4">
                Shareholder support in one place
              </h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Request a copy of an annual or quarterly report",
                  "Ask about AGM logistics and event access",
                  "Clarify governance, policy or disclosure questions",
                  "Connect with the right investor relations contact",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-foreground/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-accent hover:bg-orange-600 text-white px-6 py-3 font-sans font-semibold text-sm uppercase tracking-wider transition-colors rounded"
              >
                Contact investor relations <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    ),
  },
};
