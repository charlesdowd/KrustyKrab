import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import { selectUser } from '../../store/slices/authSlice';

const SetPasswordGuard = () => {
  const user = useAppSelector(selectUser);
  const navigate = useNavigate();

  // Only allow a user on this page if they are email verified, we have them
  // saved in our redux store and they have no password saved yet

  // Protect this page from users who should not be here
  useEffect(() => {
    if (!user || user.password || !user.emailVerified) navigate('/');
  }, []);

  return <Outlet />;
};

export default SetPasswordGuard;
