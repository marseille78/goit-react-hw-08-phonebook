import { Suspense } from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div  style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <Header />
      <Suspense>
        <Outlet/>
      </Suspense>
    </div>
  );
};
