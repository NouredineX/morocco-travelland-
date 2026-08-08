import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import type { Tour } from '../../types';
import { useLocalizer } from '../../utils/localize';
import './TourCard.css';

interface TourCardProps {
  tour: Tour;
}

export default function TourCard({ tour }: TourCardProps) {
  const { t } = useTranslation();
  const { getLocalized } = useLocalizer();

  const locTitle = getLocalized(tour, 'title');
  const locShortTitle = getLocalized(tour, 'shortTitle');

  return (
    <article className="tour-card" id={`tour-${tour.id}`}>
      <Link to={`/morocco-tours/${tour.slug}`} className="tour-card__link" aria-label={`View details of ${locTitle}`}>
        <div className="tour-card__image-wrap">
          <img
            src={tour.image}
            alt={`Morocco Travel Land ${locShortTitle} - private tour`}
            className="tour-card__image"
            loading="lazy"
            width="400"
            height="267"
          />
          <div className="tour-card__badges">
            {tour.featured && <span className="badge badge--featured">{t('tour.featured')}</span>}
            {tour.vip && <span className="badge badge--accent">{t('tour.vip')}</span>}
          </div>
          <div className="tour-card__duration">
            {tour.duration} {t('tour.days')}
          </div>
        </div>

        <div className="tour-card__body">
          <h3 className="tour-card__title">{locShortTitle}</h3>

          <div className="tour-card__meta">
            <div className="rating">
              {Array.from({ length: 5 }, (_, i) => (
                <svg key={i} className="rating-star" viewBox="0 0 20 20" fill={i < Math.floor(tour.rating) ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
              <span className="rating-text">({tour.reviewCount})</span>
            </div>
          </div>

          <div className="tour-card__footer">
            <span className="tour-card__cta">{t('tour.viewDetails')} →</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
