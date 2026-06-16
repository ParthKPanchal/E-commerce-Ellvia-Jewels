import api from "../api/axios";

export const loginUser = async (data: {
  email: string;
  password: string;
}) => {
  const response = await api.post(
    "/auth/login",
    data
  );

  return response.data;
};

export const registerUser = async (data: {
  full_name: string;
  email: string;
  password: string;
}) => {
  const response = await api.post(
    "/auth/register",
    data
  );

  return response.data;
};

export const getProfile = async (
  token: string
) => {
  const response = await api.get(
    "/auth/profile",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const logoutUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};