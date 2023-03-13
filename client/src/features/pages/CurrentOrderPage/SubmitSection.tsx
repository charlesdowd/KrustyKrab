import { NavLink } from 'react-router-dom';
import { useCreateOrderMutation } from '../../../store/slices/api/templateApi';
import { isApproved, useAppSelector } from '../../../store/hooks';
import { selectCurrentOrder } from '../../../store/slices/orderSlice';
import { HalfWidthButton } from './CurrentOrderPage.styled';

const SubmitSection = () => {
  const currentOrder = useAppSelector(selectCurrentOrder);
  const approved = isApproved();

  const [submitOrder, { isLoading }] = useCreateOrderMutation();

  return (
    <>
      {currentOrder.length > 0 ? (
        <HalfWidthButton
          loading={isLoading}
          disabled={!approved}
          onClick={() => submitOrder({ body: { orderItems: currentOrder } })}
        >
          Submit Order
        </HalfWidthButton>
      ) : (
        <div>
          <h4 className='mt-5'>
            You do not have any products in your current order. Visit the{' '}
            <NavLink to='/products'>Products Page</NavLink> to add to your
            current order
          </h4>
        </div>
      )}
    </>
  );
};

export default SubmitSection;
