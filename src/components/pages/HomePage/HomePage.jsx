import { Helmet, HelmetProvider } from 'react-helmet-async';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <div className={css.container}>
        <h1>
          Welcome to <span className={css.spanPhone}>Phone</span>
          <span className={css.spanBook}>book</span>
        </h1>
      </div>
    </HelmetProvider>
  );
};

export default HomePage;
