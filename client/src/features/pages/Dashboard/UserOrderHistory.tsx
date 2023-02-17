import { FunctionComponent } from 'react';
import { useGetOrdersQuery } from '../../../store/slices/api/templateApi';
import { Order } from '../../../store/slices/api/templateApi.generated';

const UserOrderHistory: FunctionComponent = () => {
  const { data } = useGetOrdersQuery();

  const orders: Order[] = data?.orders;
  if (!orders) return <div>..Loading</div>;

  return (
    <div className='m-4'>
      <h2>Order History</h2>
      {orders.map((order) => (
        <div
          key={order._id}
          className='mt-4'
          style={{ borderBottom: '3px solid black', width: '100%' }}
        >
          <div>
            Order Date: {new Date(order.createdAt).toLocaleDateString('en-US')}
          </div>
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
  );
};

export default UserOrderHistory;
