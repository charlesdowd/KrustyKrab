import { FunctionComponent } from 'react';
import { Card } from 'react-bootstrap';
import { CustomDiv } from './Product.styled';

export interface ProductProps {
  name: string;
  price: number;
}

const Product: FunctionComponent<ProductProps> = ({ name, price }) => {
  return (
    <Card>
      <CustomDiv>
        <div>{name}</div>
        <div>{price}</div>
      </CustomDiv>
    </Card>
  );
};

export default Product;
