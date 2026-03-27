import { motion } from "framer-motion";
import { TrendingUp, Users, Building, Leaf, Wallet, Landmark, School, Trees, PiggyBank, ShieldCheck, BriefcaseBusiness, Sparkles } from "lucide-react";
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
    seoDescription: "Capital access and advisory support helping businesses and entrepreneurs grow across emerging markets.",
    path: impactRoutes.businessGrowth,
    tag: "Impact",
    title: "Business Growth & Entrepreneurship",
    description: "We help entrepreneurs and growing businesses access capital, guidance and networks that turn ambition into long-term value.",
    image: "/images/advisory-session.jpg",
    anchors: impactBaseLinks,
    content: (
      <>
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="font-serif text-3xl text-foreground font-bold mb-6">Catalysing Growth Across Emerging Markets</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  CFBANQUE INVESTMENT is committed to supporting the real economy by providing entrepreneurs and growth-stage enterprises with access to structured capital, strategic advisory, and institutional networks. We believe that sustainable economic transformation is driven by empowering businesses at every stage of development.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our approach combines disciplined financial structuring with deep market knowledge, particularly across Africa, Southeast Asia, and other frontier markets where capital access remains a critical growth constraint.
                </p>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4">
                {[
                  { value: "$2.5B+", label: "Capital deployed to SMEs" },
                  { value: "500+", label: "Businesses supported" },
                  { value: "10", label: "Countries of operation" },
                  { value: "85%", label: "Portfolio survival rate" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-muted border p-6 text-center">
                    <p className="font-serif text-2xl text-accent font-bold">{stat.value}</p>
                    <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Landmark, title: "Capital Access", text: "Flexible financing solutions including structured debt, equity participation, and mezzanine instruments tailored to growth-stage businesses in emerging markets." },
                { icon: BriefcaseBusiness, title: "Strategic Advisory", text: "Hands-on guidance on corporate governance, financial structuring, market expansion, and investor readiness — helping founders scale with discipline." },
                { icon: ShieldCheck, title: "Long-Term Partnerships", text: "We build enduring relationships with entrepreneurs, aligning incentives around sustainable growth, institutional resilience, and measurable impact." },
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
        <section className="py-16 bg-primary">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <p className="text-white/60 text-lg leading-relaxed italic font-serif">
              "We believe that every well-structured investment in a growing business is an investment in the economic future of an entire community."
            </p>
            <p className="text-accent font-semibold text-sm mt-4">CFBANQUE INVESTMENT — Impact Philosophy</p>
          </div>
        </section>
      </>
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
      <>
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mb-16">
              <h2 className="font-serif text-3xl text-foreground font-bold mb-6">Building Human Capital for Tomorrow's Economy</h2>
              <p className="text-muted-foreground leading-relaxed">
                The transformation of emerging economies requires more than capital — it requires skilled, empowered, and financially literate populations. CFBANQUE INVESTMENT invests in training programs, mentorship initiatives, and educational partnerships that create pathways to employment and entrepreneurship.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: School, title: "Training Programs", text: "Practical learning experiences built in partnership with local universities, vocational centres, and industry leaders — focusing on finance, technology, and management skills." },
                { icon: Users, title: "Mentorship & Coaching", text: "Career guidance and professional development programs connecting young talent with experienced professionals from our global network of advisors and partners." },
                { icon: TrendingUp, title: "Career Mobility", text: "Structured pathways supporting long-term employability, professional progression, and leadership development — particularly for underrepresented communities." },
              ].map((item, i) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-muted border p-6">
                  <item.icon className="w-9 h-9 text-accent mb-4" strokeWidth={1.5} />
                  <h3 className="font-serif text-lg text-foreground font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 bg-muted">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { value: "2,000+", label: "Professionals trained" },
                { value: "150+", label: "Mentorship pairs active" },
                { value: "12", label: "University partnerships" },
                { value: "78%", label: "Employment placement rate" },
              ].map((stat, i) => (
                <motion.div key={stat.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-white border p-6 text-center">
                  <p className="font-serif text-2xl text-accent font-bold">{stat.value}</p>
                  <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </>
    ),
  },
  "community-development": {
    seoTitle: "Community Development",
    seoDescription: "Infrastructure, housing and neighborhood revitalization initiatives that strengthen communities across Africa and emerging markets.",
    path: impactRoutes.communityDevelopment,
    tag: "Impact",
    title: "Community Development",
    description: "We help drive inclusive development through infrastructure, housing and local revitalization efforts that create durable opportunity.",
    image: "/images/community-impact.jpg",
    anchors: impactBaseLinks,
    content: (
      <>
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mb-16">
              <h2 className="font-serif text-3xl text-foreground font-bold mb-6">Investing in the Foundations of Prosperity</h2>
              <p className="text-muted-foreground leading-relaxed">
                Sustainable economic growth begins at the community level. CFBANQUE INVESTMENT channels capital toward infrastructure projects, affordable housing, and neighbourhood revitalization initiatives that create the physical and social conditions for shared prosperity.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Building, title: "Affordable Housing", text: "Financing and structuring solutions for housing developments that serve low and middle-income populations, improving living conditions and building neighbourhood equity." },
                { icon: Trees, title: "Public Infrastructure", text: "Investment in transport, energy, water, and digital infrastructure that connects communities to economic opportunities and improves quality of life." },
                { icon: Users, title: "Local Economic Development", text: "Programs that strengthen community resilience through job creation, skills development, local supplier engagement, and public-private partnerships." },
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
        <section className="py-16 bg-primary">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                { value: "$1.8B+", label: "Community investment committed" },
                { value: "25,000+", label: "Housing units financed" },
                { value: "40+", label: "Infrastructure projects supported" },
              ].map((stat, i) => (
                <motion.div key={stat.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                  <p className="font-serif text-3xl text-accent font-bold">{stat.value}</p>
                  <p className="text-white/50 text-sm mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </>
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
      <>
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="font-serif text-3xl text-foreground font-bold mb-6">Finance as a Force for Environmental Stewardship</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  CFBANQUE INVESTMENT recognises that environmental sustainability and financial performance are not opposing forces — they are deeply complementary. We integrate ESG principles into our investment processes, advisory mandates, and capital allocation decisions.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  From green bond structuring to climate risk assessment, our approach ensures that environmental considerations are embedded at every stage of the investment lifecycle, creating long-term value while contributing to global climate objectives.
                </p>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4">
                {[
                  { value: "$800M+", label: "Green bonds structured" },
                  { value: "100%", label: "ESG-screened portfolios" },
                  { value: "35%", label: "Carbon reduction target" },
                  { value: "15+", label: "Renewable energy projects" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-muted border p-6 text-center">
                    <p className="font-serif text-2xl text-accent font-bold">{stat.value}</p>
                    <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Leaf, title: "ESG Integration", text: "Environmental, social, and governance criteria systematically embedded into investment analysis, risk assessment, and portfolio construction across all asset classes." },
                { icon: Trees, title: "Transition Finance", text: "Capital solutions and advisory services supporting businesses in their decarbonisation journey — from energy transition to sustainable supply chain transformation." },
                { icon: ShieldCheck, title: "Green Bonds & Climate Instruments", text: "Structuring and issuing green bonds, sustainability-linked loans, and climate finance instruments that channel capital toward projects with measurable environmental benefit." },
                { icon: Sparkles, title: "Responsible Growth", text: "Investment strategies designed to balance financial return, portfolio resilience, and environmental responsibility — proving that sustainability drives superior long-term outcomes." },
              ].map((item, i) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-muted border p-6">
                  <item.icon className="w-9 h-9 text-accent mb-4" strokeWidth={1.5} />
                  <h3 className="font-serif text-lg text-foreground font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </>
    ),
  },
  "financial-health-wealth-creation": {
    seoTitle: "Financial Health & Wealth Creation",
    seoDescription: "Helping individuals and families build long-term financial security and generational wealth across emerging markets.",
    path: impactRoutes.financialHealthWealthCreation,
    tag: "Impact",
    title: "Financial Health & Wealth Creation",
    description: "We expand access to banking, credit and investment tools that support financial resilience and generational wealth creation.",
    image: "/images/wealth-hero.jpg",
    anchors: impactBaseLinks,
    content: (
      <>
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mb-16">
              <h2 className="font-serif text-3xl text-foreground font-bold mb-6">Building Pathways to Financial Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                Financial health is not a luxury — it is a fundamental enabler of economic dignity and opportunity. CFBANQUE INVESTMENT works to broaden access to banking services, investment products, and wealth-building tools, particularly in underserved markets where financial inclusion remains a critical challenge.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                { icon: PiggyBank, title: "Savings & Financial Planning", text: "Tools, guidance, and product structures that help households build emergency reserves, plan for long-term goals, and strengthen their financial cushion against economic shocks." },
                { icon: Wallet, title: "Inclusive Access", text: "Broader entry points to banking, credit, insurance, and investment services — designed for populations traditionally excluded from formal financial systems." },
                { icon: ShieldCheck, title: "Wealth Stewardship", text: "Long-term portfolio planning, disciplined wealth management, and intergenerational transfer strategies for families and high-net-worth individuals across emerging markets." },
              ].map((item, i) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-muted p-8 border">
                  <item.icon className="w-10 h-10 text-accent mb-5" strokeWidth={1.5} />
                  <h3 className="font-serif text-xl text-foreground font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{item.text}</p>
                </motion.div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { value: "1M+", label: "Individuals reached" },
                { value: "$500M+", label: "Assets under advisory" },
                { value: "60%", label: "First-time banking clients" },
                { value: "8", label: "Countries served" },
              ].map((stat, i) => (
                <motion.div key={stat.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-primary/5 border border-primary/10 p-6 text-center">
                  <p className="font-serif text-2xl text-accent font-bold">{stat.value}</p>
                  <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </>
    ),
  },
};
