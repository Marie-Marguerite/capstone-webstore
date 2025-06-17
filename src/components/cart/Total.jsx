// Total.jsx
import styles from './Cart.module.css';
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../redux/ProductSlice";
import { formatCurrency } from '../../utils/FormatCurrency';

export default function Total() {
  const shippingMethod = useSelector((state) => state.product.shippingMethod);
  const total = useSelector(selectCartTotal);

  if (!shippingMethod) return null;

  return (
    <div className={styles.financeRow}>
      {/* HEADING & PRICE */}
      <p className={styles.pBold}>TOTAL:</p>
      <p className={styles.pBold}>R {formatCurrency(total)}</p>
    </div>
  );
}
