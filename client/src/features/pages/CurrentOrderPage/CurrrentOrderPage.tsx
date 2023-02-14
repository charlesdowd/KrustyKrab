import { FunctionComponent } from 'react';
import Button from '../../../components/Button/Button';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import {
  removeItem,
  selectCurrentOrder,
} from '../../../store/slices/orderSlice';
import { Root, OrderItemRow } from './CurrentOrderPage.styled';
import PendingApprovalBanner from './PendingApprovalBanner';
import SubmitSection from './SubmitSection';

const CurrentOrderPage: FunctionComponent = () => {
  const dispatch = useAppDispatch();

  const currentOrder = useAppSelector(selectCurrentOrder);

  return (
    <Root>
      <h1 className='mb-4'>Current Order</h1>
      <PendingApprovalBanner />
      {currentOrder?.map(({ product, quantity }) => (
        <OrderItemRow key={product}>
          <div>Product: {product}</div>
          <div>Quantity: {quantity}</div>
          <Button
            variant='danger'
            onClick={() => dispatch(removeItem({ product: product }))}
          >
            Remove from order
          </Button>
        </OrderItemRow>
      ))}
      <SubmitSection />
    </Root>
  );
};

export default CurrentOrderPage;
