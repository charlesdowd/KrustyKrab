import { Root } from './Dashboard.styled';
import { selectUser } from '../../../store/slices/authSlice';
import { useAppSelector } from '../../../store/hooks';

const Dashboard = () => {
  const user = useAppSelector(selectUser);

  return (
    <Root>
      <h1>Dashboard</h1>
      <div>
        <h2>Profile: {user?.email}</h2>
      </div>
    </Root>
  );
};

export default Dashboard;
