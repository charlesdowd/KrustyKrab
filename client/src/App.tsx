import { FunctionComponent } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import PublicLayout from './features/layout/PublicLayout';
import PrivateLayout from './features/layout/PrivateLayout';
import LandingPage from './features/pages/LandingPage/LandingPage';
import Login from './features/auth/Login/Login';
import SignUp from './features/auth/SignUp/SignUp';
import Dashboard from './features/pages/Dashboard/Dashboard';
import UserPage from './features/pages/UserPage';
import VerifyEmail from './features/auth/VerifyEmail';
import SetPassword from './features/auth/SetPassword/SetPassword';
import ProductsPage from './features/pages/ProductsPage';

/*
  <PublicLayout> and <PrivateLayout> components handle redirects based on 
  whether the user is logged in or not.
*/

const App: FunctionComponent = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<PublicLayout />}>
        <Route path='landing' element={<LandingPage />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='verify-email' element={<VerifyEmail />} />
      </Route>

      {/* This route is special and will redirect elsewhere if user should not be here */}
      <Route path='set-password' element={<SetPassword />} />

      {/* Private Routes */}
      <Route path='/' element={<PrivateLayout />}>
        <Route index element={<Dashboard />} />
        <Route path='users' element={<UserPage />} />
        <Route path='products' element={<ProductsPage />} />
      </Route>

      {/* Catch other routes and send them to correct page. TODO: add 404 page */}
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
};

export default App;
