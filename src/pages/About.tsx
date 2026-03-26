import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import PageTransition from "@/components/PageTransition";
import LeadershipSection from "@/components/LeadershipSection";
import { aboutSectionLinks } from "@/config/aboutRoutes";
import { motion } from "framer-motion";
import { Shield, Globe, Handshake, AlertTriangle, Scale, Eye, Lock, FileCheck, Users, Cpu, Sparkles, HeartHandshake, GraduationCap } from "lucide-react";

const principles = [
  {
    icon: Shield,
    title: "Institutional Credibility",
    text: "Robust internal governance structures designed to ensure transparency, accountability and responsible financial conduct.",
  },
  {
    icon: Globe,
    title: "Global Connectivity",
    text: "Relationships with international institutional investors, development finance institutions and sovereign entities to facilitate cross-border capital flows.",
  },
  {
    icon: Handshake,
    title: "Long-term Partnerships",
    text: "Supporting clients throughout the full lifecycle of their strategic and financial initiatives with tailored solutions.",
  },
];

const About = () => (
  <PageTransition>
  <div className="min-h-screen">
    <SEO title="About Us" description="Institutional overview, leadership, governance and strategic vision of CF Banque Investment — an international financial institution serving corporations, sovereign entities and institutional investors." path="/about" />
    <Navbar />
    <PageHero
      tag="About Us"
      title="Institutional Overview"
      description="An international financial institution specializing in investment banking, capital markets, strategic financial advisory and institutional asset management."
      image="/images/about-us-hero.png"
      anchors={aboutSectionLinks}
    />

    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            CFBANQUE INVESTMENT is an international financial institution specializing in investment banking, capital markets, strategic financial advisory and institutional asset management. The firm operates as an integrated global financial platform designed to provide sophisticated financial solutions to corporations, financial institutions, sovereign entities, institutional investors and high-net-worth individuals operating across multiple jurisdictions.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            The mission of CFBANQUE INVESTMENT is to serve as a trusted global financial advisor and capital markets intermediary capable of structuring complex financial transactions, mobilizing international capital and supporting long-term economic development initiatives.
          </p>
        </motion.div>
      </div>
    </section>

    <section id="history" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-accent font-sans text-sm font-semibold tracking-[0.2em] uppercase">Founded 2019</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-bold mt-3">Our Guiding Principles</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card p-8 border">
              <p.icon className="w-10 h-10 text-accent mb-4" strokeWidth={1.5} />
              <h3 className="font-serif text-xl text-card-foreground font-semibold mb-3">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <LeadershipSection />

    <section id="governance" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="text-accent font-sans text-sm font-semibold tracking-[0.2em] uppercase">Integrity</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-bold mt-3 mb-6">Governance & Risk Management</h2>
          <p className="text-muted-foreground leading-relaxed mb-4 max-w-4xl">
            The long-term stability and credibility of any financial institution depend upon the strength of its governance structures and the rigor of its risk management framework.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-4xl">
            CFBANQUE INVESTMENT has established a comprehensive governance architecture designed to ensure transparency, accountability and prudent financial management across all business activities. The firm maintains clear segregation between operational functions, risk oversight and compliance monitoring in order to minimize potential conflicts of interest and ensure independent risk evaluation.
          </p>

          {/* Key Governance Mechanisms */}
          <h3 className="font-serif text-xl text-foreground font-semibold mb-4">Key Governance Mechanisms</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {[
              { icon: Users, label: "Independent risk oversight committees" },
              { icon: Eye, label: "Internal audit and compliance departments" },
              { icon: Scale, label: "Separation of front, middle & back-office" },
              { icon: Shield, label: "Robust capital allocation policies" },
              { icon: Handshake, label: "Ethical conduct and transparency standards" },
            ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 bg-muted p-4 border">
                <item.icon className="w-5 h-5 text-accent shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="text-foreground text-sm">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Risk Management Framework */}
          <h3 className="font-serif text-xl text-foreground font-semibold mb-4">Risk Management Framework</h3>
          <p className="text-muted-foreground leading-relaxed mb-6 max-w-4xl">
            CFBANQUE INVESTMENT's risk management system covers all major categories of financial risk. Advanced quantitative tools are utilized to monitor and manage these risks, including value-at-risk modeling, portfolio stress testing and capital adequacy simulations.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-12">
            {["Credit risk", "Market risk", "Liquidity risk", "Operational risk", "Regulatory risk", "Counterparty risk"].map((risk) => (
              <div key={risk} className="flex items-center gap-3 bg-card border p-4">
                <AlertTriangle className="w-4 h-4 text-accent shrink-0" strokeWidth={1.5} />
                <span className="text-foreground text-sm font-medium">{risk}</span>
              </div>
            ))}
          </div>

          {/* Compliance & Regulatory Integrity */}
          <h3 className="font-serif text-xl text-foreground font-semibold mb-4">Compliance & Regulatory Integrity</h3>
          <p className="text-muted-foreground leading-relaxed mb-6 max-w-4xl">
            The firm adheres to strict international compliance standards designed to prevent financial crime and ensure regulatory transparency.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: Lock, label: "Anti-Money Laundering (AML) procedures" },
              { icon: FileCheck, label: "Know Your Customer (KYC) protocols" },
              { icon: Globe, label: "International sanctions screening" },
              { icon: Eye, label: "Financial disclosure and transparency frameworks" },
              { icon: Shield, label: "Internal compliance monitoring systems" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3 bg-muted p-4 border">
                <item.icon className="w-5 h-5 text-accent shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="text-foreground text-sm">{item.label}</span>
              </div>
            ))}
          </div>

          <p className="text-muted-foreground leading-relaxed mt-10 max-w-4xl">
            Through this comprehensive governance and risk management framework, CFBANQUE INVESTMENT seeks to maintain the highest levels of institutional integrity and investor confidence while supporting sustainable long-term financial growth.
          </p>
        </motion.div>
      </div>
    </section>

    <section id="technology" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-accent font-sans text-sm font-semibold tracking-[0.2em] uppercase">Innovation</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-bold mt-3 mb-6">Technology & Digital Infrastructure</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              CFBANQUE INVESTMENT leverages advanced technological infrastructure to deliver seamless financial services across global markets. Our digital platform integrates secure transaction processing, real-time analytics and automated compliance monitoring.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Cpu, label: "Advanced algorithmic trading and execution systems" },
                { icon: Shield, label: "Enterprise-grade cybersecurity and data protection" },
                { icon: Globe, label: "Cloud-based global infrastructure" },
                { icon: Eye, label: "Real-time risk monitoring and analytics dashboards" },
                { icon: Lock, label: "End-to-end encrypted communication platforms" },
                { icon: Sparkles, label: "AI-powered market intelligence and reporting" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 bg-card p-4 border">
                  <item.icon className="w-5 h-5 text-accent shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span className="text-foreground text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <img src="/images/innovation-lab.jpg" alt="Technology and digital infrastructure" className="w-full aspect-[4/3] object-cover" loading="lazy" />
          </motion.div>
        </div>
      </div>
    </section>

    <section id="diversity" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <img src="/images/leadership-summit.jpg" alt="Diversity and inclusion at CF Banque" className="w-full aspect-[4/3] object-cover" loading="lazy" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-accent font-sans text-sm font-semibold tracking-[0.2em] uppercase">Our People</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-bold mt-3 mb-6">Diversity & Inclusion</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              At CFBANQUE INVESTMENT, we believe that diverse perspectives drive better decisions and stronger outcomes. Our workforce spans over 15 nationalities across offices in Africa, Europe, the Middle East and Asia-Pacific.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We are committed to building an inclusive culture where every professional has equal access to opportunity, mentorship and career advancement — regardless of gender, ethnicity, background or belief.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Users, label: "Gender-balanced leadership pipeline programs" },
                { icon: HeartHandshake, label: "Employee resource groups and mentoring networks" },
                { icon: Globe, label: "Multicultural teams across 10+ global offices" },
                { icon: GraduationCap, label: "Scholarships and internships for underrepresented talent" },
                { icon: Shield, label: "Zero-tolerance policy on discrimination and harassment" },
                { icon: Scale, label: "Pay equity audits and transparent promotion criteria" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 bg-muted p-4 border">
                  <item.icon className="w-5 h-5 text-accent shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span className="text-foreground text-sm">{item.label}</span>
                </div>
              ))}
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

export default About;
