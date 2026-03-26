import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const Terms = () => (
  <PageTransition>
    <div className="min-h-screen">
      <SEO
        title="Terms & Conditions"
        description="Terms and conditions governing the use of CF Banque Investment's website and services."
        path="/terms"
      />
      <Navbar />

      <main className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <h1 className="font-serif text-3xl sm:text-4xl text-foreground font-bold mb-8">
            Terms &amp; Conditions
          </h1>
          <p className="text-muted-foreground text-sm uppercase tracking-wider mb-12">
            Last updated: January 2026
          </p>

          <div className="prose prose-gray max-w-none space-y-8 text-foreground/80 leading-relaxed">
            <section>
              <h2 className="font-serif text-xl text-foreground font-semibold mb-4">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using the CF Banque Investment website
                ("Site"), you accept and agree to be bound by these Terms &amp;
                Conditions. If you do not agree with any part of these terms,
                you must not use the Site.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground font-semibold mb-4">
                2. Use of the Website
              </h2>
              <p>
                The information on this Site is provided for general
                informational purposes only and does not constitute financial,
                investment, legal or tax advice. It should not be relied upon as
                a basis for any investment decision. You use this Site at your
                own risk.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground font-semibold mb-4">
                3. Intellectual Property
              </h2>
              <p>
                All content on this Site — including text, graphics, logos,
                images, data compilations and software — is the property of CF
                Banque Investment or its licensors and is protected by
                international copyright, trademark and other intellectual
                property laws. You may not reproduce, distribute, modify or
                create derivative works from any content without prior written
                consent.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground font-semibold mb-4">
                4. No Investment Advice
              </h2>
              <p>
                Nothing on this Site constitutes an offer, solicitation or
                recommendation to buy, sell or hold any security, financial
                product or instrument. Investment decisions should be made based
                on independent professional advice tailored to your individual
                circumstances.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground font-semibold mb-4">
                5. Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by law, CF Banque Investment
                shall not be liable for any direct, indirect, incidental,
                consequential or special damages arising out of or in connection
                with the use of the Site, including but not limited to loss of
                data, revenue or profit.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground font-semibold mb-4">
                6. External Links
              </h2>
              <p>
                This Site may contain links to third-party websites. We do not
                control and are not responsible for the content, privacy
                practices or availability of such sites. Inclusion of any link
                does not imply endorsement.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground font-semibold mb-4">
                7. Governing Law
              </h2>
              <p>
                These terms are governed by and construed in accordance with the
                laws of England and Wales. Any disputes shall be subject to the
                exclusive jurisdiction of the courts of England and Wales.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground font-semibold mb-4">
                8. Contact
              </h2>
              <p>
                For questions about these terms, please contact us at{" "}
                <a
                  href="mailto:legal@cfbanqueinvestment.com"
                  className="text-accent hover:underline"
                >
                  legal@cfbanqueinvestment.com
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

export default Terms;
