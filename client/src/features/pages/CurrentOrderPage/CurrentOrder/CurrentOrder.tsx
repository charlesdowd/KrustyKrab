import { FunctionComponent } from 'react';
import { OrderItem } from '../../../../store/slices/api/templateApi.generated';
import { removeItem } from '../../../../store/slices/orderSlice';
import { RemoveDiv } from './CurrentOrder.styled';
import {
  Table as Root,
  TableData,
  TableHeader,
  TableRow,
} from '../../../../components/ProductTable/ProductTable.styled';
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
    <Root className='mt-5' style={{ borderSpacing: '0' }}>
      <TableHeader className='pb-3'>Item ID</TableHeader>
      <TableHeader>Description</TableHeader>
      <TableHeader>Case Pack</TableHeader>
      <TableHeader>Case Weight</TableHeader>
      <TableHeader>Quantity</TableHeader>

      {currentOrder?.map((orderItem) => (
        <TableRow key={(Math.random() * 100 + 1).toString()}>
          {/* TODO FIX THIS KEY ABOVE AND ADD EXTRA INFO TO ORDERITEMS */}
          <TableData>1234</TableData>
          <TableData>{orderItem.description}</TableData>
          <TableData>7869</TableData>
          <TableData>12lbs</TableData>
          <TableData>{orderItem.quantity}</TableData>
          <TableData>
            <RemoveDiv
              onClick={() =>
                dispatch(removeItem({ product: orderItem.product }))
              }
            >
              <img src={TrashIcon} height={20} />
              <span>Remove Item</span>
            </RemoveDiv>
          </TableData>
        </TableRow>
      ))}
    </Root>
  );
};

export default CurrentOrder;
