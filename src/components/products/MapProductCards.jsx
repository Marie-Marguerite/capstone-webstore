// MapProductCards.jsx
import { Container, Row, Col } from "react-bootstrap";
import ProductWithImageArray from "./ProductArray";
import ProductCard from "./ProductCard";

export default function MapProductCards() {
  return (
    <Container>
      <Row>
        {/* MAP ALL PRODUCTS (USING PRODUCT CART LAYOUT) */}
        {ProductWithImageArray.map((product) => (
          <Col className="d-flex" key={product.id} xs={12} sm={6} md={4} lg={3}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
