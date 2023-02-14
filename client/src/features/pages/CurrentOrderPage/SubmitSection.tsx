import { NavLink } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import { useCreateOrderMutation } from '../../../store/slices/api/templateApi';
import { isApproved, useAppSelector } from '../../../store/hooks';
import { selectCurrentOrder } from '../../../store/slices/orderSlice';

const SubmitSection = () => {
  const currentOrder = useAppSelector(selectCurrentOrder);
  const approved = isApproved();

  const [submitOrder, { isLoading }] = useCreateOrderMutation();

  return (
    <>
      {currentOrder.length > 0 ? (
        <Button
          loading={isLoading}
          disabled={!approved}
          onClick={() => submitOrder({ body: { orderItems: currentOrder } })}
        >
          Submit Order
        </Button>
      ) : (
        <h4 className='mt-5'>
          You do not have any products in your current order. Visit the{' '}
          <NavLink to='/products'>Products Page</NavLink> to add to your current
          order
        </h4>
      )}
    </>
  );
};

export default SubmitSection;
