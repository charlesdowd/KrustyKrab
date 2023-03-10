import { FunctionComponent } from 'react';
import { Root, ItemText, OrderItemRow, OrderDate } from './OrderRow.styled';
import { Order } from '../../store/slices/api/templateApi.generated';

interface OrderRowProps {
  order: Order;
  className?: string;
}

const OrderRow: FunctionComponent<OrderRowProps> = ({ order, className }) => {
  const { orderItems } = order;

  return (
    <Root className={className}>
      {orderItems?.map((orderItem) => (
        <OrderItemRow key={orderItem.description}>
          <ItemText>{orderItem.description}</ItemText>
          <ItemText>{orderItem.quantity}</ItemText>
        </OrderItemRow>
      ))}
      <OrderDate>
        {new Date(order.createdAt).toLocaleDateString('en-US')}
      </OrderDate>
    </Root>
  );
};

export default OrderRow;
