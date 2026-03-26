import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const Privacy = () => (
  <PageTransition>
    <div className="min-h-screen">
      <SEO
        title="Privacy & Security"
        description="Learn how CF Banque Investment collects, uses and protects your personal information."
        path="/privacy"
      />
      <Navbar />

      <main className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <h1 className="font-serif text-3xl sm:text-4xl text-foreground font-bold mb-8">
            Privacy &amp; Security
          </h1>
          <p className="text-muted-foreground text-sm uppercase tracking-wider mb-12">
            Last updated: January 2026
          </p>

          <div className="prose prose-gray max-w-none space-y-8 text-foreground/80 leading-relaxed">
            <section>
              <h2 className="font-serif text-xl text-foreground font-semibold mb-4">
                1. Introduction
              </h2>
              <p>
                CF Banque Investment and its affiliates ("we", "us", "our") are
                committed to protecting the privacy and security of your
                personal information. This Privacy Policy explains how we
                collect, use, disclose and safeguard your data when you visit
                our website or interact with our services.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground font-semibold mb-4">
                2. Information We Collect
              </h2>
              <p>We may collect the following categories of personal data:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>
                  <strong>Identity data:</strong> name, title, date of birth,
                  nationality.
                </li>
                <li>
                  <strong>Contact data:</strong> email address, telephone
                  number, postal address.
                </li>
                <li>
                  <strong>Financial data:</strong> bank account details,
                  investment history and portfolio information (where applicable
                  to our advisory relationship).
                </li>
                <li>
                  <strong>Technical data:</strong> IP address, browser type,
                  device information, pages visited and time spent on our
                  website.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground font-semibold mb-4">
                3. How We Use Your Information
              </h2>
              <p>Your personal data is processed for the following purposes:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Providing and managing our financial services.</li>
                <li>
                  Responding to enquiries and processing contact form
                  submissions.
                </li>
                <li>
                  Complying with legal, regulatory and anti-money laundering
                  obligations.
                </li>
                <li>
                  Improving our website, services and client experience.
                </li>
                <li>
                  Communicating institutional updates and market insights (with
                  your consent).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground font-semibold mb-4">
                4. Data Sharing &amp; International Transfers
              </h2>
              <p>
                We may share your information with our group entities,
                regulatory authorities, professional advisors and service
                providers who assist in delivering our services. Any
                international transfers of data are conducted in compliance with
                applicable data protection regulations, including appropriate
                safeguards such as standard contractual clauses.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground font-semibold mb-4">
                5. Data Security
              </h2>
              <p>
                We employ industry-standard technical and organisational
                measures to protect personal data against unauthorised access,
                alteration, disclosure or destruction. These include encryption,
                access controls, secure data storage and regular security
                assessments.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground font-semibold mb-4">
                6. Your Rights
              </h2>
              <p>
                Depending on your jurisdiction, you may have the right to
                access, correct, delete, restrict processing of, or obtain a
                portable copy of your personal data. To exercise these rights,
                please contact us at{" "}
                <a
                  href="mailto:privacy@cfbanqueinvestment.com"
                  className="text-accent hover:underline"
                >
                  privacy@cfbanqueinvestment.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground font-semibold mb-4">
                7. Contact
              </h2>
              <p>
                For privacy-related enquiries, please write to: CF Banque
                Investment, Data Protection Officer, 25 Cabot Square, Canary
                Wharf, London E14 4QA, United Kingdom — or email{" "}
                <a
                  href="mailto:privacy@cfbanqueinvestment.com"
                  className="text-accent hover:underline"
                >
                  privacy@cfbanqueinvestment.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  </PageTransition>
);

export default Privacy;
