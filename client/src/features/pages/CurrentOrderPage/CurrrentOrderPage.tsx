import { FunctionComponent } from 'react';
import Button from '../../../components/Button/Button';
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { useCreateOrderMutation } from '../../../store/slices/api/templateApi';
import {
  removeItem,
  selectCurrentOrder,
} from '../../../store/slices/orderSlice';
import { Root, OrderItemRow } from './CurrentOrderPage.styled';

const CurrentOrderPage: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const currentOrder = useAppSelector(selectCurrentOrder);

  const [submitOrder, { isLoading }] = useCreateOrderMutation();

  return (
    <Root>
      <h1>Current Order Page</h1>
      {currentOrder?.map((orderItem) => (
        <OrderItemRow key={orderItem.product}>
          <div>Product: {orderItem.product}</div>
          <div>Quantity: {orderItem.quantity}</div>
          <Button
            variant='danger'
            onClick={() => dispatch(removeItem({ product: orderItem.product }))}
          >
            Remove from order
          </Button>
        </OrderItemRow>
      ))}
      {currentOrder.length > 0 ? (
        <Button
          loading={isLoading}
          onClick={() => submitOrder({ body: { orderItems: currentOrder } })}
        >
          Submit Order
        </Button>
      ) : (
        <h4>
          You do not have any products in your current order. Visit the{' '}
          <NavLink to='/products'>Products Page</NavLink> to add to your current
          order
        </h4>
      )}
    </Root>
  );
};

export default CurrentOrderPage;
