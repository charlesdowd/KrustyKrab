import { Root } from './Dashboard.styled';
import { selectUser } from '../../../store/slices/authSlice';
import { useAppSelector } from '../../../store/hooks';
import { useGetOrdersQuery } from '../../../store/slices/api/templateApi';
import { Order } from '../../../store/slices/api/templateApi.generated';

const Dashboard = () => {
  const user = useAppSelector(selectUser);

  const { data } = useGetOrdersQuery();

  const orders: Order[] = data?.orders;

  return (
    <Root>
      <h1>Dashboard</h1>
      <div>
        <h2>Profile: {user?.email}</h2>
      </div>
      <div className='m-4'>
        <h2>Order History</h2>
        {orders?.map((order) => (
          <div
            key={order._id}
            className='mt-4'
            style={{ borderBottom: '3px solid black', width: '100%' }}
          >
            <div>Order ID: {order._id}</div>
            {order?.orderItems?.map((orderItem) => (
              <div
                key={orderItem.description}
                style={{ display: 'flex', justifyContent: 'space-between' }}
              >
                <div>{orderItem.description}</div>
                <div>{orderItem.quantity}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Root>
  );
};

export default Dashboard;
