import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../ui/LanguageSwitcher';
import LogoIcon from '../ui/LogoIcon';
import './Header.css';

export default function Header() {
  const { t } = useTranslation();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/morocco-tours', label: t('nav.tours') },
    { href: '/morocco-destinations', label: t('nav.destinations') },
    { href: '/about', label: t('nav.about') },
    { href: '/blog', label: t('nav.blog') },
    { href: '/contact', label: t('nav.contact') },
  ];

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''} ${menuOpen ? 'header--open' : ''}`} id="site-header">
      <div className="header__inner container">
        <Link to="/" className="header__logo" aria-label="Morocco Travelland Home">
          <LogoIcon size={38} className="header__logo-icon" />
          <span className="header__logo-text">
            <span className="header__logo-name">{t('logo.name')}</span>
            <span className="header__logo-accent">{t('logo.accent')}</span>
          </span>
        </Link>

        <nav className="header__nav" aria-label="Main Navigation" role="navigation">
          <ul className="header__nav-list" role="menubar">
            {navLinks.map(link => (
              <li key={link.href} role="none">
                <Link
                  to={link.href}
                  className={`header__nav-link ${isActive(link.href) ? 'header__nav-link--active' : ''}`}
                  role="menuitem"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <LanguageSwitcher />
          <Link to="/contact" className="btn btn--primary btn--sm header__cta">
            {t('nav.bookNow')}
          </Link>
        </div>

        <button
          className={`header__hamburger ${menuOpen ? 'header__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`header__mobile ${menuOpen ? 'header__mobile--open' : ''}`} aria-hidden={!menuOpen}>
        <nav aria-label="Mobile Navigation">
          <ul className="header__mobile-list">
            {navLinks.map(link => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={`header__mobile-link ${isActive(link.href) ? 'header__mobile-link--active' : ''}`}
                  tabIndex={menuOpen ? 0 : -1}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="header__mobile-actions">
            <LanguageSwitcher />
            <Link to="/contact" className="btn btn--primary btn--lg" tabIndex={menuOpen ? 0 : -1}>
              {t('nav.bookNow')}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
