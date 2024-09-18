import RegisterForm from 'components/RegisterForm/RegisterForm';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const RegisterPage = () => {
  return (
    <div style={{ padding: '20px' }}>
      {''}
      <HelmetProvider>
        <Helmet>
          <title>Registration Page</title>
        </Helmet>
        <RegisterForm />
      </HelmetProvider>
    </div>
  );
};
export default RegisterPage;
