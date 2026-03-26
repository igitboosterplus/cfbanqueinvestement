import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const LegalNotices = () => (
  <PageTransition>
    <div className="min-h-screen">
      <SEO
        title="Legal Notices"
        description="Regulatory disclosures, legal entity information and important notices about CF Banque Investment."
        path="/legal-notices"
      />
      <Navbar />

      <main className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <h1 className="font-serif text-3xl sm:text-4xl text-foreground font-bold mb-8">
            Legal Notices
          </h1>
          <p className="text-muted-foreground text-sm uppercase tracking-wider mb-12">
            Last updated: January 2026
          </p>

          <div className="prose prose-gray max-w-none space-y-8 text-foreground/80 leading-relaxed">
            <section>
              <h2 className="font-serif text-xl text-foreground font-semibold mb-4">
                Legal Entity
              </h2>
              <p>
                CF Banque Investment is a trading name of CF Banque Investment
                Ltd, a company incorporated and registered in England and Wales.
                Registered office: 25 Cabot Square, Canary Wharf, London E14
                4QA, United Kingdom.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground font-semibold mb-4">
                Regulatory Information
              </h2>
              <p>
                CF Banque Investment Ltd is authorised and regulated by the
                Financial Conduct Authority (FCA). Our activities are subject to
                the regulatory framework applicable to investment firms
                operating in the United Kingdom and across the jurisdictions in
                which we are licensed.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground font-semibold mb-4">
                Disclaimer
              </h2>
              <p>
                The information contained on this website is provided for
                general informational purposes only. While we endeavour to keep
                the content accurate and up to date, we make no representations
                or warranties of any kind, express or implied, about the
                completeness, accuracy, reliability or suitability of the
                information. Any reliance you place on such information is
                strictly at your own risk.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground font-semibold mb-4">
                Forward-Looking Statements
              </h2>
              <p>
                Certain information on this website may contain forward-looking
                statements, including expectations, projections and assumptions
                about future performance. These statements are based on current
                assumptions and are subject to risks and uncertainties that
                could cause actual results to differ materially.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground font-semibold mb-4">
                Anti-Money Laundering
              </h2>
              <p>
                CF Banque Investment is committed to preventing money laundering
                and terrorist financing. We comply with all applicable AML/CFT
                regulations and industry standards, including customer due
                diligence, transaction monitoring and reporting obligations.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-foreground font-semibold mb-4">
                Contact
              </h2>
              <p>
                For legal enquiries, please contact:{" "}
                <a
                  href="mailto:legal@cfbanqueinvestment.com"
                  className="text-accent hover:underline"
                >
                  legal@cfbanqueinvestment.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  </PageTransition>
);

export default LegalNotices;
