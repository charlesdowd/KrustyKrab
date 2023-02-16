import { Root } from './Dashboard/Dashboard.styled';
import ProductActions from '../../components/ProductActions/ProductActions';
import { ProductTable } from '../../components/ProductActions/ProductActions.styled';
import { useAppSelector } from '../../store/hooks';
import {
  selectAllProducts,
  selectFavorites,
} from '../../store/slices/productSlice';

const ProductsPage = () => {
  // Grab all products from our store
  const allProducts = useAppSelector(selectAllProducts);
  const favorites = useAppSelector(selectFavorites);
  const isFavorite = (_id: string) => {
    return favorites.some((fav) => fav._id == _id);
  };

  // Create a copy of allProducts and then filter them based on search/favorites
  const filteredProducts = [...allProducts];

  // Apply search filter

  // Apply favorites filter
  filteredProducts?.sort((a, b) => {
    if (isFavorite(a._id) && !isFavorite(b._id)) return -1;
    else if (!isFavorite(a._id) && isFavorite(b._id)) return 1;
    else {
      return 0;
    }
  });

  return (
    <Root>
      <h1>Products Page</h1>
      <ProductTable>
        <tbody>
          <tr>
            <th>Item ID</th>
            <th>Description</th>
            <th>Case Pack</th>
            <th>Case Weight</th>
          </tr>
          {filteredProducts?.map((product) => (
            <tr key={product._id} style={{ border: '2px solid gray' }}>
              <td>{product.itemId}</td>
              <td>{product.description}</td>
              <td>{product.casePack}</td>
              <td>{product.caseWeight}</td>
              <ProductActions
                key={product._id}
                _id={product._id}
                itemId={product.itemId}
                favorite={isFavorite(product._id)}
              />
            </tr>
          ))}
        </tbody>
      </ProductTable>
    </Root>
  );
};

export default ProductsPage;
