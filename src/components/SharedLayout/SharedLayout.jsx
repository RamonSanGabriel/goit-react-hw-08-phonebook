import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Footer from '../Footer/Footer';
import { Header } from '../Header/Header';

export const SharedLayout = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={null} />
      <Outlet />
      <Suspense />
      <Footer />
    </div>
  );
};
