import { motion } from "framer-motion";
import {
  ArrowRight,
  FileText,
  Mail,
  Megaphone,
  Phone,
  Shield,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import type { TopicPageConfig } from "@/components/TopicPage";
import { newsroomRoutes } from "@/config/siteRoutes";

export const newsroomPressReleases = [
  {
    date: "March 2026",
    title: "CF BANQUE INVESTMENT Expands Advisory Operations in West Africa",
    summary:
      "New strategic partnerships strengthen the firm's presence across key emerging markets in the region.",
    image: "/images/advisory-session.jpg",
  },
  {
    date: "February 2026",
    title: "Sustainable Finance: Integrating ESG into Capital Markets",
    summary:
      "Our latest ESG framework outlines pathways for responsible investment and long-term value creation.",
    image: "/images/finance-strategy.jpg",
  },
  {
    date: "January 2026",
    title: "Strategic M&A Advisory: Driving Cross-Border Growth",
    summary:
      "CF BANQUE INVESTMENT advises on landmark transactions across multiple jurisdictions.",
    image: "/images/capital-markets.jpg",
  },
  {
    date: "December 2025",
    title: "CF BANQUE INVESTMENT Launches New Wealth Management Division",
    summary:
      "Expanded private banking and wealth advisory services for HNWI and UHNWI clients globally.",
    image: "/images/wealth-advisory.jpg",
  },
  {
    date: "November 2025",
    title: "Annual Summit: The Future of African Capital Markets",
    summary:
      "Senior leaders convene to discuss investment opportunities and regulatory developments across the continent.",
    image: "/images/institutional-banking.jpg",
  },
  {
    date: "October 2025",
    title: "CF BANQUE INVESTMENT Recognized for Excellence in Advisory",
    summary:
      "The firm receives industry recognition for its innovative approach to structured finance and capital markets.",
    image: "/images/corporate-governance.jpg",
  },
] as const;

export const newsroomStories = [
  {
    title: "Building Resilient Communities Through Investment",
    category: "Impact Stories",
    description:
      "How our community development initiatives are creating lasting economic opportunities in underserved regions.",
    image: "/images/community-impact.jpg",
  },
  {
    title: "Inside Our Global Headquarters",
    category: "Company Culture",
    description:
      "A look at how our offices foster collaboration, innovation and professional growth across borders.",
    image: "/images/office-meeting.jpg",
  },
  {
    title: "Women in Finance: Leading the Way",
    category: "Diversity & Inclusion",
    description:
      "Profiles of women leaders at CF BANQUE INVESTMENT who are shaping the future of global finance.",
    image: "/images/diversity-inclusion.jpg",
  },
] as const;

const newsroomTopicAnchors = [
  { label: "Overview", href: newsroomRoutes.overview },
  { label: "Press Releases", href: newsroomRoutes.pressReleases },
  { label: "Stories", href: newsroomRoutes.stories },
  { label: "Media Contacts", href: newsroomRoutes.mediaContacts },
] as const;

export const newsroomHighlights = [
  {
    icon: FileText,
    title: "Press Releases",
    description:
      "Official updates, milestones and announcements from CF Banque Investment.",
    link: newsroomRoutes.pressReleases,
  },
  {
    icon: Megaphone,
    title: "Stories",
    description:
      "Featured stories about our people, clients and communities.",
    link: newsroomRoutes.stories,
  },
  {
    icon: Users,
    title: "Media Contacts",
    description:
      "How to reach our communications team for press and media requests.",
    link: newsroomRoutes.mediaContacts,
  },
] as const;

export const newsroomTopics: Record<string, TopicPageConfig> = {
  "press-releases": {
    seoTitle: "Press Releases",
    seoDescription:
      "Official press releases and announcements from CF Banque Investment.",
    path: newsroomRoutes.pressReleases,
    tag: "Newsroom",
    title: "Press Releases",
    description:
      "Read the latest announcements, milestones and strategic updates from across the firm.",
    image: "/images/atl-hero1.png",
    anchors: newsroomTopicAnchors,
    content: (
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-14"
          >
            <span className="text-accent font-sans text-sm font-semibold tracking-[0.2em] uppercase">
              Official updates
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-bold mt-3 mb-4">
              Recent announcements from across the firm
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              The latest milestones, strategic developments and market updates
              from CF BANQUE INVESTMENT.
            </p>
          </motion.div>

          <div className="space-y-8">
            {newsroomPressReleases.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-muted border overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr]">
                  <div className="aspect-[16/10] lg:aspect-auto lg:min-h-[220px]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-8 lg:p-10">
                    <span className="text-accent text-xs font-semibold uppercase tracking-wider">
                      {item.date}
                    </span>
                    <h3 className="font-serif text-2xl text-foreground font-semibold mt-3 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed max-w-3xl">
                      {item.summary}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to={newsroomRoutes.mediaContacts}
              className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all"
            >
              Contact our press team <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    ),
  },
  stories: {
    seoTitle: "Stories",
    seoDescription:
      "Stories about our people, communities and impact across the world.",
    path: newsroomRoutes.stories,
    tag: "Newsroom",
    title: "Stories",
    description:
      "Explore stories about our people, clients and the communities we serve across the world.",
    image: "/images/community-impact.jpg",
    anchors: newsroomTopicAnchors,
    content: (
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-14"
          >
            <span className="text-accent font-sans text-sm font-semibold tracking-[0.2em] uppercase">
              Human stories
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-bold mt-3 mb-4">
              Behind the headlines
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Feature stories about the people, partnerships and communities
              shaping our work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsroomStories.map((story, i) => (
              <motion.article
                key={story.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white overflow-hidden border"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-8">
                  <span className="text-accent text-xs font-semibold uppercase tracking-wider">
                    {story.category}
                  </span>
                  <h3 className="font-serif text-xl text-foreground font-semibold mt-3 mb-3 leading-snug">
                    {story.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {story.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    ),
  },
  "media-contacts": {
    seoTitle: "Media Contacts",
    seoDescription:
      "Get in touch with our communications team for press and media inquiries.",
    path: newsroomRoutes.mediaContacts,
    tag: "Newsroom",
    title: "Media Contacts",
    description:
      "For interviews, statements and media requests, reach out to our communications team.",
    image: "/images/office-meeting.jpg",
    anchors: newsroomTopicAnchors,
    content: (
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-sans text-sm font-semibold tracking-[0.2em] uppercase">
                Media support
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-bold mt-3 mb-5">
                Fast, coordinated responses for press requests
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We support interviews, official statements, executive bios,
                imagery and fact-check requests from journalists and media
                partners.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                For the quickest route, use our contact page and mention that
                your message is for the newsroom team.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <div className="font-semibold text-foreground">
                      Media requests
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Use the contact form and route your message to the
                      newsroom team.
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <div className="font-semibold text-foreground">Phone</div>
                    <div className="text-sm text-muted-foreground">
                      +44 20 3962 5751
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: Shield,
                  title: "Official statements",
                  text: "Verified responses prepared by the communications team.",
                },
                {
                  icon: Users,
                  title: "Executive access",
                  text: "Interview coordination for leadership and subject matter experts.",
                },
                {
                  icon: FileText,
                  title: "Media materials",
                  text: "Logos, factsheets and background information available on request.",
                },
                {
                  icon: Megaphone,
                  title: "Response window",
                  text: "We aim to respond to press enquiries within one business day.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-muted border p-6"
                >
                  <item.icon
                    className="w-9 h-9 text-accent mb-4"
                    strokeWidth={1.5}
                  />
                  <h3 className="font-serif text-lg text-foreground font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-12 bg-muted border p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-2xl text-foreground font-semibold mb-2">
                Need to reach us directly?
              </h3>
              <p className="text-muted-foreground">
                Use the contact page for the fastest response from the right
                team.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-orange-600 text-white px-6 py-3 font-sans font-semibold text-sm uppercase tracking-wider transition-colors rounded"
            >
              Contact us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    ),
  },
};
