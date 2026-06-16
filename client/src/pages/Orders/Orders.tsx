import { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import { getMyOrders } from "../../services/orderService";

interface Order {
  id: number;
  total_amount: number;
  payment_status: string;
  order_status: string;
  created_at: string;
}

function Orders() {
  const [orders, setOrders] =
    useState<Order[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const data =
        await getMyOrders();

      setOrders(data.orders);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <section className="bg-[#FFF6E8] min-h-screen py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl font-semibold text-[#1A5C5A] mb-10">
            My Orders
          </h1>

          {loading ? (
            <p>Loading...</p>
          ) : orders.length === 0 ? (
            <div className="bg-white rounded-[30px] p-10">
              No orders found.
            </div>
          ) : (
            <div className="space-y-6">

              {orders.map((order) => (
                <div
                  key={order.id}
                  className="
                    bg-white
                    rounded-[30px]
                    p-8
                  "
                >

                  <div className="flex justify-between flex-wrap gap-4">

                    <div>
                      <h3 className="text-xl font-semibold text-[#1A5C5A]">
                        Order #{order.id}
                      </h3>

                      <p className="mt-2 text-gray-500">
                        {new Date(
                          order.created_at
                        ).toLocaleDateString()}
                      </p>
                    </div>

                    <div className="text-right">

                      <p className="font-semibold">
                        ₹ {order.total_amount}
                      </p>

                      <p className="mt-2">
                        Status:
                        {" "}
                        <span className="text-[#1A5C5A]">
                          {order.order_status}
                        </span>
                      </p>

                    </div>

                  </div>

                </div>
              ))}

            </div>
          )}

        </div>

      </section>
    </MainLayout>
  );
}

export default Orders;