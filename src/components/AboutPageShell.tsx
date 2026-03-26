import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import PageTransition from "@/components/PageTransition";

type PageAnchor = {
  label: string;
  href: string;
};

interface AboutPageShellProps {
  seoTitle: string;
  seoDescription: string;
  path: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  anchors?: ReadonlyArray<PageAnchor>;
  children: ReactNode;
}

const AboutPageShell = ({
  seoTitle,
  seoDescription,
  path,
  tag,
  title,
  description,
  image,
  anchors,
  children,
}: AboutPageShellProps) => (
  <PageTransition>
    <div className="min-h-screen">
      <SEO title={seoTitle} description={seoDescription} path={path} />
      <Navbar />
      <PageHero tag={tag} title={title} description={description} image={image} anchors={anchors} />
      {children}
      <CTABanner />
      <Footer />
    </div>
  </PageTransition>
);

export default AboutPageShell;
