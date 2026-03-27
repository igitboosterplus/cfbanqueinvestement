import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
  keywords?: string;
}

const SITE = "CF Banque Investment";
const BASE_URL = import.meta.env.VITE_BASE_URL || "https://cfbanque.digitboosterplus.com";

export default function SEO({
  title,
  description,
  path = "/",
  image,
  type = "website",
  noindex = false,
  keywords,
}: SEOProps) {
  const fullTitle = path === "/" ? `${SITE} | Global Financial Institution` : `${title} | ${SITE}`;
  const url = `${BASE_URL}${path}`;
  const ogImage = image ? `${BASE_URL}${image}` : `${BASE_URL}/og-image.jpg`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_GB" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
