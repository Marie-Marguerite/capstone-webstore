// Products.jsx
import React from "react";
import MapProductCards from "./MapProductCards.jsx";
import Footer from "../general/Footer.jsx";

export default function Products() {
  return (
    <>
      {/* PRODUCTS */}
      <section>
        <MapProductCards />
      </section>
      {/* FOOTER */}
      <footer>
        <Footer />
      </footer>
    </>
  );
}
