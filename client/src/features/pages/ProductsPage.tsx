import { Root } from './Dashboard/Dashboard.styled';
import ProductRow from '../../components/ProductRow/ProductRow';
import { useGetAllProductsQuery } from '../../store/slices/api/templateApi';

const ProductsPage = () => {
  const { data: products } = useGetAllProductsQuery();

  return (
    <Root>
      <h1>Products Page</h1>
      {products?.products.map((product) => (
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
