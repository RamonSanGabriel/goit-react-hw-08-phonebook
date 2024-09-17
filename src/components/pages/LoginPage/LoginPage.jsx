import { Helmet, HelmetProvider } from 'react-helmet-async';

const LoginPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Login Page</title>
      </Helmet>
    </HelmetProvider>
  );
};

export default LoginPage;
