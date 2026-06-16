import axios from "axios";

const API_URL =
  "http://localhost:5000/api";

export const getProducts = async () => {
  const response = await axios.get(
    `${API_URL}/products`
  );

  return response.data;
};

export const getProductById = async (
  id: string
) => {
  const response = await axios.get(
    `${API_URL}/products/${id}`
  );

  return response.data;
};

export const createProduct = async (
  formData: FormData
) => {
  const response = await axios.post(
    `${API_URL}/products`,
    formData,
    {
      headers: {
        "Content-Type":
          "multipart/form-data",
      },
    }
  );

  return response.data;
};

export const updateProduct = async (
  id: number,
  productData: any
) => {
  const response =
    await axios.put(
      `${API_URL}/products/${id}`,
      productData
    );

  return response.data;
};

export const deleteProduct = async (
  id: number
) => {
  const response = await axios.delete(
    `${API_URL}/products/${id}`
  );

  return response.data;
};

