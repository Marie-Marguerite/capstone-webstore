// ProductArray.jsx

//* Handle images with import.meta.glob (used to dynamically import images in Vite projects)
const images = import.meta.glob('../../assets/*.jpg', {eager: true});
console.log("images:", images);

//* The array of products
const ProductArray = [
  {
    id: 1,
    title: "Vuelta Floor Lamp",
    description:
      "A bold light with a sculptural arc reminiscent of ancient columns, our Vuelta Floor Lamp is made from opal glass with a rippled surface that lends textural appeal to the piece.",
    price: 13700.0,
    colors: ["white", "blood orange", "soft pink"],
    imageFile: "1_Vuelta.jpg",
  },
  {
    id: 2,
    title: "Kurbis Floor Lamp",
    description:
      "Crafted with precision from delicate Washi paper and paired with a solid, powder-coated black metal base, the Kurbis Floor Lamp redefines traditional lighting design.",
    price: 5000.0,
    colors: ["black", "white", "ivory"],
    imageFile: "2_Kurbis.jpg",
  },
  {
    id: 3,
    title: "Oyster Table Lamp",
    description:
      "Made in casted recycled aluminium, the Oyster Table Lamp has a decorative, organic shape due to its soft, lively curves.",
    price: 5400.0,
    colors: ["black", "white", "ivory"],
    imageFile: "3_Oyster.jpg",
  },
  {
    id: 4,
    title: "Bell Table Lamp",
    description:
      "Inspired by vintage glass lamps from the 70’s, the Bell Table Lamp illuminates your home with a soft, diffused light.",
    price: 2400.0,
    colors: ["white", "blood orange", "soft pink"],
    imageFile: "4_Bell.jpg",
  },
  {
    id: 5,
    title: "Gry Table Lamp",
    description:
      "Titled after the Danish word for 'dawn,' the Gry Table Lamp radiates a soft and gentle light, reminiscent of sunlight peeking through morning mist.",
    price: 2400.0,
    colors: ["black", "ivory", "brass"],
    imageFile: "5_Gry.jpg",
  },
  {
    id: 6,
    title: "Poem Table Lamp",
    description:
      "Drawing inspiration from the opulent details found in Baroque art and architecture, the Poem Table Lamp has a romantic and elegant expression.",
    price: 5400.0,
    colors: ["black", "ivory", "brass"],
    imageFile: "6_Poem.jpg",
  },
  {
    id: 7,
    title: "Drape Lampshade",
    description:
      "The Drape Lampshade is hand braided from natural rattan, boasting an organic and irregular shape that casts gentle, distinctive shadows.",
    price: 2800.0,
    colors: ["natural", "blanched", "dark"],
    imageFile: "7_Drape.jpg",
  },
  {
    id: 8,
    title: "Dou Floor Lamp",
    description:
      "Hand-braided from natural rattan, our Dou series celebrates the lovely contrast between geometric shapes and the organic, textural qualities of the material.",
    price: 13700.0,
    colors: ["natural", "blanched", "dark"],
    imageFile: "8_Dou.jpg",
  },
  {
    id: 9,
    title: "Ruuvi Lamp",
    description:
      "Inspired by industrial architecture and engineering, the practical and durable Ruuvi Lamp has a clean yet soft expression.",
    price: 4000.0,
    colors: ["black", "ivory", "brass"],
    imageFile: "9_Ruuvi.jpg",
  },
  {
    id: 10,
    title: "Dae Floor Lamp",
    description:
      "The Dae Lamp draws inspiration from the ethereal beauty of the Pieridae Butterfly Chrysalis.",
    price: 14100.0,
    colors: ["white", "ivory", "soft pink"],
    imageFile: "10_Dae.jpg",
  },
  {
    id: 11,
    title: "Tiny Lamp",
    description:
      "The Tiny Lamp works as a functional and decorative light source in any room.:",
    price: 2800.0,
    colors: ["steel", "brass", "black"],
    imageFile: "11_Tiny.jpg",
  },
  {
    id: 12,
    title: "Arum Portable Lamp",
    description:
      "The Arum Portable Lamp is a versatile and mobile lighting solution.",
    price: 3600.0,
    colors: ["white", "green", "burnt orange"],
    imageFile: "12_Arum.jpg",
  },
];

//* Attend to image URLs
//  Call all product properties and build string URLs for images (using import.mega.glob key created above), fall back on "" if no image so app doesn't crash)
const ProductWithImageArray = ProductArray.map((product) => ({
  ...product,
  imageURL: images[`../../assets/${product.imageFile}`].default || "",
}));

export default ProductWithImageArray;

/* REFERENCE
Products were taken from the Ferm Living online store (https://fermliving.com/)
1. https://fermliving.com/products/vuelta-floor-lamp-white
2. https://fermliving.com/products/kurbis-floor-lamp-low-black-natural
3. https://fermliving.com/products/oyster-table-lamp-black
4. https://fermliving.com/products/bell-table-lamp-white
5. https://fermliving.com/products/gry-table-lamp-blacktranslucent
6. https://fermliving.com/products/poem-table-lamp-whitecashmere
7. https://fermliving.com/products/drape-lampshade-small-natural
8. https://fermliving.com/products/dou-floor-lamp-natural
9. https://fermliving.com/products/ruuvi-lamp-blackened-iron
10. https://fermliving.com/products/dae-floor-lamp-white
11. https://fermliving.com/products/tiny-lamp-brass
12. https://fermliving.com/products/arum-portable-lamp-cashmere
*/
