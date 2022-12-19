import { LOCALE_STORAGE_AUTH_KEY } from 'constants/localeStorageAuth';
import { Navigate } from 'react-router-dom';

interface PublicRouteProps {
  restricted?: boolean;
  redirectTo?: string;
  component: JSX.Element;
}

function PublicRoute({
  restricted = false,
  redirectTo = '/',
  component: Component,
}: PublicRouteProps) {
  const isLoggedIn = Boolean(localStorage.getItem(LOCALE_STORAGE_AUTH_KEY));
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}

export default PublicRoute;
