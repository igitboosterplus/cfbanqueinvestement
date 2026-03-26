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
    bio: "International financial executive specialising in structured finance, strategic advisory, and cross-border capital mobilisation. As Global Chairman of CFBANQUE INVESTMENT, he provides overarching strategic leadership and governance oversight across the Group's activities. He also serves as Chairman of Chartered Financial Investment. Former Vice President within the Emerging Markets Investments division of Goldman Sachs and Associate Director — Risk for the Francophone region at McKinsey & Company. Holds a PhD from Université Paris 1 Panthéon-Sorbonne, Master's in Finance from ESSEC Douala, MBA from HEC Montréal, and Financial Engineering qualification from American University.",
    photo: "/leadership/laurent-bien-legbane.jpeg",
    initials: "LBL",
  },
  {
    name: "Chersty Mabiala Bitsindou",
    title: "Executive President",
    bio: "Accomplished executive with over ten years of experience in leadership, governance, and strategic development across commercial, marketing, and communications functions. Strong track record in driving organisational growth, brand positioning, and stakeholder engagement. As Executive President, she provides strategic leadership and institutional direction, ensuring alignment between the company's long-term vision and its operational execution. Her role focuses on governance, strategic positioning, and the development of high-level partnerships.",
    photo: "/leadership/chersty-mabiala-bitsindou.jpeg",
    initials: "CMB",
  },
];

const vicePresidents: Member[] = [
  {
    name: "Jonathan Reed Whitmore",
    title: "VP Global Investment Banking & Advisory",
    bio: "Widely recognised as a leading figure in global investment banking and strategic advisory. Graduate of the London School of Economics. Former M&A analyst at Barclays, then Managing Director at Goldman Sachs (15+ years), leading major transactions across infrastructure, energy and telecommunications sectors worth tens of billions. Extensive exposure to emerging markets across Africa and Asia. At CFBANQUE INVESTMENT, he oversees all global advisory, capital raising and transaction structuring activities.",
    photo: "/leadership/Jonathan Reed Whitmore vice president global investment banking and advisory 1.png",
    initials: "JRW",
  },
  {
    name: "Michael Andrew Carter",
    title: "VP Private Equity & Asset Management",
    bio: "Graduate of Columbia University. Former positions at JPMorgan Chase Asset Management and BlackRock, specialising in alternative investments. Deep expertise in structuring private equity funds, sovereign-backed investment vehicles and institutional portfolios. Pivotal role in capital mobilisation from pension funds, sovereign wealth funds, development finance institutions and family offices. At CFBANQUE INVESTMENT, he leads asset management, fund structuring and strategic capital allocation.",
    photo: "/leadership/Michael Andrew Carter vice president private equity and asset management 1.jpeg",
    initials: "MAC",
  },
  {
    name: "Adrian Tan Wei Jian",
    title: "VP Structured Finance & Capital Markets",
    bio: "Graduate of the National University of Singapore. Former roles at DBS Bank and HSBC Global Banking & Markets division. Specialised in complex financial structuring including project finance, trade finance and international bond issuances. Contributed to sovereign and corporate debt issuances across multiple currencies. At CFBANQUE INVESTMENT, he leads structured finance and global capital markets activities.",
    photo: "/leadership/Adrian Than Wei Jian vice president structure finance and capital markets 1.jpeg",
    initials: "ATW",
  },
  {
    name: "Faisal Al Mansoori",
    title: "VP Sovereign Wealth & Strategic Investments",
    bio: "Graduate of INSEAD. Built his career within leading sovereign wealth institutions, notably Mubadala Investment Company. Actively involved in managing global investment portfolios spanning infrastructure, energy, technology and real estate. Deep expertise in investment governance, macroeconomic risk assessment and co-investment structuring. At CFBANQUE INVESTMENT, he oversees sovereign relationships and large-scale strategic investments.",
    photo: "/leadership/Faisal Al Mansoori vice president sovereign wealth and strategic investments 1.jpeg",
    initials: "FAM",
  },
  {
    name: "Li Wei Zhang",
    title: "VP Corporate Finance & Cross-Border Transactions",
    bio: "Graduate of the University of Hong Kong. Former role at Bank of China before moving into international financial institutions specialising in cross-border transactions. Advised numerous corporations on international expansion strategies including mergers and acquisitions, joint ventures and financial restructurings. Expertise includes financing linked to major international economic initiatives. At CFBANQUE INVESTMENT, he leads corporate finance and international transaction execution.",
    photo: "/leadership/Li Wei Zhang vice president corporate finance  and cross-border transactions 1.jpeg",
    initials: "LWZ",
  },
  {
    name: "David Alexander Thompson",
    title: "VP Infrastructure & Project Finance",
    bio: "Graduate of the University of Sydney. Built his career at Macquarie Group, a global leader in infrastructure finance. Structured and financed large-scale projects across energy, transport and natural resources, often within public-private partnership frameworks. Expertise includes financial modelling, operational risk management and negotiations with governments and international financial institutions. At CFBANQUE INVESTMENT, he heads infrastructure investments and project finance activities.",
    photo: "/leadership/David Alexander Thompson vice president infrastructure and projet finance 1.jpeg",
    initials: "DAT",
  },
  {
    name: "Mamadou Boubacar Diop",
    title: "VP Risk, Compliance & Regulatory Affairs",
    bio: "Graduate of HEC Paris. Held senior positions within the BCEAO, contributing to the implementation of banking regulatory frameworks. Extensive expertise in risk management, regulatory compliance and financial governance. Supported institutions in aligning with international standards, particularly in anti-money laundering, prudential regulation and internal control systems. At CFBANQUE INVESTMENT, he ensures the robustness of governance frameworks and full regulatory compliance across all operations.",
    photo: "/leadership/Mamadou Boubacar Diop vice president risk, compliance and regulatory affairs 1.jpeg",
    initials: "MBD",
  },
  {
    name: "Daniel Laurent Mercier",
    title: "VP Financial Strategy & Treasury",
    bio: "Graduate of Université Paris-Dauphine. Held senior roles within major European financial institutions, including BNP Paribas. Led treasury and financial strategy functions, overseeing liquidity management, foreign exchange risk and global funding structures. Expertise spans asset-liability management, strategic financial planning and optimisation of capital resources at an international level. At CFBANQUE INVESTMENT, he is responsible for financial strategy and global treasury operations.",
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
