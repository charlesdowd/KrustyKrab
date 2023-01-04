import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import { Root, Footer } from './Layout.styled';

/*
If we wanted to wrap our App in something like a container or a Nav bar 
or something else, we could wrap the outlet component with it.
*/
const Layout = () => {
  return (
    <Root>
      <NavBar />
      <Outlet />
      <Footer>
        <h1>Footer</h1>
      </Footer>
    </Root>
  );
};

export default Layout;
