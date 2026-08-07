import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../../data/siteConfig';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: string;
  noIndex?: boolean;
  jsonLd?: object | object[];
}

export default function SEOHead({
  title,
  description,
  canonicalPath = '',
  ogImage = '',
  ogType = 'website',
  noIndex = false,
  jsonLd,
}: SEOHeadProps) {
  const url = `${siteConfig.url}${canonicalPath}`;
  const fullTitle = title.includes('Morocco') ? title : `${title} | Morocco`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      {!noIndex && <meta name="robots" content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />}
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteConfig.name} />
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}
