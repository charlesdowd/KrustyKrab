import { FunctionComponent } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layouts';
import Public from './components/Public';
import Login from './components/Login';
import { useGetUserQuery } from './store/slices/base/templateApi';

const App: FunctionComponent = () => {
  const { data: userData } = useGetUserQuery();
  console.log('USERS: ', userData);
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Public />} />
        <Route path='login' element={<Login />} />
      </Route>
    </Routes>
  );
};

export default App;
