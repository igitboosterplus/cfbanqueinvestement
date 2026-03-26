import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ExternalLink } from "lucide-react";
import logoComplet from "@/assets/logo_complet.jpeg";
import { aboutNavChildren, aboutRoutes } from "@/config/aboutRoutes";
import { communitiesNavChildren, communitiesRoutes, careersNavChildren, careersRoutes, impactNavChildren, impactRoutes, newsroomNavChildren, newsroomRoutes, investorRelationsNavChildren, investorRelationsRoutes } from "@/config/siteRoutes";

const navItems = [
  {
    label: "About Us",
    path: aboutRoutes.overview,
    children: aboutNavChildren,
  },
  {
    label: "What We Do",
    path: "/investment-banking",
    children: [
      { label: "Investment Banking", path: "/investment-banking" },
      { label: "Asset Management", path: "/asset-management" },
      { label: "Wealth Management", path: "/wealth-management" },
    ],
  },
  {
    label: "Communities",
    path: communitiesRoutes.overview,
    children: communitiesNavChildren,
  },
  {
    label: "Impact",
    path: impactRoutes.overview,
    children: impactNavChildren,
  },
  {
    label: "Institute",
    path: "/institute",
  },
  {
    label: "Careers",
    path: careersRoutes.overview,
    children: careersNavChildren,
  },
  {
    label: "Investor Relations",
    path: investorRelationsRoutes.overview,
    children: investorRelationsNavChildren,
  },
  {
    label: "Newsroom",
    path: newsroomRoutes.overview,
    children: newsroomNavChildren,
  },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isPathActive = (currentPath: string, targetPath: string) =>
    currentPath === targetPath || currentPath.startsWith(targetPath + "/");

  const isItemActive = (item: (typeof navItems)[number]) =>
    isPathActive(location.pathname, item.path) ||
    item.children?.some((child) => isPathActive(location.pathname, child.path));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
  }, [location.pathname]);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-sm" : "bg-white"}`}
      aria-label="Main navigation"
    >
      {/* Top utility bar */}
      <div className="hidden lg:block bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-end h-7">
          <Link
            to="/careers"
            className="text-primary-foreground/60 hover:text-primary-foreground text-[11px] font-sans transition-colors flex items-center gap-1"
          >
            Join Our Team <ExternalLink className="w-2.5 h-2.5" />
          </Link>
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

          {/* Desktop Nav — clean style */}
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
                  aria-haspopup={item.children ? "true" : undefined}
                  aria-expanded={item.children && openDropdown === item.label ? true : undefined}
                  className={`flex items-center gap-0.5 px-2.5 xl:px-3.5 py-5 text-[12px] xl:text-[13px] font-medium whitespace-nowrap transition-colors ${
                    isItemActive(item)
                      ? "text-primary"
                      : "text-foreground/60 hover:text-primary"
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className={`w-3 h-3 ml-0.5 opacity-50 transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`} />
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
            {/* CTA Button */}
            <Link
              to="/contact"
              className="ml-3 inline-flex items-center justify-center px-4 xl:px-5 py-2.5 bg-accent hover:bg-orange-light text-white font-semibold text-xs tracking-[0.15em] uppercase whitespace-nowrap transition-all duration-300"
            >
              Plan With Us
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-foreground p-2"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            {...{ "aria-expanded": mobileOpen ? "true" : "false" }}
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
            <div key={item.label} className={`animate-in fade-in slide-in-from-top-1 mobile-nav-stagger mobile-nav-stagger-${i}`}>
              <div className="flex items-center border-b border-gray-50">
                <Link
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`flex-1 px-6 py-3.5 text-sm font-medium transition-colors ${
                    isItemActive(item) ? "text-primary" : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                    className="px-4 py-3.5 text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`Expand ${item.label}`}
                    {...{ "aria-expanded": mobileExpanded === item.label ? "true" : "false" }}
                  >
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileExpanded === item.label ? "rotate-180" : ""}`} />
                  </button>
                )}
              </div>
              {item.children && mobileExpanded === item.label && (
                <div className="bg-gray-50/50 animate-in fade-in slide-in-from-top-1 duration-150">
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
