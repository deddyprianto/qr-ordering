import { callAPI } from "./services";


export const apiCart = async (method, path, body) => {
  let url = `${import.meta.env.VITE_API_URL}/carts/${path}`;
  const response = await callAPI(url, method, body);
  return response
};