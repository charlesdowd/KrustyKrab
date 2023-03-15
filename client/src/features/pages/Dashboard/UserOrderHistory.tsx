import { FunctionComponent } from 'react';
import {
  HistoryRoot,
  DescriptionHeader,
  QuantityHeader,
  DateHeader,
  Headers,
  Title,
  EmptyHistoryDiv,
} from './Dashboard.styled';
import { EmptyOrderText } from '../CurrentOrderPage/CurrentOrderPage.styled';
import EmptyOrderIcon from '../../../assets/empty-order-icon.svg';
import { useGetOrdersQuery } from '../../../store/slices/api/templateApi';
import { Order } from '../../../store/slices/api/templateApi.generated';
import OrderRow from '../../../components/OrderRow/OrderRow';
import { NavLink } from 'react-router-dom';

const UserOrderHistory: FunctionComponent = () => {
  const { data } = useGetOrdersQuery();

  const orders: Order[] = data?.orders;
  if (!orders) return <div>..Loading</div>;

  if (!orders.length)
    return (
      <HistoryRoot>
        <EmptyHistoryDiv>
          <img src={EmptyOrderIcon} height={56} />
          <EmptyOrderText>
            No orders yet. Check the{' '}
            <NavLink to='/products'>products page</NavLink> and make your first
            order
          </EmptyOrderText>
        </EmptyHistoryDiv>
      </HistoryRoot>
    );

  return (
    <HistoryRoot>
      <Title>Order History</Title>
      <Headers>
        <DescriptionHeader>Description</DescriptionHeader>
        <QuantityHeader>Quantity</QuantityHeader>
        <DateHeader>Order Placed</DateHeader>
      </Headers>
      {orders.map((order) => (
        <OrderRow order={order} key={order._id} className='mt-4' />
      ))}
    </HistoryRoot>
  );
};

export default UserOrderHistory;
