import AboutPageShell from "@/components/AboutPageShell";
import { aboutSectionLinks } from "@/config/aboutRoutes";
import { motion } from "framer-motion";
import { AlertTriangle, Eye, FileCheck, Globe, Handshake, Lock, Scale, Shield, Users } from "lucide-react";

const governanceMechanisms = [
  { icon: Users, label: "Independent risk oversight committees" },
  { icon: Eye, label: "Internal audit and compliance departments" },
  { icon: Scale, label: "Separation of front, middle & back-office" },
  { icon: Shield, label: "Robust capital allocation policies" },
  { icon: Handshake, label: "Ethical conduct and transparency standards" },
];

const riskTypes = ["Credit risk", "Market risk", "Liquidity risk", "Operational risk", "Regulatory risk", "Counterparty risk"];

const complianceControls = [
  { icon: Lock, label: "Anti-Money Laundering (AML) procedures" },
  { icon: FileCheck, label: "Know Your Customer (KYC) protocols" },
  { icon: Globe, label: "International sanctions screening" },
  { icon: Eye, label: "Financial disclosure and transparency frameworks" },
  { icon: Shield, label: "Internal compliance monitoring systems" },
];

const Governance = () => (
  <AboutPageShell
    seoTitle="Governance"
    seoDescription="Corporate governance, risk management and compliance framework of CF Banque Investment."
    path="/governance"
    tag="About Us"
    title="Governance & Risk Management"
    description="We build transparency, accountability and prudent risk oversight into every layer of the institution."
    image="/images/corporate-vision.jpg"
    anchors={aboutSectionLinks}
  >
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="text-accent font-sans text-sm font-semibold tracking-[0.2em] uppercase">Integrity</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-bold mt-3 mb-6">Governance Architecture</h2>
          <p className="text-muted-foreground leading-relaxed mb-4 max-w-4xl">
            The long-term stability and credibility of any financial institution depend upon the strength of its governance structures and the rigor of its risk management framework.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-4xl">
            CF BANQUE INVESTMENT maintains a comprehensive governance architecture designed to ensure transparency, accountability and prudent financial management across all business activities. The firm separates operational functions, risk oversight and compliance monitoring to minimize conflicts of interest and preserve independent risk evaluation.
          </p>

          <h3 className="font-serif text-xl text-foreground font-semibold mb-4">Key Governance Mechanisms</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {governanceMechanisms.map((item) => (
              <div key={item.label} className="flex items-start gap-3 bg-muted p-4 border">
                <item.icon className="w-5 h-5 text-accent shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="text-foreground text-sm">{item.label}</span>
              </div>
            ))}
          </div>

          <h3 className="font-serif text-xl text-foreground font-semibold mb-4">Risk Management Framework</h3>
          <p className="text-muted-foreground leading-relaxed mb-6 max-w-4xl">
            Our risk management system covers all major categories of financial risk. Advanced quantitative tools are utilized to monitor and manage exposure, including value-at-risk modeling, portfolio stress testing and capital adequacy simulations.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-12">
            {riskTypes.map((risk) => (
              <div key={risk} className="flex items-center gap-3 bg-card border p-4">
                <AlertTriangle className="w-4 h-4 text-accent shrink-0" strokeWidth={1.5} />
                <span className="text-foreground text-sm font-medium">{risk}</span>
              </div>
            ))}
          </div>

          <h3 className="font-serif text-xl text-foreground font-semibold mb-4">Compliance & Regulatory Integrity</h3>
          <p className="text-muted-foreground leading-relaxed mb-6 max-w-4xl">
            The firm adheres to strict international compliance standards designed to prevent financial crime and ensure regulatory transparency.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {complianceControls.map((item) => (
              <div key={item.label} className="flex items-start gap-3 bg-muted p-4 border">
                <item.icon className="w-5 h-5 text-accent shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="text-foreground text-sm">{item.label}</span>
              </div>
            ))}
          </div>

          <p className="text-muted-foreground leading-relaxed mt-10 max-w-4xl">
            Through this governance and risk management framework, CF BANQUE INVESTMENT seeks to maintain the highest levels of institutional integrity and investor confidence while supporting sustainable long-term financial growth.
          </p>
        </motion.div>
      </div>
    </section>
  </AboutPageShell>
);

export default Governance;
