import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Root } from '../Dashboard/Dashboard.styled';

const AdminDashboard = () => {
  return (
    <Root>
      <h1>Admin Dashboard</h1>
      <div className='mt-4'>
        <div className='mt-4'>
          <Link to='/admin/approve-accounts'>
            <Button>Approve Accounts</Button>
          </Link>
          <Link to='/admin/orders'>
            <Button>Order History</Button>
          </Link>
        </div>
      </div>
    </Root>
  );
};

export default AdminDashboard;
