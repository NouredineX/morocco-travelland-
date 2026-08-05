import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { siteConfig } from '../../data/siteConfig';
import LogoIcon from '../ui/LogoIcon';
import './Footer.css';

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="site-footer">
      <div className="footer__top">
        <div className="container">
          <div className="footer__grid">
            {/* Brand */}
            <div className="footer__brand">
              <Link to="/" className="footer__logo">
                <LogoIcon size={38} className="footer__logo-icon" />
                <span className="footer__logo-text">
                  <span className="footer__logo-name">{t('logo.name')}</span>
                  <span className="footer__logo-accent">{t('logo.accent')}</span>
                </span>
              </Link>
              <p className="footer__desc">{t('footer.description')}</p>
              <div className="footer__social">
                <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href={siteConfig.social.wechat} target="_blank" rel="noopener noreferrer" aria-label="WeChat">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05a6.462 6.462 0 01-.253-1.82c0-3.658 3.498-6.625 7.814-6.625.259 0 .514.013.768.034-.89-3.37-4.563-5.82-8.84-5.82h-.32zm-2.27 3.39a1.287 1.287 0 11-.001 2.576 1.287 1.287 0 01.001-2.576zm5.16 0a1.287 1.287 0 110 2.576 1.287 1.287 0 010-2.576zM16.063 8.6c-3.855 0-6.984 2.618-6.984 5.845 0 3.228 3.13 5.845 6.984 5.845a8.66 8.66 0 002.41-.34.693.693 0 01.575.078l1.527.893a.262.262 0 00.134.043.237.237 0 00.233-.237c0-.058-.023-.115-.039-.17l-.313-1.188a.474.474 0 01.171-.533C22.381 17.838 23.047 16.2 23.047 14.445c0-3.227-3.13-5.845-6.984-5.845zM13.8 12.24a1.04 1.04 0 110 2.082 1.04 1.04 0 010-2.082zm4.526 0a1.04 1.04 0 110 2.082 1.04 1.04 0 010-2.082z"/></svg>
                </a>
                <a href={siteConfig.social.tripadvisor} target="_blank" rel="noopener noreferrer" aria-label="TripAdvisor">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 2.135a5.997 5.997 0 004.04 10.43 5.976 5.976 0 004.075-1.6L12.006 19.7l1.928-2.088a5.976 5.976 0 004.075 1.6 5.997 5.997 0 004.04-10.43L24 6.648h-4.35a13.573 13.573 0 00-7.644-2.353zM12 6.59c1.637 0 3.22.327 4.694.955a5.986 5.986 0 00-3.903 2.38 5.986 5.986 0 00-3.903-2.38A11.47 11.47 0 0112 6.59zM6.003 9.073a4.354 4.354 0 110 8.71 4.354 4.354 0 010-8.71zm11.994 0a4.354 4.354 0 110 8.71 4.354 4.354 0 010-8.71zM6.003 10.878a2.548 2.548 0 100 5.097 2.548 2.548 0 000-5.097zm11.994 0a2.548 2.548 0 100 5.097 2.548 2.548 0 000-5.097zM6.003 12.28a1.147 1.147 0 110 2.294 1.147 1.147 0 010-2.294zm11.994 0a1.147 1.147 0 110 2.294 1.147 1.147 0 010-2.294z"/></svg>
                </a>
                {siteConfig.social.pinterest && (
                  <a href={siteConfig.social.pinterest} target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.17-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
                  </a>
                )}
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer__col">
              <h3 className="footer__heading">{t('footer.quickLinks')}</h3>
              <ul className="footer__links">
                <li><Link to="/">{t('nav.home')}</Link></li>
                <li><Link to="/morocco-tours">{t('nav.tours')}</Link></li>
                <li><Link to="/morocco-destinations">{t('nav.destinations')}</Link></li>
                <li><Link to="/about">{t('nav.about')}</Link></li>
                <li><Link to="/blog">{t('nav.blog')}</Link></li>
                <li><Link to="/contact">{t('nav.contact')}</Link></li>
              </ul>
            </div>

            {/* Tour Categories */}
            <div className="footer__col">
              <h3 className="footer__heading">{t('footer.tourCategories')}</h3>
              <ul className="footer__links">
                <li><Link to="/morocco-tours?city=Casablanca">Tours from Casablanca</Link></li>
                <li><Link to="/morocco-tours?city=Marrakech">Tours from Marrakech</Link></li>
                <li><Link to="/morocco-tours?city=Fes">Tours from Fes</Link></li>
                <li><Link to="/morocco-tours?city=Tangier">Tours from Tangier</Link></li>
                <li><Link to="/morocco-tours?type=vip">VIP Luxury Tours</Link></li>
                <li><Link to="/morocco-tours?type=desert">Desert Tours</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer__col">
              <h3 className="footer__heading">{t('footer.contactInfo')}</h3>
              <ul className="footer__contact">
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  <span>{siteConfig.address}</span>
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                  <a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>© {year} {siteConfig.name}. {t('footer.rights')}</p>
          <div className="footer__bottom-links">
            <Link to="/privacy">{t('footer.privacy')}</Link>
            <Link to="/terms">{t('footer.terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
