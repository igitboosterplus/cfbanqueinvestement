import { motion } from "framer-motion";
import { Heart, Users, Globe, Handshake, Shield, Megaphone, Sparkles, Building2 } from "lucide-react";
import { communitiesRoutes } from "@/config/siteRoutes";
import type { TopicPageConfig } from "@/components/TopicPage";

export const communityAreas = [
  {
    icon: Heart,
    title: "Community Relief",
    description:
      "Rapid response support and long-term recovery assistance for communities impacted by natural disasters, economic downturns and humanitarian crises across our operational regions.",
    link: communitiesRoutes.communityRelief,
  },
  {
    icon: Users,
    title: "Volunteerism",
    description:
      "Our employees dedicate thousands of hours annually to mentoring, financial literacy programs and skill-building initiatives in local communities around the world.",
    link: communitiesRoutes.volunteerism,
  },
  {
    icon: Globe,
    title: "Local Partnerships",
    description:
      "Strategic collaborations with local governments, NGOs and community organizations to create lasting economic opportunities and build resilient communities.",
    link: communitiesRoutes.localPartnerships,
  },
  {
    icon: Handshake,
    title: "Financial Inclusion",
    description:
      "Programs designed to expand access to financial services, banking and investment opportunities for underserved populations across emerging and frontier markets.",
    link: communitiesRoutes.financialInclusion,
  },
] as const;

const topicBase = [
  {
    icon: Shield,
    title: "Long-term commitment",
    text: "We design initiatives that provide both immediate support and durable recovery, working alongside community partners until the needs have been addressed.",
  },
  {
    icon: Handshake,
    title: "Partnership-led delivery",
    text: "Our teams coordinate with local organizations, public agencies and nonprofit partners to make sure support reaches the right people quickly.",
  },
  {
    icon: Sparkles,
    title: "Practical outcomes",
    text: "Each program is shaped to create measurable impact, whether that means emergency support, mentoring, access to services or long-term economic opportunity.",
  },
] as const;

