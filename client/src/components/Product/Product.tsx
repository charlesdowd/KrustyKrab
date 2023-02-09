import { FunctionComponent, useRef } from 'react';
import { Card } from 'react-bootstrap';
import reactLogo from '../../images/logo512.png';

export interface ProductProps {
  name: string;
  price: number;
}

const Product: FunctionComponent<ProductProps> = ({ name, price }) => {
  const quantityRef = useRef();

  return (
    <Card border='dark'>
      <Card.Img variant='top' src={reactLogo} />
      <Card.Body>
        <Card.Title>
          {name} - {price}
        </Card.Title>
        <Card.Text>
          Some quick example placeholder text. The description of the product
          can go here or any other informational text.
        </Card.Text>
      </Card.Body>
      <div>
        <input
          type='number'
          ref={quantityRef}
          onChange={() => console.log(quantityRef)}
        />
        Below the Card body
      </div>
    </Card>
  );
};

export default Product;
