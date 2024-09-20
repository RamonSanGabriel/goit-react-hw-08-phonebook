import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleRegisterSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <form
      className={css.form}
      onSubmit={handleRegisterSubmit}
      autoComplete="off"
    >
      <label className={css.label}>
        Username
        <input className={css.registerFormInput} type="text" name="name" />
      </label>

      <label className={css.label}>
        Email
        <input className={css.registerFormInput} type="email" name="email" />
      </label>

      <label className={css.label}>
        Password
        <input
          className={css.registerFormInput}
          type="password"
          name="password"
        />
      </label>

      <button type="submit">Register</button>
    </form>
  );
};
