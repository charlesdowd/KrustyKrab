import { Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { NavRoot, NavHome, NavItem } from './Layout.styled';

const PublicNav = () => {
  const location = useLocation();

  // Dont render nav if we are on the landing page
  if (location.pathname === '/landing') return null;

  return (
    <NavRoot>
      <NavHome to='/landing'>
        <Button>Home</Button>
      </NavHome>

      <NavItem to='/login'>
        <Button>Login</Button>
      </NavItem>

      <NavItem to='/signup'>
        <Button>Sign Up</Button>
      </NavItem>
    </NavRoot>
  );
};

export default PublicNav;
