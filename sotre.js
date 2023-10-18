import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import restaruntSlice from "./slices/restaruntSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    restaurant:restaruntSlice
  },
});
