import { Outlet, Link } from 'react-router-dom';

/*
If we wanted to wrap our App in something like a container or a Nav bar 
or something else, we could wrap the outlet component with it.
*/
const Layout = () => {
  return (
    <div>
      <nav>
        <Link to='/login' className='m-2'>
          Login
        </Link>
        <Link to='/' className='m-2'>
          Home
        </Link>
      </nav>
      <h1>Header</h1>
      <Outlet />
      <div>
        <h2>Footer</h2>
      </div>
    </div>
  );
};

export default Layout;
