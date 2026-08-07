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
        title={t('destination.metaTitle')}
        description={t('destination.metaDesc')}
        canonicalPath="/morocco-destinations"
        jsonLd={breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Destinations', url: '/morocco-destinations' },
        ])}
      />

      {/* Hero Banner */}
      <section className="page-hero">
        <img
          src="https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1200&auto=format&fit=crop&q=75"
          srcSet="
            https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=600&auto=format&fit=crop&q=75 600w,
            https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1200&auto=format&fit=crop&q=75 1200w,
            https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1920&auto=format&fit=crop&q=75 1920w
          "
          sizes="100vw"
          alt="Top destinations in Morocco Sahara Desert"
          className="page-hero__bg"
          width="1920" height="400"
        />
        <div className="page-hero__overlay"></div>
        <div className="page-hero__content container">
          <h1 className="page-hero__title">{t('sections.destinations')}</h1>
          <p className="page-hero__subtitle">{t('destination.subtitle')}</p>
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
                      alt={`Morocco Travel Land - visit ${locName}`}
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
