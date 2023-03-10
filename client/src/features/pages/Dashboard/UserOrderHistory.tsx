import { FunctionComponent } from 'react';
import {
  HistoryRoot,
  DescriptionHeader,
  QuantityHeader,
  DateHeader,
  Headers,
  Title,
} from './Dashboard.styled';
import { useGetOrdersQuery } from '../../../store/slices/api/templateApi';
import { Order } from '../../../store/slices/api/templateApi.generated';
import OrderRow from '../../../components/OrderRow/OrderRow';

const UserOrderHistory: FunctionComponent = () => {
  const { data } = useGetOrdersQuery();

  const orders: Order[] = data?.orders;
  if (!orders) return <div>..Loading</div>;

  return (
    <HistoryRoot>
      <Title>Order History</Title>
      <Headers>
        <DescriptionHeader>Description</DescriptionHeader>
        <QuantityHeader>Quantity</QuantityHeader>
        <DateHeader>Date</DateHeader>
      </Headers>
      {orders.map((order) => (
        <OrderRow order={order} key={order._id} className='mt-4' />
      ))}
    </HistoryRoot>
  );
};

export default UserOrderHistory;
