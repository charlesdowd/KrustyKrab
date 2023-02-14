import { toast } from 'react-toastify';
import { createSlice } from '@reduxjs/toolkit';
import { templateApi } from './api/templateApi.generated';

// Type to represent part of an order. Individual product and quantity ordered
export type OrderItem = {
  product: string;
  quantity: number;
};

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    currentOrder: [],
    orderHistory: [],
  },
  reducers: {
    // TODO: handle case when product is already in the current order
    addItem: (state, { payload }) => {
      const { product, quantity } = payload;
      state.currentOrder.push({ product, quantity });
      toast.success('Added to cart!');
    },
    clearOrder: (state) => {
      state.currentOrder = [];
    },
  },

  // Order extra reduces
  extraReducers: (builder) => {
    builder.addMatcher(
      templateApi.endpoints.createOrder.matchFulfilled,
      (state) => {
        state.currentOrder = [];
        toast.success('Order successfully submitted');
      },
    );
  },
});

export const selectCurrentOrder = (state): [OrderItem] => state.currentOrder;
export const selectOrderHistory = (state) => state.orderHistory;

// Functions for executing actions on the order state
export const { addItem, clearOrder } = orderSlice.actions;

export default orderSlice.reducer;
