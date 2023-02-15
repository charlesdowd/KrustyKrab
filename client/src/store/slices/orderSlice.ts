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

      // Handle when product already exists in current order. Remove old value
      state.currentOrder = state.currentOrder.filter(
        (orderItem: OrderItem) => orderItem.product !== product,
      );

      state.currentOrder.push({ product, quantity });
      toast.success('Added to cart');
    },
    removeItem: (state, { payload }) => {
      const { product } = payload;
      state.currentOrder = state.currentOrder.filter(
        (orderItem) => orderItem.product !== product,
      );
      toast.success('Removed from cart');
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
    builder.addMatcher(templateApi.endpoints.createOrder.matchRejected, () => {
      toast.error('Failed to submit order');
    });
  },
});

export const selectCurrentOrder = (state): [OrderItem] =>
  state.order.currentOrder;
export const selectOrderHistory = (state) => state.order.orderHistory;

// Functions for executing actions on the order state
export const { addItem, removeItem, clearOrder } = orderSlice.actions;

export default orderSlice.reducer;
