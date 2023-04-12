import { FunctionComponent, useRef } from 'react';
import { toast } from 'react-toastify';
import { useAppDispatch } from '../../store/hooks';
import { addItem } from '../../store/slices/orderSlice';
import FavoritedIcon from '../../assets/favorited-icon.svg';
import NonFavoritedIcon from '../../assets/non-favorited-icon.svg';
import {
  ActionsRoot,
  BigButton,
  SmallButton,
  OrderInput,
  FavoritedButton,
  NonFavoritedButton,
} from './ProductRow.styled';
import {
  addFavorite,
  removeFavorite,
  Favorite,
} from '../../store/slices/productSlice';

interface ProductActionsProps extends Favorite {
  favorite: boolean;
  description;
}

const ProductActions: FunctionComponent<ProductActionsProps> = ({
  _id,
  itemId,
  description,
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
    dispatch(addItem({ product: _id, quantity, description }));
    quantityRef.current.value = null;
  };

  return (
    <ActionsRoot>
      <OrderInput type='number' ref={quantityRef} placeholder='0' />
      <BigButton onClick={handleSubmit}>Add to Order</BigButton>
      <SmallButton onClick={handleSubmit}>{' + '}</SmallButton>
      {favorite ? (
        <FavoritedButton onClick={toggleFavorite} />
      ) : (
        <NonFavoritedButton onClick={toggleFavorite} />
      )}
    </ActionsRoot>
  );
};

export default ProductActions;
