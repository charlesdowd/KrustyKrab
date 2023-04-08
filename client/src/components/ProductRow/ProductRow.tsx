import { FunctionComponent } from 'react';
import { Root } from './ProductRow.styled';
import { Product } from '../../store/slices/api/templateApi.generated';
import { selectFavorites } from '../../store/slices/productSlice';
import {
  ItemId,
  Description,
  CasePack,
  CaseWeight,
} from '../../features/pages/CurrentOrderPage/CurrentOrder/CurrentOrder.styled';
import ProductActions from './ProductActions';
import { useAppSelector } from '../../store/hooks';

interface ProductRowProps {
  product: Product;
}

const ProductRow: FunctionComponent<ProductRowProps> = ({ product }) => {
  const favorites = useAppSelector(selectFavorites);

  const { itemId, description, casePack, caseWeight, _id } = product;

  const isFavorite = (_id: string) => {
    return favorites?.some((favorite) => favorite._id === _id);
  };

  return (
    <Root>
      <div style={{ width: '16%' }}>{itemId}</div>
      <div style={{ width: '32%' }}>{description}</div>
      <div style={{ width: '11%' }}>{casePack}</div>
      <div style={{ width: '14%' }}>{caseWeight}</div>
      <ProductActions
        _id={_id}
        favorite={isFavorite(_id)}
        itemId={itemId}
        description={description}
      />
    </Root>
  );
};

export default ProductRow;
