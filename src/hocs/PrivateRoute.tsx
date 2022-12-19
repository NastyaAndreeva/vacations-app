import { LOCALE_STORAGE_AUTH_KEY } from 'constants/localeStorageAuth';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  redirectTo?: string;
  component: JSX.Element;
}

function PrivateRoute({
  redirectTo = '/',
  component: Component,
}: PrivateRouteProps) {
  const isLoggedIn =
    localStorage.getItem(LOCALE_STORAGE_AUTH_KEY) ||
    sessionStorage.getItem(LOCALE_STORAGE_AUTH_KEY);
  return !isLoggedIn ? <Navigate to={redirectTo} /> : Component;
}

export default PrivateRoute;
