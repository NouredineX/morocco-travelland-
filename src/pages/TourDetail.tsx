import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEOHead from '../components/seo/SEOHead';
import BookingForm from '../components/ui/BookingForm';
import TourCard from '../components/ui/TourCard';
import { tours } from '../data/tours';
import { tourSchema } from '../utils/schema';
import { useLocalizer } from '../utils/localize';
import './TourDetail.css';
import './RouteAndModal.css';

// ── SVG Icon Components ─────────────────────────────────────────────────────
const IconMap = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
const IconClock = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);
const IconUsers = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
  </svg>
);
const IconStar = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);
const IconCalendar = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);
const IconShield = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
const IconCheck = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const IconRoute = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 000-7h-11a3.5 3.5 0 010-7H15"/><circle cx="18" cy="5" r="3"/>
  </svg>
);

// ── Build unique route from itinerary destinations ──────────────────────────
function buildRoute(itinerary: { day: number; destinations?: string[] }[], departureCity: string) {
  const seen = new Set<string>();
  const stops: string[] = [];
  seen.add(departureCity.toLowerCase());
  stops.push(departureCity);
  for (const day of itinerary) {
    for (const dest of day.destinations || []) {
      if (!seen.has(dest.toLowerCase())) {
        seen.add(dest.toLowerCase());
        stops.push(dest);
      }
    }
  }
  return stops;
}

