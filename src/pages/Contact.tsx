import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => (
  <PageTransition>
  <div className="min-h-screen">
    <Navbar />
    <PageHero
      tag="Contact"
      title="Get In Touch"
      description="Connect with our team to discuss your financial objectives and explore how we can support your strategic initiatives."
      image="/images/contact-hero.jpg"
    />

    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="font-serif text-3xl text-foreground font-bold mb-8">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-accent mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <p className="text-muted-foreground">contact@cfbanqueinvestment.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-accent mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Phone</p>
                  <p className="text-muted-foreground">+1 (000) 000-0000</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-accent mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Global Presence</p>
                  <p className="text-muted-foreground">Operating across 9 countries worldwide</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="bg-muted/50 border border-gray-200 p-8 lg:p-10">
              <h2 className="font-serif text-2xl text-foreground font-bold mb-2">Send Us a Message</h2>
              <p className="text-muted-foreground text-sm mb-6">We typically respond within 24 hours.</p>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">First Name</label>
                    <input type="text" placeholder="Jean" className="w-full border border-gray-300 px-4 py-3 bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent text-sm transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Last Name</label>
                    <input type="text" placeholder="Dupont" className="w-full border border-gray-300 px-4 py-3 bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent text-sm transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                  <input type="email" placeholder="you@company.com" className="w-full border border-gray-300 px-4 py-3 bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent text-sm transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Subject</label>
                  <input type="text" placeholder="How can we help?" className="w-full border border-gray-300 px-4 py-3 bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent text-sm transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                  <textarea rows={5} placeholder="Tell us about your project or inquiry..." className="w-full border border-gray-300 px-4 py-3 bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent text-sm resize-none transition-colors" />
                </div>
                <button type="submit" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white px-10 py-3.5 font-semibold text-sm uppercase tracking-wider transition-all duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
  </PageTransition>
);

export default Contact;
