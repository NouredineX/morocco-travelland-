import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEOHead from '../components/seo/SEOHead';
import TourCard from '../components/ui/TourCard';
import { tours } from '../data/tours';
import { breadcrumbSchema } from '../utils/schema';
import './Tours.css';

const departureCities = ['All', 'Casablanca', 'Marrakech', 'Fes', 'Tangier'];
const tourTypes = ['All', 'popular', 'desert', 'vip', 'short', 'cultural'];

export default function Tours() {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();

  const cityParam = searchParams.get('city') || 'All';
  const typeParam = searchParams.get('type') || 'All';

  const [selectedCity, setSelectedCity] = useState(cityParam);
  const [selectedType, setSelectedType] = useState(typeParam);
  const [sortBy, setSortBy] = useState('featured');

  const filteredTours = useMemo(() => {
    let result = [...tours];
    if (selectedCity !== 'All') result = result.filter(t => t.departureCity === selectedCity);
    if (selectedType !== 'All') result = result.filter(t => selectedType === 'vip' ? t.vip : t.category === selectedType);

    switch (sortBy) {
      case 'price-low': result.sort((a, b) => a.price - b.price); break;
      case 'price-high': result.sort((a, b) => b.price - a.price); break;
      case 'duration-short': result.sort((a, b) => a.duration - b.duration); break;
      case 'duration-long': result.sort((a, b) => b.duration - a.duration); break;
      case 'featured': default: result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0)); break;
    }
    return result;
  }, [selectedCity, selectedType, sortBy]);

  const handleCityFilter = (city: string) => {
    setSelectedCity(city);
    const params = new URLSearchParams(searchParams);
    if (city === 'All') params.delete('city');
    else params.set('city', city);
    setSearchParams(params);
  };

  const handleTypeFilter = (type: string) => {
    setSelectedType(type);
    const params = new URLSearchParams(searchParams);
    if (type === 'All') params.delete('type');
    else params.set('type', type);
    setSearchParams(params);
  };

  return (
    <>
      <SEOHead
        title="Morocco Tours & Travel Packages 2026 | Private Tours | Morocco Travel Land"
        description="Browse 30+ private Morocco tours from Marrakech, Casablanca, Fes & Tangier. Desert tours, VIP luxury packages, cultural trips."
        canonicalPath="/morocco-tours"
        jsonLd={breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Tours', url: '/morocco-tours' },
        ])}
      />

      {/* Hero Banner */}
      <section className="page-hero">
        <img
          src="/travel-picture/merzoga.webp"
          alt="Morocco tours - private guided tours across Morocco"
          className="page-hero__bg"
          width="1920" height="500"
        />
        <div className="page-hero__overlay"></div>
        <div className="page-hero__content container">
          <h1 className="page-hero__title">{t('tour.allTours')}</h1>
          <p className="page-hero__subtitle">{t('tour.allToursSubtitle')}</p>
        </div>
      </section>

      {/* Filters */}
      <section className="tours-filters section">
        <div className="container">
          <div className="filters-bar">
            <div className="filters-group">
              <label className="filters-label">{t('tour.departure')}:</label>
              <div className="filters-chips">
                {departureCities.map(city => (
                  <button
                    key={city}
                    className={`filter-chip ${selectedCity === city ? 'filter-chip--active' : ''}`}
                    onClick={() => handleCityFilter(city)}
                  >
                    {city === 'All' ? t('tour.all') : city}
                  </button>
                ))}
              </div>
            </div>

            <div className="filters-group">
              <label className="filters-label">{t('tour.tourType')}:</label>
              <div className="filters-chips">
                {tourTypes.map(type => (
                  <button
                    key={type}
                    className={`filter-chip ${selectedType === type ? 'filter-chip--active' : ''}`}
                    onClick={() => handleTypeFilter(type)}
                  >
                    {type === 'All' ? t('tour.all') : t(`tour.${type}`)}
                  </button>
                ))}
              </div>
            </div>

            <div className="filters-group">
              <label className="filters-label">{t('tour.sortBy')}:</label>
              <select className="filters-select" value={sortBy} onChange={e => setSortBy(e.target.value)}>
                <option value="featured">{t('tour.sortFeatured')}</option>
                <option value="duration-short">{t('tour.sortDurationShort')}</option>
                <option value="duration-long">{t('tour.sortDurationLong')}</option>
              </select>
            </div>
          </div>

          <p className="filters-count">{filteredTours.length} {t('tour.toursFound')}</p>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          {filteredTours.length > 0 ? (
            <div className="grid grid-4">
              {filteredTours.map(tour => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          ) : (
            <div className="no-results">
              <p>{t('tour.noResults')}</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
