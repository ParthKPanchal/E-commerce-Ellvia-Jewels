import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  Heart,
  ShoppingCart,
  User,
  Menu,
  X,
} from "lucide-react";

import logoDark from "../../assets/logo/logo-dark.png";

function Navbar() {
  const navigate = useNavigate();

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <header className="bg-[#FFF6E8] border-b border-gray-200">

      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Top Navbar */}

        <div className="flex items-center justify-between h-20">

          {/* Desktop Navigation */}

          <nav className="hidden md:flex items-center gap-8">

            <Link
              to="/"
              className="text-[#1A5C5A] hover:opacity-80 transition"
            >
              Home
            </Link>

            <Link
              to="/products"
              className="text-[#1A5C5A] hover:opacity-80 transition"
            >
              Shop
            </Link>

            <Link
              to="/about"
              className="text-[#1A5C5A] hover:opacity-80 transition"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="text-[#1A5C5A] hover:opacity-80 transition"
            >
              Contact
            </Link>

          </nav>

          {/* Mobile Menu Button */}

          <div className="md:hidden">

            <button
              onClick={() =>
                setMobileMenuOpen(
                  !mobileMenuOpen
                )
              }
            >
              {mobileMenuOpen ? (
                <X
                  size={24}
                  className="text-[#1A5C5A]"
                />
              ) : (
                <Menu
                  size={24}
                  className="text-[#1A5C5A]"
                />
              )}
            </button>

          </div>

          {/* Logo */}

          <Link to="/">

            <img
              src={logoDark}
              alt="Ellvia Jewels"
              className="
                h-10
                md:h-14
                w-auto
              "
            />

          </Link>

          {/* Desktop Right Side */}

          <div className="hidden md:flex items-center gap-5">

            {token ? (
              <>
                <Link to="/wishlist">
                  <Heart
                    size={22}
                    className="text-[#1A5C5A]"
                  />
                </Link>

                <Link to="/cart">
                  <ShoppingCart
                    size={22}
                    className="text-[#1A5C5A]"
                  />
                </Link>

                <Link to="/profile">
                  <User
                    size={22}
                    className="text-[#1A5C5A]"
                  />
                </Link>

                <button
                  onClick={handleLogout}
                  className="
                    border
                    border-[#1A5C5A]
                    text-[#1A5C5A]
                    px-4
                    py-2
                    rounded-full
                    hover:bg-[#1A5C5A]
                    hover:text-white
                    transition
                  "
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="
                    border
                    border-[#1A5C5A]
                    text-[#1A5C5A]
                    px-4
                    py-2
                    rounded-full
                  "
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="
                    bg-[#1A5C5A]
                    text-white
                    px-4
                    py-2
                    rounded-full
                  "
                >
                  Register
                </Link>
              </>
            )}

          </div>

          {/* Mobile Cart */}

          <div className="md:hidden">

            <Link to="/cart">
              <ShoppingCart
                size={22}
                className="text-[#1A5C5A]"
              />
            </Link>

          </div>

        </div>

        {/* Mobile Menu */}

        {mobileMenuOpen && (
          <div
            className="
              md:hidden
              border-t
              border-gray-200
              py-5
            "
          >
            <div className="flex flex-col gap-4">

              <Link
                to="/"
                onClick={() =>
                  setMobileMenuOpen(false)
                }
              >
                Home
              </Link>

              <Link
                to="/products"
                onClick={() =>
                  setMobileMenuOpen(false)
                }
              >
                Shop
              </Link>

              <Link
                to="/about"
                onClick={() =>
                  setMobileMenuOpen(false)
                }
              >
                About
              </Link>

              <Link
                to="/contact"
                onClick={() =>
                  setMobileMenuOpen(false)
                }
              >
                Contact
              </Link>

              {token ? (
                <>
                  <Link
                    to="/wishlist"
                    onClick={() =>
                      setMobileMenuOpen(false)
                    }
                  >
                    Wishlist
                  </Link>

                  <Link
                    to="/orders"
                    onClick={() =>
                      setMobileMenuOpen(false)
                    }
                  >
                    Orders
                  </Link>

                  <Link
                    to="/profile"
                    onClick={() =>
                      setMobileMenuOpen(false)
                    }
                  >
                    Profile
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="
                      text-left
                      text-red-500
                    "
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() =>
                      setMobileMenuOpen(false)
                    }
                  >
                    Login
                  </Link>

                  <Link
                    to="/register"
                    onClick={() =>
                      setMobileMenuOpen(false)
                    }
                  >
                    Register
                  </Link>
                </>
              )}

            </div>
          </div>
        )}

      </div>

    </header>
  );
}

export default Navbar;