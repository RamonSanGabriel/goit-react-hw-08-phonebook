import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  // in Destructuring these means:
  // colon : is giving a new name
  // = gives a default value
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
