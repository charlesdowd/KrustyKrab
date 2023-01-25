import { FunctionComponent } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useGetUsersQuery } from './store/slices/api/templateApi';
import Layout from './components/Layout/Layout';
import Public from './components/Public/Public';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import SetPassword from './components/SetPassword/SetPassword';

const App: FunctionComponent = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Public />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='setPassword' element={<SetPassword />} />
      </Route>
    </Routes>
  );
};

export default App;
