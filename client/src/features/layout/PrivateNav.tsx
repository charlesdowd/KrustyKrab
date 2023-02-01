import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useAppDispatch } from '../../store/hooks';
import { useSendLogoutMutation } from '../../store/slices/api/templateApi';
import { logOut } from '../../store/slices/authSlice';
import { NavRoot, NavHome, NavItem } from './Layout.styled';

const PublicNav = () => {
  const dispatch = useAppDispatch();
  const [sendLogout, { isSuccess, isError }] = useSendLogoutMutation();

  // Handles logout success and failure
  useEffect(() => {
    if (isSuccess) {
      console.log('LOGOUT SUCCESS!'); // TODO: replace with toast notification
      // Clear auth token in redux
      dispatch(logOut());
    }
    if (isError) {
      console.log('LOGOUT FAILURE'); // TODO: replace with toast notification
    }
  }, [isSuccess, isError]);

  return (
    <NavRoot>
      <NavHome to='/'>
        <Button>Dashboard</Button>
      </NavHome>

      <NavItem to='/users'>
        <Button>Users</Button>
      </NavItem>

      <Button onClick={() => sendLogout()}>Logout</Button>
    </NavRoot>
  );
};

export default PublicNav;
