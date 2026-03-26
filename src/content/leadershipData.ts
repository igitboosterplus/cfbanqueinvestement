export interface LeadershipMember {
  slug: string;
  name: string;
  title: string;
  shortBio: string;
  photo?: string;
  initials: string;
  subtitle?: string;
  education: { institution: string; degree: string }[];
  experience: { role: string; organisation: string; description: string }[];
  currentRole: string;
  vision?: string[];
  expertise: string[];
}

export const executives: LeadershipMember[] = [
  {
    slug: "laurent-bien-legbane",
    name: "Laurent Bien Legbane, PhD",
    title: "Global Chairman",
    subtitle: "Chairman, Chartered Financial Investment",
    shortBio: "International financial executive specialising in structured finance, strategic advisory, and cross-border capital mobilisation across emerging markets.",
    photo: "/leadership/laurent-bien-legbane.jpeg",
    initials: "LBL",
    currentRole: "As Global Chairman of CFBANQUE INVESTMENT, he provides overarching strategic leadership and governance oversight across the Group's activities. He defines the institution's long-term vision, drives its international expansion, and ensures alignment with global financial standards and best practices. In parallel, he serves as Chairman of Chartered Financial Investment, the Group's dedicated investment and advisory platform, overseeing the development and execution of strategic initiatives related to capital mobilisation, corporate finance, and cross-border transactions.",
    education: [
      { institution: "Université Paris 1 Panthéon-Sorbonne", degree: "PhD in Finance, Economics & Global Market Dynamics" },
      { institution: "ESSEC Douala", degree: "Master's in Finance" },
      { institution: "HEC Montréal", degree: "MBA — Strategic Management, Governance & Executive Leadership" },
      { institution: "American University, Washington D.C.", degree: "Financial Engineering — Financial Modelling & Complex Instruments" },
    ],
    experience: [
      {
        role: "Vice President — Emerging Markets Investments",
        organisation: "Goldman Sachs",
        description: "Involved in structuring investment opportunities and supporting capital deployment strategies across high-growth markets.",
      },
      {
        role: "Associate Director — Risk, Francophone Region",
        organisation: "McKinsey & Company",
        description: "Contributed to strategic advisory engagements focused on risk management, organisational transformation, and institutional development for both public and private sector clients.",
      },
    ],
    vision: [
      "Establishment of robust governance frameworks and accountability standards",
      "Application of advanced financial engineering tailored to emerging market dynamics",
      "Commitment to transparency and alignment with international standards",
      "Development of sustainable investment strategies designed to generate long-term economic impact",
    ],
    expertise: [
      "Structured Finance & Capital Mobilisation",
      "Strategic Advisory & Governance",
      "Cross-Border Transactions",
      "Investment Structuring",
      "Risk Management",
      "Emerging Markets — Africa & Global",
    ],
  },
  {
    slug: "chersty-mabiala-bitsindou",
    name: "Chersty Mabiala Bitsindou",
    title: "Executive President",
    shortBio: "Over ten years of experience in leadership, governance, and strategic development across commercial, marketing, and communications functions.",
    photo: "/leadership/chersty-mabiala-bitsindou.jpeg",
    initials: "CMB",
    currentRole: "As Executive President of CFBANQUE INVESTMENT, she provides strategic leadership and institutional direction, ensuring alignment between the company's long-term vision and its operational execution. Her role focuses on governance, strategic positioning, and the development of high-level partnerships, working closely with the Group's leadership and international stakeholders.",
    education: [],
    experience: [
      {
        role: "Senior Leadership Roles",
        organisation: "Various organisations",
        description: "Held senior roles responsible for overseeing cross-functional teams, developing market expansion strategies, and strengthening corporate visibility at both regional and international levels.",
      },
      {
        role: "Business Development & Marketing Strategy",
        organisation: "Various sectors",
        description: "Led multiple high-impact projects focused on market penetration, client acquisition, and the structuring of commercial frameworks in competitive sectors. Played a key role in shaping organisational narratives and enhancing brand credibility.",
      },
    ],
    expertise: [
      "Strategic Governance & Institutional Direction",
      "Brand Positioning & Stakeholder Engagement",
      "Market Expansion & Client Acquisition",
      "Corporate Communications",
      "High-Level Partnership Development",
      "Organisational Structuring",
    ],
  },
];

