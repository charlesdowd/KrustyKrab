import { Root } from './Dashboard/Dashboard.styled';
import ProductRow from '../../components/ProductRow/ProductRow';
import { useAppSelector } from '../../store/hooks';
import { selectAllProducts } from '../../store/slices/productSlice';

const ProductsPage = () => {
  // Grab all products from our store
  const products = useAppSelector(selectAllProducts);

  return (
    <Root>
      <h1>Products Page</h1>
      {products?.map((product) => (
        <ProductRow
          key={product._id}
          _id={product._id}
          itemId={product.itemId}
          description={product.description}
          casePack={product.casePack}
          caseWeight={product.caseWeight}
          price={product.price}
        />
      ))}
    </Root>
  );
};

export default ProductsPage;
