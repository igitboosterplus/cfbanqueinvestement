import { Link } from "react-router-dom";
import { Linkedin, Facebook, Instagram, Youtube } from "lucide-react";
import logoSimple from "@/assets/logo_simple.jpeg";

const footerColumns = [
  {
    title: "About Us",
    links: [
      { label: "How We Do Business", path: "/about" },
      { label: "Leadership", path: "/about#history" },
      { label: "Governance", path: "/about#governance" },
      { label: "History", path: "/about#history" },
      { label: "Technology", path: "/about" },
      { label: "Diversity & Inclusion", path: "/about" },
    ],
  },
  {
    title: "Communities",
    links: [
      { label: "Community Relief", path: "/communities" },
      { label: "Volunteerism", path: "/communities" },
    ],
  },
  {
    title: "Impact",
    links: [
      { label: "Business Growth & Entrepreneurship", path: "/impact" },
      { label: "Careers & Skills", path: "/impact" },
      { label: "Community Development", path: "/impact" },
      { label: "Environmental Sustainability", path: "/impact" },
      { label: "Financial Health & Wealth Creation", path: "/impact" },
    ],
  },
  {
    title: "Institute",
    links: [
      { label: "Research", path: "/institute" },
      { label: "Publications", path: "/institute" },
    ],
  },
  {
    title: "Careers",
    links: [
      { label: "Work With Us", path: "/careers" },
      { label: "Grow With Us", path: "/careers" },
      { label: "How We Hire", path: "/careers" },
      { label: "Explore Opportunities", path: "/careers" },
      { label: "Equal Opportunities", path: "/careers" },
    ],
  },
  {
    title: "Investor Relations",
    links: [
      { label: "Reports & Filings", path: "/investor-relations" },
      { label: "Governance", path: "/investor-relations" },
    ],
  },
  {
    title: "Newsroom",
    links: [
      { label: "Press Releases", path: "/newsroom" },
      { label: "Stories", path: "/newsroom" },
      { label: "Media Contacts", path: "/contact" },
    ],
  },
];

const socialLinks = [
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "Facebook", href: "#", icon: Facebook },
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "YouTube", href: "#", icon: Youtube },
];

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    {/* Main footer */}
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-14 pb-10">
      {/* Logo + social row */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 pb-8 border-b border-white/10">
        <Link to="/" className="flex items-center gap-3 mb-6 sm:mb-0">
          <img
            src={logoSimple}
            alt="CF Banque Investment"
            className="h-10 w-auto rounded-full"
          />
          <div>
            <span className="text-white font-serif text-lg font-bold tracking-wide leading-none">
              CF BANQUE
            </span>
            <span className="text-white/40 font-sans text-[10px] block tracking-[0.2em] uppercase">
              Investment
            </span>
          </div>
        </Link>
        <div className="flex items-center gap-4">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="text-white/40 hover:text-white transition-colors duration-200"
              aria-label={s.label}
            >
              <s.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>

      {/* Column links */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-8 mb-10">
        {footerColumns.map((col) => (
          <div key={col.title}>
            <h4 className="text-white/80 font-sans text-[13px] font-semibold mb-3">
              {col.title}
            </h4>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-white/40 hover:text-white text-[13px] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Related sites */}
      <div className="border-t border-white/10 pt-6 mb-6">
        <span className="text-white/30 text-xs font-sans uppercase tracking-wider">
          Related Sites
        </span>
        <div className="flex flex-wrap gap-4 mt-2">
          {["CF Banque Private", "CF Capital Markets", "CF Research"].map(
            (site) => (
              <span
                key={site}
                className="text-white/40 hover:text-white text-[13px] cursor-pointer transition-colors"
              >
                {site}
              </span>
            )
          )}
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-wrap gap-4 text-[11px] text-white/30">
          {[
            "Privacy & Security",
            "Terms & Conditions",
            "Cookies",
            "Accessibility",
            "Legal Notices",
          ].map((t) => (
            <span
              key={t}
              className="hover:text-white/60 cursor-pointer transition-colors"
            >
              {t}
            </span>
          ))}
        </div>
        <p className="text-white/25 text-[11px]">
          &copy; {new Date().getFullYear()} CF Banque Investment. All rights
          reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
