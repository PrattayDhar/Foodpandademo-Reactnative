import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], 
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload); 
    },
    removeFromCart: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload);
      if (itemIndex >= 0) {
        state.items.splice(itemIndex, 1); 
      } else {
        console.log("Item not found in cart");
      }
    },
    emptyCart: (state) => {
      state.items = []; 
    },
  },
});

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;
export const selectCartItems = (state) => state.cart.items;
export const selectCartItemsById = (state, id) =>
  state.cart.items.filter((item) => item.id === id);
export const selectCartTotal = (state) =>
  state.cart.items.reduce((total, item) => total + item.price, 0);

export default cartSlice.reducer;
