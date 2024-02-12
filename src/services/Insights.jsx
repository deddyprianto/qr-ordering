import { callAPI } from "./services";

export const apiInsights = async (method, path, body) => {
  let url = `${import.meta.env.VITE_API_URL}/insight/${path}`;
  const response = await callAPI(url, method, body);
  return response
};