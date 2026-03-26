import AboutPageShell from "@/components/AboutPageShell";
import LeadershipSection from "@/components/LeadershipSection";
import { aboutSectionLinks } from "@/config/aboutRoutes";

const Leadership = () => (
  <AboutPageShell
    seoTitle="Leadership"
    seoDescription="Meet the board and executive leadership team guiding CF Banque Investment across global markets."
    path="/leadership"
    tag="About Us"
    title="Leadership"
    description="Our leadership team combines institutional experience, strategic vision and global market expertise to guide the firm’s long-term direction."
    image="/images/leadership-summit.jpg"
    anchors={aboutSectionLinks}
  >
    <LeadershipSection />
  </AboutPageShell>
);

export default Leadership;
