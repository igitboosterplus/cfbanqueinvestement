import AboutPageShell from "@/components/AboutPageShell";
import { aboutSectionLinks } from "@/config/aboutRoutes";
import { motion } from "framer-motion";
import { GraduationCap, Globe, HeartHandshake, Shield, Scale, Users } from "lucide-react";

const diversityFeatures = [
  { icon: Users, label: "Gender-balanced leadership pipeline programs" },
  { icon: HeartHandshake, label: "Employee resource groups and mentoring networks" },
  { icon: Globe, label: "Multicultural teams across 10+ global offices" },
  { icon: GraduationCap, label: "Scholarships and internships for underrepresented talent" },
  { icon: Shield, label: "Zero-tolerance policy on discrimination and harassment" },
  { icon: Scale, label: "Pay equity audits and transparent promotion criteria" },
];

const Diversity = () => (
  <AboutPageShell
    seoTitle="Diversity & Inclusion"
    seoDescription="Our commitment to building inclusive teams, equitable opportunity and diverse perspectives."
    path="/diversity"
    tag="About Us"
    title="Diversity & Inclusion"
    description="We believe diverse perspectives drive better decisions, stronger outcomes and more resilient institutions."
    image="/images/leadership-summit.jpg"
    anchors={aboutSectionLinks}
  >
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <img src="/images/diversity-inclusion.jpg" alt="Diversity and inclusion at CF Banque" className="w-full aspect-[4/3] object-cover border" loading="lazy" />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-accent font-sans text-sm font-semibold tracking-[0.2em] uppercase">Our People</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-bold mt-3 mb-6">Inclusive culture, shared growth</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              At CF BANQUE INVESTMENT, we believe that diverse perspectives drive better decisions and stronger outcomes. Our workforce spans multiple nationalities across offices in Africa, Europe, the Middle East and Asia-Pacific.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We are committed to building an inclusive culture where every professional has equal access to opportunity, mentorship and career advancement regardless of gender, ethnicity, background or belief.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {diversityFeatures.map((item) => (
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
  </AboutPageShell>
);

export default Diversity;
