import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import { getProductById } from "../../services/productService";
import { addToCart } from "../../services/cartService";
import { addToWishlist } from "../../services/wishlistService";
import type { Product } from "../../types/product";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] =
    useState<Product | null>(null);

  const [quantity, setQuantity] =
    useState(1);

  useEffect(() => {
    if (id) {
      loadProduct();
    }
  }, [id]);

  const loadProduct = async () => {
    try {
      const data =
        await getProductById(id!);

      setProduct(data.product);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddToCart = async () => {
    try {
      if (!product) return;

      const response =
        await addToCart(
          product.id,
          quantity
        );

      alert(response.message);
    } catch (error: any) {
      console.error(error);

      alert(
        error?.response?.data?.message ||
          "Failed to add item to cart"
      );
    }
  };

  const handleWishlist = async () => {
    try {
      if (!product) return;

      const response =
        await addToWishlist(
          product.id
        );

      alert(response.message);
    } catch (error: any) {
      console.error(error);

      alert(
        error?.response?.data?.message ||
          "Failed to add wishlist"
      );
    }
  };

  if (!product) {
    return (
      <MainLayout>
        <div className="py-32 text-center text-[#1A5C5A] text-xl">
          Loading Product...
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <section className="py-20 bg-[#FFF6E8]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* LEFT */}

            <div>

              <div className="overflow-hidden rounded-[40px] bg-white shadow-sm">

                <img
                  src={
                    product.primary_image
                      ? `http://localhost:5000/uploads/products/${product.primary_image}`
                      : "https://placehold.co/800x1000?text=Ellvia+Jewels"
                  }
                  alt={product.product_name}
                  className="
                    w-full
                    h-[700px]
                    object-cover
                  "
                />

              </div>

              <div className="flex gap-4 mt-5">

                <img
                  src={
                    product.primary_image
                      ? `http://localhost:5000/uploads/products/${product.primary_image}`
                      : "https://placehold.co/100x100"
                  }
                  alt=""
                  className="
                    w-24
                    h-24
                    object-cover
                    rounded-2xl
                    border
                    border-[#1A5C5A]
                  "
                />

              </div>

            </div>

            {/* RIGHT */}

            <div>

              <p className="uppercase tracking-[5px] text-sm text-[#1A5C5A] mb-4">
                {product.category}
              </p>

              <h1 className="text-5xl font-semibold text-[#1A5C5A] leading-tight">
                {product.product_name}
              </h1>

              <p className="mt-6 text-3xl text-gray-800 font-medium">
                ₹ {product.price}
              </p>

              <p className="mt-8 text-gray-700 leading-8 text-lg">
                {product.description}
              </p>

              {/* Quantity */}

              <div className="mt-10">

                <p className="text-[#1A5C5A] font-medium mb-4">
                  Quantity
                </p>

                <div className="flex items-center gap-4">

                  <button
                    onClick={() =>
                      setQuantity(
                        Math.max(
                          1,
                          quantity - 1
                        )
                      )
                    }
                    className="
                      w-12
                      h-12
                      border
                      border-[#1A5C5A]
                      rounded-full
                      text-xl
                      hover:bg-[#1A5C5A]
                      hover:text-white
                      transition
                    "
                  >
                    -
                  </button>

                  <span className="text-lg font-medium">
                    {quantity}
                  </span>

                  <button
                    onClick={() =>
                      setQuantity(
                        quantity + 1
                      )
                    }
                    className="
                      w-12
                      h-12
                      border
                      border-[#1A5C5A]
                      rounded-full
                      text-xl
                      hover:bg-[#1A5C5A]
                      hover:text-white
                      transition
                    "
                  >
                    +
                  </button>

                </div>

              </div>

              {/* Buttons */}

              <div className="mt-10 flex flex-wrap gap-5">

                <button
                  onClick={handleAddToCart}
                  className="
                    border
                    border-[#1A5C5A]
                    text-[#1A5C5A]
                    px-10
                    py-5
                    rounded-full
                    hover:bg-[#1A5C5A]
                    hover:text-white
                    transition
                  "
                >
                  Add To Cart
                </button>

                <button
                  onClick={handleWishlist}
                  className="
                    border
                    border-[#1A5C5A]
                    text-[#1A5C5A]
                    px-10
                    py-5
                    rounded-full
                    hover:bg-[#1A5C5A]
                    hover:text-white
                    transition
                  "
                >
                  ❤️ Wishlist
                </button>

                <button
                  className="
                    bg-[#1A5C5A]
                    text-white
                    px-10
                    py-5
                    rounded-full
                    hover:opacity-90
                    transition
                  "
                >
                  Buy Now
                </button>

              </div>

              {/* Product Info */}

              <div className="mt-14 border-t border-gray-200 pt-10 space-y-5 text-gray-700">

                <div className="flex justify-between">
                  <span>Material</span>
                  <span>
                    {product.material || "N/A"}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Finish</span>
                  <span>
                    {product.finish_color || "N/A"}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Stone Type</span>
                  <span>
                    {product.stone_type || "N/A"}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Size</span>
                  <span>
                    {product.size || "N/A"}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Style</span>
                  <span>
                    {product.style || "N/A"}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Stock</span>
                  <span>
                    {product.stock}
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
    </MainLayout>
  );
}

export default ProductDetails;