import { FunctionComponent } from 'react';
import { OrderItem } from '../../../../store/slices/api/templateApi.generated';
import { removeItem } from '../../../../store/slices/orderSlice';
import {
  Root,
  Headers,
  OrderSection,
  OrderItemRow,
  RemoveDiv,
  ItemId,
  Description,
  CasePack,
  CaseWeight,
  Quantity,
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
      <div style={{ padding: '0 40px' }}>
        <Headers>
          <ItemId $header>Item ID</ItemId>
          <Description $header>Description</Description>
          <CasePack $header>Case Pack</CasePack>
          <CaseWeight $header>Case Weight</CaseWeight>
          <Quantity $header>Quantity</Quantity>
        </Headers>
      </div>
      <OrderSection>
        {currentOrder?.map((orderItem) => (
          <OrderItemRow key={(Math.random() * 100 + 1).toString()}>
            {/* TODO FIX THIS KEY ABOVE AND ADD EXTRA INFO TO ORDERITEMS */}
            <ItemId>1234</ItemId>
            <Description>{orderItem.description}</Description>
            <CasePack>7869</CasePack>
            <CaseWeight>12lbs</CaseWeight>
            <Quantity>{orderItem.quantity}</Quantity>
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
