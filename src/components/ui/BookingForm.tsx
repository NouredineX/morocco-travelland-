import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { siteConfig } from '../../data/siteConfig';
import './BookingForm.css';

interface BookingFormProps {
  tourTitle?: string;
  isCard?: boolean;
}

export default function BookingForm({ tourTitle = '', isCard = true }: BookingFormProps) {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    travelers: '2',
    tour: tourTitle,
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Simulate booking submission or WhatsApp redirect
    setTimeout(() => {
      // Create WhatsApp message format
      const whatsappMsg = `*New Booking Inquiry*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Date:* ${formData.date}\n*Travelers:* ${formData.travelers}\n*Tour:* ${formData.tour || 'Custom Tour'}\n*Message:* ${formData.message}`;
      const url = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(whatsappMsg)}`;

      // Redirect to WhatsApp
      window.open(url, '_blank');
      setStatus('success');
    }, 1000);
  };

  return (
    <div className={`booking-form-container ${!isCard ? 'booking-form-container--flat' : ''}`}>
      {status === 'success' ? (
        <div className="booking-form__success">
          <div className="booking-form__success-icon">✓</div>
          <h3>Inquiry Sent!</h3>
          <p>{t('form.success')}</p>
          <button className="btn btn--primary btn--sm" onClick={() => setStatus('idle')}>
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-group">
            <label htmlFor="name">{t('form.name')} <span className="form-required">*</span></label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. John Doe"
            />
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="email">{t('form.email')} <span className="form-required">*</span></label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. john@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">{t('form.phone')} <span className="form-required">*</span></label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +1 234 567 890"
              />
            </div>
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="date">{t('form.date')} <span className="form-required">*</span></label>
              <input
                type="date"
                id="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="travelers">{t('form.travelers')}</label>
              <select id="travelers" name="travelers" value={formData.travelers} onChange={handleChange}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, '10+'].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="tour">{t('form.tour')}</label>
            <input
              type="text"
              id="tour"
              name="tour"
              value={formData.tour}
              onChange={handleChange}
              readOnly={!!tourTitle}
              placeholder="e.g. 15 Days Grand Morocco Tour"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">{t('form.message')} <span className="form-required">*</span></label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your preferences, budget, or custom requirements..."
            ></textarea>
          </div>

          <button type="submit" className="btn btn--primary btn--lg form-submit" disabled={status === 'sending'}>
            {status === 'sending' ? t('form.sending') : t('form.submit')}
          </button>
        </form>
      )}
    </div>
  );
}
