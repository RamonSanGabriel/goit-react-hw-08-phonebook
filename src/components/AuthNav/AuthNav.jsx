import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div className={css.header}>
      <nav className={css.header}>
        <NavLink
          to="/register"
          className={({ isActive }) => (isActive ? css.linkActive : css.link)}
        >
          Register
        </NavLink>

        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? css.linkActive : css.link)}
        >
          Login
        </NavLink>
      </nav>
    </div>
  );
};
