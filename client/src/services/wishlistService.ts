import api from "../api/axios";

export const addToWishlist = async (
  productId: number
) => {
  const token = localStorage.getItem("token");

  const response = await api.post(
    "/wishlist/add",
    {
      product_id: productId,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const getWishlist = async () => {
  const token = localStorage.getItem("token");

  const response = await api.get(
    "/wishlist",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const removeFromWishlist = async (
  wishlistId: number
) => {
  const token = localStorage.getItem("token");

  const response = await api.delete(
    `/wishlist/${wishlistId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};