// Shipping.jsx
import styles from "./Cart.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setShipping } from "../../redux/ProductSlice";
import ShippingInfo from "./ShippingInfo";
import { formatCurrency } from "../../utils/FormatCurrency";

export default function Shipping() {
  const dispatch = useDispatch();
  const shippingCost = useSelector((state) => state.product.shippingCost);

  // HANDLE SHIPPING CHOICE
  const handleShippingChange = (event) => {
    const selected = event.target.value;
    const cost = Number(selected);
    const method = event.target.options[event.target.selectedIndex].text;
    dispatch(setShipping({ cost, method }));
  };

  return (
    <div className={styles.financeRow}>
      {/* BUTTON */}
      <div className={styles.shippingControls}>
        <div className={styles.selectWrapper}>
          {/* - select */}
          <select defaultValue="" onChange={handleShippingChange}>
            {/* - placeholder */}
            <option value="" disabled>
              Shipping ⌵
            </option>
            {/* - options */}
            <option value="150">Standard shipping</option>
            <option value="350">Express shipping</option>
            <option value="2500">International shipping</option>
            <option value="0">Pick up</option>
          </select>
        </div>
      </div>

      <div className={styles.shippingPrice}>
        {/* SHIPPING INFO POPUP */}
        <ShippingInfo />

        {/* PRICE */}
        <p>R {formatCurrency(shippingCost)}</p>
      </div>
    </div>
  );
}
