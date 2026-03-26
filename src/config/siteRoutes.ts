export const communitiesRoutes = {
  overview: "/communities",
  communityRelief: "/communities/community-relief",
  volunteerism: "/communities/volunteerism",
  localPartnerships: "/communities/local-partnerships",
  financialInclusion: "/communities/financial-inclusion",
} as const;

export const communitiesNavChildren = [
  { label: "Community Relief", path: communitiesRoutes.communityRelief },
  { label: "Volunteerism", path: communitiesRoutes.volunteerism },
  { label: "Local Partnerships", path: communitiesRoutes.localPartnerships },
  { label: "Financial Inclusion", path: communitiesRoutes.financialInclusion },
] as const;

export const communitiesQuickLinks = [
  { label: "Community Relief", href: communitiesRoutes.communityRelief },
  { label: "Volunteerism", href: communitiesRoutes.volunteerism },
  { label: "Local Partnerships", href: communitiesRoutes.localPartnerships },
  { label: "Financial Inclusion", href: communitiesRoutes.financialInclusion },
] as const;

export const careersRoutes = {
  overview: "/careers",
  workWithUs: "/careers/work-with-us",
  growWithUs: "/careers/grow-with-us",
  howWeHire: "/careers/how-we-hire",
  exploreOpportunities: "/careers/explore-opportunities",
  equalOpportunities: "/careers/equal-opportunities",
} as const;

export const careersNavChildren = [
  { label: "Work With Us", path: careersRoutes.workWithUs },
  { label: "Grow With Us", path: careersRoutes.growWithUs },
  { label: "How We Hire", path: careersRoutes.howWeHire },
  { label: "Explore Opportunities", path: careersRoutes.exploreOpportunities },
  { label: "Equal Opportunities", path: careersRoutes.equalOpportunities },
] as const;

export const careersQuickLinks = [
  { label: "Work With Us", href: careersRoutes.workWithUs },
  { label: "Grow With Us", href: careersRoutes.growWithUs },
  { label: "How We Hire", href: careersRoutes.howWeHire },
  { label: "Explore Opportunities", href: careersRoutes.exploreOpportunities },
  { label: "Equal Opportunities", href: careersRoutes.equalOpportunities },
] as const;

export const impactRoutes = {
  overview: "/impact",
  businessGrowth: "/impact/business-growth-entrepreneurship",
  careersSkills: "/impact/careers-skills",
  communityDevelopment: "/impact/community-development",
  environmentalSustainability: "/impact/environmental-sustainability",
  financialHealthWealthCreation: "/impact/financial-health-wealth-creation",
} as const;

export const impactNavChildren = [
  { label: "Business Growth & Entrepreneurship", path: impactRoutes.businessGrowth },
  { label: "Careers & Skills", path: impactRoutes.careersSkills },
  { label: "Community Development", path: impactRoutes.communityDevelopment },
  { label: "Environmental Sustainability", path: impactRoutes.environmentalSustainability },
  { label: "Financial Health & Wealth Creation", path: impactRoutes.financialHealthWealthCreation },
] as const;

export const impactQuickLinks = [
  { label: "Business Growth", href: impactRoutes.businessGrowth },
  { label: "Careers & Skills", href: impactRoutes.careersSkills },
  { label: "Community Development", href: impactRoutes.communityDevelopment },
  { label: "Sustainability", href: impactRoutes.environmentalSustainability },
  { label: "Financial Health", href: impactRoutes.financialHealthWealthCreation },
] as const;

export const newsroomRoutes = {
  overview: "/newsroom",
  pressReleases: "/newsroom/press-releases",
  stories: "/newsroom/stories",
  mediaContacts: "/newsroom/media-contacts",
} as const;

export const newsroomNavChildren = [
  { label: "Press Releases", path: newsroomRoutes.pressReleases },
  { label: "Stories", path: newsroomRoutes.stories },
  { label: "Media Contacts", path: newsroomRoutes.mediaContacts },
] as const;

export const newsroomQuickLinks = [
  { label: "Press Releases", href: newsroomRoutes.pressReleases },
  { label: "Stories", href: newsroomRoutes.stories },
  { label: "Media Contacts", href: newsroomRoutes.mediaContacts },
] as const;

export const investorRelationsRoutes = {
  overview: "/investor-relations",
  financialPerformance: "/investor-relations/financial-performance",
  reportsFilings: "/investor-relations/reports-filings",
  governance: "/investor-relations/governance",
  eventsCalendar: "/investor-relations/events-calendar",
  shareholderServices: "/investor-relations/shareholder-services",
} as const;

export const investorRelationsNavChildren = [
  {
    label: "Financial Performance",
    path: investorRelationsRoutes.financialPerformance,
  },
  { label: "Reports & Filings", path: investorRelationsRoutes.reportsFilings },
  { label: "Governance", path: investorRelationsRoutes.governance },
  { label: "Events & Calendar", path: investorRelationsRoutes.eventsCalendar },
  {
    label: "Shareholder Services",
    path: investorRelationsRoutes.shareholderServices,
  },
] as const;

export const investorRelationsQuickLinks = [
  { label: "Financial Performance", href: investorRelationsRoutes.financialPerformance },
  { label: "Reports & Filings", href: investorRelationsRoutes.reportsFilings },
  { label: "Governance", href: investorRelationsRoutes.governance },
  { label: "Events & Calendar", href: investorRelationsRoutes.eventsCalendar },
  { label: "Shareholder Services", href: investorRelationsRoutes.shareholderServices },
] as const;
