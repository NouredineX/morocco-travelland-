import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

const languages = [
  { code: 'en', label: 'English', codeLabel: 'EN', flag: '🇬🇧' },
  { code: 'fr', label: 'Français', codeLabel: 'FR', flag: '🇫🇷' },
  { code: 'es', label: 'Español', codeLabel: 'ES', flag: '🇪🇸' },
  { code: 'it', label: 'Italiano', codeLabel: 'IT', flag: '🇮🇹' },
  { code: 'zh', label: '中文', codeLabel: 'ZH', flag: '🇨🇳' },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

  const switchLanguage = (code: string) => {
    i18n.changeLanguage(code);
    localStorage.setItem('mtl-lang', code);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  return (
    <div className="lang-switcher" ref={containerRef}>
      <button
        className="lang-switcher__toggle"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label="Select Language"
      >
        <span className="lang-switcher__flag">{currentLang.flag}</span>
        <span className="lang-switcher__code">{currentLang.codeLabel}</span>
        <svg className="lang-switcher__arrow" width="10" height="6" viewBox="0 0 10 6" fill="none">
          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {open && (
        <ul className="lang-switcher__dropdown" role="listbox">
          {languages.map(lang => (
            <li key={lang.code} role="option" aria-selected={lang.code === i18n.language}>
              <button
                className={`lang-switcher__option ${lang.code === i18n.language ? 'lang-switcher__option--active' : ''}`}
                onClick={() => switchLanguage(lang.code)}
              >
                <span className="lang-switcher__flag">{lang.flag}</span>
                <span className="lang-switcher__name">{lang.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
