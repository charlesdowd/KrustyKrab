import { FunctionComponent, useRef } from 'react';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch } from '../../store/hooks';
import { addItem } from '../../store/slices/orderSlice';
import { Root, ButtonDiv, FavoriteDiv } from './ProductRow.styled';
import {
  Product,
  addFavorite,
  removeFavorite,
} from '../../store/slices/productSlice';

interface ProductRowProps extends Product {
  favorite: boolean;
}

const ProductRow: FunctionComponent<ProductRowProps> = ({
  _id,
  itemId,
  description,
  casePack,
  caseWeight,
  price,
  favorite,
}) => {
  const quantityRef = useRef<HTMLInputElement>();
  const dispatch = useAppDispatch();

  const toggleFavorite = () => {
    // Change redux favorite state
    if (!favorite) dispatch(addFavorite({ _id, itemId }));
    else {
      dispatch(removeFavorite({ _id, itemId }));
    }
  };

  const handleSubmit = () => {
    const quantity = quantityRef.current.value;

    // Handle invalid input
    if (Number(quantity) < 1 || Number(quantity) % 1 != 0) {
      toast.error('Invalid Input');
      return;
    }

    // Add item to the users current order in redux state
    dispatch(addItem({ product: _id, quantity }));
    quantityRef.current.value = null;
  };

  return (
    <Root>
      <div>{itemId}</div>
      <div>{description}</div>
      <div>{casePack}</div>
      <div>{caseWeight}</div>
      <div>{price}</div>
      <ButtonDiv>
        <input
          type='number'
          style={{ width: 75 }}
          ref={quantityRef}
          placeholder='0'
        />
        <Button onClick={handleSubmit}>Add to Order</Button>
        <FavoriteDiv onClick={toggleFavorite}>
          <FontAwesomeIcon
            size='lg'
            icon={faStar}
            style={{ margin: 'auto' }}
            color={favorite ? 'gold' : 'gray'}
          />
          {favorite ? 'Unfavorite' : 'Favorite'}
        </FavoriteDiv>
      </ButtonDiv>
    </Root>
  );
};

export default ProductRow;
