import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEOHead from '../components/seo/SEOHead';
import { destinations } from '../data/destinations';
import { breadcrumbSchema } from '../utils/schema';
import { useLocalizer } from '../utils/localize';
import './Destinations.css';

export default function Destinations() {
  const { t } = useTranslation();
  const { getLocalized } = useLocalizer();

  return (
    <>
      <SEOHead
        title="Top Morocco Destinations 2026 | Travel Guide | Morocco Travelland"
        description="Explore the best destinations in Morocco. From the bustling medina of Marrakech to the Sahara Desert, Chefchaouen blue city, Fes, and coastal Essaouira."
        canonicalPath="/morocco-destinations"
        jsonLd={breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Destinations', url: '/morocco-destinations' },
        ])}
      />

      {/* Hero Banner */}
      <section className="page-hero">
        <img
          src="https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1920&q=75"
          alt="Top destinations in Morocco Sahara Desert"
          className="page-hero__bg"
          width="1920" height="400"
        />
        <div className="page-hero__overlay"></div>
        <div className="page-hero__content container">
          <h1 className="page-hero__title">{t('sections.destinations')}</h1>
          <p className="page-hero__subtitle">Discover Morocco's most magical cities, deserts, mountains and coastal escapes</p>
        </div>
      </section>

      {/* Grid of Destinations */}
      <section className="section destinations-grid-sec">
        <div className="container">
          <div className="grid grid-3">
            {destinations.map(dest => {
              const locName = getLocalized(dest, 'name');
              const locDesc = getLocalized(dest, 'description');
              const locBestTime = getLocalized(dest, 'bestTimeToVisit');
              return (
                <article key={dest.id} className="dest-page-card">
                  <div className="dest-page-card__image-wrap">
                    <img
                      src={dest.image}
                      alt={`Morocco Travelland - visit ${locName}`}
                      className="dest-page-card__image"
                      loading="lazy"
                      width="400"
                      height="300"
                    />
                  </div>
                  <div className="dest-page-card__body">
                    <h2 className="dest-page-card__title">{locName}</h2>
                    <p className="dest-page-card__desc">{locDesc}</p>
                    <div className="dest-page-card__divider"></div>
                    <div className="dest-page-card__footer">
                      <span className="dest-page-card__meta">⭐ Best: {locBestTime.split(' for ')[0]}</span>
                      <Link to={`/morocco-destinations/${dest.slug}`} className="btn btn--secondary btn--sm">
                        {t('destination.explore')}
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
