import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import { Shield, Users, Globe, Landmark, Key, CreditCard, Building2, Briefcase, Lock, UserCheck } from "lucide-react";

const wealthServices = [
  { icon: Briefcase, title: "Discretionary Portfolio Management", text: "Tailored investment mandates managed by senior portfolio managers with full discretion over strategic and tactical asset allocation decisions." },
  { icon: Globe, title: "Strategic Asset Allocation", text: "Comprehensive allocation frameworks designed to optimize risk-adjusted returns across geographies, asset classes and investment horizons." },
  { icon: Landmark, title: "International Tax Planning", text: "Multi-jurisdictional tax structuring to minimize fiscal exposure while ensuring compliance with evolving global tax regulations." },
  { icon: Users, title: "Family Governance Advisory", text: "Guidance on family governance frameworks, decision-making structures and wealth stewardship to ensure cohesive management across generations." },
  { icon: Shield, title: "Succession Planning", text: "Intergenerational wealth transfer strategies designed to preserve capital and ensure continuity of family assets." },
  { icon: Building2, title: "Estate & Legal Structuring", text: "Coordination of legal entities, trusts and holding structures to protect and organize complex multi-jurisdictional asset portfolios." },
];

const lendingSolutions = [
  { title: "Lombard Lending", text: "Secured by financial assets, enabling clients to access liquidity without liquidating investment positions." },
  { title: "Portfolio-Backed Credit Facilities", text: "Credit lines collateralized against diversified investment portfolios for enhanced financial flexibility." },
  { title: "International Real Estate Financing", text: "Structured financing solutions for cross-border real estate acquisitions and developments." },
  { title: "Structured Liquidity Optimization", text: "Bespoke liquidity strategies designed to optimize the balance between investment returns and cash availability." },
];

const WealthManagement = () => (
  <PageTransition>
  <div className="min-h-screen">
    <Navbar />
    <PageHero
      tag="Wealth Management"
      title="Preserving & Growing Private Capital"
      description="A comprehensive wealth advisory platform designed to preserve and grow private capital while ensuring legal security and intergenerational continuity."
      image="/images/wealth-hero.jpg"
    />

    {/* Wealth Management Overview */}
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            The Wealth Management division of CFBANQUE INVESTMENT has been established to serve the complex financial needs of high-net-worth individuals (HNWI) and ultra-high-net-worth individuals (UHNWI) operating across multiple jurisdictions. In an increasingly interconnected global financial environment, wealth management requires far more than simple portfolio allocation. It demands a sophisticated combination of investment advisory, legal structuring, tax optimization and long-term strategic planning.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Our approach to wealth management is based on a holistic framework that integrates financial investment strategies with broader considerations relating to family governance, estate planning and jurisdictional diversification.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The firm recognizes that wealthy individuals and entrepreneurial families often maintain complex asset structures spanning multiple jurisdictions and asset classes. These structures may include operating businesses, financial investments, real estate portfolios, private equity holdings and philanthropic foundations. As a result, wealth management requires a multidisciplinary approach combining financial expertise with legal and tax structuring capabilities.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Integrated Advisory Services */}
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-accent font-sans text-sm font-semibold tracking-[0.2em] uppercase">Advisory Services</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-bold mt-3">Integrated Wealth Advisory</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            CFBANQUE INVESTMENT provides integrated advisory services covering the full spectrum of wealth structuring needs.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wealthServices.map((service, i) => (
            <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-card rounded-lg p-7 border">
              <service.icon className="w-9 h-9 text-accent mb-4" strokeWidth={1.5} />
              <h3 className="font-serif text-lg text-foreground font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Mission Statement */}
    <section className="py-16 bg-[hsl(220,60%,22%)] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-white/90 text-lg leading-relaxed font-light italic">
            "The ultimate objective of the firm's wealth management platform is not merely to generate investment returns but to safeguard family capital over multiple generations while ensuring that wealth structures remain resilient in the face of regulatory, fiscal and economic changes."
          </p>
        </motion.div>
      </div>
    </section>

    {/* Private Banking */}
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-accent font-sans text-sm font-semibold tracking-[0.2em] uppercase">Private Banking</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-bold mt-3 mb-6">Bespoke Financial Solutions</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Complementing its wealth management services, CFBANQUE INVESTMENT has developed a highly confidential and personalized private banking platform designed to serve sophisticated clients seeking bespoke financial solutions and direct access to global investment opportunities.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Private banking relationships at CFBANQUE INVESTMENT are structured around a high level of personalization and confidentiality. Each client benefits from the dedicated support of a senior relationship manager who acts as the central point of coordination for all financial and advisory services provided by the firm.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This relationship-based model enables the firm to develop a deep understanding of each client's financial objectives, risk tolerance and long-term strategic priorities.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center gap-2 bg-muted border rounded-full px-4 py-2">
                  <Lock className="w-4 h-4 text-accent" strokeWidth={1.5} />
                  <span className="text-sm text-foreground">Full Confidentiality</span>
                </div>
                <div className="flex items-center gap-2 bg-muted border rounded-full px-4 py-2">
                  <UserCheck className="w-4 h-4 text-accent" strokeWidth={1.5} />
                  <span className="text-sm text-foreground">Dedicated Relationship Manager</span>
                </div>
                <div className="flex items-center gap-2 bg-muted border rounded-full px-4 py-2">
                  <Key className="w-4 h-4 text-accent" strokeWidth={1.5} />
                  <span className="text-sm text-foreground">Privileged Access</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-xl text-foreground font-semibold mb-4">Investment Access</h3>
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                Through its private banking platform, CFBANQUE INVESTMENT provides clients with privileged access to a wide range of investment opportunities including private market transactions, structured credit solutions and alternative investment strategies.
              </p>

              <h3 className="font-serif text-xl text-foreground font-semibold mb-4 mt-8">Tailored Lending Solutions</h3>
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                The underwriting process for private banking credit facilities incorporates rigorous collateral evaluation, liquidity analysis and legal structuring to ensure prudent risk management while maintaining flexibility for clients.
              </p>
              <div className="space-y-4">
                {lendingSolutions.map((sol) => (
                  <div key={sol.title} className="bg-muted border rounded-lg p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <CreditCard className="w-5 h-5 text-accent" strokeWidth={1.5} />
                      <h4 className="font-semibold text-foreground">{sol.title}</h4>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{sol.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 bg-muted">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Through this combination of personalized advisory services and sophisticated financial structuring capabilities, CFBANQUE INVESTMENT's private banking platform seeks to provide a comprehensive financial ecosystem for high-net-worth clients.
          </p>
          <a href="/contact" className="inline-block bg-accent text-white font-semibold px-8 py-3 rounded-md hover:bg-accent/90 transition-colors">
            Speak With an Advisor
          </a>
        </motion.div>
      </div>
    </section>

    <CTABanner />
    <Footer />
  </div>
  </PageTransition>
);

export default WealthManagement;
