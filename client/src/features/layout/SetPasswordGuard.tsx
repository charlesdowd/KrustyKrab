import { Outlet, Navigate } from 'react-router-dom';
import { isSettingPassword } from '../../store/hooks';

const SetPasswordGuard = () => {
  const settingPassword = isSettingPassword();

  // Protect this page from users who should not be here
  if (!settingPassword) return <Navigate to='/' replace />;

  return <Outlet />;
};

export default SetPasswordGuard;
