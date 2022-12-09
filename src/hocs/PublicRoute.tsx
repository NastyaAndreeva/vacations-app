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
  const isLoggedIn = Boolean(localStorage.getItem('user'));
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}

export default PublicRoute;
