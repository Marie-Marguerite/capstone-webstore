// ProductSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
  shippingCost: 0,
  shippingMethod: "",
  addedToCart: false, // todo make use of this when styling !IS THIS USED SOMEWHERE?
};

const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    //* REDUCERS
    // BUY BUTTON
    addToCart: (state, action) => {
      const newCartItem = action.payload;
      // - check if already have item with same type and color
      const existingItem = state.cartItems.find(
        (item) => item.id === newCartItem.id && item.color === newCartItem.color
      );

      if (existingItem) {
        // - increase quantity count
        existingItem.quantity += 1;
      } else {
        // - add to cart & start quantity count
        state.cartItems.push({ ...newCartItem, quantity: 1 });
      }

      state.addedToCart = true;
      // - save to localStorage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    // REMOVE ITEM (cart)
    removeItem: (state, action) => {
      const removeItem = action.payload;
      // - filter out removed item.
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== removeItem.id
      );
      // - flag successful cart add
      state.addedToCart = true;
      // - save updated cartItems to localStorage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    resetAddedToCart: (state) => {
      state.addedToCart = false;
    },

    // DECREASE QUANTITY
    decreaseQuantity: (state, action) => {
      const targetItem = action.payload;
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === targetItem.id
      );

      if (itemIndex !== -1) {
        const item = state.cartItems[itemIndex];
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          // - remove totally if quantity is 1
          state.cartItems.splice(itemIndex, 1);
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },

    // INCREASE QUANTITY
    increaseQuantity: (state, action) => {
      const targetItem = action.payload;
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === targetItem.id && item.color === targetItem.color
      );

      if (itemIndex !== -1) {
        state.cartItems[itemIndex].quantity += 1;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },

    // SHIPPING
    setShipping: (state, action) => {
      const { cost, method } = action.payload;
      state.shippingCost = cost;
      state.shippingMethod = method;
    },
  },
});

export const {
  addToCart,
  setShipping,
  removeItem,
  decreaseQuantity,
  increaseQuantity,
  resetAddedToCart,
} = ProductSlice.actions;

export default ProductSlice.reducer;

//* SELECTORS
// SUBTOTAL (R)
export const selectCartSubtotal = (state) =>
  state.product.cartItems?.reduce((sum, item) => {
    return sum + Number(item.price) * item.quantity;
  }, 0) ?? 0;

// CART QUANTITY (nr of items)
export const selectCartItemCount = (state) =>
  state.product.cartItems?.reduce((count, item) => {
    return count + item.quantity;
  }, 0) ?? 0;

// TOTAL (R)
export const selectCartTotal = (state) => {
  const subtotal =
    state.product.cartItems?.reduce((sum, item) => {
      return sum + Number(item.price) * item.quantity;
    }, 0) ?? 0;

  const shipping = Number(state.product.shippingCost) || 0;
  return subtotal + shipping;
};
