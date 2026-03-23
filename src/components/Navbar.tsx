import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ExternalLink } from "lucide-react";
import logoComplet from "@/assets/logo_complet.jpeg";

const navItems = [
  {
    label: "About Us",
    path: "/about",
    children: [
      { label: "How We Do Business", path: "/about" },
      { label: "Leadership", path: "/about#history" },
      { label: "Governance", path: "/about#governance" },
      { label: "History", path: "/about#history" },
      { label: "Technology", path: "/about" },
      { label: "Diversity & Inclusion", path: "/about" },
    ],
  },
  {
    label: "Communities",
    path: "/communities",
    children: [
      { label: "Community Relief", path: "/communities" },
      { label: "Volunteerism", path: "/communities" },
    ],
  },
  {
    label: "Impact",
    path: "/impact",
    children: [
      { label: "Business Growth & Entrepreneurship", path: "/impact" },
      { label: "Careers & Skills", path: "/impact" },
      { label: "Community Development", path: "/impact" },
      { label: "Environmental Sustainability", path: "/impact" },
      { label: "Financial Health & Wealth Creation", path: "/impact" },
    ],
  },
  {
    label: "Institute",
    path: "/institute",
  },
  {
    label: "Careers",
    path: "/careers",
    children: [
      { label: "Work With Us", path: "/careers" },
      { label: "Grow With Us", path: "/careers" },
      { label: "How We Hire", path: "/careers" },
      { label: "Explore Opportunities", path: "/careers" },
      { label: "Equal Opportunities", path: "/careers" },
    ],
  },
  {
    label: "Investor Relations",
    path: "/investor-relations",
  },
  {
    label: "Newsroom",
    path: "/newsroom",
    children: [
      { label: "Press Releases", path: "/newsroom" },
      { label: "Stories", path: "/newsroom" },
      { label: "Media Contacts", path: "/contact" },
    ],
  },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-sm" : "bg-white"}`}>
      {/* Top utility bar */}
      <div className="hidden lg:block bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-end h-7 gap-6">
          <Link
            to="/contact"
            className="text-primary-foreground/60 hover:text-primary-foreground text-[11px] font-sans transition-colors"
          >
            Contact Us
          </Link>
          <a
            href="/contact"
            className="text-primary-foreground/60 hover:text-primary-foreground text-[11px] font-sans transition-colors flex items-center gap-1"
          >
            Join Our Team <ExternalLink className="w-2.5 h-2.5" />
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-[68px]">
          {/* Logo */}
          <Link to="/" className="shrink-0">
            <img
              src={logoComplet}
              alt="CF Banque Investment"
              className="h-12 lg:h-14 w-auto"
            />
          </Link>

          {/* Desktop Nav — JPMorgan clean style */}
          <div className="hidden lg:flex items-center gap-0">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={`flex items-center gap-1 px-4 py-5 text-[13px] font-medium transition-colors ${
                    location.pathname === item.path
                      ? "text-primary"
                      : "text-foreground/60 hover:text-primary"
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className="w-3 h-3 ml-0.5 opacity-50" />
                  )}
                </Link>
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 w-60 bg-white shadow-lg border-t-2 border-primary py-1 animate-in fade-in slide-in-from-top-1 duration-150">
                    {item.children.map((child) => (
                      <Link
                        key={child.path + child.label}
                        to={child.path}
                        className="block px-5 py-2.5 text-[13px] text-foreground/70 hover:bg-gray-50 hover:text-primary transition-colors duration-150"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-foreground p-2"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Subtle bottom border */}
      <div className="h-px bg-gray-200" />

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 pb-6 shadow-lg max-h-[80vh] overflow-y-auto">
          {navItems.map((item, i) => (
            <div key={item.label} className="animate-in fade-in slide-in-from-top-1" style={{ animationDelay: `${i * 40}ms`, animationFillMode: "both" }}>
              <Link
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between px-6 py-3.5 text-foreground/80 hover:text-primary text-sm font-medium border-b border-gray-50 transition-colors"
              >
                {item.label}
                {item.children && <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />}
              </Link>
              {item.children && (
                <div className="bg-gray-50/50">
                  {item.children.map((child) => (
                    <Link
                      key={child.path + child.label}
                      to={child.path}
                      onClick={() => setMobileOpen(false)}
                      className="block px-10 py-2.5 text-foreground/60 hover:text-primary text-sm transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="px-6 pt-5 mt-3 border-t border-gray-100">
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center bg-primary text-white font-semibold text-sm tracking-wider py-3 transition-colors hover:bg-primary/90"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
