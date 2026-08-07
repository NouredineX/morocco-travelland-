import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEOHead from '../components/seo/SEOHead';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <>
      <SEOHead
        title="Page Not Found | Morocco Travel Land"
        description="The page you are looking for doesn't exist on Morocco Travel Land."
        noIndex={true}
      />
      <div className="container text-center section" style={{ padding: 'var(--space-32) 0' }}>
        <h1 style={{ fontSize: 'var(--fs-5xl)', color: 'var(--color-primary)', marginBottom: 'var(--space-4)' }}>404</h1>
        <h2>{t('notFound.title')}</h2>
        <p style={{ color: 'var(--color-text-secondary)', margin: 'var(--space-4) 0 var(--space-8)' }}>
          {t('notFound.message')}
        </p>
        <Link to="/" className="btn btn--primary">
          {t('notFound.cta')}
        </Link>
      </div>
    </>
  );
}
