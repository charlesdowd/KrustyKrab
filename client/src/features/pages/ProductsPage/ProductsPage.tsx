import { Root } from '../Dashboard/Dashboard.styled';
import { ProductRow } from './ProductsPage.styled';
import ProductCard from '../../../components/Product/Product';
import { products } from '../../../fakeData';

const ProductsPage = () => {
  return (
    <Root>
      <h1>Products Page</h1>
      <ProductRow xs={1} sm={2} lg={3} className='mt-4'>
        {products.map((product) => (
          <div className='p-3' key={product.name}>
            <ProductCard
              name={product.name}
              price={product.price}
              key={product.name}
            />
          </div>
        ))}
      </ProductRow>
    </Root>
  );
};

export default ProductsPage;
