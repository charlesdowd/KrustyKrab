import { Root } from './Dashboard.styled';
import UserOrderHistory from './UserOrderHistory';

const Dashboard = () => {
  return (
    <Root>
      <h1 className='mb-4'>Dashboard</h1>
      <UserOrderHistory />
    </Root>
  );
};

export default Dashboard;
