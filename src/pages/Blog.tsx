import { useTranslation } from 'react-i18next';
import { useParams, useNavigate } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';
import { breadcrumbSchema } from '../utils/schema';
import { useLocalizer } from '../utils/localize';
import './Blog.css';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  titleFr?: string;
  titleEs?: string;
  titleIt?: string;
  titleZh?: string;
  metaTitle: string;
  metaTitleFr?: string;
  metaTitleEs?: string;
  metaTitleIt?: string;
  metaTitleZh?: string;
  metaDescription: string;
  metaDescriptionFr?: string;
  metaDescriptionEs?: string;
  metaDescriptionIt?: string;
  metaDescriptionZh?: string;
  focusKeyword: string;
  excerpt: string;
  excerptFr?: string;
  excerptEs?: string;
  excerptIt?: string;
  excerptZh?: string;
  content: string;
  contentFr?: string;
  contentEs?: string;
  contentIt?: string;
  contentZh?: string;
  image: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  categoryFr?: string;
  categoryEs?: string;
  categoryIt?: string;
  categoryZh?: string;
}

import { mockPosts } from '../data/blogPosts';

export default function Blog() {
  const { t } = useTranslation();
  const { getLocalized } = useLocalizer();
  const { slug } = useParams<{ slug?: string }>();
  const navigate = useNavigate();

  const activePost = slug ? mockPosts.find(p => p.slug === slug) : null;

  return (
    <>
      {activePost ? (
        <>
          <SEOHead
            title={getLocalized(activePost, 'metaTitle') || getLocalized(activePost, 'title')}
            description={getLocalized(activePost, 'metaDescription') || getLocalized(activePost, 'excerpt')}
            canonicalPath={`/blog/${activePost.slug}`}
            ogImage={activePost.image}
            jsonLd={breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Blog', url: '/blog' },
              { name: getLocalized(activePost, 'title'), url: `/blog/${activePost.slug}` },
            ])}
          />

          {/* Post Hero */}
          <section className="post-hero">
            <img src={activePost.image} alt={getLocalized(activePost, 'title')} className="post-hero__bg" />
            <div className="post-hero__overlay"></div>
            <div className="post-hero__content container">
              <span className="post-hero__cat">{getLocalized(activePost, 'category')}</span>
              <h1 className="post-hero__title">{getLocalized(activePost, 'title')}</h1>
              <div className="post-hero__meta">
                <span>By {activePost.author}</span>
                <span>•</span>
                <span>{activePost.date}</span>
                <span>•</span>
                <span>{activePost.readTime} {t('blog.minRead') || 'read'}</span>
              </div>
            </div>
          </section>

          {/* Post Content */}
          <article className="section post-body-sec">
            <div className="container container--narrow">
              <button onClick={() => navigate('/blog')} className="btn btn--secondary btn--sm" style={{ marginBottom: 'var(--space-8)' }}>
                ← {t('blog.backToArticles') || 'Back to Articles'}
              </button>
              <div className="post-content-html" dangerouslySetInnerHTML={{ __html: getLocalized(activePost, 'content') }}></div>
            </div>
          </article>
        </>
      ) : (
        <>
          <SEOHead
            title={t('blog.metaTitle')}
            description={t('blog.metaDesc')}
            canonicalPath="/blog"
            jsonLd={breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Blog', url: '/blog' },
            ])}
          />

          {/* Hero Banner */}
          <section className="page-hero">
            <img
              src="https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=1200&auto=format&fit=crop&q=75"
              srcSet="
                https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=600&auto=format&fit=crop&q=75 600w,
                https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=1200&auto=format&fit=crop&q=75 1200w,
                https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=1920&auto=format&fit=crop&q=75 1920w
              "
              sizes="100vw"
              alt="Morocco Travel Land Blog and Guides"
              className="page-hero__bg"
              width="1920" height="400"
            />
            <div className="page-hero__overlay"></div>
            <div className="page-hero__content container">
              <h1 className="page-hero__title">{t('blog.title')}</h1>
              <p className="page-hero__subtitle">{t('blog.subtitle')}</p>
            </div>
          </section>

          {/* Articles Listing */}
          <section className="section blog-listing-sec">
            <div className="container">
              <div className="grid grid-2">
                {mockPosts.map(post => (
                  <article key={post.id} className="blog-card">
                    <div className="blog-card__image-wrap">
                      <img src={post.image} alt={getLocalized(post, 'title')} className="blog-card__image" loading="lazy" />
                    </div>
                    <div className="blog-card__body">
                      <span className="blog-card__cat">{getLocalized(post, 'category')}</span>
                      <h2 className="blog-card__title" onClick={() => navigate('/blog/' + post.slug)} style={{ cursor: 'pointer' }}>
                        {getLocalized(post, 'title')}
                      </h2>
                      <p className="blog-card__excerpt">{getLocalized(post, 'excerpt')}</p>
                      <div className="blog-card__footer">
                        <span className="blog-card__meta">{post.date} • {post.readTime} {t('blog.minRead') || 'read'}</span>
                        <button onClick={() => navigate('/blog/' + post.slug)} className="btn btn--secondary btn--sm">
                          {t('blog.readMore')}
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
