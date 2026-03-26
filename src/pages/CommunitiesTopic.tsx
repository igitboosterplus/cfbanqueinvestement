import TopicPage from "@/components/TopicPage";
import { communitiesRoutes } from "@/config/siteRoutes";
import { communityTopics } from "@/content/communitiesContent";

const CommunitiesTopic = () => (
  <TopicPage overviewPath={communitiesRoutes.overview} topics={communityTopics} />
);

export default CommunitiesTopic;
