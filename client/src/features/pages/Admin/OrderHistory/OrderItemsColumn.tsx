import { FunctionComponent } from 'react';
import { OrderItemRow } from './AdminOrderHistory.styled';
import { OrderItem } from '../../../../store/slices/api/templateApi.generated';

interface OrderItemsColumnProps {
  orderItems: OrderItem[];
}

const OrderItemsColumn: FunctionComponent<OrderItemsColumnProps> = ({
  orderItems,
}) => {
  return (
    <>
      {orderItems?.map((orderItem) => (
        <OrderItemRow key={orderItem.product}>
          <div>Item: {orderItem.description}</div>
          <div>Quantity: {orderItem.quantity}</div>
        </OrderItemRow>
      ))}
    </>
  );
};

export default OrderItemsColumn;
