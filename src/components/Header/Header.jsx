import { Navigation } from '../Navigation/Navigation';
import { AuthNav } from '../AuthNav/AuthNav';
import { UserMenu } from '../UserMenu/UserMenu';
import { useAuth } from '../hooks/useAuth';
import css from './Header.module.css';

export const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header className={css.headerstyle}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
