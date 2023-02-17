import { FunctionComponent } from 'react';
import { OrderItem } from '../../../../store/slices/api/templateApi.generated';

interface OrderItemsColumnProps {
  orderItems: OrderItem[];
}

const OrderItemsColumn: FunctionComponent<OrderItemsColumnProps> = ({
  orderItems,
}) => {
  return (
    <div style={{ display: 'flex' }}>
      {orderItems?.map((orderItem) => (
        <div key={orderItem.product}>
          <div>Item: {orderItem.description}</div>
          <div>Quantity: {orderItem.quantity}</div>
        </div>
      ))}
    </div>
  );
};

export default OrderItemsColumn;
