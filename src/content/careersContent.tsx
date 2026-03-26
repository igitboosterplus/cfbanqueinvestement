import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Search, Users, Shield, Sparkles, Layers3, CheckCircle2 } from "lucide-react";
import { careersRoutes } from "@/config/siteRoutes";
import type { TopicPageConfig } from "@/components/TopicPage";

export const careerHighlights = [
  {
    icon: Briefcase,
    title: "Work With Us",
    description:
      "Join a global team of financial experts shaping the future of investment banking, asset management and advisory services across nine countries.",
    link: careersRoutes.workWithUs,
  },
  {
    icon: GraduationCap,
    title: "Grow With Us",
    description:
      "We invest in continuous learning and professional development. From analyst programs to executive leadership tracks, there's a path for every ambition.",
    link: careersRoutes.growWithUs,
  },
  {
    icon: Search,
    title: "How We Hire",
    description:
      "Our recruitment process is transparent, fair and designed to identify exceptional talent. We evaluate skills, cultural fit and long-term potential.",
    link: careersRoutes.howWeHire,
  },
  {
    icon: Users,
    title: "Explore Opportunities",
    description:
      "Browse current openings across our global offices — from investment banking analysts to technology specialists and compliance professionals.",
    link: careersRoutes.exploreOpportunities,
  },
  {
    icon: Shield,
    title: "Equal Opportunities",
    description:
      "CF BANQUE INVESTMENT is an Equal Opportunity Employer. We are committed to building a diverse, inclusive workforce that reflects the communities we serve.",
    link: careersRoutes.equalOpportunities,
  },
] as const;

export const careerValues = [
  {
    title: "Excellence",
    description: "We hold ourselves to the highest standards of professional performance and ethical conduct.",
  },
  {
    title: "Integrity",
    description: "Transparency and honesty are the foundation of every relationship we build — with clients, partners and colleagues.",
  },
  {
    title: "Innovation",
    description: "We embrace forward-thinking solutions and continuously evolve to meet the demands of a changing financial landscape.",
  },
  {
    title: "Collaboration",
    description: "Our best work happens when diverse perspectives come together to solve complex challenges for our clients.",
  },
] as const;

