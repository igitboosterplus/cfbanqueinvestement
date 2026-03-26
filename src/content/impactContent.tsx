import { motion } from "framer-motion";
import { TrendingUp, Users, Building, Leaf, Wallet, Landmark, School, Trees, PiggyBank, ShieldCheck, BriefcaseBusiness } from "lucide-react";
import { impactRoutes } from "@/config/siteRoutes";
import type { TopicPageConfig } from "@/components/TopicPage";

export const impactAreas = [
  {
    icon: TrendingUp,
    title: "Business Growth & Entrepreneurship",
    description:
      "Supporting entrepreneurs and small businesses through capital access, mentorship programs and strategic advisory to fuel economic growth in emerging markets.",
    link: impactRoutes.businessGrowth,
  },
  {
    icon: Users,
    title: "Careers & Skills",
    description:
      "Investing in workforce development, financial literacy and professional training programs to equip communities with the skills needed for the modern economy.",
    link: impactRoutes.careersSkills,
  },
  {
    icon: Building,
    title: "Community Development",
    description:
      "Driving inclusive economic development through affordable housing initiatives, infrastructure investment and revitalization of underserved neighborhoods.",
    link: impactRoutes.communityDevelopment,
  },
  {
    icon: Leaf,
    title: "Environmental Sustainability",
    description:
      "Accelerating the transition to a low-carbon economy through sustainable finance, green bonds and ESG-integrated investment strategies.",
    link: impactRoutes.environmentalSustainability,
  },
  {
    icon: Wallet,
    title: "Financial Health & Wealth Creation",
    description:
      "Expanding access to banking, credit and investment tools that help individuals and families build long-term financial security and generational wealth.",
    link: impactRoutes.financialHealthWealthCreation,
  },
] as const;

const impactBaseLinks = [
  { label: "Impact Overview", href: impactRoutes.overview },
  { label: "Business Growth", href: impactRoutes.businessGrowth },
  { label: "Careers & Skills", href: impactRoutes.careersSkills },
  { label: "Community Development", href: impactRoutes.communityDevelopment },
  { label: "Sustainability", href: impactRoutes.environmentalSustainability },
  { label: "Financial Health", href: impactRoutes.financialHealthWealthCreation },
] as const;

export const impactTopics: Record<string, TopicPageConfig> = {
  "business-growth-entrepreneurship": {
    seoTitle: "Business Growth & Entrepreneurship",
    seoDescription: "Capital access and advisory support helping businesses and entrepreneurs grow.",
    path: impactRoutes.businessGrowth,
    tag: "Impact",
    title: "Business Growth & Entrepreneurship",
    description: "We help entrepreneurs and growing businesses access capital, guidance and networks that turn ambition into long-term value.",
    image: "/images/advisory-session.jpg",
    anchors: impactBaseLinks,
    content: (
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Landmark, title: "Capital access", text: "Flexible financing and advisory support for growth-stage businesses." },
              { icon: BriefcaseBusiness, title: "Strategic advisory", text: "Guidance on structure, expansion and execution for founders and sponsors." },
              { icon: ShieldCheck, title: "Long-term growth", text: "Partnerships built around resilience, governance and sustainable value creation." },
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
  "careers-skills": {
    seoTitle: "Careers & Skills",
    seoDescription: "Training, financial literacy and workforce development programs that build capability and opportunity.",
    path: impactRoutes.careersSkills,
    tag: "Impact",
    title: "Careers & Skills",
    description: "We invest in workforce development and financial literacy to equip people with the tools they need to thrive in the modern economy.",
    image: "/images/careers-hero.jpg",
    anchors: impactBaseLinks,
    content: (
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: School, title: "Training programs", text: "Practical learning experiences built with local partners and educators." },
              { icon: Users, title: "Mentorship", text: "Career guidance and skills coaching for students and early-career talent." },
              { icon: TrendingUp, title: "Mobility", text: "Pathways that support long-term employability and professional progression." },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-white border p-6">
                <item.icon className="w-9 h-9 text-accent mb-4" strokeWidth={1.5} />
                <h3 className="font-serif text-lg text-foreground font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    ),
  },
  "community-development": {
    seoTitle: "Community Development",
    seoDescription: "Infrastructure, housing and neighborhood revitalization initiatives that strengthen communities.",
    path: impactRoutes.communityDevelopment,
    tag: "Impact",
    title: "Community Development",
    description: "We help drive inclusive development through infrastructure, housing and local revitalization efforts that create durable opportunity.",
    image: "/images/community-impact.jpg",
    anchors: impactBaseLinks,
    content: (
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Building, title: "Housing", text: "Support for affordable housing and livable neighborhood investment." },
              { icon: Trees, title: "Public spaces", text: "Projects that improve shared spaces and civic infrastructure." },
              { icon: Users, title: "Local prosperity", text: "Programs that strengthen community resilience and economic mobility." },
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
  "environmental-sustainability": {
    seoTitle: "Environmental Sustainability",
    seoDescription: "Sustainable finance, green bonds and ESG strategies supporting the transition to a low-carbon economy.",
    path: impactRoutes.environmentalSustainability,
    tag: "Impact",
    title: "Environmental Sustainability",
    description: "We support the transition to a low-carbon economy through sustainable finance, ESG integration and green investment strategies.",
    image: "/images/esg-commitment.jpg",
    anchors: impactBaseLinks,
    content: (
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: Leaf, title: "ESG integration", text: "Environmental criteria embedded into investment analysis and risk processes." },
              { icon: Trees, title: "Transition finance", text: "Capital solutions supporting businesses as they decarbonize and adapt." },
              { icon: ShieldCheck, title: "Green bonds", text: "Structured instruments funding projects with measurable environmental benefit." },
              { icon: Sparkles, title: "Responsible growth", text: "Investment strategies designed to balance return, resilience and climate responsibility." },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-white border p-6">
                <item.icon className="w-9 h-9 text-accent mb-4" strokeWidth={1.5} />
                <h3 className="font-serif text-lg text-foreground font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    ),
  },
  "financial-health-wealth-creation": {
    seoTitle: "Financial Health & Wealth Creation",
    seoDescription: "Helping individuals and families build long-term financial security and generational wealth.",
    path: impactRoutes.financialHealthWealthCreation,
    tag: "Impact",
    title: "Financial Health & Wealth Creation",
    description: "We expand access to banking, credit and investment tools that support financial resilience and generational wealth creation.",
    image: "/images/wealth-hero.jpg",
    anchors: impactBaseLinks,
    content: (
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: PiggyBank, title: "Savings", text: "Tools and guidance that help households strengthen their financial cushion." },
              { icon: Wallet, title: "Access", text: "Broader entry points to banking, credit and wealth-building services." },
              { icon: ShieldCheck, title: "Stewardship", text: "Long-term planning and disciplined portfolio support for families." },
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
};
