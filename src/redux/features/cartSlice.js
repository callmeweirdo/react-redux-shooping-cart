import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import cartItems from "../../carItems";

const initialState = {
  cart: [],
  amount: 0,
  total: 0,
  isLoading: false,
};

const url = `https://course-api.com/react-useReducer-cart-project`;

export const getCartItems = createAsyncThunk("cart/getCartItems", async () => {
  const response = await axios.get(url);
  return response.data;
  console.log(response.data);
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cart = [];
      state.total = 0;
    },
    removeItem: (state, { payload }) => {
      let newState = state.cart.filter((item) => item.id != payload);
      state.cart = newState;
    },
    increase: (state, { payload }) => {
      let cartItem = state.cart.find((item) => item.id == payload);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      let cartItem = state.cart.find((item) => item.id == payload);
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;

      state.cart.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
        state.amount = amount;
        state.total = total;
      });
    },
  },
  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, { payload }) => {
      state.isLoading = false;

      state.cart = payload;
    },
    [getCartItems.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
