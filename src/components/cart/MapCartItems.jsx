// MapCartItems.jsx
import styles from "./MapCartItems.module.css";
import { useSelector } from "react-redux";
import CartProductCard from "./CartProductCard";

export default function MapCartItems() {
  const cartItems = useSelector((state) => state.product.cartItems);

  // MAP CART ITEMS (from cart product cards)
  return (
    <div className={styles.cartList}>
      {cartItems.map((product) => (
        <CartProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
