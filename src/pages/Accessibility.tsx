import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const Accessibility = () => (
  <PageTransition>
    <div className="min-h-screen">
      <SEO
        title="Accessibility"
        description="CF Banque Investment's commitment to digital accessibility — ensuring our website is usable by everyone."
        path="/accessibility"
      />
      <Navbar />

      <main className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <h1 className="font-serif text-3xl sm:text-4xl text-foreground font-bold mb-8">
            Accessibility
          </h1>
          <p className="text-muted-foreground text-sm uppercase tracking-wider mb-12">
            Last updated: January 2026
          </p>

          <div className="prose prose-gray max-w-none space-y-8 text-foreground/80 leading-relaxed">
            <section>
              <h2 className="font-serif text-xl text-foreground font-semibold mb-4">
                Our Commitment
              </h2>
              <p>
                CF Banque Investment is committed to ensuring that our website
                is accessible to all users, including people with disabilities.
                We strive to conform to the Web Content Accessibility Guidelines
                (WCAG) 2.1 Level AA standards.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground font-semibold mb-4">
                Accessibility Features
              </h2>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>
                  <strong>Keyboard navigation:</strong> all interactive elements
                  are accessible via keyboard.
                </li>
                <li>
                  <strong>Skip-to-content link:</strong> allows keyboard users
                  to bypass navigation and go directly to the main content.
                </li>
                <li>
                  <strong>ARIA landmarks and labels:</strong> semantic HTML and
                  ARIA attributes provide meaningful context for assistive
                  technologies.
                </li>
                <li>
                  <strong>Colour contrast:</strong> text and interactive
                  elements meet minimum contrast ratios.
                </li>
                <li>
                  <strong>Reduced motion:</strong> animations are minimised for
                  users who prefer reduced motion.
                </li>
                <li>
                  <strong>Responsive design:</strong> the website adapts to
                  various screen sizes and devices.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground font-semibold mb-4">
                Feedback
              </h2>
              <p>
                If you encounter any accessibility barriers on our website, we
                want to hear from you. Please contact us at{" "}
                <a
                  href="mailto:accessibility@cfbanqueinvestment.com"
                  className="text-accent hover:underline"
                >
                  accessibility@cfbanqueinvestment.com
                </a>{" "}
                and we will make every reasonable effort to address the issue.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground font-semibold mb-4">
                Ongoing Efforts
              </h2>
              <p>
                Accessibility is an ongoing effort. We regularly review and
                update our website to improve usability and compliance. Our team
                undergoes periodic training on accessibility best practices and
                we incorporate accessibility testing into our development
                process.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  </PageTransition>
);

export default Accessibility;
