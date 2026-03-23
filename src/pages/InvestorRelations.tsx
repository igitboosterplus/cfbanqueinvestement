import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import {
  FileText,
  TrendingUp,
  Calendar,
  BarChart3,
  ArrowRight,
  Download,
  Users,
  Shield,
  Mail,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

const keyFigures = [
  { label: "Latest Annual Report", value: "2025", icon: FileText },
  { label: "Revenue Growth (YoY)", value: "+18%", icon: TrendingUp },
  { label: "Founded", value: "2019", icon: Calendar },
  { label: "Operating Countries", value: "9+", icon: BarChart3 },
];

const financialHighlights = [
  { metric: "Total Revenue", value: "$185M", change: "+18% YoY" },
  { metric: "Assets Under Management", value: "$2.4B", change: "+22% YoY" },
  { metric: "Net Income", value: "$42M", change: "+15% YoY" },
  { metric: "Advisory Mandates", value: "45+", change: "+30% YoY" },
  { metric: "Capital Deployed", value: "$1.2B", change: "+25% YoY" },
  { metric: "Return on Equity", value: "14.2%", change: "+1.8pp YoY" },
];

const reports = [
  {
    title: "2025 Annual Report",
    description:
      "Comprehensive overview of the firm's performance, strategic initiatives, capital allocation and financial results for the fiscal year 2025.",
    category: "Annual Report",
  },
  {
    title: "Q4 2025 Financial Results",
    description:
      "Fourth-quarter earnings summary with operational highlights, revenue breakdown by business division and forward-looking guidance.",
    category: "Quarterly Results",
  },
  {
    title: "Q3 2025 Financial Results",
    description:
      "Third-quarter performance review including M&A advisory pipeline update, asset management AUM growth and wealth management expansion progress.",
    category: "Quarterly Results",
  },
  {
    title: "2025 ESG & Sustainability Report",
    description:
      "Our environmental, social and governance progress, targets and commitments — including green bond issuance, community investment metrics and diversity data.",
    category: "ESG Report",
  },
  {
    title: "2025 Capital Adequacy Report",
    description:
      "Detailed disclosure of the firm's capital structure, risk-weighted assets, liquidity ratios and stress testing results in line with regulatory requirements.",
    category: "Regulatory Filing",
  },
  {
    title: "2024 Annual Report",
    description:
      "Prior-year comprehensive performance report and strategic review, including inaugural full-year wealth management division results.",
    category: "Annual Report",
  },
];

const governanceItems = [
  {
    icon: Users,
    title: "Board of Directors",
    description:
      "Our board brings decades of combined experience across finance, technology, governance and international development. The board comprises independent non-executive directors and executive members ensuring balanced oversight.",
  },
  {
    icon: Shield,
    title: "Corporate Governance Framework",
    description:
      "Robust policies and structures ensuring transparent, accountable and responsible management. Our governance framework encompasses board committees (Audit, Risk, Compensation, Nomination), internal controls and ethical conduct standards.",
  },
  {
    icon: Calendar,
    title: "Shareholder Information & Events",
    description:
      "Key dates, annual general meeting details, dividend policy information and resources for current and prospective investors. Our next AGM is scheduled for Q2 2026.",
  },
];

const upcomingEvents = [
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
];

const InvestorRelations = () => (
  <PageTransition>
  <div className="min-h-screen">
    <Navbar />

    {/* Hero */}
    <section className="relative bg-gradient-to-br from-[#0a1628] via-[#162a4a] to-[#1a3a5c] py-20 lg:py-28 overflow-hidden">
      <img src="/images/investor-hero.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#162a4a]/75 to-[#1a3a5c]/60" />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="text-accent font-sans text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
            Investor Relations
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-bold leading-tight mb-6">
            Investor Relations
          </h1>
          <p className="text-white/70 text-lg sm:text-xl leading-relaxed">
            Access financial reports, governance information and strategic
            updates about CF BANQUE INVESTMENT's performance and outlook.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Key figures bar */}
    <section className="py-16 bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {keyFigures.map((item, i) => (
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

    {/* Financial highlights */}
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-bold mb-4">
            Financial Highlights — FY 2025
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Key performance indicators reflecting the firm's growth trajectory,
            strengthening client franchise and expanding market presence.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {financialHighlights.map((item, i) => (
            <motion.div
              key={item.metric}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-[#f7f7f7] p-6"
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

    {/* Reports & filings */}
    <section className="py-20 lg:py-28 bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-bold mb-4">
            Reports & Filings
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Download our latest annual reports, quarterly results, ESG
            disclosures and regulatory filings.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reports.map((report, i) => (
            <motion.div
              key={report.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white p-8 hover:shadow-lg transition-shadow duration-300 group cursor-pointer"
            >
              <span className="text-accent text-xs font-semibold uppercase tracking-wider">
                {report.category}
              </span>
              <h3 className="font-serif text-xl text-foreground font-semibold mt-3 mb-3">
                {report.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {report.description}
              </p>
              <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                <Download className="w-4 h-4" /> Download
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Governance */}
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-bold mb-4">
            Governance
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Strong governance is core to how we operate. Our structure ensures
            oversight, accountability and alignment with shareholder interests.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {governanceItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#f7f7f7] p-8"
            >
              <item.icon
                className="w-10 h-10 text-accent mb-5"
                strokeWidth={1.5}
              />
              <h3 className="font-serif text-xl text-foreground font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Upcoming events */}
    <section className="py-20 lg:py-28 bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-bold mb-4">
            Upcoming Events
          </h2>
        </motion.div>

        <div className="bg-white divide-y divide-gray-100">
          {upcomingEvents.map((event, i) => (
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
      </div>
    </section>

    {/* Contact IR */}
    <section className="py-20 lg:py-28 bg-gradient-to-br from-[#0a1628] via-[#162a4a] to-[#1a3a5c]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-bold mb-6">
              Questions for Investors?
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Our dedicated investor relations team is available to assist with
              any inquiries regarding financial performance, strategic direction,
              governance matters or upcoming events.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-orange-600 text-white px-8 py-4 font-sans font-semibold text-sm uppercase tracking-wider transition-colors rounded"
            >
              Contact Investor Relations <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-accent mt-1" />
              <div>
                <div className="text-white font-semibold mb-1">Email</div>
                <div className="text-white/60">
                  ir@cfbanqueinvestment.com
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-accent mt-1" />
              <div>
                <div className="text-white font-semibold mb-1">Phone</div>
                <div className="text-white/60">+237 233 XX XX XX</div>
              </div>
            </div>
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
