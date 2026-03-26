import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import { TrendingUp, Globe, BarChart3, Zap, Building2, Landmark, Layers, Target, ArrowRightLeft, Factory, PieChart, Shield } from "lucide-react";

const coreServices = [
  {
    id: "ma",
    title: "Mergers & Acquisitions",
    text: "Comprehensive strategic guidance throughout the entire lifecycle of complex corporate transactions. Our advisory approach combines rigorous financial analysis, sector-specific expertise and a deep understanding of global capital markets.",
    items: ["Corporate mergers", "Strategic acquisitions", "Divestitures & asset disposals", "Cross-border acquisitions", "Management buyouts", "Privatization transactions"],
  },
  {
    id: "finance",
    title: "Corporate & Project Financing",
    text: "Tailored financing solutions designed to support strategic investment initiatives across infrastructure, energy, transportation, real estate, technology and industrial development.",
    items: ["Corporate financing", "Acquisition financing", "Infrastructure & project finance", "Export credit financing", "Sovereign financing", "Structured debt solutions"],
  },
  {
    id: "capital-markets",
    title: "Capital Markets",
    text: "An integrated capital markets platform designed to assist clients in accessing global equity and debt markets with coordinated expertise.",
    items: ["IPOs & follow-on offerings", "Private placements", "Corporate & sovereign bonds", "Eurobonds & Sukuk", "Green & sustainability bonds", "Asset-backed securities"],
  },
  {
    id: "structured",
    title: "Structured & Leveraged Finance",
    text: "Innovative financing structures for large-scale infrastructure projects, public-private partnerships and leveraged transactions.",
    items: ["Senior secured loans", "Mezzanine debt", "High-yield bonds", "Hybrid capital structures", "Unitranche financing", "Political risk insurance"],
  },
];

const strategyPerspectives = [
  {
    icon: BarChart3,
    title: "Global Macroeconomic Analysis",
    text: "Analysts evaluate global economic indicators including economic growth trends, inflation dynamics, fiscal policies and monetary policy decisions taken by major central banks. Understanding these macroeconomic forces is essential for anticipating market cycles and identifying opportunities across asset classes.",
  },
  {
    icon: Globe,
    title: "Geopolitical Risk Mapping",
    text: "Trade disputes, regulatory changes, regional conflicts and technological competition can significantly affect investor sentiment and capital flows. CFBANQUE INVESTMENT integrates geopolitical analysis into its strategic decision-making to anticipate potential disruptions and identify emerging opportunities.",
  },
  {
    icon: Zap,
    title: "Sectoral Transformation Analysis",
    text: "The global economy is undergoing profound structural transformations driven by technological innovation, demographic shifts and environmental transitions. The firm identifies sectors likely to experience sustained growth — digital infrastructure, renewable energy, biotechnology and artificial intelligence.",
  },
  {
    icon: Target,
    title: "Tactical Asset Allocation",
    text: "While long-term strategic allocation provides the foundation, tactical adjustments are periodically implemented in response to short-term market conditions — rebalancing exposures across asset classes, geographic regions or economic sectors.",
  },
];

const peTransactions = [
  "Growth capital investments",
  "Leveraged buyouts",
  "Management buyouts",
  "Expansion capital transactions",
  "Cross-border acquisitions",
];

const hedgeFundStrategies = [
  "Long/short equity strategies",
  "Global macro trading strategies",
  "Event-driven investment strategies",
  "Credit arbitrage",
  "Market-neutral portfolios",
];

