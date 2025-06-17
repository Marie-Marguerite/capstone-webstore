// Subtotal.jsx
import styles from "./Cart.module.css";
import { useSelector } from "react-redux";
import { selectCartSubtotal } from "../../redux/ProductSlice";
import { formatCurrency } from "../../utils/FormatCurrency";  

export default function Subtotal() {
  const subtotal = useSelector(selectCartSubtotal);

  return (
    <div className={styles.financeRow}>
      {/* HEADING & PRICE */}
      <p>Subtotal:</p>
      <p>R {formatCurrency(subtotal)}</p>
      {/* <p>R {subtotal.toFixed(2)}</p> */}
    </div>
  );
}
