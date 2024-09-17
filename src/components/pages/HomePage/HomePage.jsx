import { Helmet, HelmetProvider } from 'react-helmet-async';

const HomePage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <div>
        <h1>Welcome to Home Page </h1>
      </div>
    </HelmetProvider>
  );
};

export default HomePage;
