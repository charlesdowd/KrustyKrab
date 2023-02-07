import { Root } from './Dashboard/Dashboard.styled';
import ProductCard from '../../components/Product/Product';
import { products } from '../../fakeData';

const ProductsPage = () => {
  return (
    <Root>
      <h1>Products Page</h1>
      <div className='mt-4'>
        {products.map((product) => (
          <ProductCard
            name={product.name}
            price={product.price}
            key={product.name}
          />
        ))}
      </div>
    </Root>
  );
};

export default ProductsPage;
