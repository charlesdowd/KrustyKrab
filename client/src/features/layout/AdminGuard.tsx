import { Outlet, Navigate } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import { selectUser } from '../../store/slices/authSlice';

const AdminGuard = () => {
  const user = useAppSelector(selectUser);

  // Redirect user if they are not an admin - !user.isAdmin caused issues
  if (user && !user.isAdmin) {
    return <Navigate to='/' replace />;
  }

  return <Outlet />;
};

export default AdminGuard;
