import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { Root } from './Layout.styled';
import { isLoggedIn, isSettingPassword } from '../../store/hooks';

/*
If we wanted to wrap our App in something like a container or a Nav bar 
or something else, we could wrap the outlet component with it.
*/
const PublicGuard = () => {
  const location = useLocation();
  const loggedIn = isLoggedIn();
  const settingPassword = isSettingPassword();

  // If the user is logged in, redirect them to home page or where they tried going to before logging in
  if (loggedIn)
    return <Navigate to={location.state ? location.state.from : '/'} replace />;

  // If user needs to set their password send them to that page
  if (settingPassword) return <Navigate to='set-password' replace />;

  return (
    <Root>
      <Outlet />
    </Root>
  );
};

export default PublicGuard;