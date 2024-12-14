import { Country } from '../types/quiz';
import axios from 'axios';

export const countries: Country[] = [
  { code: '+380', name: '🇺🇦', format: '__ ___ __ __' },
  { code: '+971', name: '🇦🇪', format: '__ ___ ____' },
  { code: '+48', name: '🇵🇱', format: '___ ___ ___' },
  { code: '+43', name: '🇦🇹', format: '___ ___ ____' },
  { code: '+32', name: '🇧🇪', format: '___ ___ ____' },
  { code: '+359', name: '🇧🇬', format: '___ ___ ____' },
  { code: '+385', name: '🇭🇷', format: '___ ___ ____' },
  { code: '+357', name: '🇨🇾', format: '___ ___ ____' },
  { code: '+420', name: '🇨🇿', format: '___ ___ ___' },
  { code: '+45', name: '🇩🇰', format: '___ ___ ___' },
  { code: '+372', name: '🇪🇪', format: '___ ____' },
  { code: '+358', name: '🇫🇮', format: '___ ___ ____' },
  { code: '+33', name: '🇫🇷', format: '___ ___ ____' },
  { code: '+49', name: '🇩🇪', format: '___ ___ ____' },
  { code: '+30', name: '🇬🇷', format: '___ ___ ____' },
  { code: '+36', name: '🇭🇺', format: '___ ___ ____' },
  { code: '+354', name: '🇮🇸', format: '___ ____' },
  { code: '+353', name: '🇮🇪', format: '___ ___ ____' },
  { code: '+39', name: '🇮🇹', format: '___ ___ ____' },
  { code: '+371', name: '🇱🇻', format: '___ ____' },
  { code: '+370', name: '🇱🇹', format: '___ ____' },
  { code: '+352', name: '🇱🇺', format: '___ ___ ____' },
  { code: '+356', name: '🇲🇹', format: '___ ____' },
  { code: '+31', name: '🇳🇱', format: '___ ___ ____' },
  { code: '+47', name: '🇳🇴', format: '___ ___ ___' },
  { code: '+351', name: '🇵🇹', format: '___ ___ ____' },
  { code: '+40', name: '🇷🇴', format: '___ ___ ____' },
  { code: '+421', name: '🇸🇰', format: '___ ___ ___' },
  { code: '+386', name: '🇸🇮', format: '___ ___ ___' },
  { code: '+34', name: '🇪🇸', format: '___ ___ ____' },
  { code: '+46', name: '🇸🇪', format: '___ ___ ___' },
  { code: '+41', name: '🇨🇭', format: '___ ___ ____' },
  { code: '+44', name: '🇬🇧', format: '____ ______' },
  { code: 'custom', name: '🌍', format: '___________' }
];

export const isCustomCountry = (code: string) => code === 'custom';

export async function getCountryByIP(): Promise<Country> {
  try {
    const response = await axios.get('https://ipapi.co/json/');
    const countryPhone = response.data.country_calling_code;
    return countries.find(country => country.code === countryPhone) || countries[0];
  } catch (error) {
    console.error('Error fetching country by IP:', error);
    return countries[0];
  }
}