// Counter.jsx
import React from "react";
import { useSelector } from "react-redux";
import { selectCartItemCount } from "../../redux/ProductSlice";

export default function CartItemsCounter() {
  //* COUNT BOUGHT ITEMSs
  //  select/get nr of bought items from state/store
  const cartItemsCount = useSelector(selectCartItemCount);

  /* If no cartItemsCount, don't display Counter component */
  if (!cartItemsCount || cartItemsCount === 0) return null;

  //* DISPLAY NR OF BOUGHT ITEMS
  return <div>{`(${cartItemsCount})`}</div>;
}
