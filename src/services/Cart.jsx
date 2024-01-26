import { callAPI } from "./services";

export const apiCart = async (method, path, body) => {
  const token = localStorage.getItem("accessToken");
  const objToken = JSON.parse(token);

  if (objToken.type === "member") {
    console.log("TOKEN FROM MEMBER");
    const responseAuth = await callAPI(
      `${import.meta.env.VITE_API_URL}/auth`,
      "GET",
    );
    const tokenAuth = responseAuth?.data?.accessToken;
    let url = `${import.meta.env.VITE_API_URL}/carts/${path}`;
    const response = await callAPI(url, method, body, tokenAuth);
    return response;
  } else {
    console.log("TOKEN FROM GUEST");
    let url = `${import.meta.env.VITE_API_URL}/carts/${path}`;
    const response = await callAPI(url, method, body, objToken?.accessToken);
    return response;
  }
};
