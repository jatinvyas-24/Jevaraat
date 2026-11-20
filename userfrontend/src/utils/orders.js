import axios from "axios";
import { API_BASE_URL } from "../App";

const getAuthConfig = () => {
  const token = localStorage.getItem("token");

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const placeOrderFromCart = async (itemId) => {
  const response = await axios.post(
    `${API_BASE_URL}/orders/from-cart/${itemId}`,
    {},
    getAuthConfig(),
  );

  return response.data;
};

export const fetchMyOrders = async () => {
  const response = await axios.get(`${API_BASE_URL}/orders/my`, getAuthConfig());
  return response.data;
};
