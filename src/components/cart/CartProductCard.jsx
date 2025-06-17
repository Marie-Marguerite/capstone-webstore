// CartProductCard.jsx
import styles from "./CartProductCard.module.css";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "../../redux/ProductSlice";
import { formatCurrency } from "../../utils/FormatCurrency";

export default function CartProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.cardContainer}>
      {/* IMAGE */}
      <div className={styles.imageWrapper}>
        <img
          className={styles.cartImage}
          src={product.imageURL}
          alt={`Image of ${product.title}`}
        />
      </div>

      {/* DETAILS: */}
      <div className={styles.detailsWrapper}>
        {/* - title */}
        <p className={styles.productTitle}>{product.title}</p>
        {/* - color */}
        <p className={styles.productColor}>
          {product.color || "No colour selected"}
        </p>

        {/* QUANTITY */}
        <div className={styles.quantityControls}>
          <span>Qty:</span>
          {/* - */}
          <button onClick={() => dispatch(decreaseQuantity(product))}>-</button>
          <span className={styles.quantity}>{product.quantity}</span>
          {/* + */}
          <button onClick={() => dispatch(increaseQuantity(product))}>+</button>
        </div>
      </div>

      <div className={styles.priceWrapper}>
        {/* PRICE */}
        <p className={styles.price}>R {formatCurrency(product.price)}</p>

        {/* REMOVE BUTTON */}
        <button
          className={styles.removeButton}
          onClick={() => {
            dispatch(removeItem(product));
          }}
        >
          remove
        </button>
      </div>
    </div>
  );
}
