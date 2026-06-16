import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import About from "../pages/About/About";
import Products from "../pages/Products/Products";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
  <Route path="/" element={<Home />} />

  <Route
    path="/products"
    element={<Products />}
  />

  <Route
    path="/products/:id"
    element={<ProductDetails />}
  />

  <Route
    path="/about"
    element={<About />}
  />

  <Route
    path="/login"
    element={<Login />}
  />

  <Route
    path="/register"
    element={<Register />}
  />

  {/* Other Routes */}
</Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
