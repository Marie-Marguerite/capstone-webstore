// Cart.jsx
import styles from "./Cart.module.css";
import MapCartItems from "./MapCartItems";
import Subtotal from "./Subtotal";
import Shipping from "./Shipping";
import Total from "./Total";

export default function Cart() {
  return (
    <div className={styles.cartContainer}>
      {/* CART ITEM CARDS */}
      <section className={styles.cartItems}>
        <MapCartItems />
      </section>

      {/* FINANCES */}
      <section className={styles.finances}>
        <Subtotal />
        <Shipping />
        <Total />
        <button className={styles.checkoutButton}>CHECKOUT</button>
      </section>
    </div>
  );
}
