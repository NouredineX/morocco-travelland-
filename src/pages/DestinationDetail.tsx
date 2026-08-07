import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEOHead from '../components/seo/SEOHead';
import TourCard from '../components/ui/TourCard';
import { destinations } from '../data/destinations';
import { tours } from '../data/tours';
import { breadcrumbSchema } from '../utils/schema';
import { useLocalizer } from '../utils/localize';
import './DestinationDetail.css';

export default function DestinationDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();
  const { getLocalized } = useLocalizer();

  const dest = destinations.find(d => d.slug === slug);

  if (!dest) {
    return (
      <div className="container text-center section" style={{ padding: 'var(--space-32) 0' }}>
        <h2>Destination Not Found</h2>
        <p>The destination you are looking for doesn't exist.</p>
        <Link to="/morocco-destinations" className="btn btn--primary">Browse All Destinations</Link>
      </div>
    );
  }

  // Get tours related to this destination
  const relatedTours = tours.filter(tour =>
    tour.destinations.some(dName => dName.toLowerCase() === dest.name.toLowerCase())
  );

  const locName = getLocalized(dest, 'name');
  const locTitle = getLocalized(dest, 'title');
  const locDesc = getLocalized(dest, 'description');
  const locHighlights = getLocalized(dest, 'highlights') as string[];
  const locAttractions = getLocalized(dest, 'topAttractions') as string[];
  const locBestTime = getLocalized(dest, 'bestTimeToVisit');

  return (
    <>
      <SEOHead
        title={dest.metaTitle}
        description={dest.metaDescription}
        canonicalPath={`/morocco-destinations/${dest.slug}`}
        ogImage={dest.image}
        jsonLd={breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Destinations', url: '/morocco-destinations' },
          { name: locName, url: `/morocco-destinations/${dest.slug}` },
        ])}
      />

      {/* Hero Banner */}
      <section className="dest-hero">
        <div className="dest-hero__bg">
          <img
            src={dest.image}
            alt={`Morocco Travel Land - ${locName} travel guide`}
            className="dest-hero__bg-image"
            width="1920" height="600"
          />
          <div className="dest-hero__overlay"></div>
        </div>
        <div className="dest-hero__content container">
          <h1 className="dest-hero__title">{locTitle}</h1>
          <p className="dest-hero__subtitle">{locDesc}</p>
        </div>
      </section>

      {/* Detail Content */}
      <section className="section dest-detail-content">
        <div className="container">
          <div className="dest-grid-layout">
            <div className="dest-main">
              {/* Highlights */}
              <div className="dest-section">
                <h2 className="dest-section__title">Why Visit {locName}</h2>
                <div className="divider text-left" style={{ margin: 'var(--space-2) 0 var(--space-6)' }}></div>
                <ul className="dest-highlights">
                  {locHighlights.map((h, i) => (
                    <li key={i} className="dest-highlights__item">
                      <span className="dest-highlights__icon">✦</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Attractions */}
              <div className="dest-section">
                <h2 className="dest-section__title">{t('destination.topAttractions')}</h2>
                <div className="divider text-left" style={{ margin: 'var(--space-2) 0 var(--space-6)' }}></div>
                <div className="attractions-grid">
                  {locAttractions.map((att, i) => (
                    <div key={i} className="attraction-card">
                      <span className="attraction-card__num">{i + 1}</span>
                      <h3 className="attraction-card__title">{att}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar info */}
            <aside className="dest-sidebar">
              <div className="info-card">
                <h3 className="info-card__title">Quick Facts</h3>
                <div className="info-card__divider"></div>
                <div className="info-card__item">
                  <strong>📍 Location:</strong>
                  <span>Morocco</span>
                </div>
                <div className="info-card__item">
                  <strong>☀️ {t('destination.bestTime')}:</strong>
                  <span>{locBestTime}</span>
                </div>
              </div>
            </aside>
          </div>

          {/* Related Tours */}
          {relatedTours.length > 0 && (
            <div className="related-tours-sec section">
              <h2 className="dest-section__title">{t('destination.relatedTours')} in {locName}</h2>
              <div className="divider text-left" style={{ margin: 'var(--space-2) 0 var(--space-8)' }}></div>
              <div className="grid grid-3">
                {relatedTours.slice(0, 6).map(tour => (
                  <TourCard key={tour.id} tour={tour} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
