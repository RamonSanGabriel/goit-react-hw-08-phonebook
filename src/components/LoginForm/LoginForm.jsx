import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/authOperations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleLoginSubmit = e => {
    e.preventDefault();

    const loginForm = e.currentTarget;
    dispatch(
      logIn({
        email: loginForm.elements.email.value,
        password: loginForm.elements.password.value,
      })
    );
    loginForm.reset();
  };

  return (
    <form className={css.form} onSubmit={handleLoginSubmit} autoComplete="off">
      <label className={css.label}>
        Email
        <input className={css.loginFormInput} type="email" name="email" />
      </label>

      <label className={css.label}>
        Password
        <input className={css.loginFormInput} type="password" name="password" />
      </label>

      <button className={css.loginBtn} type="submit">
        Log In
      </button>
    </form>
  );
};
