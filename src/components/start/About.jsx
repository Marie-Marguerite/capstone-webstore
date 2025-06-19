// About.jsx
import styles from "./About.module.css";
import LogoBird from "../../assets/LogoBird.jpg";
import { Figure, Row, Col, Container } from "react-bootstrap";
import Footer from "../general/Footer";

export default function About() {
  return (
    <>
      {/* IMAGES: */}
      <Row>
        {/* IMAGE 1 */}
        <Col>
          <Figure>
            <Figure.Image
              className={styles.imgFluid}
              width={500}
              alt="Photograph of the boutique store featuring Ferm Living home decor products"
              src="https://fermliving.com/cdn/shop/files/1_SS25_Boutique_1000x1154_594d3328-1508-4a09-8a5f-3c49bd726d0d.jpg?v=1742389277&width=1000"
            />
          </Figure>
        </Col>
        {/* IMAGE 2 */}
        <Col>
          <Figure>
            <Figure.Image
              className={styles.imgFluid}
              width={300}
              src="https://fermliving.com/cdn/shop/files/Styling_Session_Banners_2_530009d4-1897-4d07-a322-e9998cecc19d.jpg?v=1725284399&width=1000"
              alt="Photograph of fabric swatches being handled"
            />
          </Figure>
        </Col>
      </Row>

      {/* DESCRIPTION */}
      <div>
        <section className={styles.aboutDescription}>
          <h1 className={styles.aboutDescriptionHeading}>ABOUT FIRM LIVING</h1>
          <p>
            Life is full of contrasts. As we navigate expectations and dreams in
            search of meaning and comfort, we long for a balanced life with room
            to be ourselves. A place where we can realise the true value of
            things and feel at home. Driven by a love for authentic design and a
            commitment to responsible choices, we craft honest products and calm
            environments that help you balance life’s contrasts.
          </p>
          <p>
            From our home in Copenhagen, we collaborate with artisans around the
            world, fusing our Scandinavian mindset with global skills and
            traditions.{" "}
          </p>
          <p>
            Our collections are defined by soft forms, rich textures, and
            curious details, allowing you to create composed atmospheres with a
            touch of the unexpected. From materials and processes to production
            and delivery, we challenge ourselves to help shape a sustainable
            future, making it easier for you to make responsible choices. We
            create collections of furniture, accessories and lighting, so you
            can create space to feel comfortably you.
          </p>
        </section>
      </div>

      {/* IMAGE: LOGO */}
      <div>
        <div className={styles.logoWrapper}>
          <div>
            <img
              className={styles.logo}
              width={100}
              alt="Logo Bird"
              src={LogoBird}
            />
          </div>
        </div>
      </div>

      {/* CONTACT DETAILS */}
      {/* - address */}
      <div className={styles.aboutContactWrapper}>
        <div className={styles.aboutContactBlock}>
          <div className={styles.aboutContact}>
            <h3>Showroom</h3>
            <p>Kuglegårdsvej 1-5</p>
            <p>1434 Copenhagen K</p>
            <p>Denmark</p>
            <p>Phone: +45 31 38 20 51</p>
          </div>
        </div>

        {/* - opening hours */}
        <div className={styles.aboutContactBlock}>
          <div className={styles.aboutContact}>
            <h3>Opening Hours</h3>
            <p>Monday - Friday: 10 AM-6 PM</p>
            <p>Saturday - Sunday: 10 AM-4 PM</p>
          </div>
        </div>

        {/* - parking */}
        <div className={styles.aboutContactBlock}>
          <div className={styles.aboutContact}>
            <h3>Parking</h3>
            <p>
              We offer free parking for all our customers right outside our
              Boutique.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
