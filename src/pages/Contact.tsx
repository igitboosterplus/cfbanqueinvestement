import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Clock, Globe } from "lucide-react";
import { useState, type FormEvent } from "react";
import { contactSchema } from "@/lib/contactSchema";

const headquarters = {
  city: "London",
  country: "United Kingdom",
  flagCode: "gb",
  type: "Head Office",
  address: "25 Cabot Square, Canary Wharf, London E14 4QZ",
  phones: ["+44 20 3962 5751"],
  email: "customer@chartered.com",
};

const globalOffices = [
  {
    city: "New York",
    country: "USA",
    flagCode: "us",
    address: "One World Trade Center, 285 Fulton Street, New York, NY 10007",
    phones: ["+1 (212) 970-4100", "+1 (212) 661-5200"],
  },
  {
    city: "Mumbai",
    country: "India",
    flagCode: "in",
    address: "Maker Chambers IV, Nariman Point, Mumbai 400021",
    phones: ["+91 22 6632 7300", "+91 22 6638 3600"],
  },
  {
    city: "Panama City",
    country: "Panama",
    flagCode: "pa",
    address: "Ocean Business Plaza, Calle 50, Panama City",
    phones: ["+507 833-7600", "+507 395-2100"],
  },
  {
    city: "Hong Kong",
    country: "China",
    flagCode: "hk",
    address: "International Finance Centre, 8 Finance Street, Central",
    phones: ["+852 2521 8888", "+852 2842 7600"],
  },
  {
    city: "Singapore",
    country: "Singapore",
    flagCode: "sg",
    address: "Marina Bay Financial Centre Tower 1, 8 Marina Boulevard, 018981",
    phones: ["+65 6532 8800", "+65 6223 2200"],
  },
];

const africanOffices = [
  {
    city: "Dakar",
    country: "Senegal",
    flagCode: "sn",
    address: "Avenue Léopold Sédar Senghor, Plateau, Dakar",
    phones: ["+221 77 654 32 98"],
    email: "customer@chartered.com",
  },
  {
    city: "Douala",
    country: "Cameroon",
    flagCode: "cm",
    address: "Rue Koloko, Quartier Bonapriso, Douala",
    phones: ["+237 6 57 84 32 10"],
    email: "customer@chartered.com",
  },
  {
    city: "Brazzaville",
    country: "Congo",
    flagCode: "cg",
    address: "Avenue Amilcar Cabral, Centre-ville, Brazzaville",
    phones: ["+242 06 789 45 21"],
    email: "customer@chartered.com",
  },
  {
    city: "Libreville",
    country: "Gabon",
    flagCode: "ga",
    address: "Boulevard Triomphal, Centre-ville, Libreville",
    phones: ["+241 07 82 56 43"],
    email: "customer@chartered.com",
  },
];

function CountryFlag({ code, country }: { code: string; country: string }) {
  return (
    <img
      src={`https://flagcdn.com/w40/${code}.png`}
      srcSet={`https://flagcdn.com/w80/${code}.png 2x`}
      width="20"
      height="15"
      alt={`${country} flag`}
      className="inline-block rounded-sm object-cover"
      loading="lazy"
    />
  );
}

