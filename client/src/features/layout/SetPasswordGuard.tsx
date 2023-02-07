import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import { selectUser } from '../../store/slices/authSlice';

const SetPasswordGuard = () => {
  const user = useAppSelector(selectUser);
  const navigate = useNavigate();

  // Protect this page from users who should not be here
  useEffect(() => {
    if (!user || user.password) navigate('/');
  }, []);

  return <Outlet />;
};

export default SetPasswordGuard;
