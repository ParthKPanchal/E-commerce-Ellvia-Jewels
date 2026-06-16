import { BrowserRouter, Routes, Route } from "react-router-dom";

// Public Pages
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

// Auth
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

// User Pages
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Orders from "./pages/Orders/Orders";
import Wishlist from "./pages/Wishlist/Wishlist";
import Profile from "./pages/Profile/Profile";
import ChangePassword from "./pages/Profile/ChangePassword";

// Routes Protection
import ProtectedRoute from "./routes/ProtectedRoute";
import AdminRoute from "./routes/AdminRoute";

// Admin
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/Admin/Dashboard";
import AdminProducts from "./pages/Admin/AdminProducts";
import AddProduct from "./pages/Admin/AddProduct";
import EditProduct from "./pages/Admin/EditProduct";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ========================= */}
        {/* Public Routes */}
        {/* ========================= */}

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />

        <Route path="/products/:id" element={<ProductDetails />} />

        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />

        {/* ========================= */}
        {/* Protected User Routes */}
        {/* ========================= */}

        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />

        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />

        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          }
        />

        <Route
          path="/wishlist"
          element={
            <ProtectedRoute>
              <Wishlist />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/change-password"
          element={
            <ProtectedRoute>
              <ChangePassword />
            </ProtectedRoute>
          }
        />

        {/* ========================= */}
        {/* Admin Routes */}
        {/* ========================= */}

        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminLayout />
            </AdminRoute>
          }
        >
          <Route index element={<Dashboard />} />

          <Route path="products" element={<AdminProducts />} />

          <Route path="products/add" element={<AddProduct />} />

          <Route path="products/edit/:id" element={<EditProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
