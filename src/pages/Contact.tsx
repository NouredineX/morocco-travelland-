import { useTranslation } from 'react-i18next';
import SEOHead from '../components/seo/SEOHead';
import BookingForm from '../components/ui/BookingForm';
import { siteConfig } from '../data/siteConfig';
import { breadcrumbSchema } from '../utils/schema';
import './Contact.css';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <>
      <SEOHead
        title={t('contact.metaTitle')}
        description={t('contact.metaDesc')}
        canonicalPath="/contact"
        jsonLd={breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Contact Us', url: '/contact' },
        ])}
      />

      {/* Hero Banner */}
      <section className="page-hero">
        <img
          src="https://images.unsplash.com/photo-1509306024325-2a41e1e5cce9?w=1920&q=75"
          alt="Contact Morocco Travelland team"
          className="page-hero__bg"
          width="1920" height="400"
        />
        <div className="page-hero__overlay"></div>
        <div className="page-hero__content container">
          <h1 className="page-hero__title">{t('contact.title')}</h1>
          <p className="page-hero__subtitle">{t('contact.heroSubtitle')}</p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="section contact-main-sec">
        <div className="container">
          <div className="contact-grid">
            {/* Info Column */}
            <div className="contact-info-col">
              <h2 className="contact-section__title">Get In Touch</h2>
              <div className="divider text-left" style={{ margin: 'var(--space-2) 0 var(--space-6)' }}></div>
              <p className="contact-info__desc">
                Have questions about our tours or need assistance designing a customized itinerary? Feel free to contact us via WhatsApp, email, or fill out the form.
              </p>

              <div className="contact-cards">
                <div className="contact-detail-card">
                  <div className="contact-detail-card__icon">📞</div>
                  <div>
                    <h4>{t('contact.phone')} / {t('contact.whatsapp')}</h4>
                    <p><a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a></p>
                    <p><a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-success)', fontWeight: 'bold' }}>Chat on WhatsApp</a></p>
                  </div>
                </div>

                <div className="contact-detail-card">
                  <div className="contact-detail-card__icon">✉️</div>
                  <div>
                    <h4>{t('contact.email')}</h4>
                    <p><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p>
                  </div>
                </div>

                <div className="contact-detail-card">
                  <div className="contact-detail-card__icon">📍</div>
                  <div>
                    <h4>{t('contact.address')}</h4>
                    <p>{siteConfig.address}</p>
                  </div>
                </div>

                <div className="contact-detail-card">
                  <div className="contact-detail-card__icon">⏱</div>
                  <div>
                    <h4>{t('contact.hours')}</h4>
                    <p>{t('contact.hoursText')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="contact-form-col">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="map-sec">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108702.95019087526!2d-8.085888258380315!3d31.622522304910243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee8d9611d6d5%3A0xe2e27df5923be1f1!2sMarrakesh%2C%20Morocco!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          title="Morocco Travelland Office Map"
        ></iframe>
      </section>
    </>
  );
}
