import { Outlet, Navigate } from 'react-router-dom';

import { isLoggedIn } from '../../store/hooks';

import PrivateNav from './PrivateNav';
import { Root, Footer } from './Layout.styled';

const PrivateLayout = () => {
  console.log('INSIDE PRIVATE LAYOUT');

  // If user is not logged in, send them to home page
  if (!isLoggedIn()) return <Navigate to='/landing' replace />;

  return (
    <Root>
      <PrivateNav />
      <Outlet />
      <Footer>
        <h1>Footer</h1>
      </Footer>
    </Root>
  );
};

export default PrivateLayout;
