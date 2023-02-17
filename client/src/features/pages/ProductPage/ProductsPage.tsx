import { useState } from 'react';
import { Root } from '../Dashboard/Dashboard.styled';
import ProductActions from './ProductActions';
import {
  FilterDiv,
  ProductTable,
  Filter,
  ProductRow,
} from './ProductPage.styled';
import { useAppSelector } from '../../../store/hooks';
import {
  selectAllProducts,
  selectFavorites,
  Product,
  Favorite,
} from '../../../store/slices/productSlice';

const ProductsPage = () => {
  // Grab all products from our store
  const allProducts = useAppSelector<Product[]>(selectAllProducts);
  const favorites = useAppSelector<Favorite[]>(selectFavorites);

  const [query, setQuery] = useState<string>('');

  // Helper function to determine if product is a favorite
  const isFavorite = (_id: string) => {
    return favorites.some((fav) => fav._id == _id);
  };

  // Apply search filter
  const filteredProducts = allProducts.filter((product) => {
    return product.description
      .toLocaleLowerCase()
      .includes(query.toLocaleLowerCase());
  });

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

      <FilterDiv>
        <Filter
          type='search'
          placeholder='Filter by name/description of product'
          onChange={(e) => setQuery(e.target.value)}
        />
      </FilterDiv>

      <ProductTable>
        <tbody>
          <tr>
            <th>Item ID</th>
            <th>Description</th>
            <th>Case Pack</th>
            <th>Case Weight</th>
          </tr>
          {filteredProducts?.map((product) => (
            <ProductRow key={product._id}>
              <td>{product.itemId}</td>
              <td>{product.description}</td>
              <td>{product.casePack}</td>
              <td>{product.caseWeight}</td>
              <ProductActions
                key={product._id}
                _id={product._id}
                itemId={product.itemId}
                description={product.description}
                favorite={isFavorite(product._id)}
              />
            </ProductRow>
          ))}
        </tbody>
      </ProductTable>
    </Root>
  );
};

export default ProductsPage;
