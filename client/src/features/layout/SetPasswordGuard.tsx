import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { settingPassword } from '../../store/hooks';

const SetPasswordGuard = () => {
  const navigate = useNavigate();

  // Protect this page from users who should not be here
  useEffect(() => {
    if (!settingPassword()) navigate('/');
  }, []);

  return <Outlet />;
};

export default SetPasswordGuard;
