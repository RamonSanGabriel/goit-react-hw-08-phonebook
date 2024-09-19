import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleRegisterSubmit = e => {
    e.preventDefault();

    const registerForm = e.currentTarget;
    dispatch(
      register({
        name: registerForm.elements.name.value,
        email: registerForm.elements.email.value,
        password: registerForm.elements.password.value,
      })
    );
    registerForm.reset();
  };

  return (
    <form
      className={css.form}
      onSubmit={handleRegisterSubmit}
      autoComplete="off"
    >
      <label className={css.label}>
        Username
        <input className={css.registerFormInput} type="text" email="name" />
      </label>

      <label className={css.label}>
        Email
        <input className={css.registerFormInput} type="email" email="email" />
      </label>

      <label className={css.label}>
        Password
        <input
          className={css.registerFormInput}
          type="password"
          email="password"
        />
      </label>

      <button className={css.registerFromBtn} type="submit">
        Register
      </button>
    </form>
  );
};
