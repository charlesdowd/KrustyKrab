import { Outlet, Navigate } from 'react-router-dom';
import PublicNav from './PublicNav';
import { Root, Footer } from './Layout.styled';
import { isLoggedIn, isSettingPassword } from '../../store/hooks';

/*
If we wanted to wrap our App in something like a container or a Nav bar 
or something else, we could wrap the outlet component with it.
*/
const PublicLayout = () => {
  const loggedIn = isLoggedIn();
  const settingPassword = isSettingPassword();

  // If the user is logged in, redirect them to home page
  if (loggedIn) return <Navigate to='/' replace />;

  // If user needs to set their password send them to that page
  if (settingPassword) return <Navigate to='set-password' replace />;

  return (
    <Root>
      <PublicNav />
      <Outlet />
      <Footer>
        <h1>Footer</h1>
      </Footer>
    </Root>
  );
};

export default PublicLayout;
