import { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import { getCart, removeCartItem } from "../../services/cartService";
import { Link } from "react-router-dom";
interface CartItem {
  id: number;
  quantity: number;
  product_id: number;
  product_name: string;
  price: number;
  image_url: string | null;
}

function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const data = await getCart();

      setCartItems(data.cart);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleRemove = async (cartId: number) => {
    try {
      await removeCartItem(cartId);

      fetchCart();
    } catch (error) {
      console.error(error);
    }
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <MainLayout>
      <section className="bg-[#FFF6E8] min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-semibold text-[#1A5C5A] mb-10">
            Shopping Cart
          </h1>

          {loading ? (
            <p>Loading...</p>
          ) : cartItems.length === 0 ? (
            <div className="bg-white p-10 rounded-[30px]">
              <p>Your cart is empty.</p>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-6">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="
                      bg-white
                      rounded-[30px]
                      p-6
                      flex
                      gap-6
                      items-center
                    "
                  >
                    <img
                      src={
                        item.image_url
                          ? `http://localhost:5000/uploads/${item.image_url}`
                          : "https://placehold.co/150x150"
                      }
                      alt={item.product_name}
                      className="
                        w-28
                        h-28
                        object-cover
                        rounded-2xl
                      "
                    />

                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-[#1A5C5A]">
                        {item.product_name}
                      </h3>

                      <p className="mt-2">₹ {item.price}</p>

                      <p className="mt-2">Qty: {item.quantity}</p>
                    </div>

                    <button
                      onClick={() => handleRemove(item.id)}
                      className="
                        text-red-500
                        font-medium
                      "
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              <div
                className="
                  bg-white
                  rounded-[30px]
                  p-8
                  h-fit
                "
              >
                <h2 className="text-2xl font-semibold text-[#1A5C5A]">
                  Order Summary
                </h2>

                <div className="flex justify-between mt-8">
                  <span>Total</span>

                  <span className="font-semibold">₹ {total}</span>
                </div>

                <Link
                  to="/checkout"
                  className="
                    mt-8
                    w-full
                    block
                    text-center
                    bg-[#1A5C5A]
                    text-white
                    py-4
                    rounded-full
                "
                >
                  Proceed To Checkout
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
}

export default Cart;
