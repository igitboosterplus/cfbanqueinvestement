import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { executives, vicePresidents, type LeadershipMember } from "@/content/leadershipData";

function MemberCard({ member, large }: { member: LeadershipMember; large?: boolean }) {
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
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{member.shortBio}</p>
        <Link
          to={`/leadership/${member.slug}`}
          className="inline-flex items-center gap-1.5 text-accent hover:text-accent/80 text-sm font-semibold transition-colors"
        >
          See Full Profile <ArrowRight className="w-3.5 h-3.5" />
        </Link>
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
