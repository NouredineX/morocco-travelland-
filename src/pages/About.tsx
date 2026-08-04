import { useTranslation } from 'react-i18next';
import SEOHead from '../components/seo/SEOHead';
import { breadcrumbSchema } from '../utils/schema';
import './About.css';

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <SEOHead
        title={t('about.metaTitle')}
        description={t('about.metaDesc')}
        canonicalPath="/about"
        jsonLd={breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'About Us', url: '/about' },
        ])}
      />

      {/* Hero Banner */}
      <section className="page-hero">
        <img
          src="https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=1920&q=75"
          alt="About Morocco Travelland team"
          className="page-hero__bg"
          width="1920" height="400"
        />
        <div className="page-hero__overlay"></div>
        <div className="page-hero__content container">
          <h1 className="page-hero__title">{t('about.title')}</h1>
          <p className="page-hero__subtitle">{t('about.heroSubtitle')}</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section about-story-sec">
        <div className="container container--narrow">
          <div className="text-center">
            <span className="section-label">{t('about.heroTitle')}</span>
            <h2 className="about-story__title">Sharing the Beauty of Morocco</h2>
            <div className="divider"></div>
          </div>
          <div className="about-story__text">
            <p>{t('about.story')}</p>
            <p>{t('about.storyMore')}</p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section section--dark about-mission-sec">
        <div className="container">
          <div className="grid grid-2 items-center">
            <div>
              <h2 className="about-mission__title">{t('about.mission')}</h2>
              <div className="divider text-left" style={{ margin: 'var(--space-2) 0 var(--space-6)' }}></div>
              <p className="about-mission__text" style={{ fontSize: 'var(--fs-md)', color: 'rgba(255,255,255,0.85)' }}>
                {t('about.missionText')}
              </p>
            </div>
            <div className="values-grid">
              <div className="value-card">
                <span className="value-card__icon">🧭</span>
                <h3 className="value-card__title">Local Authenticity</h3>
                <p className="value-card__desc">Deeply connected to the culture, history, and people of Morocco.</p>
              </div>
              <div className="value-card">
                <span className="value-card__icon">🤝</span>
                <h3 className="value-card__title">Customer Care</h3>
                <p className="value-card__desc">Your comfort, safety, and happiness are our highest priorities.</p>
              </div>
              <div className="value-card">
                <span className="value-card__icon">🎨</span>
                <h3 className="value-card__title">Tailor-Made Flexibility</h3>
                <p className="value-card__desc">Every tour is uniquely crafted to match your personal interests.</p>
              </div>
              <div className="value-card">
                <span className="value-card__icon">✨</span>
                <h3 className="value-card__title">Honest Value</h3>
                <p className="value-card__desc">Direct tour organization with zero hidden fees or tourist trap markups.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Team */}
      <section className="section team-sec">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Morocco Travelland</span>
            <h2 className="section-title">{t('about.team')}</h2>
            <div className="divider"></div>
          </div>
          <div className="grid grid-2" style={{ maxWidth: '800px', margin: '0 auto' }}>
            {[
              { 
                name: 'Mohamed', 
                role: t('about.ownerRole'), 
                image: '/travel-picture/mohamed.jpg',
                facebook: 'https://www.facebook.com/mohamed.travelland',
                instagram: 'https://www.instagram.com/mohamed.travelland'
              },
              { 
                name: 'Nourdine', 
                role: t('about.designerRole'), 
                image: '/travel-picture/nourdine.jpg',
                facebook: 'https://www.facebook.com/nourdine.designer',
                instagram: 'https://www.instagram.com/nourdine.designer'
              }
            ].map((member, i) => (
              <div key={i} className="team-card">
                <div className="team-card__image-wrap">
                  <img src={member.image} alt={`Morocco Travelland team - ${member.name}`} className="team-card__image" loading="lazy" />
                </div>
                <h3 className="team-card__name">{member.name}</h3>
                <span className="team-card__role">{member.role}</span>
                <div className="team-card__social">
                  <a href={member.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                  <a href={member.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
