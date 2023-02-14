import { toast } from 'react-toastify';
import { createSlice } from '@reduxjs/toolkit';
import { templateApi } from './api/templateApi.generated';

// Type to represent part of a product
export interface Product {
  _id: string;
  itemId: string;
  description: string;
  casePack: string;
  caseWeight: string;
  price: number;
}

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
  },
  reducers: {
    /* Currently no reducers needed */
  },

  // Order extra reducers
  extraReducers: (builder) => {
    builder.addMatcher(
      templateApi.endpoints.getAllProducts.matchFulfilled,
      (state, { payload }) => {
        state.products = payload.products;
      },
    );
    builder.addMatcher(
      templateApi.endpoints.getAllProducts.matchRejected,
      () => {
        toast.error('Failed to get list of current products');
      },
    );
  },
});

export const selectAllProducts = (state): [Product] => state.product.products;

export default productSlice.reducer;