export const communityTopics: Record<string, TopicPageConfig> = {
  "community-relief": {
    seoTitle: "Community Relief",
    seoDescription:
      "Rapid response and long-term recovery initiatives supporting communities affected by crisis and disruption.",
    path: communitiesRoutes.communityRelief,
    tag: "Communities",
    title: "Community Relief",
    description:
      "We mobilize resources quickly when communities face urgent challenges, then stay involved to support recovery and rebuilding.",
    image: "/images/community-impact.jpg",
    anchors: [
      { label: "Overview", href: communitiesRoutes.overview },
      { label: "Volunteerism", href: communitiesRoutes.volunteerism },
      { label: "Partnerships", href: communitiesRoutes.localPartnerships },
      { label: "Financial Inclusion", href: communitiesRoutes.financialInclusion },
    ],
    content: (
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topicBase.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-muted p-8 border"
              >
                <item.icon className="w-10 h-10 text-accent mb-5" strokeWidth={1.5} />
                <h3 className="font-serif text-xl text-foreground font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-muted border p-8 lg:p-10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div>
                <span className="text-accent font-sans text-sm font-semibold tracking-[0.2em] uppercase">
                  Response model
                </span>
                <h3 className="font-serif text-2xl lg:text-3xl text-foreground font-bold mt-3 mb-4">
                  From urgent support to lasting recovery
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Relief work starts with rapid assessment and coordinated
                  action, but the goal is always broader than short-term aid.
                  We stay engaged until local partners have what they need to
                  rebuild.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  That approach reflects how we think about our role as a
                  financial institution: disciplined, practical and focused on
                  durable outcomes for the communities around us.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Assess immediate needs with local partners",
                  "Deploy emergency support where it matters most",
                  "Coordinate recovery plans with community leaders",
                  "Measure outcomes and adapt support over time",
                ].map((item) => (
                  <div
                    key={item}
                    className="bg-white border p-4 text-foreground text-sm font-medium"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    ),
  },
  volunteerism: {
    seoTitle: "Volunteerism",
    seoDescription:
      "Employee volunteerism and skills-based mentoring programs that strengthen local communities.",
    path: communitiesRoutes.volunteerism,
    tag: "Communities",
    title: "Volunteerism",
    description:
      "Our people contribute time, expertise and energy to the communities where we operate, creating a culture of service across the institution.",
    image: "/images/team-collaboration.jpg",
    anchors: [
      { label: "Overview", href: communitiesRoutes.overview },
      { label: "Community Relief", href: communitiesRoutes.communityRelief },
      { label: "Partnerships", href: communitiesRoutes.localPartnerships },
      { label: "Financial Inclusion", href: communitiesRoutes.financialInclusion },
    ],
    content: (
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mb-14">
            <span className="text-accent font-sans text-sm font-semibold tracking-[0.2em] uppercase">Impact in action</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-bold mt-3 mb-4">Skills-based volunteering that scales</h2>
            <p className="text-muted-foreground leading-relaxed">
              Employees support financial literacy workshops, mentoring circles, local education programs and pro bono advisory support across our regions.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Megaphone, title: "Mentoring", text: "Career guidance and professional development for students and early-career talent." },
              { icon: Building2, title: "Community clinics", text: "Practical financial advice sessions delivered alongside local partners." },
              { icon: Heart, title: "Volunteer days", text: "Structured volunteering time for employees across all business lines." },
              { icon: Globe, title: "Cross-border reach", text: "A global volunteer culture that supports communities in every office location." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card p-6 border"
              >
                <item.icon className="w-9 h-9 text-accent mb-4" strokeWidth={1.5} />
                <h3 className="font-serif text-lg text-card-foreground font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-background border p-8 lg:p-10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-accent font-sans text-sm font-semibold tracking-[0.2em] uppercase">
                  Volunteer model
                </span>
                <h3 className="font-serif text-2xl lg:text-3xl text-foreground font-bold mt-3 mb-4">
                  Skills-based service that fits a financial institution
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our volunteering programs are built around the skills our
                  people already use every day: analysis, communication,
                  mentoring and problem solving.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  That means the impact is practical for the communities we
                  serve and meaningful for employees who want to contribute
                  beyond their day-to-day work.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Financial literacy workshops",
                  "Career mentoring for students",
                  "Pro bono strategic advice",
                  "Team service days with local partners",
                ].map((item) => (
                  <div
                    key={item}
                    className="bg-muted border p-4 text-foreground text-sm font-medium"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    ),
  },
  "local-partnerships": {
    seoTitle: "Local Partnerships",
    seoDescription:
      "Collaborating with governments, NGOs and community organizations to create long-term economic opportunity.",
    path: communitiesRoutes.localPartnerships,
    tag: "Communities",
    title: "Local Partnerships",
    description:
      "We work with trusted local partners to design programs that reflect the needs of the communities we serve and the realities of each market.",
    image: "/images/office-meeting.jpg",
    anchors: [
      { label: "Overview", href: communitiesRoutes.overview },
      { label: "Community Relief", href: communitiesRoutes.communityRelief },
      { label: "Volunteerism", href: communitiesRoutes.volunteerism },
      { label: "Financial Inclusion", href: communitiesRoutes.financialInclusion },
    ],
    content: (
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-bold mb-5">Built on collaboration</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Local partnerships help us combine financial expertise with on-the-ground knowledge, so programs stay practical, relevant and sustainable.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our teams coordinate with nonprofit leaders, public-sector stakeholders and grassroots organizations to support education, entrepreneurship and neighborhood development.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                "Joint programs with local governments and civic organizations",
                "Community-led consultation before project launch",
                "Support for neighborhood resilience and economic mobility",
              ].map((item) => (
                <div key={item} className="bg-muted border p-4 text-foreground text-sm font-medium">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-muted border p-8 lg:p-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Handshake,
                  title: "Co-design",
                  text: "We shape initiatives alongside local stakeholders from the beginning.",
                },
                {
                  icon: Globe,
                  title: "Local relevance",
                  text: "Programs adapt to the needs of each market instead of using a one-size-fits-all model.",
                },
                {
                  icon: Shield,
                  title: "Sustainable delivery",
                  text: "We focus on delivery frameworks that can continue after our direct involvement.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white border p-6"
                >
                  <item.icon className="w-9 h-9 text-accent mb-4" strokeWidth={1.5} />
                  <h3 className="font-serif text-lg text-foreground font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    ),
  },
  "financial-inclusion": {
    seoTitle: "Financial Inclusion",
    seoDescription:
      "Expanding access to banking, credit and investment opportunities for underserved populations.",
    path: communitiesRoutes.financialInclusion,
    tag: "Communities",
    title: "Financial Inclusion",
    description:
      "We design programs that help more people participate in the financial system and build long-term financial resilience.",
    image: "/images/digital-banking.jpg",
    anchors: [
      { label: "Overview", href: communitiesRoutes.overview },
      { label: "Community Relief", href: communitiesRoutes.communityRelief },
      { label: "Volunteerism", href: communitiesRoutes.volunteerism },
      { label: "Partnerships", href: communitiesRoutes.localPartnerships },
    ],
    content: (
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Access", text: "Broader access to banking, savings and payments tools." },
              { title: "Education", text: "Financial literacy support that strengthens decision-making." },
              { title: "Opportunity", text: "Pathways into credit, entrepreneurship and investment." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white border p-8"
              >
                <h3 className="font-serif text-xl text-foreground font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-background border p-8 lg:p-10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-accent font-sans text-sm font-semibold tracking-[0.2em] uppercase">
                  Inclusion framework
                </span>
                <h3 className="font-serif text-2xl lg:text-3xl text-foreground font-bold mt-3 mb-4">
                  Lower barriers, stronger participation
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Financial inclusion is not only about access to products. It
                  is about helping people understand, trust and use the tools
                  that can improve long-term financial resilience.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  That is why our work combines access points, educational
                  support and pathways into savings, credit and investment.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {[
                  "Digital access that fits everyday banking needs",
                  "Education that improves financial confidence",
                  "Pathways into savings, credit and long-term ownership",
                ].map((item) => (
                  <div
                    key={item}
                    className="bg-muted border p-4 text-foreground text-sm font-medium"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    ),
  },
};