export default function TourDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();
  const { getLocalized } = useLocalizer();
  const [modalOpen, setModalOpen] = useState(false);

  const tour = tours.find(t => t.slug === slug);

  if (!tour) {
    return (
      <div className="container text-center section" style={{ padding: 'var(--space-32) 0' }}>
        <h2>Tour Not Found</h2>
        <p>The tour package you are looking for doesn't exist.</p>
        <Link to="/morocco-tours" className="btn btn--primary">Browse All Tours</Link>
      </div>
    );
  }

  const relatedTours = tours
    .filter(t => t.id !== tour.id && (t.departureCity === tour.departureCity || t.category === tour.category))
    .slice(0, 3);

  const schema = tourSchema(tour);
  const locTitle = getLocalized(tour, 'title');
  const locDesc = getLocalized(tour, 'description');
  const locHighlights = getLocalized(tour, 'highlights') as string[];
  const locIncluded = getLocalized(tour, 'included') as string[];
  const locExcluded = getLocalized(tour, 'excluded') as string[];
  const routeStops = buildRoute(tour.itinerary, tour.departureCity);

  return (
    <>
      <SEOHead
        title={getLocalized(tour, 'metaTitle') || locTitle}
        description={getLocalized(tour, 'metaDescription') || locDesc}
        canonicalPath={`/morocco-tours/${tour.slug}`}
        ogImage={tour.image}
        jsonLd={schema}
      />

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="tour-hero">
        <div className="tour-hero__bg">
          <img src={tour.image} alt={`Morocco Travel Land ${locTitle}`} className="tour-hero__bg-image" width="1920" height="600" />
          <div className="tour-hero__overlay"></div>
        </div>
        <div className="tour-hero__content container">
          <div className="tour-hero__badges">
            <span className="badge badge--featured">{t(`tour.${tour.category}`)}</span>
            {tour.vip && <span className="badge badge--accent">{t('tour.vip')}</span>}
          </div>
          <h1 className="tour-hero__title">{locTitle}</h1>
          <div className="tour-hero__meta">
            <span className="tour-hero__meta-item">
              <IconMap /> {t('tour.start')}: <strong>{tour.departureCity}</strong>
            </span>
            <span className="tour-hero__meta-item">
              <IconClock /> {t('tour.duration')}: <strong>{tour.duration} {t('tour.days')}</strong>
            </span>
            <span className="tour-hero__meta-item">
              <IconUsers /> <strong>{tour.maxGroupSize}</strong> {t('tour.people')}
            </span>
            <span className="tour-hero__meta-item" style={{ color: '#f5c518' }}>
              <IconStar /> <strong style={{ color: '#fff' }}>{tour.rating}</strong>
              <span style={{ color: 'rgba(255,255,255,0.65)' }}>({tour.reviewCount} {t('tour.reviews')})</span>
            </span>
          </div>
        </div>
      </section>

      {/* ── Content ───────────────────────────────────────────── */}
      <section className="section tour-content">
        <div className="container">

          {/* Route Strip */}
          <div className="route-strip">
            <div className="route-strip__label"><IconRoute /> {t('tour.routeLabel')}</div>
            <div className="route-strip__track">
              {routeStops.map((stop, idx) => (
                <>
                  <div
                    key={stop}
                    className={`route-stop route-stop--${idx === 0 ? 'start' : idx === routeStops.length - 1 ? 'end' : 'middle'}`}
                  >
                    <div className="route-stop__dot">
                      {idx === 0
                        ? <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                        : idx === routeStops.length - 1
                          ? <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"/></svg>
                          : <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="6"/></svg>
                      }
                    </div>
                    <div className="route-stop__name">{stop}</div>
                    <div className="route-stop__type">
                      {idx === 0 ? t('tour.routeStart') : idx === routeStops.length - 1 ? t('tour.routeEnd') : `${t('tour.routeDay')} ${idx + 1}`}
                    </div>
                  </div>
                  {idx < routeStops.length - 1 && <div key={`arrow-${idx}`} className="route-arrow" />}
                </>
              ))}
            </div>
          </div>

          <div className="tour-layout">
            {/* ── Main ─────────────────────────────── */}
            <div className="tour-main">

              {/* Overview */}
              <div className="tour-section" id="overview">
                <h2 className="tour-section__title">{t('tour.overview')}</h2>
                <div className="divider text-left" style={{ margin: 'var(--space-2) 0 var(--space-4)' }}></div>
                <p className="tour-description__text">{locDesc}</p>
              </div>

              {/* Highlights */}
              <div className="tour-section" id="highlights">
                <h2 className="tour-section__title">{t('tour.highlights')}</h2>
                <div className="divider text-left" style={{ margin: 'var(--space-2) 0 var(--space-4)' }}></div>
                <ul className="highlights-list">
                  {locHighlights.map((highlight, index) => (
                    <li key={index} className="highlights-item">
                      <span className="highlights-icon"><IconCheck /></span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Itinerary */}
              <div className="tour-section" id="itinerary">
                <h2 className="tour-section__title">{t('tour.itinerary')}</h2>
                <div className="divider text-left" style={{ margin: 'var(--space-2) 0 var(--space-4)' }}></div>
                <div className="itinerary-timeline">
                  {tour.itinerary.map((day) => {
                    const dayTitle = getLocalized(day, 'title');
                    const dayDesc = getLocalized(day, 'description');
                    return (
                      <details key={day.day} className="itinerary-day" open={day.day === 1}>
                        <summary className="itinerary-day__summary">
                          <span className="itinerary-day__number">{t('tour.day')} {day.day}</span>
                          <span className="itinerary-day__title">{dayTitle}</span>
                          <svg className="itinerary-day__arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
                        </summary>
                        <div className="itinerary-day__content">
                          <p>{dayDesc}</p>
                          {day.destinations && day.destinations.length > 0 && (
                            <div className="itinerary-day__tags">
                              <span style={{ opacity: 0.6, marginRight: 4 }}><IconMap /></span>
                              {day.destinations.map(d => (
                                <span key={d} className="itinerary-day__tag">{d}</span>
                              ))}
                            </div>
                          )}
                        </div>
                      </details>
                    );
                  })}
                </div>
              </div>

              {/* Inclusions / Exclusions */}
              <div className="tour-section" id="inclusions-exclusions">
                <div className="inc-exc-grid">
                  <div className="inc-box">
                    <h3 className="inc-exc-title">{t('tour.included')}</h3>
                    <ul className="inc-list">
                      {locIncluded.map((item, i) => (
                        <li key={i}>
                          <span className="inc-icon"><IconCheck /></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="exc-box">
                    <h3 className="inc-exc-title">{t('tour.excluded')}</h3>
                    <ul className="exc-list">
                      {locExcluded.map((item, i) => (
                        <li key={i}>
                          <span className="exc-icon">
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Sidebar ──────────────────────────── */}
            <aside className="tour-sidebar">
              <div className="price-card">
                <span className="price-card__label">{t('tour.startingFrom')}</span>
                <div className="price-card__amount">
                  ${tour.price.toLocaleString()}
                  {tour.pricePerPerson && <span className="price-card__person"> / {t('tour.person')}</span>}
                </div>
                <p className="price-card__note">{t('tour.priceNote')}</p>

                <div className="price-card__divider"></div>

                {/* Stats */}
                <div className="price-card__stats">
                  <div className="price-card__stat">
                    <span className="price-card__stat-icon"><IconClock /></span>
                    <span className="price-card__stat-label">{t('tour.duration')}</span>
                    <strong>{tour.duration} {t('tour.days')}</strong>
                  </div>
                  <div className="price-card__stat">
                    <span className="price-card__stat-icon"><IconMap /></span>
                    <span className="price-card__stat-label">{t('tour.departure')}</span>
                    <strong>{tour.departureCity}</strong>
                  </div>
                  <div className="price-card__stat">
                    <span className="price-card__stat-icon"><IconUsers /></span>
                    <span className="price-card__stat-label">{t('tour.maxGroup')}</span>
                    <strong>{tour.maxGroupSize} {t('tour.people')}</strong>
                  </div>
                  <div className="price-card__stat">
                    <span className="price-card__stat-icon"><IconRoute /></span>
                    <span className="price-card__stat-label">{t('tour.stops')}</span>
                    <strong>{routeStops.length} {t('tour.cities')}</strong>
                  </div>
                </div>

                <div className="price-card__divider"></div>

                <button className="btn btn--primary booking-modal-trigger" onClick={() => setModalOpen(true)} id="open-booking-modal">
                  <IconCalendar />
                  {t('tour.bookNow')}
                </button>
                <p className="price-card__cancel">
                  <IconShield />
                  {t('tour.freeCancellation')}
                </p>
              </div>
            </aside>
          </div>

          {/* Related Tours */}
          {relatedTours.length > 0 && (
            <div className="related-tours section">
              <h2 className="related-tours__title">{t('tour.relatedTours')}</h2>
              <div className="divider text-left" style={{ margin: 'var(--space-2) 0 var(--space-8)' }}></div>
              <div className="grid grid-3">
                {relatedTours.map(t => (
                  <TourCard key={t.id} tour={t} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Booking Modal ──────────────────────────────────────── */}
      {modalOpen && (
        <div className="booking-modal-backdrop" onClick={e => { if (e.target === e.currentTarget) setModalOpen(false); }}>
          <div className="booking-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <button className="booking-modal__close" onClick={() => setModalOpen(false)} aria-label="Close">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>

            <div className="booking-modal__header">
              <div className="booking-modal__header-info">
                <div className="booking-modal__eyebrow">
                  <IconCalendar /> {t('tour.bookingRequest')}
                </div>
                <h2 className="booking-modal__title" id="modal-title">{locTitle}</h2>
                <div className="booking-modal__meta">
                  <span className="booking-modal__meta-item">
                    <IconMap /> <strong>{tour.departureCity}</strong>
                  </span>
                  <span className="booking-modal__meta-item">
                    <IconClock /> <strong>{tour.duration} {t('tour.days')}</strong>
                  </span>
                  <span className="booking-modal__meta-item">
                    <IconRoute /> {routeStops.slice(0, 4).join(' → ')}{routeStops.length > 4 ? ` +${routeStops.length - 4}` : ''}
                  </span>
                </div>
              </div>
              <div className="booking-modal__price-badge">
                <div className="booking-modal__price-badge-label">{t('tour.from')}</div>
                <div className="booking-modal__price-badge-amount">${tour.price.toLocaleString()}</div>
                <div className="booking-modal__price-badge-pp">/ {t('tour.person')}</div>
              </div>
            </div>

            <div className="booking-modal__body">
              <div className="booking-modal__trust">
                <div className="trust-badge">
                  <span className="trust-badge__icon"><IconShield /></span>
                  {t('tour.freeCancellation')}
                </div>
                <div className="trust-badge">
                  <span className="trust-badge__icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </span>
                  {t('tour.fastReply')}
                </div>
                <div className="trust-badge">
                  <span className="trust-badge__icon" style={{ color: '#f5c518' }}><IconStar /></span>
                  {tour.rating}/5 ({tour.reviewCount} {t('tour.reviews')})
                </div>
                <div className="trust-badge">
                  <span className="trust-badge__icon"><IconUsers /></span>
                  {t('tour.privateGuide')}
                </div>
              </div>

              <BookingForm tourTitle={locTitle} isCard={false} />

              <div className="booking-modal__wa-note">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
                {t('tour.sendMethodNote')}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
