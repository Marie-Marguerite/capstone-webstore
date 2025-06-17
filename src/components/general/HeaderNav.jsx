// HeaderNav.jsx
import styles from "./HeaderNav.module.css";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import LoginToggle from "./LoginToggle";
import Counter from "./Counter";
// import NavigationLinks from "./NavigationLinks";

export default function HeaderNav() {
  return (
    <nav className={styles.navContainer}>
      {/* LOGO */}
      <div className={styles.logo}>
        <img id={styles.logoNav} src={Logo} alt="Ferm Living Logo" />
      </div>

      {/* NAV */}
      <div className={styles.nav}>
        {/* - about */}
        <div className={styles.link}>
          <Link to="/about">ABOUT</Link>
        </div>
        {/* - products */}
        <div className={styles.link}>
          <Link to="/products">PRODUCTS</Link>
        </div>
        {/* - cart */}
        <div className={styles.link}>
          <Link to="/cart">
            <span className={styles.cartLink}>
              CART <Counter />
            </span>
          </Link>
        </div>
      </div>

      {/* TOGGLE LOGOUT */}
      <LoginToggle />
    </nav>
  );
}
