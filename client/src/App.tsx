import { FunctionComponent, useEffect } from 'react';
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
import ProductsPage from './features/pages/ProductsPage/ProductsPage';
import SetPasswordGuard from './features/layout/SetPasswordGuard';
import VerifyEmailGuard from './features/layout/VerifyEmailGuard';
import AdminGuard from './features/layout/AdminGuard';
import AdminDashboard from './features/pages/Admin/AdminDashboard';
import ApproveAccounts from './features/pages/Admin/ApproveAccounts';
import { useGetUserQuery } from './store/slices/api/templateApi';
import { isLoggedIn } from './store/hooks';

/*
  Layout and Guard wrapper routes help redirect user to correct route
*/

const App: FunctionComponent = () => {
  const loggedIn = isLoggedIn();

  // Currently we do not use the data returned from the getUserQuery since we
  // are setting the auth.user in our redux store in our extraReducer.
  // We could pass it to some of our components if we wanted to but are not
  // using that pattern. We use selectors to get the auth.user state instead.
  useGetUserQuery(null, {
    skip: !loggedIn,
  });

  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<PublicLayout />}>
        <Route path='landing' element={<LandingPage />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp />} />
      </Route>

      {/* Unique Routes with their own guards*/}
      <Route element={<VerifyEmailGuard />}>
        <Route path='verify-email' element={<VerifyEmail />} />
      </Route>
      <Route element={<SetPasswordGuard />}>
        <Route path='set-password' element={<SetPassword />} />
      </Route>

      {/* Private Routes */}
      <Route element={<PrivateLayout />}>
        <Route index element={<Dashboard />} />
        <Route path='users' element={<UserPage />} />
        <Route path='products' element={<ProductsPage />} />

        {/* Admin Routes inside of PrivateLayout (PrivateNav is included) */}
        <Route path='admin' element={<AdminGuard />}>
          <Route index element={<AdminDashboard />} />
          <Route path='approve-accounts' element={<ApproveAccounts />} />
        </Route>
      </Route>

      {/* Catch other routes and send them to correct page. TODO: add 404 page */}
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
};

export default App;
