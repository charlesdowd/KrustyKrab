import { Button } from 'react-bootstrap';
import { NavRoot, NavHome, NavItem } from './Layout.styled';

const PublicNav = () => {
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
