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

function cleanDescription(desc: string): string {
  if (!desc) return desc;
  return desc
    // Remove "From $1,400/person" or "From $900/person" or "From $ 1,400 per person"
    .replace(/(?:starting\s+)?from\s+[$€£¥]?\s*\d+[,.\s]*\d*\s*[$€£¥]?(?:\s*(?:\/|a|per|for)\s*(?:person|personne|persona))?\.?/gi, '')
    // Remove "À partir de 1 400$/personne"
    .replace(/à\s+partir\s+de\s+\d+[,.\s]*\d*\s*[$€£¥]?(?:\s*(?:\/|a|par)\s*(?:person|personne|persona))?\.?/gi, '')
    // Remove "Desde 1.400$/persona"
    .replace(/desde\s+\d+[,.\s]*\d*\s*[$€£¥]?(?:\s*(?:\/|a|por)\s*(?:person|personne|persona))?\.?/gi, '')
    // Remove "Da $ 1.400 a persona"
    .replace(/da\s+[$€£¥]?\s*\d+[,.\s]*\d*\s*[$€£¥]?(?:\s*(?:\/|a|per)\s*(?:person|personne|persona))?\.?/gi, '')
    // Remove "Best prices guaranteed."
    .replace(/best\s+prices\s+guaranteed\.?/gi, '')
    // Clean up extra spaces
    .replace(/\s+/g, ' ')
    .trim();
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
  const fullTitle = title.includes('Morocco') ? title : `${title} | Morocco Travel Land`;
  const cleanedDescription = cleanDescription(description);

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={cleanedDescription} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      {!noIndex && <meta name="robots" content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />}
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={cleanedDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteConfig.name} />
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={cleanedDescription} />
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
