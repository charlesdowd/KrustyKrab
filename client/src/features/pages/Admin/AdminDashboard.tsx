import { Link } from 'react-router-dom';
import { Root } from '../Dashboard/Dashboard.styled';
import { ButtonDiv, CustomButton } from '../LandingPage/LandingPage.styled';

const AdminDashboard = () => {
  return (
    <Root>
      <h1>Admin Dashboard</h1>
      <div className='mt-4'>
        <ButtonDiv>
          <Link to='/admin/approve-accounts'>
            <CustomButton>Approve Accounts</CustomButton>
          </Link>
          <Link to='/admin/orders'>
            <CustomButton>Order History</CustomButton>
          </Link>
        </ButtonDiv>
      </div>
    </Root>
  );
};

export default AdminDashboard;
