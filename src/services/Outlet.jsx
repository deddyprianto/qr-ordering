import { callAPI } from "./services";

export const apiOutlet = async (method, path, body) => {
  let url = `${import.meta.env.VITE_API_URL}/outlets/${path}`;
  const response = await callAPI(url, method, body);
  return response
};