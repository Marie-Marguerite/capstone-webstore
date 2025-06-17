// ShippingInfo.jsx
import { formatCurrency } from "../../utils/FormatCurrency";
import styles from "./ShippingInfo.module.css";
import React, { useState } from "react";

export default function ShippingInfo() {
  const [isViewingInfo, setIsViewingInfo] = useState(false);

  return (
    <>
      {/* BUTTON: INFO ICON (to open)*/}
      <div className={styles.infoButtonContainer}>
        <button
          className={styles.infoButton}
          onClick={() => setIsViewingInfo(true)}
        >
          i
        </button>
      </div>

      {/* POPUP OVERLAY */}
      {isViewingInfo && (
        <div className={styles.popupOverlay}>
          <div className={styles.popup}>
            {/* - heading */}
            <h2 className={styles.popupHeading}>Shipping Options Guide</h2>

            {/* - instruction content */}
            <ul className={styles.popupList}>
              <li className={styles.priceType}>FREE - PICK UP</li>

              <li className={styles.description}>
                Come and collect your parcel from our boutique.
              </li>

              <hr />

              <li className={styles.priceType}>R {formatCurrency(150.00)} - STANDARD </li>
              <li className={styles.description}>
                3 to 5 business days for domestic delivery.
              </li>

              <hr />

              <li className={styles.priceType}>R {formatCurrency(350.00)} - EXPRESS</li>
              <li className={styles.description}>
                Next day delivery for orders placed before 15:30 or 1 business
                day for orders placed after 15:30.
              </li>

              <hr />

              <li className={styles.priceType}>R {formatCurrency(2500.00)} - INTERNATIONAL</li>
              <li className={styles.description}>
                2 to 3 weeks for deliveries outside South Africa.
              </li>

              <hr />

              <li className={styles.note}>
                *Please note that shipping and relating costs are non-refundable
              </li>
            </ul>

            {/* - button (to close) */}
            <button
              className={styles.closeButton}
              onClick={() => setIsViewingInfo(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
