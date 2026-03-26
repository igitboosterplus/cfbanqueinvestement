import { ReactNode } from "react";
import { Navigate, useParams } from "react-router-dom";
import AboutPageShell from "@/components/AboutPageShell";

export interface TopicPageConfig {
  seoTitle: string;
  seoDescription: string;
  path: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  anchors?: ReadonlyArray<{ label: string; href: string }>;
  content: ReactNode;
}

interface TopicPageProps {
  overviewPath: string;
  topics: Record<string, TopicPageConfig>;
}

const TopicPage = ({ overviewPath, topics }: TopicPageProps) => {
  const { slug } = useParams();
  const topic = slug ? topics[slug] : undefined;

  if (!topic) {
    return <Navigate to={overviewPath} replace />;
  }

  return (
    <AboutPageShell
      seoTitle={topic.seoTitle}
      seoDescription={topic.seoDescription}
      path={topic.path}
      tag={topic.tag}
      title={topic.title}
      description={topic.description}
      image={topic.image}
      anchors={topic.anchors}
    >
      {topic.content}
    </AboutPageShell>
  );
};

export default TopicPage;
