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
    localStorage.getItem('user') || sessionStorage.getItem('user');
  return !isLoggedIn ? <Navigate to={redirectTo} /> : Component;
}

export default PrivateRoute;
