<!-- README.md -->

# L2t11 CAPSTONE: Ferm Living Boutique - React Web Store

This is a mock e-commerce front-end, built using React+Vite and Redux. The application allows user to register, login, view products, add items to cart and choose a shipping option.

## FEATURES

- User registration and login
- Conditional rendering based on login state
- Product listing page
- Shopping cart with item counter
- Shipping info popup
- Responsive layout
- State management with Redux
- Form validation with Formik
- Modular folder structure using reusable components
- CSS modules for scoped component styling

## BUILT WITH

- [React] (https://reactjs.org/)
- [Vite] (https://vitejs.dev/)
- [Redux Toolkit] (https://redux-toolkit.js.org/)
- [Redux Router] (https://reactrouter.com/)
- [Formik] (https://formik.org/)
- [Bootstrap] (https://react-bootstrap.github.io/)

## INSTALLATION & RUNNING THE APP LOCALLY

To run this application on your local machine:

### 1. Clone the repository

```bash
git clone https://github.com/hyperiondev-bootcamps/MN25010016906.git

### 2. Navigate to the project folder

cd capstone

### 3. Install dependencies

npm install

### 4. Start the development server

npm run dev
then open your browser and to go to: http://localhost:5173

## PROJECT STRUCTURE

 Capstone/
├── public/                        # Public files 
├── src/                           # Source files
│   ├── assets/                    # Images and static content
│   ├── components/                # All React components
│   │   ├── cart/                  # Cart components
│   │   │   ├── Cart.jsx
│   │   │   ├── Cart.module.css
│   │   │   ├── CartProductCard.jsx
│   │   │   ├── CartProductCard.module.css
│   │   │   ├── MapCartItems.jsx
│   │   │   ├── MapCartItems.module.css
│   │   │   ├── Shipping.jsx
│   │   │   ├── ShippingInfo.jsx
│   │   │   ├── ShippingInfo.module.css
│   │   │   ├── Subtotal.jsx
│   │   │   └── Total.jsx
│   │   ├── general/               # General UI components (header, footer, etc.)
│   │   │   ├── Counter.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Footer.module.css
│   │   │   ├── HeaderNav.jsx
│   │   │   ├── HeaderNav.module.css
│   │   │   ├── LoginToggle.jsx
│   │   │   └── LoginToggle.module.css
│   │   ├── products/              # Product-related components
│   │   │   ├── ColorDropdown.jsx
│   │   │   ├── ColorDropdown.module.css
│   │   │   ├── MapProductCards.jsx
│   │   │   ├── ProductArray.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   ├── ProductCard.module.css
│   │   │   └── Products.jsx
│   │   └── start/                 # Entry pages and auth
│   │       ├── About.jsx
│   │       ├── About.module.css
│   │       ├── Landing.jsx
│   │       ├── Login.jsx
│   │       ├── LoginForm.jsx
│   │       ├── Register.jsx
│   │       ├── RegistrationForm.jsx
│   │       └── RegisterLogin.module.css
│   ├── redux/                     # Redux store and slices
│   │   ├── ProductSlice.js
│   │   ├── Store.js
│   │   └── UserSlice.js
│   ├── utils/                     # Utility/helper functions
│   │   └── FormatCurrency.js
│   ├── App.jsx                    # Main application component
│   ├── App.css                    # Global styles
│   ├── main.jsx                   # Application entry point
│   └── index.css                  # Base CSS
├── index.html                     # HTML entry point
├── package.json                   # Project metadata and dependencies
├── package-lock.json              # Dependency lockfile
├── vite.config.js                 # Vite configuration
├── eslint.config.js               # ESLint rules and settings
├── .gitignore                     # Files/folders ignored by Git
└── README.md                      # Project documentation
