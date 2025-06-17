// ProductCard.jsx
import styles from "./ProductCard.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import ColorDropdown from "./ColorDropdown.jsx";
import { addToCart } from "../../redux/ProductSlice.js";
import { formatCurrency } from "../../utils/FormatCurrency.js";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const [showSuccess, setShowSuccess] = useState(false);

  // COLOR SELECTOR
  const [selectedColor, setSelectedColor] = useState("");
  const [selectError, setSelectError] = useState("");

  const handleSelectColor = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className={styles.productCard}>
      {/* CARD IMAGE */}
      {product.imageURL && (
        <img
          src={product.imageURL}
          alt={`Image of ${product.title}`}
          className={styles.productImage}
        />
      )}

      {/* CARD BODY*/}
      <div className={styles.productBody}>
        {/* Card Title and Price */}
        <h5 className={styles.productTitle}>{product.title}</h5>
        <p>R {formatCurrency(product.price)}</p>

        {/* COLOR DROPDOWN */}
        <ColorDropdown
          productId={product.id}
          colors={product.colors}
          selectedColor={selectedColor}
          onSelectColor={handleSelectColor}
        />

        {/* CARD BUY BUTTON */}
        <button
          className={styles.productButton}
          onClick={() => {
            // - handle error (no colour selected)
            if (!selectedColor) {
              setSelectError("Please first select a colour.");
              return;
            }
            // - handle success (color selected)
            setSelectError("");
            dispatch(addToCart({ ...product, color: selectedColor }));

            // -show success
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 1500);
          }}
        >
          {/* if success = display 'Adding...' for 1500ms; then return to displaying 'Buy' */}
          {showSuccess ? "Adding..." : "BUY"}
        </button>
        {selectError && <p className={styles.selectError}>{selectError}</p>}

        {/* CARD DESCRIPTION */}
        <p className={styles.productDescription}>{product.description}</p>
      </div>
    </div>
  );
}
