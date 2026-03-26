import TopicPage from "@/components/TopicPage";
import { investorRelationsRoutes } from "@/config/siteRoutes";
import { investorRelationsTopics } from "@/content/investorRelationsContent";

const InvestorRelationsTopic = () => (
  <TopicPage
    overviewPath={investorRelationsRoutes.overview}
    topics={investorRelationsTopics}
  />
);

export default InvestorRelationsTopic;
