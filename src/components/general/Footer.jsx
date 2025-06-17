// Footer.jsx
import styles from "./footer.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import Counter from "./Counter";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* ABOUT */}
        <div className={styles.link}>
          <Link to="/about">About</Link>
        </div>

        {/* PRODUCTS */}
        <div className={styles.link}>
          <Link to="/products">Products</Link>
        </div>

        {/* CART */}
        <div className={styles.link}>
          <Link to="/cart">
            <span className={styles.cartLink}>
              Cart <Counter />
            </span>
          </Link>
        </div>

        {/* INSTAGRAM */}
        <div className={styles.link}>
          <a
            className={styles.footerInstagram}
            href="https://www.instagram.com/fermliving/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </footer>
  );
}
