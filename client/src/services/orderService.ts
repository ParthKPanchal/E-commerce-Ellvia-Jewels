import api from "../api/axios";

export const createOrder = async () => {
  const token = localStorage.getItem("token");

  const response = await api.post(
    "/orders",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};
export const getMyOrders = async () => {
  const token = localStorage.getItem("token");

  const response = await api.get(
    "/orders/my-orders",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};