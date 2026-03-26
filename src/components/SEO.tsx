import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
}

const SITE = "CF Banque Investment";
const BASE_URL = import.meta.env.VITE_BASE_URL || "https://cfbanque.digitboosterplus.com";

export default function SEO({ title, description, path = "/" }: SEOProps) {
  const fullTitle = path === "/" ? `${SITE} | Global Financial Institution` : `${title} | ${SITE}`;
  const url = `${BASE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${BASE_URL}/og-image.jpg`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${BASE_URL}/og-image.jpg`} />
    </Helmet>
  );
}
