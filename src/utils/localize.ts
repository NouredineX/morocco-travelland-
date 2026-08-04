import { useTranslation } from 'react-i18next';

export function useLocalizer() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language; // 'en', 'fr', 'es', 'it'

  const getLocalized = (obj: any, field: string): any => {
    if (!obj) return '';
    if (currentLang === 'en') {
      return obj[field];
    }
    const suffix = currentLang.charAt(0).toUpperCase() + currentLang.slice(1); // 'Fr', 'Es', 'It'
    const localizedField = `${field}${suffix}`;
    if (obj[localizedField] !== undefined && obj[localizedField] !== null) {
      if (Array.isArray(obj[localizedField])) {
        if (obj[localizedField].length > 0) {
          return obj[localizedField];
        }
      } else if (obj[localizedField].toString().trim() !== '') {
        return obj[localizedField];
      }
    }
    return obj[field];
  };

  return { getLocalized, currentLang };
}
