import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import SEO from "@/components/SEO";

const LETTER_2026 = `Dear Partners, Investors, Government Leaders and Institutional Stakeholders,

We are living through a defining moment in global economic history.

Financial balances are shifting.
Capital flows are being reallocated.
New growth centers are emerging.
Markets once considered peripheral are becoming structurally central to the global economic architecture.

It is within this context that CFBANQUE INVESTMENT affirms its mission.

We founded this institution with a clear ambition:
to build an international financial platform capable of structuring, mobilizing and directing capital toward the most strategic economic transformations of our time.

Our vocation is not merely financial.
It is institutional.
It is strategic.
It is transformational.

We believe that:

  • Capital must be structured with discipline.
  • Risk must be understood, quantified and managed.
  • Growth must be sustainable and inclusive.
  • Emerging markets deserve access to financial sophistication equal to global standards.

CFBANQUE INVESTMENT positions itself as a strategic bridge between:

  • International investors seeking structured and resilient opportunities
  • Governments committed to long-term economic transformation
  • Ambitious corporations pursuing expansion
  • Financial institutions seeking credible execution partners

We operate where complexity demands expertise, discipline and vision.

The credibility of a financial institution is never declared — it is demonstrated.

It is demonstrated through:

  • Analytical depth
  • Structuring sophistication
  • Risk management discipline
  • Execution consistency
  • Governance integrity

Africa and emerging markets represent one of the most significant structural growth opportunities of the 21st century.

Yet this potential requires:

  • Patient capital
  • Advanced financial engineering
  • Regulatory intelligence
  • Balanced and responsible partnerships

CFBANQUE INVESTMENT has deliberately chosen to play an active role in this transformation.

We are building a long-term institution.
A disciplined institution.
An institution capable of operating at the intersection of global capital markets and local economic realities.

Our ambition is clear:

To position CFBANQUE INVESTMENT as a leading pan-African investment bank with international reach, recognized for its expertise, credibility and ability to mobilize transformative capital.

We move forward with method.
We move forward with discipline.
We move forward with responsibility.

To our partners and investors, I extend my sincere appreciation for your trust.

To our teams, I reaffirm that our collective standards must always match the scale of our ambition.

The story of CFBANQUE INVESTMENT is only beginning.
We have chosen to write it with vision, discipline and determination.


Laurent Bien LEGBANE
Group Chairman`;

