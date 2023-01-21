import { Button } from 'react-bootstrap';
import { NavRoot, NavHome, NavItem } from './Layout.styled';

const NavBar = () => {
  return (
    <NavRoot>
      <NavHome to='/'>
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

export default NavBar;