export const careerTopics: Record<string, TopicPageConfig> = {
  "work-with-us": {
    seoTitle: "Work With Us",
    seoDescription: "Join CF Banque Investment and build a career in global finance, strategy and advisory.",
    path: careersRoutes.workWithUs,
    tag: "Careers",
    title: "Work With Us",
    description: "Join a global team where rigorous analysis, client service and strategic thinking shape every day.",
    image: "/images/careers-hero.jpg",
    anchors: [
      { label: "Overview", href: careersRoutes.overview },
      { label: "Grow With Us", href: careersRoutes.growWithUs },
      { label: "How We Hire", href: careersRoutes.howWeHire },
      { label: "Opportunities", href: careersRoutes.exploreOpportunities },
      { label: "Equal Opportunities", href: careersRoutes.equalOpportunities },
    ],
    content: (
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Briefcase, title: "Client-facing excellence", text: "Teams that help institutions and entrepreneurs access capital and strategic advice." },
              { icon: Layers3, title: "Analytical depth", text: "Careers built around rigorous research, modeling and market insight." },
              { icon: Sparkles, title: "Global exposure", text: "Opportunities to collaborate across regions, sectors and business lines." },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-muted p-8 border">
                <item.icon className="w-10 h-10 text-accent mb-5" strokeWidth={1.5} />
                <h3 className="font-serif text-xl text-foreground font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    ),
  },
  "grow-with-us": {
    seoTitle: "Grow With Us",
    seoDescription: "Development, learning and progression at CF Banque Investment.",
    path: careersRoutes.growWithUs,
    tag: "Careers",
    title: "Grow With Us",
    description: "We invest in continuous learning and leadership development so our people can build long-term careers.",
    image: "/images/innovation-lab.jpg",
    anchors: [
      { label: "Overview", href: careersRoutes.overview },
      { label: "Work With Us", href: careersRoutes.workWithUs },
      { label: "How We Hire", href: careersRoutes.howWeHire },
      { label: "Opportunities", href: careersRoutes.exploreOpportunities },
      { label: "Equal Opportunities", href: careersRoutes.equalOpportunities },
    ],
    content: (
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-bold mb-5">Development that compounds</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                From analyst learning paths to executive leadership tracks, we create space for continuous learning, mentorship and stretch assignments.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our teams work in an environment that rewards curiosity, collaboration and the willingness to solve complex client challenges.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {careerValues.map((value) => (
                <div key={value.title} className="bg-card border p-4">
                  <h3 className="font-serif text-lg text-card-foreground font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    ),
  },
  "how-we-hire": {
    seoTitle: "How We Hire",
    seoDescription: "Our transparent hiring process and candidate experience at CF Banque Investment.",
    path: careersRoutes.howWeHire,
    tag: "Careers",
    title: "How We Hire",
    description: "Our recruitment process is transparent, fair and designed to identify long-term potential and cultural alignment.",
    image: "/images/office-meeting.jpg",
    anchors: [
      { label: "Overview", href: careersRoutes.overview },
      { label: "Work With Us", href: careersRoutes.workWithUs },
      { label: "Grow With Us", href: careersRoutes.growWithUs },
      { label: "Opportunities", href: careersRoutes.exploreOpportunities },
      { label: "Equal Opportunities", href: careersRoutes.equalOpportunities },
    ],
    content: (
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              "Application review",
              "Skills and experience discussion",
              "Panel interview and case study",
              "Offer and onboarding",
            ].map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-muted p-6 border"
              >
                <span className="text-accent text-xs font-bold tracking-[0.25em] uppercase">Step {index + 1}</span>
                <h3 className="font-serif text-lg text-foreground font-semibold mt-3 mb-2">{step}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We keep the process structured, timely and respectful so candidates know what to expect at every stage.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    ),
  },
  "explore-opportunities": {
    seoTitle: "Explore Opportunities",
    seoDescription: "Current opportunities and career paths at CF Banque Investment.",
    path: careersRoutes.exploreOpportunities,
    tag: "Careers",
    title: "Explore Opportunities",
    description: "Browse the kinds of roles and career paths available across our global offices.",
    image: "/images/team-collaboration.jpg",
    anchors: [
      { label: "Overview", href: careersRoutes.overview },
      { label: "Work With Us", href: careersRoutes.workWithUs },
      { label: "Grow With Us", href: careersRoutes.growWithUs },
      { label: "How We Hire", href: careersRoutes.howWeHire },
      { label: "Equal Opportunities", href: careersRoutes.equalOpportunities },
    ],
    content: (
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Investment banking and advisory",
              "Asset management and client solutions",
              "Technology, operations and data",
              "Risk, compliance and legal",
              "Marketing, communications and brand",
              "Corporate functions and support",
            ].map((item) => (
              <div key={item} className="bg-white border p-6 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="text-foreground text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    ),
  },
  "equal-opportunities": {
    seoTitle: "Equal Opportunities",
    seoDescription: "Our commitment to an inclusive, equitable and accessible workplace.",
    path: careersRoutes.equalOpportunities,
    tag: "Careers",
    title: "Equal Opportunities",
    description: "We are committed to fairness, inclusion and access to opportunity across every part of the organization.",
    image: "/images/diversity-inclusion.jpg",
    anchors: [
      { label: "Overview", href: careersRoutes.overview },
      { label: "Work With Us", href: careersRoutes.workWithUs },
      { label: "Grow With Us", href: careersRoutes.growWithUs },
      { label: "How We Hire", href: careersRoutes.howWeHire },
      { label: "Opportunities", href: careersRoutes.exploreOpportunities },
    ],
    content: (
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-bold mb-5">A workplace built for everyone</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We hire and develop people based on potential, skill and alignment with our values, regardless of background or identity.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our policies support accessibility, respectful conduct and fair advancement across the organization.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {careerValues.map((value) => (
                <div key={value.title} className="bg-muted border p-4">
                  <h3 className="font-serif text-lg text-foreground font-semibold mb-1">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    ),
  },
};
