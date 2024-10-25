import css from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={css.container}>
      &copy; {new Date().getFullYear()} Developed by Ramon San Gabriel
    </footer>
  );
};

export default Footer;
