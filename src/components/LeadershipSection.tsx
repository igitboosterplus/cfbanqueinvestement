import { motion } from "framer-motion";

interface Member {
  name: string;
  title: string;
  bio: string;
  photo?: string;
  initials: string;
}

const executives: Member[] = [
  {
    name: "Laurent Bien Legbane, PhD",
    title: "Global Chairman",
    bio: "Former Vice President at Goldman Sachs (Emerging Markets Division) and Associate Director at McKinsey & Company (Risk Practice, Francophone Africa). Holds a PhD from Paris 1 Panthéon-Sorbonne, Master's from ESSEC Douala, MBA from HEC Montréal, and Financial Engineering credentials from American University Washington D.C.",
    photo: "/leadership/laurent-bien-legbane.jpeg",
    initials: "LBL",
  },
  {
    name: "Chersty Mabiala Bitsindou",
    title: "Executive President",
    bio: "Over ten years of experience in leadership, governance and strategic development. Expertise in commercial, marketing and communications strategy. Leads governance, strategic positioning and high-level institutional partnerships.",
    photo: "/leadership/chersty-mabiala-bitsindou.jpeg",
    initials: "CMB",
  },
];

const vicePresidents: Member[] = [
  {
    name: "Jonathan Reed Whitmore",
    title: "VP Global Investment Banking & Advisory",
    bio: "Graduate of the London School of Economics. Former M&A analyst at Barclays and Managing Director at Goldman Sachs (15+ years). Led infrastructure, energy and telecom transactions worth tens of billions.",
    photo: "/leadership/Jonathan Reed Whitmore vice president global investment banking and advisory 1.png",
    initials: "JRW",
  },
  {
    name: "Michael Andrew Carter",
    title: "VP Private Equity & Asset Management",
    bio: "Columbia University graduate. Former positions at JPMorgan Chase Asset Management and BlackRock. Manages multi-billion-dollar private equity funds, sovereign vehicles and institutional portfolios.",
    photo: "/leadership/Michael Andrew Carter vice president private equity and asset management 1.jpeg",
    initials: "MAC",
  },
  {
    name: "Adrian Tan Wei Jian",
    title: "VP Structured Finance & Capital Markets",
    bio: "National University of Singapore graduate. Former roles at DBS Bank and HSBC Global Banking & Markets. Specialist in project finance, trade finance and bond issuances.",
    photo: "/leadership/Adrian Than Wei Jian vice president structure finance and capital markets 1.jpeg",
    initials: "ATW",
  },
  {
    name: "Faisal Al Mansoori",
    title: "VP Sovereign Wealth & Strategic Investments",
    bio: "INSEAD graduate. Former position at Mubadala Investment Company. Expertise in infrastructure, energy, technology and real estate portfolio management.",
    photo: "/leadership/Faisal Al Mansoori vice president sovereign wealth and strategic investments 1.jpeg",
    initials: "FAM",
  },
  {
    name: "Li Wei Zhang",
    title: "VP Corporate Finance & Cross-Border Transactions",
    bio: "University of Hong Kong graduate. Former role at Bank of China. Specialist in mergers & acquisitions, joint ventures and financial restructurings across international markets.",
    photo: "/leadership/Li Wei Zhang vice president corporate finance  and cross-border transactions 1.jpeg",
    initials: "LWZ",
  },
  {
    name: "David Alexander Thompson",
    title: "VP Infrastructure & Project Finance",
    bio: "University of Sydney graduate. Former position at Macquarie Group. Expertise in energy, transport and natural resources financing, including public-private partnership frameworks.",
    photo: "/leadership/David Alexander Thompson vice president infrastructure and projet finance 1.jpeg",
    initials: "DAT",
  },
  {
    name: "Mamadou Boubacar Diop",
    title: "VP Risk, Compliance & Regulatory Affairs",
    bio: "HEC Paris graduate. Former role at BCEAO (Central Bank of West African States). Specialist in anti-money laundering, prudential regulation and internal controls.",
    photo: "/leadership/Mamadou Boubacar Diop vice president risk, compliance and regulatory affairs 1.jpeg",
    initials: "MBD",
  },
  {
    name: "Daniel Laurent Mercier",
    title: "VP Financial Strategy & Treasury",
    bio: "Université Paris-Dauphine graduate. Former position at BNP Paribas. Expertise in treasury management, foreign exchange risk, asset-liability management and strategic financial planning.",
    photo: "/leadership/Daniel laurent Mercier vice president financial strategy and treasury 1.jpeg",
    initials: "DLM",
  },
];

function MemberCard({ member, large }: { member: Member; large?: boolean }) {
  return (
    <div className={`bg-card border overflow-hidden ${large ? "flex flex-col sm:flex-row" : ""}`}>
      <div
        className={`relative bg-primary/5 flex items-center justify-center ${
          large ? "sm:w-56 h-64 sm:h-auto shrink-0" : "h-64"
        }`}
      >
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
        ) : (
          <span className="font-serif text-3xl text-primary/40 font-bold select-none">
            {member.initials}
          </span>
        )}
      </div>
      <div className={`p-6 ${large ? "flex-1" : ""}`}>
        <h3 className="font-serif text-lg text-card-foreground font-semibold">{member.name}</h3>
        <p className="text-accent text-sm font-medium mt-1 mb-3">{member.title}</p>
        <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
      </div>
    </div>
  );
}

export default function LeadershipSection() {
  return (
    <section id="leadership" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-sans text-sm font-semibold tracking-[0.2em] uppercase">
            Governance
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-bold mt-3">
            Board of Directors
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
            Our leadership team brings decades of experience from the world's foremost financial
            institutions, driving strategic vision and institutional excellence.
          </p>
        </motion.div>

        {/* Executive Leadership */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {executives.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <MemberCard member={m} large />
            </motion.div>
          ))}
        </div>

        {/* Vice Presidents */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {vicePresidents.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <MemberCard member={m} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