export const vicePresidents: LeadershipMember[] = [
  {
    slug: "jonathan-reed-whitmore",
    name: "Jonathan Reed Whitmore",
    title: "VP Global Investment Banking & Advisory",
    shortBio: "Leading figure in global investment banking. Former Managing Director at Goldman Sachs with 15+ years leading multi-billion dollar transactions.",
    photo: "/leadership/Jonathan Reed Whitmore vice president global investment banking and advisory 1.png",
    initials: "JRW",
    currentRole: "At CFBANQUE INVESTMENT, he oversees all global advisory, capital raising and transaction structuring activities.",
    education: [
      { institution: "London School of Economics", degree: "Graduate Degree in Economics & Finance" },
    ],
    experience: [
      {
        role: "M&A Analyst",
        organisation: "Barclays",
        description: "Developed strong expertise in mid-market transactions across Europe.",
      },
      {
        role: "Managing Director — Investment Banking Division",
        organisation: "Goldman Sachs",
        description: "Over a period exceeding 15 years, led major transactions across the infrastructure, energy and telecommunications sectors, representing cumulative deal values in excess of several tens of billions of US dollars. Distinguished by extensive exposure to emerging markets, particularly across Africa and Asia, structuring complex financings involving debt, equity and hybrid instruments.",
      },
    ],
    expertise: [
      "Mergers & Acquisitions",
      "Capital Raising & Transaction Structuring",
      "Debt, Equity & Hybrid Instruments",
      "Multi-Jurisdictional Transactions",
      "Infrastructure, Energy & Telecom Finance",
      "Emerging Markets — Africa & Asia",
    ],
  },
  {
    slug: "michael-andrew-carter",
    name: "Michael Andrew Carter",
    title: "VP Private Equity & Asset Management",
    shortBio: "Columbia University graduate. Former positions at JPMorgan Chase and BlackRock. Manages multi-billion-dollar portfolios with focus on risk-adjusted performance.",
    photo: "/leadership/Michael Andrew Carter vice president private equity and asset management 1.jpeg",
    initials: "MAC",
    currentRole: "At CFBANQUE INVESTMENT, he leads asset management, fund structuring and strategic capital allocation.",
    education: [
      { institution: "Columbia University", degree: "Graduate Degree in Finance" },
    ],
    experience: [
      {
        role: "Asset Management Division",
        organisation: "JPMorgan Chase",
        description: "Began his career within institutional asset management, building foundational expertise in portfolio construction and investment strategy.",
      },
      {
        role: "Alternative Investments Specialist",
        organisation: "BlackRock",
        description: "Specialised in alternative investments, developing deep expertise in structuring private equity funds, sovereign-backed investment vehicles and institutional portfolios. Led multiple investment platforms across infrastructure, natural resources and emerging technologies. Pivotal role in capital mobilisation from pension funds, sovereign wealth funds, development finance institutions and family offices.",
      },
    ],
    expertise: [
      "Private Equity Fund Structuring",
      "Sovereign-Backed Investment Vehicles",
      "Capital Mobilisation — Institutional Investors",
      "Infrastructure & Natural Resources",
      "Risk-Adjusted Performance Management",
      "Strategic Capital Allocation",
    ],
  },
  {
    slug: "adrian-tan-wei-jian",
    name: "Adrian Tan Wei Jian",
    title: "VP Structured Finance & Capital Markets",
    shortBio: "Graduate of the National University of Singapore. Former roles at DBS Bank and HSBC Global Banking & Markets.",
    photo: "/leadership/Adrian Than Wei Jian vice president structure finance and capital markets 1.jpeg",
    initials: "ATW",
    currentRole: "At CFBANQUE INVESTMENT, he leads structured finance and global capital markets activities.",
    education: [
      { institution: "National University of Singapore", degree: "Graduate Degree in Finance" },
    ],
    experience: [
      {
        role: "Structured Finance",
        organisation: "DBS Bank",
        description: "Began his career in banking and financial structuring, building expertise in project and trade finance.",
      },
      {
        role: "Global Banking & Markets Division",
        organisation: "HSBC",
        description: "Quickly specialised in complex financial structuring, including project finance, trade finance and international bond issuances. Involved in transactions requiring coordination between banking syndicates, export credit agencies and multilateral institutions. Contributed to sovereign and corporate debt issuances across multiple currencies.",
      },
    ],
    expertise: [
      "Project Finance & Trade Finance",
      "International Bond Issuances",
      "Sovereign & Corporate Debt",
      "Banking Syndicate Coordination",
      "Export Credit & Multilateral Institutions",
      "Regulatory Framework Optimisation",
    ],
  },
  {
    slug: "faisal-al-mansoori",
    name: "Faisal Al Mansoori",
    title: "VP Sovereign Wealth & Strategic Investments",
    shortBio: "INSEAD graduate. Built his career within leading sovereign wealth institutions, notably Mubadala Investment Company.",
    photo: "/leadership/Faisal Al Mansoori vice president sovereign wealth and strategic investments 1.jpeg",
    initials: "FAM",
    currentRole: "At CFBANQUE INVESTMENT, he oversees sovereign relationships and large-scale strategic investments.",
    education: [
      { institution: "INSEAD", degree: "Graduate Degree — Business & Finance" },
    ],
    experience: [
      {
        role: "Investment Management",
        organisation: "Mubadala Investment Company",
        description: "Actively involved in managing global investment portfolios spanning infrastructure, energy, technology and real estate. Responsibilities included identifying long-term strategic opportunities, negotiating institutional partnerships and structuring high-value investments.",
      },
    ],
    expertise: [
      "Sovereign Wealth Fund Management",
      "Investment Governance",
      "Macroeconomic Risk Assessment",
      "Co-Investment Structuring",
      "Infrastructure, Energy & Technology",
      "Strategic Institutional Partnerships",
    ],
  },
  {
    slug: "li-wei-zhang",
    name: "Li Wei Zhang",
    title: "VP Corporate Finance & Cross-Border Transactions",
    shortBio: "University of Hong Kong graduate. Former role at Bank of China. Specialist in international M&A and cross-border structuring.",
    photo: "/leadership/Li Wei Zhang vice president corporate finance  and cross-border transactions 1.jpeg",
    initials: "LWZ",
    currentRole: "At CFBANQUE INVESTMENT, he leads corporate finance and international transaction execution.",
    education: [
      { institution: "University of Hong Kong", degree: "Graduate Degree in Finance" },
    ],
    experience: [
      {
        role: "Corporate Finance",
        organisation: "Bank of China",
        description: "Began his career in one of the world's largest banking institutions, building deep expertise in cross-border financial operations.",
      },
      {
        role: "International Financial Advisory",
        organisation: "International Financial Institutions",
        description: "Advised numerous corporations on international expansion strategies, including mergers and acquisitions, joint ventures and financial restructurings. Particularly recognised for navigating complex regulatory environments and structuring transactions across multiple jurisdictions. Expertise includes financing linked to major international economic initiatives and large-scale infrastructure developments.",
      },
    ],
    expertise: [
      "Cross-Border Mergers & Acquisitions",
      "Joint Ventures & Financial Restructurings",
      "Multi-Jurisdictional Regulatory Navigation",
      "International Infrastructure Financing",
      "Corporate Finance Strategy",
      "Asia-Africa Financial Corridors",
    ],
  },
  {
    slug: "david-alexander-thompson",
    name: "David Alexander Thompson",
    title: "VP Infrastructure & Project Finance",
    shortBio: "University of Sydney graduate. Built his career at Macquarie Group, a global leader in infrastructure finance.",
    photo: "/leadership/David Alexander Thompson vice president infrastructure and projet finance 1.jpeg",
    initials: "DAT",
    currentRole: "At CFBANQUE INVESTMENT, he heads infrastructure investments and project finance activities.",
    education: [
      { institution: "University of Sydney", degree: "Graduate Degree in Finance & Economics" },
    ],
    experience: [
      {
        role: "Infrastructure Finance",
        organisation: "Macquarie Group",
        description: "Structured and financed large-scale projects across energy, transport and natural resources, often within public-private partnership frameworks and complex financial arrangements. Expertise includes financial modelling, operational risk management and negotiations with governments and international financial institutions.",
      },
    ],
    expertise: [
      "Large-Scale Project Finance",
      "Public-Private Partnerships (PPP)",
      "Energy, Transport & Natural Resources",
      "Financial Modelling",
      "Operational Risk Management",
      "Government & Institutional Negotiations",
    ],
  },
  {
    slug: "mamadou-boubacar-diop",
    name: "Mamadou Boubacar Diop",
    title: "VP Risk, Compliance & Regulatory Affairs",
    shortBio: "HEC Paris graduate. Former senior positions within the BCEAO. Expert in regulatory compliance and financial governance.",
    photo: "/leadership/Mamadou Boubacar Diop vice president risk, compliance and regulatory affairs 1.jpeg",
    initials: "MBD",
    currentRole: "At CFBANQUE INVESTMENT, he ensures the robustness of governance frameworks and full regulatory compliance across all operations.",
    education: [
      { institution: "HEC Paris", degree: "Graduate Degree in Business & Finance" },
    ],
    experience: [
      {
        role: "Senior Regulatory Positions",
        organisation: "BCEAO (Central Bank of West African States)",
        description: "Contributed to the implementation of banking regulatory frameworks. Extensive expertise in risk management, regulatory compliance and financial governance. Supported institutions in aligning with international standards, particularly in anti-money laundering, prudential regulation and internal control systems.",
      },
    ],
    expertise: [
      "Risk Management & Assessment",
      "Regulatory Compliance — AML/KYC",
      "Prudential Regulation",
      "Internal Control Systems",
      "Financial Governance",
      "Banking Regulatory Frameworks",
    ],
  },
  {
    slug: "daniel-laurent-mercier",
    name: "Daniel Laurent Mercier",
    title: "VP Financial Strategy & Treasury",
    shortBio: "Université Paris-Dauphine graduate. Former senior roles at BNP Paribas. Expert in treasury and strategic financial planning.",
    photo: "/leadership/Daniel laurent Mercier vice president financial strategy and treasury 1.jpeg",
    initials: "DLM",
    currentRole: "At CFBANQUE INVESTMENT, he is responsible for financial strategy and global treasury operations.",
    education: [
      { institution: "Université Paris-Dauphine", degree: "Graduate Degree in Finance" },
    ],
    experience: [
      {
        role: "Treasury & Financial Strategy",
        organisation: "BNP Paribas",
        description: "Led treasury and financial strategy functions, overseeing liquidity management, foreign exchange risk and global funding structures within one of Europe's leading banking institutions.",
      },
    ],
    expertise: [
      "Treasury Management",
      "Liquidity & Foreign Exchange Risk",
      "Asset-Liability Management",
      "Strategic Financial Planning",
      "Global Funding Structures",
      "Capital Resource Optimisation",
    ],
  },
];

export const allMembers: LeadershipMember[] = [...executives, ...vicePresidents];
