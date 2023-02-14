import { FunctionComponent, useRef } from 'react';
import { Button } from 'react-bootstrap';
import { Root } from './ProductRow.styled';

export interface IProduct {
  itemId: string;
  description: string;
  casePack: string;
  caseWeight: string;
  price: number;
}

const Product: FunctionComponent<IProduct> = ({
  itemId,
  description,
  casePack,
  caseWeight,
  price,
}) => {
  const quantityRef = useRef<HTMLInputElement>();

  const handleSubmit = () => {
    console.log('Current: ', quantityRef.current.value);
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
        <Button onClick={handleSubmit}>Add to Cart</Button>
      </div>
    </Root>
  );
};

export default Product;
