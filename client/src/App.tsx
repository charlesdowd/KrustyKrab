import { FunctionComponent } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import PublicLayout from './components/Layout/PublicLayout';
import PrivateLayout from './components/Layout/PrivateLayout';
import Public from './components/Public/Public';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Dashboard from './components/Dashboard/Dashboard';
import UserPage from './components/UserPage';

/*
  <PublicLayout> and <PrivateLayout> components handle redirects based on 
  whether the user is logged in or not.
*/

const App: FunctionComponent = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<PublicLayout />}>
        <Route path='landing' element={<Public />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp />} />
      </Route>

      {/* Private Routes */}
      <Route path='/' element={<PrivateLayout />}>
        <Route index element={<Dashboard />} />
        <Route path='users' element={<UserPage />} />
      </Route>

      {/* Cath other routes and send them to correct page. TODO: add 404 page */}
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
};

export default App;
