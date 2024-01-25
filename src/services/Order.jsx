import { callAPI } from "./services";


export const apiOrder = async (method, path, body) => {
  let url = `${import.meta.env.VITE_API_URL}/orders/${path}`;
  const response = await callAPI(url, method, body);
  return response
};