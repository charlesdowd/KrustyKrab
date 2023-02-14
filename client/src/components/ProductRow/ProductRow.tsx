import { FunctionComponent, useRef } from 'react';
import { Button } from 'react-bootstrap';
import { useAppDispatch } from '../../store/hooks';
import { addItem } from '../../store/slices/orderSlice';
import { Root } from './ProductRow.styled';

export interface IProduct {
  _id: string;
  itemId: string;
  description: string;
  casePack: string;
  caseWeight: string;
  price: number;
}

const Product: FunctionComponent<IProduct> = ({
  _id,
  itemId,
  description,
  casePack,
  caseWeight,
  price,
}) => {
  const quantityRef = useRef<HTMLInputElement>();
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    const quantity = quantityRef.current.value;

    // Add item to the users current order in redux state
    dispatch(addItem({ product: _id, quantity }));
    quantityRef.current.value = '0';
  };

  return (
    <Root>
      <div>{itemId}</div>
      <div>{description}</div>
      <div>{casePack}</div>
      <div>{caseWeight}</div>
      <div>{price}</div>
      <div style={{ display: 'flex', gap: '12px' }}>
        <input type='number' ref={quantityRef} placeholder='0' />
        <Button onClick={handleSubmit}>Add to Order</Button>
      </div>
    </Root>
  );
};

export default Product;
