import { RegisterForm } from '../../RegisterForm/RegisterForm';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const RegisterPage = () => {
  return (
    <div style={{ padding: '20px' }}>
      {/* {''} */}
      <HelmetProvider>
        <Helmet>
          <title>Registration</title>
        </Helmet>
        <RegisterForm />
      </HelmetProvider>
    </div>
  );
};
export default RegisterPage;
