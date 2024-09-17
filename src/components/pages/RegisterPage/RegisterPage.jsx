import { Helmet, HelmetProvider } from 'react-helmet-async';

const RegisterPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Registration Page</title>
      </Helmet>
      {/* <RegisterForm/> */}
    </HelmetProvider>
  );
};
export default RegisterPage;
