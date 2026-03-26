import AboutPageShell from "@/components/AboutPageShell";
import { aboutSectionLinks } from "@/config/aboutRoutes";
import { motion } from "framer-motion";
import { Cpu, Eye, Globe, Lock, Shield, Sparkles } from "lucide-react";

const technologyFeatures = [
  { icon: Cpu, label: "Advanced algorithmic trading and execution systems" },
  { icon: Shield, label: "Enterprise-grade cybersecurity and data protection" },
  { icon: Globe, label: "Cloud-based global infrastructure" },
  { icon: Eye, label: "Real-time risk monitoring and analytics dashboards" },
  { icon: Lock, label: "End-to-end encrypted communication platforms" },
  { icon: Sparkles, label: "AI-powered market intelligence and reporting" },
];

const Technology = () => (
  <AboutPageShell
    seoTitle="Technology"
    seoDescription="Explore the digital infrastructure and technology stack supporting CF Banque Investment."
    path="/technology"
    tag="About Us"
    title="Technology & Digital Infrastructure"
    description="Our digital platform integrates secure transaction processing, real-time analytics and automated compliance monitoring."
    image="/images/innovation-lab.jpg"
    anchors={aboutSectionLinks}
  >
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-accent font-sans text-sm font-semibold tracking-[0.2em] uppercase">Innovation</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-bold mt-3 mb-6">Built for speed, security and scale</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              CF BANQUE INVESTMENT leverages advanced technological infrastructure to deliver seamless financial services across global markets. The platform integrates secure transaction processing, real-time analytics and automated compliance monitoring.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {technologyFeatures.map((item) => (
                <div key={item.label} className="flex items-start gap-3 bg-card p-4 border">
                  <item.icon className="w-5 h-5 text-accent shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span className="text-foreground text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="overflow-hidden border shadow-xl">
            <img src="/images/digital-banking.jpg" alt="Technology and digital infrastructure" className="w-full h-full object-cover aspect-[4/3]" loading="lazy" />
          </motion.div>
        </div>
      </div>
    </section>
  </AboutPageShell>
);

export default Technology;
