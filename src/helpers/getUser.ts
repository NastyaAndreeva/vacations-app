import { LOCALE_STORAGE_AUTH_KEY } from 'constants/localeStorageAuth';

const getUser = () =>
  localStorage.getItem(LOCALE_STORAGE_AUTH_KEY) ||
  sessionStorage.getItem(LOCALE_STORAGE_AUTH_KEY);

export default getUser;
