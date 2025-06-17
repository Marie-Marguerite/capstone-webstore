// Store.js
import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserSlice.js";
import ProductReducer from "./ProductSlice.js";

const Store = configureStore({
  reducer: {
    user: UserReducer,
    product: ProductReducer,
  },
});
export default Store;
