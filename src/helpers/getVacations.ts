import { LOCALE_STORAGE_KEY } from 'constants/localeStorage';

const getVacations = () =>
  JSON.parse(localStorage.getItem(LOCALE_STORAGE_KEY) || '[]');

export default getVacations;
