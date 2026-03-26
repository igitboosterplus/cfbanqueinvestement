import { Link } from "react-router-dom";
import { useState, type FormEvent } from "react";
import { Linkedin, MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react";
import logoComplet from "@/assets/logo_complet.jpeg";
import { aboutRoutes } from "@/config/aboutRoutes";
import { newsroomRoutes, investorRelationsRoutes } from "@/config/siteRoutes";

const footerColumns = [
  {
    title: "Our Services",
    links: [
      { label: "Investment Banking", path: "/investment-banking" },
      { label: "Asset Management", path: "/asset-management" },
      { label: "Wealth Management", path: "/wealth-management" },
      { label: "Risk Management", path: aboutRoutes.governance },
      { label: "Strategic Advisory", path: "/investment-banking" },
      { label: "ESG & Sustainable Finance", path: "/asset-management" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { label: "About Us", path: "/about" },
      { label: "Leadership", path: aboutRoutes.leadership },
      { label: "Governance", path: aboutRoutes.governance },
      { label: "History", path: aboutRoutes.history },
      { label: "Technology", path: aboutRoutes.technology },
      { label: "Diversity & Inclusion", path: aboutRoutes.diversity },
      { label: "Newsroom", path: newsroomRoutes.overview },
      { label: "Investor Relations", path: investorRelationsRoutes.overview },
      { label: "Careers", path: "/careers" },
      { label: "Contact Us", path: "/contact" },
    ],
  },
  {
    title: "Investor Relations",
    links: [
      { label: "Financial Performance", path: investorRelationsRoutes.financialPerformance },
      { label: "Reports & Filings", path: investorRelationsRoutes.reportsFilings },
      { label: "Governance", path: investorRelationsRoutes.governance },
      { label: "Events & Calendar", path: investorRelationsRoutes.eventsCalendar },
      { label: "Shareholder Services", path: investorRelationsRoutes.shareholderServices },
    ],
  },
];

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !emailRegex.test(trimmed)) {
      setStatus("error");
      return;
    }
    // TODO: replace with actual newsletter API endpoint
    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus("idle"), 4000);
  }

  return (
    <div>
      {status === "success" ? (
        <div className="flex items-center gap-2 text-green-400 text-sm py-3">
          <CheckCircle className="w-4 h-4" />
          <span>Thank you for subscribing!</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex" noValidate>
          <input
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setStatus("idle"); }}
            placeholder="Your email"
            aria-label="Email for newsletter"
            className={`flex-1 bg-white/[0.08] border text-white placeholder-white/30 text-sm px-4 py-3 focus:outline-none focus:border-accent transition-colors ${status === "error" ? "border-red-400" : "border-white/10"}`}
          />
          <button
            type="submit"
            className="bg-accent hover:bg-orange-light text-white px-4 py-3 transition-colors duration-300"
            aria-label="Subscribe"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      )}
      {status === "error" && (
        <p className="text-red-400 text-xs mt-1">Please enter a valid email address.</p>
      )}
    </div>
  );
}

const Footer = () => (
  <footer className="bg-primary text-primary-foreground" aria-label="Site footer">
    {/* Main footer */}
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-12">
      {/* Top row: logo + description + social */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12 pb-10 border-b border-white/10">
        <div className="lg:col-span-4">
          <Link to="/" className="inline-block mb-6">
            <img
              src={logoComplet}
              alt="CF Banque Investment"
              className="h-14 w-auto mix-blend-screen"
            />
          </Link>
          <p className="text-white/40 text-sm leading-relaxed max-w-sm mb-6">
            CF Banque Investment is an international financial institution specialized in investment banking, financial structuring, and capital market access. Our mission is to support the institutional transformation of enterprises and connect them with the global financial ecosystem.
          </p>
          <a
            href="https://www.linkedin.com/company/cf-banque-plc/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/40 hover:text-accent transition-colors duration-200 text-sm"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
            <span>Follow us on LinkedIn</span>
          </a>
        </div>

        {/* Columns */}
        {footerColumns.map((col) => (
          <div key={col.title} className="lg:col-span-2">
            <h4 className="text-white/90 font-sans text-[13px] font-semibold uppercase tracking-wider mb-5">
              {col.title}
            </h4>
            <ul className="space-y-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-white/40 hover:text-accent text-[13px] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Newsletter */}
        <div className="lg:col-span-2">
          <h4 className="text-white/90 font-sans text-[13px] font-semibold uppercase tracking-wider mb-5">
            Newsletter
          </h4>
          <p className="text-white/40 text-[13px] leading-relaxed mb-4">
            Subscribe to follow the latest news and insights from our institution.
          </p>
          <NewsletterForm />
          {/* Contact info */}
          <div className="mt-8 space-y-3">
            <div className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-accent shrink-0" />
              <span className="text-white/40 text-[12px] leading-relaxed">
                25 Cabot Square, Canary Wharf, London E14 4QZ
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-accent shrink-0" />
              <a
                href="tel:+442039625751"
                className="text-white/40 hover:text-white text-[12px] transition-colors"
              >
                +44 20 3962 5751
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-accent shrink-0" />
              <a
                href="mailto:customer@chartered.com"
                className="text-white/40 hover:text-white text-[12px] transition-colors"
              >
                customer@chartered.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/25 text-[11px]">
          Copyright &copy; {new Date().getFullYear()} CF Banque Investment. All Rights Reserved.
        </p>
        <div className="flex flex-wrap justify-center md:justify-end gap-x-5 gap-y-2 text-[11px] text-white/30">
          {[
            { label: "Confidentiality & Privacy", path: "/privacy" },
            { label: "Legal Information", path: "/legal-notices" },
            { label: "Terms & Conditions", path: "/terms" },
            { label: "Cookies", path: "/cookies" },
            { label: "Accessibility", path: "/accessibility" },
          ].map((t) => (
            <Link
              key={t.label}
              to={t.path}
              className="hover:text-white/60 transition-colors"
            >
              {t.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
