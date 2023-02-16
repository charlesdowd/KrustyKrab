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

// Interface representing what information we save for favorited products
export interface Favorite {
  _id: string;
  itemId: string;
}

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    favorites: [],
  },
  reducers: {
    // TODO: Think about removing toasts on favorite/remove favorite
    // Add new favorite to favorties array
    addFavorite: (state, { payload }) => {
      state.favorites?.push(payload);
      toast.success('Favorite Added');
    },

    // Remove favorite from favorites array
    removeFavorite: (state, { payload }) => {
      const updatedFavorites = state.favorites?.filter(
        (favorite) => favorite._id != payload._id,
      );
      state.favorites = updatedFavorites;
      toast.success('Favorite removed');
    },
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
    // Save users favorites to localStorage on logout
    builder.addMatcher(
      templateApi.endpoints.sendLogout.matchPending,
      (state) => {
        localStorage.setItem('favorites', JSON.stringify(state.favorites));
      },
    );
    // Add users favorites from localStorage to state on login
    builder.addMatcher(templateApi.endpoints.login.matchFulfilled, (state) => {
      const favorites = JSON.parse(localStorage.getItem('favorites'));
      state.favorites = favorites;
    });
  },
});

export const selectAllProducts = (state): [Product] => state.product.products;
export const selectFavorites = (state): [Favorite] => state.product.favorites;

// Functions for executing actions on the Product state
export const { addFavorite, removeFavorite } = productSlice.actions;

export default productSlice.reducer;
