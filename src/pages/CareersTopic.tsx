import TopicPage from "@/components/TopicPage";
import { careersRoutes } from "@/config/siteRoutes";
import { careerTopics } from "@/content/careersContent";

const CareersTopic = () => (
  <TopicPage overviewPath={careersRoutes.overview} topics={careerTopics} />
);

export default CareersTopic;
