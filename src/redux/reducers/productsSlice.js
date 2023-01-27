/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    subTotal: 0,
    total: 0,
    discount: 0,
  },
  reducers: {
    addToCard: (state, action) => {
      const existItem = state.products.find((item) => item.key === action.payload.key);
      if (existItem) {
        existItem.quantity += 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
      state.subTotal += parseFloat(action.payload.price);
      state.total += parseFloat(action.payload.price);
    },
    incrementQuantity: (state, action) => {
      const product = state.products.find((item) => item.key === action.payload);
      product.quantity += 1;
      product.allPrice = parseFloat(product.price * product.quantity).toFixed(2);
      state.subTotal += parseFloat(product.price);
      state.total += parseFloat(product.price);
    },
    decrementQuantity: (state, action) => {
      const product = state.products.find((item) => item.key === action.payload);
      if (product.quantity === 1) {
        state.products = state.products.filter((item) => item.key !== action.payload);
      } else {
        product.quantity -= 1;
      }
      state.subTotal -= parseFloat(product.price);
      state.total -= parseFloat(product.price);
    },
  }
});

export const { addToCard, incrementQuantity, decrementQuantity } = productsSlice.actions;
export default productsSlice.reducer;
