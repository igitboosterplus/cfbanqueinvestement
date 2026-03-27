import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Briefcase, GraduationCap, Target, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import SEO from "@/components/SEO";
import { allMembers } from "@/content/leadershipData";

export default function LeadershipProfile() {
  const { slug } = useParams<{ slug: string }>();
  const member = allMembers.find((m) => m.slug === slug);

  if (!member) return <Navigate to="/leadership" replace />;

  return (
    <PageTransition>
      <SEO
        title={`${member.name} — ${member.title}`}
        description={`${member.name}, ${member.title} at CFBANQUE INVESTMENT. ${member.shortBio}`}
        path={`/leadership/${member.slug}`}
      />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-primary pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.03),transparent_60%)]" />
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
            <Link
              to="/leadership"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Leadership
            </Link>
            <div className="flex flex-col md:flex-row gap-10 items-start">
              {/* Photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-48 h-48 md:w-56 md:h-56 shrink-0 overflow-hidden border-2 border-white/10"
              >
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full bg-white/5 flex items-center justify-center">
                    <span className="font-serif text-4xl text-white/30 font-bold">{member.initials}</span>
                  </div>
                )}
              </motion.div>

              {/* Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex-1"
              >
                <h1 className="font-serif text-3xl sm:text-4xl text-white font-bold">{member.name}</h1>
                <p className="text-accent text-lg font-semibold mt-2">{member.title}</p>
                {member.subtitle && (
                  <p className="text-white/50 text-sm mt-1">{member.subtitle}</p>
                )}
                <p className="text-white/60 leading-relaxed mt-6 max-w-2xl">{member.shortBio}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Current Role */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-5 h-5 text-accent" />
                <h2 className="font-serif text-2xl text-foreground font-bold">Current Role</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">{member.currentRole}</p>
            </motion.div>
          </div>
        </section>

        {/* Professional Experience */}
        {member.experience.length > 0 && (
          <section className="py-16 bg-muted">
            <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <Award className="w-5 h-5 text-accent" />
                  <h2 className="font-serif text-2xl text-foreground font-bold">Professional Background</h2>
                </div>
                <div className="space-y-6">
                  {member.experience.map((exp, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-card border p-6 relative"
                    >
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent" />
                      <h3 className="font-semibold text-card-foreground">{exp.role}</h3>
                      <p className="text-accent text-sm font-medium mt-1">{exp.organisation}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed mt-3">{exp.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Education */}
        {member.education.length > 0 && (
          <section className="py-16 bg-background">
            <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <GraduationCap className="w-5 h-5 text-accent" />
                  <h2 className="font-serif text-2xl text-foreground font-bold">Academic Background</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {member.education.map((edu, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-card border p-5"
                    >
                      <p className="font-semibold text-card-foreground text-sm">{edu.institution}</p>
                      <p className="text-muted-foreground text-sm mt-1">{edu.degree}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Areas of Expertise */}
        <section className="py-16 bg-muted">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-8">
                <Target className="w-5 h-5 text-accent" />
                <h2 className="font-serif text-2xl text-foreground font-bold">Areas of Expertise</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {member.expertise.map((skill) => (
                  <span
                    key={skill}
                    className="bg-primary/5 border border-primary/10 text-foreground text-sm font-medium px-4 py-2"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Strategic Vision — only for executives */}
        {member.vision && member.vision.length > 0 && (
          <section className="py-16 bg-background">
            <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-serif text-2xl text-foreground font-bold mb-8">Leadership & Strategic Vision</h2>
                <ul className="space-y-4">
                  {member.vision.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-16 bg-primary">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <p className="text-white/40 text-sm mb-4">CFBANQUE INVESTMENT — Board of Directors</p>
            <Link
              to="/leadership"
              className="inline-flex items-center gap-2 bg-accent hover:bg-orange-light text-white text-sm font-semibold px-8 py-3 transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              View All Leadership
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
}
