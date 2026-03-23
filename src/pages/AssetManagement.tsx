import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import { Target, TrendingUp, Globe, BarChart3, Shield, Search, Activity, AlertTriangle, Leaf, Building2, DollarSign, PieChart } from "lucide-react";

const clientTypes = [
  "Sovereign wealth funds",
  "Pension funds",
  "Insurance companies",
  "Development finance institutions",
  "Corporate treasury departments",
  "Family offices",
  "High-net-worth investors",
];

const objectives = [
  { icon: Shield, title: "Long-term Capital Preservation", text: "Protecting institutional capital through disciplined risk management and strategic diversification across global markets." },
  { icon: TrendingUp, title: "Consistent Risk-Adjusted Performance", text: "Delivering sustained returns calibrated to each client's risk tolerance through rigorous quantitative and fundamental analysis." },
  { icon: Globe, title: "Global Diversification", text: "Constructing resilient portfolios spanning multiple markets and asset classes to reduce concentration risks." },
];

const portfolioProcess = [
  { icon: BarChart3, title: "Macroeconomic Assessment", text: "Comprehensive analysis of global macroeconomic conditions including monetary policy trends, inflation dynamics, fiscal policy developments and geopolitical risks to inform strategic asset allocation decisions." },
  { icon: Search, title: "Fundamental Security Analysis", text: "Bottom-up analysis of individual securities evaluating corporate financial statements, sector trends, competitive positioning and management quality to identify attractive investment opportunities." },
  { icon: PieChart, title: "Quantitative Screening", text: "Quantitative models screening large universes of securities based on valuation metrics, earnings growth, momentum indicators and volatility patterns." },
  { icon: Activity, title: "Dynamic Risk Calibration", text: "Portfolio exposures are continuously monitored and adjusted in response to changing market conditions, with risk management integrated into every stage of the construction process." },
  { icon: AlertTriangle, title: "Stress Scenario Simulation", text: "Regular stress testing exercises to evaluate how portfolios would perform under adverse macroeconomic scenarios such as financial crises, geopolitical conflicts or sudden interest rate shocks." },
];

const fixedIncomeInstruments = [
  "Investment grade corporate bonds",
  "High-yield corporate debt",
  "Sovereign and quasi-sovereign bonds",
  "Emerging market debt securities",
  "Structured credit instruments",
  "Hybrid capital securities",
  "Green and sustainability-linked bonds",
];

const creditAnalysis = [
  { title: "Cash Flow Projection Analysis", text: "Detailed financial models forecasting future cash flows of corporate issuers to determine debt servicing capacity over time." },
  { title: "Balance Sheet Strength Assessment", text: "Examination of financial structure including leverage ratios, liquidity buffers and capital adequacy levels." },
  { title: "Sector Stress Testing", text: "Sector-specific stress testing evaluating how companies within vulnerable sectors would perform under adverse economic conditions or technological disruption." },
  { title: "Debt Sustainability Modeling", text: "For sovereign issuers, analysis of fiscal sustainability through government revenues, debt levels and macroeconomic growth projections." },
];

const esgObjectives = [
  "Align investment portfolios with global sustainability standards",
  "Identify and mitigate long-term environmental and social risks",
  "Promote transparent and accountable corporate governance",
  "Support sustainable economic development initiatives",
];

