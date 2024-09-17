import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

/* if the route is private and the user is logged in, render the component. Otherwise render <Navigate> to redirectTo */

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefresh } = useAuth();
  const toRedirect = !isLoggedIn && !isRefresh;

  return toRedirect ? <Navigate to={redirectTo} /> : Component;
};
