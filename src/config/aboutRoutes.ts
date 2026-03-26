export const aboutRoutes = {
  overview: "/about",
  leadership: "/leadership",
  governance: "/governance",
  history: "/history",
  technology: "/technology",
  diversity: "/diversity",
  chairmanLetter: "/chairman-letter",
} as const;

export const aboutSectionLinks = [
  { label: "Leadership", href: aboutRoutes.leadership },
  { label: "Governance", href: aboutRoutes.governance },
  { label: "History", href: aboutRoutes.history },
  { label: "Technology", href: aboutRoutes.technology },
  { label: "Diversity", href: aboutRoutes.diversity },
  { label: "Letter of the Chairman", href: aboutRoutes.chairmanLetter },
] as const;

export const aboutNavChildren = [
  { label: "How We Do Business", path: aboutRoutes.overview },
  { label: "Leadership", path: aboutRoutes.leadership },
  { label: "Governance", path: aboutRoutes.governance },
  { label: "History", path: aboutRoutes.history },
  { label: "Technology", path: aboutRoutes.technology },
  { label: "Diversity & Inclusion", path: aboutRoutes.diversity },
  { label: "Letter of the Chairman", path: aboutRoutes.chairmanLetter },
] as const;
