import { callAPI } from "./services";

export const apiCart = async (method, path, body) => {
  const tokenLocal = localStorage.getItem("accessToken");
  const objToken = JSON.parse(tokenLocal);

  let token;

  if (objToken?.type === "member") {
    const responseAuth = await callAPI(
      `${import.meta.env.VITE_API_URL}/auth`,
      "GET",
    );
    token = responseAuth?.data?.accessToken;
  } else {
    token = objToken?.accessToken;
  }
  let url = `${import.meta.env.VITE_API_URL}/carts/${path}`;
  const response = await callAPI(url, method, body, token);
  return response;
};