function OfficeCard({ office }: { office: { city: string; country: string; flagCode?: string; address: string; phones: string[]; email?: string } }) {
  return (
    <div className="bg-card p-5 border">
      <h4 className="font-serif text-foreground font-semibold mb-1 flex items-center gap-2">
        {office.flagCode && <CountryFlag code={office.flagCode} country={office.country} />}
        {office.city}, {office.country}
      </h4>
      <p className="text-muted-foreground text-sm leading-relaxed mb-2">{office.address}</p>
      {office.phones.map((p) => (
        <a key={p} href={`tel:${p.replace(/[\s()-]/g, "")}`} className="block text-muted-foreground text-sm hover:text-primary transition-colors">
          {p}
        </a>
      ))}
      {office.email && (
        <a href={`mailto:${office.email}`} className="block text-muted-foreground text-sm hover:text-primary transition-colors mt-1">
          {office.email}
        </a>
      )}
    </div>
  );
}

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);

  function sanitize(str: string): string {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#x27;");
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    const form = e.currentTarget;
    const raw = Object.fromEntries(new FormData(form));
    const parsed = contactSchema.safeParse(raw);

    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as string;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    const data = parsed.data;
    const safe = {
      firstName: sanitize(data.firstName.trim()),
      lastName: sanitize(data.lastName.trim()),
      email: sanitize(data.email.trim()),
      company: sanitize((data.company || "N/A").trim()),
      subject: sanitize(data.subject.trim()),
      message: sanitize(data.message.trim()),
    };

    setSending(true);
    try {
      const apiUrl = import.meta.env.VITE_CONTACT_API_URL;
      if (apiUrl) {
        const res = await fetch(apiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(safe),
        });
        if (!res.ok) throw new Error("API error");
      } else {
        // Fallback: open email client
        const body = [
          `Name: ${safe.firstName} ${safe.lastName}`,
          `Email: ${safe.email}`,
          `Company: ${safe.company}`,
          `Subject: ${safe.subject}`,
          "",
          safe.message,
        ].join("\r\n");
        window.location.href = `mailto:customer@chartered.com?subject=${encodeURIComponent(`Contact Form - ${safe.subject}`)}&body=${encodeURIComponent(body)}`;
      }
      setSubmitted(true);
      form.reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      setErrors({ form: "An error occurred. Please try again or email us directly." });
    } finally {
      setSending(false);
    }
  }

  return (
    <PageTransition>
    <div className="min-h-screen">
      <SEO title="Contact" description="Contact CF Banque Investment. Head office in London Canary Wharf with global offices in New York, Mumbai, Hong Kong, Singapore, Panama and across Africa." path="/contact" />
      <Navbar />
    <PageHero
      tag="Contact"
      title="Get In Touch"
      description="Connect with our team to discuss your financial objectives and explore how we can support your strategic initiatives."
      image="/images/contact-hero.jpg"
      anchors={[
        { label: "Head Office", href: "#head-office" },
        { label: "Global Offices", href: "#global-offices" },
        { label: "Africa Offices", href: "#african-offices" },
      ]}
    />

      {/* HQ + Form */}
      <section id="head-office" className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-serif text-3xl text-foreground font-bold mb-8 flex items-center gap-3">
                <CountryFlag code={headquarters.flagCode} country={headquarters.country} /> Head Office
              </h2>
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-accent mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">CFBANQUE INVESTMENT PLC</p>
                    <p className="text-muted-foreground">{headquarters.address}</p>
                    <p className="text-muted-foreground">{headquarters.country}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-accent mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <a href={`tel:${headquarters.phones[0].replace(/\s/g, "")}`} className="text-muted-foreground hover:text-primary transition-colors">
                      {headquarters.phones[0]}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-accent mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <a href={`mailto:${headquarters.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                      {headquarters.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-accent mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Business Hours</p>
                    <p className="text-muted-foreground">Monday – Friday, 9:00 AM – 6:00 PM GMT</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="bg-muted/50 border border-border p-8 lg:p-10">
                <h2 className="font-serif text-2xl text-foreground font-bold mb-2">Send Us a Message</h2>
                <p className="text-muted-foreground text-sm mb-6">We typically respond within 24 business hours.</p>
                {submitted && (
                  <div className="mb-6 bg-green-50 border border-green-200 text-green-800 p-4 text-sm">
                    Your message has been sent. Thank you for reaching out.
                  </div>
                )}
                {errors.form && (
                  <div className="mb-6 bg-red-50 border border-red-200 text-red-800 p-4 text-sm">
                    {errors.form}
                  </div>
                )}
                <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-1.5">First Name <span className="text-destructive">*</span></label>
                      <input id="firstName" name="firstName" type="text" required maxLength={100} placeholder="Jean" className="w-full border border-border px-4 py-3 bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent text-sm transition-colors" />
                      {errors.firstName && <p className="text-destructive text-xs mt-1">{errors.firstName}</p>}
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-1.5">Last Name <span className="text-destructive">*</span></label>
                      <input id="lastName" name="lastName" type="text" required maxLength={100} placeholder="Dupont" className="w-full border border-border px-4 py-3 bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent text-sm transition-colors" />
                      {errors.lastName && <p className="text-destructive text-xs mt-1">{errors.lastName}</p>}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email <span className="text-destructive">*</span></label>
                    <input id="email" name="email" type="email" required maxLength={254} placeholder="you@company.com" className="w-full border border-border px-4 py-3 bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent text-sm transition-colors" />
                    {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-1.5">Company / Organization</label>
                    <input id="company" name="company" type="text" maxLength={200} placeholder="Your organization" className="w-full border border-border px-4 py-3 bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent text-sm transition-colors" />
                    {errors.company && <p className="text-destructive text-xs mt-1">{errors.company}</p>}
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1.5">Subject <span className="text-destructive">*</span></label>
                    <select id="subject" name="subject" required className="w-full border border-border px-4 py-3 bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent text-sm transition-colors">
                      <option value="">Select a topic</option>
                      <option value="Investment Banking">Investment Banking</option>
                      <option value="Asset Management">Asset Management</option>
                      <option value="Wealth Management">Wealth Management</option>
                      <option value="Careers">Careers</option>
                      <option value="Media Inquiry">Media Inquiry</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.subject && <p className="text-destructive text-xs mt-1">{errors.subject}</p>}
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Message <span className="text-destructive">*</span></label>
                    <textarea id="message" name="message" rows={5} required maxLength={5000} placeholder="Tell us about your project or inquiry..." className="w-full border border-border px-4 py-3 bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent text-sm resize-none transition-colors" />
                    {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
                  </div>
                  <button type="submit" disabled={sending} className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-10 py-3.5 font-semibold text-sm tracking-wider transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                    {sending ? "Sending…" : "Send Message"}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section id="global-offices" className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <div className="flex items-center gap-3 mb-3">
              <Globe className="w-5 h-5 text-accent" />
              <span className="text-accent font-sans text-sm font-semibold tracking-[0.2em] uppercase">Worldwide</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-bold">Global Offices</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {globalOffices.map((office, i) => (
              <motion.div key={office.city} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <OfficeCard office={office} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* African Offices */}
      <section id="african-offices" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <span className="text-accent font-sans text-sm font-semibold tracking-[0.2em] uppercase">Regional Presence</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-bold mt-3">Africa Offices</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {africanOffices.map((office, i) => (
              <motion.div key={office.city} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <OfficeCard office={office} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
    </PageTransition>
  );
};

export default Contact;
