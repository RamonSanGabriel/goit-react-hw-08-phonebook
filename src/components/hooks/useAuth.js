import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefresh,
  selectUser,
} from '../../redux/auth/authSelector';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefresh = useSelector(selectIsRefresh);
  const user = useSelector(selectUser);

  return { isLoggedIn, isRefresh, user };
};
