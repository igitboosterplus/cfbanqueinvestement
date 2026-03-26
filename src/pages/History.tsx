import AboutPageShell from "@/components/AboutPageShell";
import { aboutSectionLinks } from "@/config/aboutRoutes";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Globe, Shield, Users } from "lucide-react";

const milestones = [
  {
    year: "2019",
    title: "Founded",
    description:
      "CF BANQUE INVESTMENT was established with a clear institutional ambition: to structure capital, advise clients and build a trusted platform for international finance.",
  },
  {
    year: "2021",
    title: "Platform Expansion",
    description:
      "The firm broadened its services across investment banking, asset management and strategic advisory to support a wider client base.",
  },
  {
    year: "2023",
    title: "Global Reach",
    description:
      "We strengthened cross-border relationships and expanded our client coverage across major financial hubs.",
  },
  {
    year: "2025",
    title: "Institutional Scale",
    description:
      "Our governance, technology and research capabilities were scaled to support larger transactions and more sophisticated mandates.",
  },
];

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
    icon: Users,
    title: "Long-term Partnerships",
    text: "Supporting clients throughout the full lifecycle of their strategic and financial initiatives with tailored solutions.",
  },
];

const History = () => (
  <AboutPageShell
    seoTitle="History"
    seoDescription="Learn how CF Banque Investment grew from its founding in 2019 into a global financial platform."
    path="/history"
    tag="About Us"
    title="History & Principles"
    description="Our story is defined by disciplined growth, institutional ambition and a commitment to long-term client relationships."
    image="/images/about-us-hero.png"
    anchors={aboutSectionLinks}
  >
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mb-14">
          <span className="text-accent font-sans text-sm font-semibold tracking-[0.2em] uppercase">Founded 2019</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-bold mt-3 mb-4">A growing institutional platform</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From a focused founding team to a multi-market financial institution, our development has been guided by disciplined execution, strong governance and a clear client-first mission.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {milestones.map((milestone, i) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-accent font-serif text-3xl font-bold">{milestone.year}</span>
                <Calendar className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-serif text-xl text-card-foreground font-semibold mb-3">{milestone.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{milestone.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <span className="text-accent font-sans text-sm font-semibold tracking-[0.2em] uppercase">Our Principles</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-bold mt-3">The values that guide us</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((principle, i) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-muted p-8 border"
            >
              <principle.icon className="w-10 h-10 text-accent mb-4" strokeWidth={1.5} />
              <h3 className="font-serif text-xl text-foreground font-semibold mb-3">{principle.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{principle.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 bg-card border p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <span className="text-accent font-sans text-xs font-bold tracking-[0.25em] uppercase">Looking Ahead</span>
            <h3 className="font-serif text-2xl text-card-foreground font-semibold mt-3">Built to scale with our clients</h3>
            <p className="text-muted-foreground mt-3 max-w-2xl leading-relaxed">
              We continue to expand the platform with the same disciplined approach that shaped the firm from the beginning.
            </p>
          </div>
          <ArrowUpRight className="w-12 h-12 text-accent shrink-0" strokeWidth={1.5} />
        </div>
      </div>
    </section>
  </AboutPageShell>
);

export default History;
