import axios from 'axios';

export const callAPI = async (url, method, body, auth) => {
  try {
    const axiosConfig = {
      method: method,
      headers: {
        Authorization: `Bearer ${auth}`,
        "Content-Type": "application/json",
      },
    };

    if (method.toUpperCase() === "GET" && body) {
      const queryParams = new URLSearchParams(body);
      url = `${url}?${queryParams.toString()}`;
    } else if (body) {
      axiosConfig.data = body;
    }

    const response = await axios(url, axiosConfig);
    return response.data;
  } catch (error) {
    console.error(`Error api ${url}:`, error);
    try {
      return error.response.data;
    } catch (error) {
      return {
        resultCode: 500,
        status: "ERROR",
        message: `Error on api ${url}`,
      };
    }
  }
};