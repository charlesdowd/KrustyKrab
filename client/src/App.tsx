import { FunctionComponent } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useGetUserQuery } from './store/slices/base/templateApi';
import Layout from './components/Layout/Layout';
import Public from './components/Public/Public';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';

const App: FunctionComponent = () => {
  const { data: userData } = useGetUserQuery();
  console.log('USERS: ', userData);
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Public />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp />} />
      </Route>
    </Routes>
  );
};

export default App;
