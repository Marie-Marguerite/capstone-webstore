// App.jsx
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";

import HeaderNav from "./components/general/HeaderNav";
// start
import Login from "./components/start/Login";
import Register from "./components/start/Register";
import Landing from "./components/start/Landing";
import About from "./components/start/About";
// shop
import Products from "./components/products/Products";
import Cart from "./components/cart/Cart";

export default function App() {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  return (
    <div className="App">
      {/* HEADER (if user is logged in) */}
      {loggedInUser && <HeaderNav />}

      {/* ROUTES TO 'PAGES' */}
      <Routes>
        {/* - prior to login */}
        {!loggedInUser && (
          <>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            {/* redirect all other routed to login */}
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        )}
        {/* - once logged in */}
        {loggedInUser && (
          <>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}{" "}
      </Routes>
    </div>
  );
}
