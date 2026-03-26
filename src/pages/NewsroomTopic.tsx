import TopicPage from "@/components/TopicPage";
import { newsroomRoutes } from "@/config/siteRoutes";
import { newsroomTopics } from "@/content/newsroomContent";

const NewsroomTopic = () => (
  <TopicPage overviewPath={newsroomRoutes.overview} topics={newsroomTopics} />
);

export default NewsroomTopic;
