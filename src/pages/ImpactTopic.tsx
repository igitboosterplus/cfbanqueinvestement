import TopicPage from "@/components/TopicPage";
import { impactRoutes } from "@/config/siteRoutes";
import { impactTopics } from "@/content/impactContent";

const ImpactTopic = () => (
  <TopicPage overviewPath={impactRoutes.overview} topics={impactTopics} />
);

export default ImpactTopic;
