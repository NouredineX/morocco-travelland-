import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import TourCard from '../components/ui/TourCard';
import { tours } from '../data/tours';
import { destinations } from '../data/destinations';
import { testimonials } from '../data/testimonials';
import { organizationSchema, websiteSchema } from '../utils/schema';
import { useLocalizer } from '../utils/localize';
import './Home.css';

export default function Home() {
  const { t } = useTranslation();
  const { getLocalized } = useLocalizer();

  const popularTours = tours.filter(to => to.category === 'popular' && !to.vip).slice(0, 8);
  const marrakechTours = tours.filter(to => to.departureCity === 'Marrakech' && !to.vip).slice(0, 4);
  const vipTours = tours.filter(to => to.vip).slice(0, 4);
  const topDestinations = destinations.slice(0, 6);
  const topTestimonials = testimonials.slice(0, 4);

  const homeSchema = {
    '@context': 'https://schema.org',
    '@graph': [organizationSchema(), websiteSchema()],
  };

  return (
    <>
      <SEOHead
        title="Morocco Travel Land | Best Private Morocco Tours & Travel Packages 2026"
        description="Discover authentic Morocco with our private tours. Expert local guides, luxury desert camps, imperial cities & Sahara adventures. Book your dream Morocco trip today!"
        canonicalPath="/"
        jsonLd={homeSchema}
      />

      {/* ===== HERO ===== */}
      <section className="hero" id="hero">
        <div className="hero__bg">
          <img
            src="https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1920&q=80"
            alt="Morocco Travelland - Private tours across Morocco Sahara Desert"
            className="hero__bg-image"
            fetchPriority="high"
            width="1920"
            height="1080"
          />
          <div className="hero__overlay"></div>
        </div>
        <div className="hero__content container">
          <span className="hero__label">{t('hero.label')}</span>
          <h1 className="hero__title">{t('hero.title')}</h1>
          <p className="hero__subtitle">{t('hero.subtitle')}</p>
          <div className="hero__actions">
            <Link to="/morocco-tours" className="btn btn--primary btn--lg">{t('hero.cta')}</Link>
            <Link to="/contact" className="btn btn--white btn--lg">{t('hero.ctaSecondary')}</Link>
          </div>
        </div>
        <div className="hero__scroll">
          <span>Scroll</span>
          <div className="hero__scroll-line"></div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="stats section--warm" id="stats">
        <div className="container">
          <div className="stats__grid">
            <div className="stats__item">
              <span className="stats__number">7+</span>
              <span className="stats__label">{t('stats.years')}</span>
            </div>
            <div className="stats__item">
              <span className="stats__number">500+</span>
              <span className="stats__label">{t('stats.travelers')}</span>
            </div>
            <div className="stats__item">
              <span className="stats__number">30+</span>
              <span className="stats__label">{t('stats.tours')}</span>
            </div>
            <div className="stats__item">
              <span className="stats__number">12</span>
              <span className="stats__label">{t('stats.destinations')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== POPULAR TOURS ===== */}
      <section className="section" id="popular-tours">
        <div className="container">
          <div className="section-header">
            <span className="section-label">{t('sections.popularToursLabel')}</span>
            <h2 className="section-title">{t('sections.popularTours')}</h2>
            <div className="divider"></div>
            <p className="section-description">{t('sections.popularToursDesc')}</p>
          </div>
          <div className="grid grid-4 stagger-children">
            {popularTours.map(tour => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
          <div className="text-center" style={{ marginTop: 'var(--space-10)' }}>
            <Link to="/morocco-tours" className="btn btn--secondary">{t('common.viewAll')} →</Link>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="section section--dark" id="why-us">
        <div className="container">
          <div className="section-header">
            <span className="section-label">{t('sections.whyChooseUsLabel')}</span>
            <h2 className="section-title">{t('sections.whyChooseUs')}</h2>
            <div className="divider"></div>
          </div>
          <div className="grid grid-3 why-grid">
            {[
              { icon: '🧭', title: t('whyUs.localExperts'), desc: t('whyUs.localExpertsDesc') },
              { icon: '✨', title: t('whyUs.customized'), desc: t('whyUs.customizedDesc') },
              { icon: '📞', title: t('whyUs.support'), desc: t('whyUs.supportDesc') },
              { icon: '💎', title: t('whyUs.value'), desc: t('whyUs.valueDesc') },
              { icon: '🛡️', title: t('whyUs.safety'), desc: t('whyUs.safetyDesc') },
              { icon: '🏕️', title: t('whyUs.authentic'), desc: t('whyUs.authenticDesc') },
            ].map((item, i) => (
              <div key={i} className="why-card">
                <span className="why-card__icon">{item.icon}</span>
                <h3 className="why-card__title">{item.title}</h3>
                <p className="why-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MARRAKECH TOURS ===== */}
      <section className="section" id="marrakech-tours">
        <div className="container">
          <div className="section-header">
            <span className="section-label">{t('sections.marrakechToursLabel')}</span>
            <h2 className="section-title">{t('sections.marrakechTours')}</h2>
            <div className="divider"></div>
            <p className="section-description">{t('sections.marrakechToursDesc')}</p>
          </div>
          <div className="grid grid-4 stagger-children">
            {marrakechTours.map(tour => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== DESTINATIONS ===== */}
      <section className="section section--warm" id="destinations">
        <div className="container">
          <div className="section-header">
            <span className="section-label">{t('sections.destinationsLabel')}</span>
            <h2 className="section-title">{t('sections.destinations')}</h2>
            <div className="divider"></div>
          </div>
          <div className="grid grid-3 dest-grid">
            {topDestinations.map(dest => {
              const locDestName = getLocalized(dest, 'name');
              return (
                <Link to={`/morocco-destinations/${dest.slug}`} key={dest.id} className="dest-card" aria-label={`Explore ${locDestName}, Morocco`}>
                  <img src={dest.image} alt={`Morocco Travelland destination - ${locDestName}`} className="dest-card__image" loading="lazy" width="400" height="300" />
                  <div className="dest-card__overlay">
                    <h3 className="dest-card__name">{locDestName}</h3>
                    <span className="dest-card__cta">{t('destination.explore')} →</span>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="text-center" style={{ marginTop: 'var(--space-10)' }}>
            <Link to="/morocco-destinations" className="btn btn--secondary">{t('destination.viewAll')} →</Link>
          </div>
        </div>
      </section>

      {/* ===== VIP TOURS ===== */}
      <section className="section" id="vip-tours">
        <div className="container">
          <div className="section-header">
            <span className="section-label">{t('sections.vipToursLabel')}</span>
            <h2 className="section-title">{t('sections.vipTours')}</h2>
            <div className="divider"></div>
            <p className="section-description">{t('sections.vipToursDesc')}</p>
          </div>
          <div className="grid grid-4 stagger-children">
            {vipTours.map(tour => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section section--dark" id="testimonials">
        <div className="container">
          <div className="section-header">
            <span className="section-label">{t('sections.testimonialsLabel')}</span>
            <h2 className="section-title">{t('sections.testimonials')}</h2>
            <div className="divider"></div>
          </div>
          <div className="grid grid-2 testimonials-grid">
            {topTestimonials.map(test => (
              <div key={test.id} className="testimonial-card">
                <div className="testimonial-card__stars">
                  {Array.from({ length: test.rating }, (_, i) => (
                    <span key={i} className="testimonial-card__star">★</span>
                  ))}
                </div>
                <p className="testimonial-card__text">"{test.text}"</p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">{test.name.charAt(0)}</div>
                  <div>
                    <span className="testimonial-card__name">{test.name}</span>
                    <span className="testimonial-card__country">{test.country}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CUSTOMIZE CTA ===== */}
      <section className="cta-section" id="customize-tour">
        <div className="cta-section__bg">
          <img
            src="/travel-picture/1-13.webp"
            alt="Morocco Travelland custom tour - Sahara Desert"
            loading="lazy"
            width="1920"
            height="600"
          />
        </div>
        <div className="cta-section__content container">
          <h2 className="cta-section__title">{t('sections.customTrip')}</h2>
          <p className="cta-section__desc">{t('sections.customTripDesc')}</p>
          <Link to="/contact" className="btn btn--primary btn--lg">{t('sections.customTripCta')} →</Link>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="section" id="faq">
        <div className="container container--narrow">
          <div className="section-header">
            <span className="section-label">{t('sections.faqLabel')}</span>
            <h2 className="section-title">{t('sections.faq')}</h2>
            <div className="divider"></div>
          </div>
          <div className="faq-list">
            {[
              { q: 'Is Morocco safe for tourists?', a: 'Yes! Morocco is one of the safest countries in Africa for tourists. With our private guides, you\'ll have local expertise ensuring your comfort and safety throughout your trip.' },
              { q: 'What is the best time to visit Morocco?', a: 'The best time to visit Morocco is spring (March-May) and autumn (September-November). These seasons offer pleasant temperatures for exploring cities and the desert.' },
              { q: 'Can I customize my tour itinerary?', a: 'Absolutely! Every Morocco Travelland tour is fully customizable. Tell us your interests, budget, and timeline, and we\'ll craft the perfect itinerary.' },
              { q: 'What type of accommodation is included?', a: 'We use carefully selected traditional riads, boutique hotels, and luxury desert camps. VIP tours include 5-star properties throughout.' },
              { q: 'Do I need a visa for Morocco?', a: 'Citizens of most countries (US, EU, UK, Canada, Australia) can visit Morocco visa-free for up to 90 days. Check with your local embassy for specific requirements.' },
              { q: 'How do I book a tour?', a: 'Simply contact us via WhatsApp, email, or our booking form. We\'ll respond within 24 hours with a customized proposal and pricing.' },
            ].map((faq, i) => (
              <details key={i} className="faq-item">
                <summary className="faq-item__question">
                  <span>{faq.q}</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
                </summary>
                <div className="faq-item__answer">
                  <p>{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