const InvestmentBanking = () => (
  <PageTransition>
  <div className="min-h-screen">
    <SEO title="Investment Banking" description="Strategic advisory, M&A execution and capital markets solutions for corporations, institutions and sovereign entities — CF Banque Investment." path="/investment-banking" />
    <Navbar />
    <PageHero
      tag="Investment Banking"
      title="Strategic Advisory & Transaction Execution"
      description="Providing corporations, financial institutions, governments and institutional investors with sophisticated financial advisory services and access to global capital markets."
      image="/images/banner-baltimore-skyline.jpg"
      anchors={[
        { label: "M&A", href: "#ma" },
        { label: "Corporate Finance", href: "#finance" },
        { label: "Capital Markets", href: "#capital-markets" },
        { label: "Strategies", href: "#strategies" },
        { label: "Alternatives", href: "#alternatives" },
      ]}
    />

    {/* Core Services */}
    {coreServices.map((section, i) => (
      <section key={section.id} id={section.id} className={`py-20 ${i % 2 === 0 ? "bg-background" : "bg-muted"}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="font-serif text-3xl text-foreground font-bold mb-4">{section.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{section.text}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {section.items.map((item) => (
                  <div key={item} className="flex items-start gap-3 bg-card border p-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span className="text-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    ))}

    {/* Global Investment Strategies */}
    <section id="strategies" className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-accent font-sans text-sm font-semibold tracking-[0.2em] uppercase">Strategy</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-bold mt-3">Global Investment Strategies</h2>
          <p className="text-white/75 mt-4 max-w-3xl mx-auto leading-relaxed">
            Designed to respond to the evolving dynamics of international financial markets while maintaining a disciplined focus on long-term value creation and risk-adjusted performance. Investment strategy development is overseen by the firm's Global Investment Committee — a multidisciplinary body composed of economists, portfolio managers, quantitative analysts and sector specialists.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {strategyPerspectives.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white/5 backdrop-blur-sm p-7 border border-white/10">
              <item.icon className="w-9 h-9 text-accent mb-4" strokeWidth={1.5} />
              <h3 className="font-serif text-xl text-white font-semibold mb-3">{item.title}</h3>
              <p className="text-white/75 text-sm leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-white/60 text-center mt-12 max-w-3xl mx-auto leading-relaxed">
          Through this dynamic and research-driven approach, CFBANQUE INVESTMENT seeks to construct investment strategies capable of performing across diverse economic environments.
        </motion.p>
      </div>
    </section>

    {/* Alternative Investments */}
    <section id="alternatives" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <span className="text-accent font-sans text-sm font-semibold tracking-[0.2em] uppercase">Diversification</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-bold mt-3 mb-4">Alternative Investments</h2>
          <p className="text-muted-foreground leading-relaxed max-w-4xl">
            Alternative investments represent an increasingly important component of diversified institutional portfolios. Unlike traditional investments in public equities and bonds, alternative assets often exhibit lower correlations with financial markets and may provide enhanced return potential. CFBANQUE INVESTMENT has developed a specialized alternative investments platform encompassing private equity, infrastructure investments, real assets and hedge fund strategies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Private Equity */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card border overflow-hidden">
            <div className="bg-accent/10 p-6">
              <Building2 className="w-10 h-10 text-accent mb-3" strokeWidth={1.5} />
              <h3 className="font-serif text-2xl text-foreground font-bold">Private Equity</h3>
            </div>
            <div className="p-6">
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                Investing in private companies and strategic acquisitions with the objective of generating long-term value through operational improvements and strategic repositioning. The investment process involves rigorous due diligence, active governance participation and carefully planned exit strategies.
              </p>
              <div className="space-y-2">
                {peTransactions.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span className="text-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Infrastructure & Real Assets */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-card border overflow-hidden">
            <div className="bg-accent/10 p-6">
              <Factory className="w-10 h-10 text-accent mb-3" strokeWidth={1.5} />
              <h3 className="font-serif text-2xl text-foreground font-bold">Infrastructure & Real Assets</h3>
            </div>
            <div className="p-6">
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                Infrastructure investments play a critical role in supporting long-term economic development while providing stable cash flow profiles for investors. These assets typically benefit from long-term contractual revenues and may provide natural protection against inflationary pressures.
              </p>
              <div className="space-y-2">
                {["Energy infrastructure", "Transportation networks", "Logistics platforms", "Strategic real estate developments", "Long-term contractual assets"].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span className="text-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Hedge Funds */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-card border overflow-hidden">
            <div className="bg-accent/10 p-6">
              <ArrowRightLeft className="w-10 h-10 text-accent mb-3" strokeWidth={1.5} />
              <h3 className="font-serif text-2xl text-foreground font-bold">Hedge Funds & Absolute Return</h3>
            </div>
            <div className="p-6">
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                Sophisticated hedge fund strategies designed to generate absolute returns regardless of broader market conditions. Risk management frameworks emphasize strict leverage discipline, diversification and continuous exposure monitoring.
              </p>
              <div className="space-y-2">
                {hedgeFundStrategies.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span className="text-foreground text-sm">{item}</span>
                  </div>
                ))}
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

export default InvestmentBanking;
