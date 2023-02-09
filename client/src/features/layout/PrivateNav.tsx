import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useSendLogoutMutation } from '../../store/slices/api/templateApi';
import { logOut, selectUser } from '../../store/slices/authSlice';
import { NavRoot, NavHome, NavItem } from './Layout.styled';

const PublicNav = () => {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const [sendLogout, { isSuccess, isError }] = useSendLogoutMutation();

  // TODO: Change to new extraReducer pattern
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

      <NavItem to='/products'>
        <Button>Products</Button>
      </NavItem>

      {user?.isAdmin && (
        <NavItem to='/admin'>
          <Button>Admin</Button>
        </NavItem>
      )}

      <Button onClick={() => sendLogout()}>Logout</Button>
    </NavRoot>
  );
};

export default PublicNav;
