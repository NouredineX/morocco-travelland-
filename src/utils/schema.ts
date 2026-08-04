import { siteConfig } from '../data/siteConfig';
import type { Tour } from '../types';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Marrakech',
      addressCountry: 'MA',
    },
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.youtube,
      siteConfig.social.tripadvisor,
    ],
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: 'Best Morocco travel and private tours',
    publisher: { '@id': `${siteConfig.url}/#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url}/?s={search_term_string}`,
      },
      'query-input': {
        '@type': 'PropertyValueSpecification',
        valueRequired: true,
        valueName: 'search_term_string',
      },
    },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };
}

export function tourSchema(tour: Tour) {
  const canonical = `${siteConfig.url}/morocco-tours/${tour.slug}/`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      organizationSchema(),
      {
        '@type': 'TouristTrip',
        '@id': `${canonical}#TouristTrip`,
        name: tour.title,
        description: tour.description,
        url: canonical,
        image: tour.image ? [tour.image] : [],
        provider: { '@id': `${siteConfig.url}/#organization` },
        offers: {
          '@type': 'Offer',
          url: canonical,
          price: tour.price.toString(),
          priceCurrency: tour.currency,
          availability: 'https://schema.org/InStock',
          seller: { '@id': `${siteConfig.url}/#organization` },
          ...(tour.pricePerPerson && { priceSpecification: { '@type': 'UnitPriceSpecification', unitText: 'per person' } }),
        },
        touristType: tour.vip ? 'VIP luxury travelers' : 'Private tour travelers',
        tripOrigin: {
          '@type': 'Place',
          name: tour.departureCity,
        },
        ...(tour.itinerary.length > 0 && {
          itinerary: {
            '@type': 'ItemList',
            itemListElement: tour.itinerary.map((day, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              item: {
                '@type': 'TouristAttraction',
                name: day.title,
              },
            })),
          },
        }),
      },
      {
        '@type': 'Product',
        '@id': `${canonical}#product`,
        name: tour.title,
        description: tour.description,
        image: tour.image ? [tour.image] : [],
        url: canonical,
        brand: { '@id': `${siteConfig.url}/#organization` },
        offers: {
          '@type': 'Offer',
          url: canonical,
          price: tour.price.toString(),
          priceCurrency: tour.currency,
          availability: 'https://schema.org/InStock',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: tour.rating.toString(),
          reviewCount: tour.reviewCount.toString(),
          bestRating: '5',
          worstRating: '1',
        },
      },
      breadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Tours', url: '/morocco-tours/' },
        { name: tour.shortTitle, url: `/morocco-tours/${tour.slug}/` },
      ]),
    ],
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  if (faqs.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
