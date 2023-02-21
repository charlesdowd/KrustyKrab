import { Outlet, Navigate, useLocation } from 'react-router-dom';

import { isLoggedIn } from '../../store/hooks';

import PrivateNav from './PrivateNav';
import { Root, Footer } from './Layout.styled';

const PrivateLayout = () => {
  // Save location to redirect user to where they wanted to go after logging in
  const location = useLocation();

  // If user is not logged in, send them to home page
  if (!isLoggedIn())
    return <Navigate to='/login' replace state={{ from: location }} />;

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
