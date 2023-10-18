import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import restaurantSlice from "./slices/restaurantSlice"; // Corrected import

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    restaurant: restaurantSlice, // Use restaurantSlice instead of restaruntSlice
  },
});
