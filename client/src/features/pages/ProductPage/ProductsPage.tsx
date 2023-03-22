import { useState } from 'react';
import ProductRow from '../../../components/ProductRow/ProductRow';
import { Product } from '../../../store/slices/api/templateApi.generated';
import {
  Root,
  TopBar,
  Products,
  Filter,
  SearchIcon,
  ContactInfo,
  EmailText,
  EmailLink,
  Sections,
  SectionButton,
  Headers,
  ProductList,
} from './ProductPage.styled';
import {
  ItemId,
  Description,
  CasePack,
  CaseWeight,
  Quantity,
} from '../CurrentOrderPage/CurrentOrder/CurrentOrder.styled';
import { useAppSelector } from '../../../store/hooks';
import {
  selectAllProducts,
  selectFavorites,
  Favorite,
} from '../../../store/slices/productSlice';
import MagnifyingGlass from '../../../assets/search-icon.svg';

const ProductsPage = () => {
  // Grab all products from our store
  const allProducts = useAppSelector<Product[]>(selectAllProducts);
  const favorites = useAppSelector<Favorite[]>(selectFavorites);

  const [query, setQuery] = useState<string>('');

  // Helper function to determine if product is a favorite
  const isFavorite = (_id: string) => {
    return favorites?.some((fav) => fav._id == _id);
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
      <TopBar>
        <SearchIcon src={MagnifyingGlass} />
        <Filter
          type='search'
          placeholder='Filter by name/description of product'
          onChange={(e) => setQuery(e.target.value)}
        />

        <ContactInfo>
          <EmailText>Email Sales Rep: </EmailText>
          <EmailLink href='mailto: dylan@lagniappefoods.com'>
            dylan@lagniappefoods.com
          </EmailLink>
        </ContactInfo>
      </TopBar>

      <Sections>
        <SectionButton>All</SectionButton>
        <SectionButton>Favorites</SectionButton>
        <SectionButton>Seafood Cakes</SectionButton>
        <SectionButton>Seafood Burgers</SectionButton>
        <SectionButton>Seafood Sausage</SectionButton>
        <SectionButton>Prepared Fillets</SectionButton>
        <SectionButton>Seafood Salads</SectionButton>
        <SectionButton>Seafood Stuffings</SectionButton>
      </Sections>

      <Products className='mt-5'>
        <Headers>
          <ItemId $header>Item ID</ItemId>
          <Description $header $position={25}>
            Description
          </Description>
          <CasePack $header $position={48}>
            Case Pack
          </CasePack>
          <CaseWeight $header $position={60}>
            Case Weight
          </CaseWeight>
          <Quantity $header $position={72}>
            Quantity
          </Quantity>
        </Headers>

        <ProductList>
          {filteredProducts?.map((product) => (
            <ProductRow key={product._id} product={product} />
          ))}
        </ProductList>
      </Products>
    </Root>
  );
};

export default ProductsPage;