function handleDownloadTxt() {
  const header = `════════════════════════════════════════════════════════════════
                   CFBANQUE INVESTMENT
             2026 ANNUAL CHAIRMAN'S LETTER
════════════════════════════════════════════════════════════════

`;
  const footer = `

════════════════════════════════════════════════════════════════
  www.cfbanque.com  |  +44 20 3962 5751  |  customer@cfbanque.com
  © 2026 CFBANQUE INVESTMENT. All rights reserved.
════════════════════════════════════════════════════════════════`;
  const blob = new Blob([header + LETTER_2026 + footer], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "CFBANQUE_2026_Annual_Chairmans_Letter.txt";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function handleDownloadPdf() {
  const link = document.createElement("a");
  link.href = "/documents/CFBANQUE_2026_Annual_Chairmans_Letter.pdf";
  link.download = "CFBANQUE_2026_Annual_Chairmans_Letter.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export default function ChairmanLetter() {
  return (
    <PageTransition>
      <SEO
        title="2026 Annual Chairman's Letter"
        description="2026 Annual Chairman's Letter from Laurent Bien Legbane, Group Chairman of CFBANQUE INVESTMENT, to partners, investors, government leaders and institutional stakeholders."
        path="/chairman-letter"
        keywords="chairman letter, annual letter, CFBANQUE, Laurent Bien Legbane, 2026"
      />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-primary pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.03),transparent_60%)]" />
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-accent font-sans text-sm font-semibold tracking-[0.2em] uppercase">
                Institutional Communication
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl text-white font-bold mt-4 mb-6">
                2026 Annual Chairman's Letter
              </h1>
              <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
                Each year, the Group Chairman addresses a formal letter to all partners,
                investors, government leaders and institutional stakeholders — outlining the
                institution's mission, strategic vision and ambition.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <button
                  onClick={handleDownloadPdf}
                  className="inline-flex items-center gap-2 bg-accent hover:bg-orange-light text-white text-sm font-semibold px-6 py-3 transition-colors duration-200"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </button>
                <button
                  onClick={handleDownloadTxt}
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold px-6 py-3 transition-colors duration-200"
                >
                  <Download className="w-4 h-4" />
                  Download TXT
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Chairman profile */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-8 items-center md:items-start bg-card border p-8"
            >
              <div className="w-32 h-32 shrink-0 overflow-hidden">
                <img
                  src="/leadership/laurent-bien-legbane.jpeg"
                  alt="Laurent Bien Legbane — Group Chairman"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <h2 className="font-serif text-2xl text-card-foreground font-bold">
                  Laurent Bien LEGBANE
                </h2>
                <p className="text-accent text-sm font-semibold mt-1 mb-4">Group Chairman</p>
                <p className="text-muted-foreground leading-relaxed">
                  International financial executive specialising in structured finance, strategic advisory,
                  and cross-border capital mobilisation. Former Vice President within the Emerging Markets
                  Investments division of Goldman Sachs and Associate Director — Risk for the Francophone
                  region at McKinsey &amp; Company. Holds a PhD from Université Paris 1 Panthéon-Sorbonne,
                  Master's in Finance from ESSEC Douala, MBA from HEC Montréal, and Financial Engineering
                  qualification from American University.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Full letter content */}
        <section className="py-20 bg-muted">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-8">
                <FileText className="w-6 h-6 text-accent" />
                <h2 className="font-serif text-2xl text-foreground font-bold">
                  Full Letter
                </h2>
              </div>

              <article className="bg-card border p-8 sm:p-12 space-y-6 text-card-foreground leading-relaxed">
                {/* Salutation */}
                <p className="font-serif text-lg font-semibold">
                  Dear Partners, Investors, Government Leaders and Institutional Stakeholders,
                </p>

                <p>We are living through a defining moment in global economic history.</p>

                <div className="pl-6 border-l-2 border-accent/30 space-y-1 text-muted-foreground italic">
                  <p>Financial balances are shifting.</p>
                  <p>Capital flows are being reallocated.</p>
                  <p>New growth centers are emerging.</p>
                  <p>Markets once considered peripheral are becoming structurally central to the global economic architecture.</p>
                </div>

                <p>It is within this context that <strong>CFBANQUE INVESTMENT</strong> affirms its mission.</p>

                <p>
                  We founded this institution with a clear ambition:<br />
                  to build an international financial platform capable of structuring, mobilizing and directing
                  capital toward the most strategic economic transformations of our time.
                </p>

                <div className="pl-6 border-l-2 border-accent/30 space-y-1 text-muted-foreground italic">
                  <p>Our vocation is not merely financial.</p>
                  <p>It is institutional.</p>
                  <p>It is strategic.</p>
                  <p>It is transformational.</p>
                </div>

                <p>We believe that:</p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Capital must be structured with discipline.</li>
                  <li>Risk must be understood, quantified and managed.</li>
                  <li>Growth must be sustainable and inclusive.</li>
                  <li>Emerging markets deserve access to financial sophistication equal to global standards.</li>
                </ul>

                <p><strong>CFBANQUE INVESTMENT</strong> positions itself as a strategic bridge between:</p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>International investors seeking structured and resilient opportunities</li>
                  <li>Governments committed to long-term economic transformation</li>
                  <li>Ambitious corporations pursuing expansion</li>
                  <li>Financial institutions seeking credible execution partners</li>
                </ul>

                {/* Page 2 */}
                <div className="border-t border-border my-8" />

                <p>We operate where complexity demands expertise, discipline and vision.</p>

                <p>The credibility of a financial institution is never declared — it is demonstrated.</p>

                <p>It is demonstrated through:</p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Analytical depth</li>
                  <li>Structuring sophistication</li>
                  <li>Risk management discipline</li>
                  <li>Execution consistency</li>
                  <li>Governance integrity</li>
                </ul>

                <p>
                  Africa and emerging markets represent one of the most significant structural
                  growth opportunities of the 21st century.
                </p>

                <p>Yet this potential requires:</p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Patient capital</li>
                  <li>Advanced financial engineering</li>
                  <li>Regulatory intelligence</li>
                  <li>Balanced and responsible partnerships</li>
                </ul>

                <p><strong>CFBANQUE INVESTMENT</strong> has deliberately chosen to play an active role in this transformation.</p>

                <div className="pl-6 border-l-2 border-accent/30 space-y-1 text-muted-foreground italic">
                  <p>We are building a long-term institution.</p>
                  <p>A disciplined institution.</p>
                  <p>An institution capable of operating at the intersection of global capital markets and local economic realities.</p>
                </div>

                <p className="font-semibold">Our ambition is clear:</p>
                <p className="bg-primary/5 p-4 border-l-4 border-accent text-foreground font-medium">
                  To position CFBANQUE INVESTMENT as a leading pan-African investment bank
                  with international reach, recognized for its expertise, credibility and ability to
                  mobilize transformative capital.
                </p>

                {/* Page 3 */}
                <div className="border-t border-border my-8" />

                <div className="pl-6 border-l-2 border-accent/30 space-y-1 text-muted-foreground italic">
                  <p>We move forward with method.</p>
                  <p>We move forward with discipline.</p>
                  <p>We move forward with responsibility.</p>
                </div>

                <p>To our partners and investors, I extend my sincere appreciation for your trust.</p>

                <p>
                  To our teams, I reaffirm that our collective standards must always match the scale of our ambition.
                </p>

                <p>
                  The story of <strong>CFBANQUE INVESTMENT</strong> is only beginning.<br />
                  We have chosen to write it with vision, discipline and determination.
                </p>

                {/* Signature */}
                <div className="pt-8 mt-8 border-t border-border">
                  <p className="font-serif text-xl font-bold text-foreground">Laurent Bien LEGBANE</p>
                  <p className="text-accent font-semibold mt-1">Group Chairman</p>
                  <p className="text-muted-foreground text-sm mt-3">
                    www.cfbanque.com &nbsp;|&nbsp; +44 20 3962 5751 &nbsp;|&nbsp; customer@cfbanque.com
                  </p>
                </div>
              </article>

              {/* Download buttons */}
              <div className="flex flex-wrap gap-4 mt-8 justify-center">
                <button
                  onClick={handleDownloadPdf}
                  className="inline-flex items-center gap-2 bg-accent hover:bg-orange-light text-white text-sm font-semibold px-8 py-3 transition-colors duration-200"
                >
                  <Download className="w-4 h-4" />
                  Download PDF Version
                </button>
                <button
                  onClick={handleDownloadTxt}
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white text-sm font-semibold px-8 py-3 transition-colors duration-200"
                >
                  <Download className="w-4 h-4" />
                  Download TXT Version
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
}
