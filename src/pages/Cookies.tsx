import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const Cookies = () => (
  <PageTransition>
    <div className="min-h-screen">
      <SEO
        title="Cookies"
        description="How CF Banque Investment uses cookies and similar technologies on our website."
        path="/cookies"
      />
      <Navbar />

      <main className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <h1 className="font-serif text-3xl sm:text-4xl text-foreground font-bold mb-8">
            Cookie Policy
          </h1>
          <p className="text-muted-foreground text-sm uppercase tracking-wider mb-12">
            Last updated: January 2026
          </p>

          <div className="prose prose-gray max-w-none space-y-8 text-foreground/80 leading-relaxed">
            <section>
              <h2 className="font-serif text-xl text-foreground font-semibold mb-4">
                1. What Are Cookies
              </h2>
              <p>
                Cookies are small text files placed on your device when you
                visit a website. They help websites function efficiently, improve
                user experience and provide reporting information.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground font-semibold mb-4">
                2. How We Use Cookies
              </h2>
              <p>CF Banque Investment uses the following types of cookies:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>
                  <strong>Strictly necessary cookies:</strong> essential for the
                  website to function properly (e.g., session management,
                  security).
                </li>
                <li>
                  <strong>Analytical/performance cookies:</strong> help us
                  understand how visitors interact with the website by collecting
                  anonymised data on pages visited and navigation patterns.
                </li>
                <li>
                  <strong>Functionality cookies:</strong> remember your
                  preferences (such as language or region) to provide a more
                  personalised experience.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground font-semibold mb-4">
                3. Third-Party Cookies
              </h2>
              <p>
                Some cookies may be set by third-party services used on our
                website, such as analytics providers. These cookies are governed
                by the respective third party's privacy policy.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground font-semibold mb-4">
                4. Managing Cookies
              </h2>
              <p>
                You can control and manage cookies through your browser
                settings. Most browsers allow you to refuse, delete or block
                cookies. Please note that disabling certain cookies may affect
                the functionality of our website.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground font-semibold mb-4">
                5. Contact
              </h2>
              <p>
                For questions about our use of cookies, please contact us at{" "}
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

export default Cookies;
