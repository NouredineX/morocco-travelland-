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

  const [sendMethod, setSendMethod] = useState<'whatsapp' | 'email'>('whatsapp');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    setTimeout(() => {
      if (sendMethod === 'whatsapp') {
        const whatsappMsg = `*New Booking Inquiry*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Date:* ${formData.date}\n*Travelers:* ${formData.travelers}\n*Tour:* ${formData.tour || 'Custom Tour'}\n*Message:* ${formData.message}`;
        const url = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(whatsappMsg)}`;
        window.open(url, '_blank');
      } else {
        const subject = `Booking Inquiry – ${formData.tour || 'Custom Tour'}`;
        const body = `Hello Morocco Travelland,\n\nI would like to book a tour.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nTravel Date: ${formData.date}\nNumber of Travelers: ${formData.travelers}\nTour: ${formData.tour || 'Custom Tour'}\n\nMessage:\n${formData.message}\n\nThank you!`;
        const mailtoUrl = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoUrl, '_self');
      }
      setStatus('success');
    }, 800);
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
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your preferences, budget, or custom requirements..."
            ></textarea>
          </div>

          {/* Send Method Selector */}
          <div className="form-send-method">
            <label className="form-send-method__label">{t('form.sendVia')}</label>
            <div className="form-send-method__options">
              <button
                type="button"
                className={`form-send-method__btn ${sendMethod === 'whatsapp' ? 'form-send-method__btn--active' : ''}`}
                onClick={() => setSendMethod('whatsapp')}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </button>
              <button
                type="button"
                className={`form-send-method__btn ${sendMethod === 'email' ? 'form-send-method__btn--active form-send-method__btn--email' : ''}`}
                onClick={() => setSendMethod('email')}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                Email
              </button>
            </div>
          </div>

          <button type="submit" className="btn btn--primary btn--lg form-submit" disabled={status === 'sending'}>
            {status === 'sending' ? t('form.sending') : (
              sendMethod === 'whatsapp' ? t('form.submitWhatsapp') : t('form.submitEmail')
            )}
          </button>
        </form>
      )}
    </div>
  );
}
