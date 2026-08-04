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
              { name: 'Mohamed', role: t('about.ownerRole'), image: '/travel-picture/mohamed.jpg' },
              { name: 'Nourdine', role: t('about.designerRole'), image: '/travel-picture/nourdine.jpg' }
            ].map((member, i) => (
              <div key={i} className="team-card">
                <div className="team-card__image-wrap">
                  <img src={member.image} alt={`Morocco Travelland team - ${member.name}`} className="team-card__image" loading="lazy" />
                </div>
                <h3 className="team-card__name">{member.name}</h3>
                <span className="team-card__role">{member.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