const AssetManagement = () => (
  <PageTransition>
  <div className="min-h-screen">
    <Navbar />
    <PageHero
      tag="Asset Management"
      title="Institutional Investment Excellence"
      description="Sophisticated investment management services combining macroeconomic research, financial market intelligence and quantitative risk analysis to construct resilient portfolios."
      image="/images/asset-hero.jpg"
    />

    {/* Investment Philosophy & Clients */}
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-accent font-sans text-sm font-semibold tracking-[0.2em] uppercase">Investment Philosophy</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-bold mt-3 mb-6">A Disciplined Approach to Portfolio Management</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our investment philosophy is grounded in the belief that successful portfolio management requires a combination of disciplined strategic asset allocation, dynamic portfolio management and rigorous risk control.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Through its institutional asset management platform, CFBANQUE INVESTMENT integrates macroeconomic research, financial market intelligence and quantitative risk analysis in order to construct resilient portfolios capable of performing across varying economic environments.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="font-serif text-xl text-foreground font-semibold mb-6">Our Institutional Clients</h3>
            <div className="space-y-3">
              {clientTypes.map((client) => (
                <div key={client} className="flex items-center gap-3 bg-muted rounded-lg p-4 border">
                  <Building2 className="w-5 h-5 text-accent shrink-0" strokeWidth={1.5} />
                  <span className="text-foreground">{client}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Primary Objectives */}
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-accent font-sans text-sm font-semibold tracking-[0.2em] uppercase">Objectives</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-bold mt-3">Three Primary Objectives</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {objectives.map((obj, i) => (
            <motion.div key={obj.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card rounded-lg p-8 border text-center">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
                <obj.icon className="w-7 h-7 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl text-foreground font-semibold mb-3">{obj.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{obj.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Multi-Asset Portfolio Management */}
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="text-accent font-sans text-sm font-semibold tracking-[0.2em] uppercase">Multi-Asset Strategies</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-bold mt-3 mb-6">Multi-Asset Portfolio Management</h2>
          <p className="text-muted-foreground leading-relaxed mb-4 max-w-4xl">
            Modern portfolio management increasingly relies on multi-asset strategies designed to combine different asset classes within a unified investment framework. This approach allows investors to benefit from diversification effects while mitigating the volatility associated with individual asset classes.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-4xl">
            CFBANQUE INVESTMENT has developed advanced capabilities in multi-asset portfolio management, enabling the firm to design investment portfolios that integrate equities, fixed income securities, alternative investments and real assets.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-16">
            {["Global equity portfolios", "Fixed income investment strategies", "Balanced multi-asset funds", "Institutional discretionary mandates", "Thematic investment vehicles"].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-muted border rounded-lg p-4">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                <span className="text-foreground text-sm">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-muted-foreground leading-relaxed mb-4 max-w-4xl">
            Thematic investment strategies focus on long-term structural trends expected to shape the global economy over the coming decades — including energy transition, infrastructure development, healthcare innovation, digital transformation and strategic commodities.
          </p>
        </motion.div>

        {/* Portfolio Construction Process */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16">
          <h3 className="font-serif text-2xl text-foreground font-bold mb-8">Portfolio Construction Process</h3>
          <div className="space-y-6">
            {portfolioProcess.map((step, i) => (
              <div key={step.title} className="flex gap-6 items-start bg-card border rounded-lg p-6">
                <div className="flex items-center justify-center shrink-0">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                  </div>
                </div>
                <div>
                  <h4 className="font-serif text-lg text-foreground font-semibold mb-2">
                    <span className="text-accent mr-2">{i + 1}.</span>{step.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-sm">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* Credit & Fixed Income Expertise */}
    <section id="fixed-income" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="text-accent font-sans text-sm font-semibold tracking-[0.2em] uppercase">Fixed Income</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-bold mt-3 mb-6">Credit & Fixed Income Expertise</h2>
          <p className="text-muted-foreground leading-relaxed mb-4 max-w-4xl">
            Fixed income markets represent a fundamental component of global capital markets and serve as a key source of income and capital preservation for institutional investors.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-4xl">
            CFBANQUE INVESTMENT maintains advanced analytical capabilities in credit analysis and fixed income portfolio management, enabling the firm to construct diversified bond portfolios that generate stable income streams while maintaining disciplined credit risk management.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="font-serif text-xl text-foreground font-semibold mb-6">Investment Universe</h3>
              <div className="space-y-3">
                {fixedIncomeInstruments.map((item) => (
                  <div key={item} className="flex items-start gap-3 bg-card border rounded-lg p-4">
                    <DollarSign className="w-5 h-5 text-accent shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span className="text-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-serif text-xl text-foreground font-semibold mb-6">Credit Evaluation Framework</h3>
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                Credit analysis plays a central role in fixed income portfolio management. The credit research teams conduct detailed evaluations of issuers to assess their capacity to meet financial obligations under varying economic conditions.
              </p>
              <div className="space-y-4">
                {creditAnalysis.map((item) => (
                  <div key={item.title} className="bg-card border rounded-lg p-5">
                    <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed mt-10 max-w-4xl">
            Through this disciplined analytical process, CFBANQUE INVESTMENT seeks to construct fixed income portfolios capable of generating attractive yields while minimizing credit and liquidity risks.
          </p>
        </motion.div>
      </div>
    </section>

    {/* ESG & Sustainable Investment */}
    <section id="esg" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-accent font-sans text-sm font-semibold tracking-[0.2em] uppercase">Responsible Investment</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-bold mt-3 mb-6">ESG & Sustainable Investment Integration</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Environmental, Social and Governance (ESG) considerations have become increasingly important within global financial markets as investors recognize the long-term economic implications of sustainability-related risks.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                CFBANQUE INVESTMENT integrates ESG criteria into its investment decision-making framework in order to promote responsible investment practices while enhancing long-term portfolio resilience.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                ESG analysis is incorporated into the investment process through specialized scoring methodologies evaluating companies based on factors such as carbon emissions, labor practices, board independence and regulatory compliance.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The firm also conducts climate risk assessments to evaluate how environmental policies and energy transition dynamics may affect the long-term performance of certain industries. Companies demonstrating strong governance practices and responsible environmental policies are often better positioned to generate sustainable long-term returns.
              </p>
            </div>
            <div>
              <div className="bg-[hsl(220,60%,22%)] text-white rounded-lg p-8">
                <Leaf className="w-10 h-10 text-[hsl(42,85%,55%)] mb-6" strokeWidth={1.5} />
                <h3 className="font-serif text-xl font-semibold mb-6">Core ESG Objectives</h3>
                <div className="space-y-4">
                  {esgObjectives.map((obj, i) => (
                    <div key={obj} className="flex items-start gap-3">
                      <span className="text-[hsl(42,85%,55%)] font-bold shrink-0">{i + 1}.</span>
                      <span className="text-white/90 leading-relaxed">{obj}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mt-6 text-sm">
                By integrating ESG considerations into portfolio construction and monitoring processes, CFBANQUE INVESTMENT aims to create investment portfolios that combine financial performance with positive societal impact.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    <CTABanner />
    <Footer />
  </div>
  </PageTransition>
);

export default AssetManagement;
