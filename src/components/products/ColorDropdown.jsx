// ColorDropdown.jsx
import styles from "./ColorDropdown.module.css";

export default function ColorDropdown({
  productId,
  colors,
  selectedColor,
  onSelectColor,
}) {
  return (
    // PLACEHOLDER
    <select
      className={styles.colorDropdown}
      id={`dropdown-${productId}`}
      value={selectedColor || "Colour"}
      onChange={(event) => onSelectColor(event.target.value)}
    >
      {/* COLOR OPTIONS */}
      {/* - placeholder */}
      <option value="">colour</option>
      {/* - map colour options from product array */}
      {colors.map((color, index) => (
        <option key={index} eventKey={color}>
          {color}
        </option>
      ))}
    </select>
  );
}
