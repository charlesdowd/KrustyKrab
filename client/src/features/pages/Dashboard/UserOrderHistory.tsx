import { FunctionComponent } from 'react';
import { HistoryRoot, OrderRow } from './Dashboard.styled';
import { useGetOrdersQuery } from '../../../store/slices/api/templateApi';
import { Order } from '../../../store/slices/api/templateApi.generated';

const UserOrderHistory: FunctionComponent = () => {
  const { data } = useGetOrdersQuery();

  const orders: Order[] = data?.orders;
  if (!orders) return <div>..Loading</div>;

  return (
    <HistoryRoot className='m-4'>
      <h2>Order History</h2>
      {orders.map((order) => (
        <OrderRow key={order._id} className='mt-4'>
          <div>
            Order Date: {new Date(order.createdAt).toLocaleDateString('en-US')}
          </div>
          {order?.orderItems?.map((orderItem) => (
            <div
              key={orderItem.description}
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <div>Product: {orderItem.description}</div>
              <div>Quantity: {orderItem.quantity}</div>
            </div>
          ))}
        </OrderRow>
      ))}
    </HistoryRoot>
  );
};

export default UserOrderHistory;
