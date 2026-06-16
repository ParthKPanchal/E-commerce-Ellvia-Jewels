import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import { createOrder } from "../../services/orderService";

function Checkout() {
  const navigate = useNavigate();

  const [loading, setLoading] =
    useState(false);

  const handlePlaceOrder = async () => {
    try {
      setLoading(true);

      const data =
        await createOrder();

      alert(
        `Order Created Successfully.
Order ID: ${data.orderId}`
      );

      navigate("/orders");
    } catch (error: any) {
      console.error(error);

      alert(
        error?.response?.data?.message ||
          "Failed to place order"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <section className="bg-[#FFF6E8] min-h-screen py-20">

        <div className="max-w-4xl mx-auto px-6">

          <div className="bg-white rounded-[30px] p-10">

            <h1 className="text-5xl font-semibold text-[#1A5C5A]">
              Checkout
            </h1>

            <p className="mt-6 text-gray-600">
              Review your cart and place
              your order.
            </p>

            <div className="mt-10 border-t pt-8">

              <h2 className="text-2xl font-semibold text-[#1A5C5A]">
                Payment Method
              </h2>

              <div className="mt-4 p-5 border rounded-2xl">

                Cash On Delivery (Demo)

              </div>

            </div>

            <button
              onClick={handlePlaceOrder}
              disabled={loading}
              className="
                mt-10
                w-full
                bg-[#1A5C5A]
                text-white
                py-5
                rounded-full
                hover:opacity-90
                transition
              "
            >
              {loading
                ? "Placing Order..."
                : "Place Order"}
            </button>

          </div>

        </div>

      </section>
    </MainLayout>
  );
}

export default Checkout;