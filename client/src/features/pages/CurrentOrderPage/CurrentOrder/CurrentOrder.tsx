import { FunctionComponent } from 'react';
import { OrderItem } from '../../../../store/slices/api/templateApi.generated';
import { removeItem } from '../../../../store/slices/orderSlice';
import {
  Root,
  OrderSection,
  OrderItemRow,
  RemoveDiv,
} from './CurrentOrder.styled';
import TrashIcon from '../../../../assets/trash-icon.svg';
import { useAppDispatch } from '../../../../store/hooks';

interface CurrentOrderProps {
  currentOrder: [OrderItem];
}

const CurrentOrder: FunctionComponent<CurrentOrderProps> = ({
  currentOrder,
}) => {
  const dispatch = useAppDispatch();

  // Empty order do not display anything
  if (!(currentOrder.length > 0)) return;

  return (
    <Root>
      <th>Item ID</th>
      <th>Description</th>
      <th>Case Pack</th>
      <th>Case Weight</th>
      <th>Quantity</th>

      <OrderSection>
        {currentOrder?.map((orderItem) => (
          <OrderItemRow key={(Math.random() * 100 + 1).toString()}>
            {/* TODO FIX THIS KEY ABOVE AND ADD EXTRA INFO TO ORDERITEMS */}
            <td>1234</td>
            <td>{orderItem.description}</td>
            <td>7869</td>
            <td>12lbs</td>
            <td>{orderItem.quantity}</td>
            <RemoveDiv
              onClick={() =>
                dispatch(removeItem({ product: orderItem.product }))
              }
            >
              <img src={TrashIcon} height={20} />
              <span>Remove Item</span>
            </RemoveDiv>
          </OrderItemRow>
        ))}
      </OrderSection>
    </Root>
  );
};

export default CurrentOrder;
