import { LoginForm } from 'components/LoginForm/LoginForm';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const LoginPage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <HelmetProvider>
        <Helmet>
          <title>Login Page</title>
        </Helmet>
        <LoginForm />
      </HelmetProvider>
    </div>
  );
};

export default LoginPage;
