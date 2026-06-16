import api from "../api/axios";

export const addToCart = async (productId: number, quantity: number) => {
  const token = localStorage.getItem("token");

  const response = await api.post(
    "/cart/add",
    {
      product_id: productId,
      quantity,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response.data;
};

export const getCart = async () => {
  const token = localStorage.getItem("token");

  const response = await api.get("/cart", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const removeCartItem = async (cartId: number) => {
  const token = localStorage.getItem("token");

  const response = await api.delete(`/cart/${cartId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const updateCart = async (cartId: number, quantity: number) => {
  const token = localStorage.getItem("token");

  const response = await api.put(
    `/cart/${cartId}`,
    { quantity },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response.data;
};
