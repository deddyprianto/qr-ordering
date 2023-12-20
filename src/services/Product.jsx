import axios from 'axios';
import { config } from "../helper/config";

export const apiProduct = async (method, path, body) => {
  try {
    let url = `${config.API_URL}/${path}`;
    const axiosConfig = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (method.toUpperCase() === 'GET' && body) {
      const queryParams = new URLSearchParams(body);
      url = `${url}?${queryParams.toString()}`;
    } else if (body) {
      axiosConfig.data = body;
    }

    const response = await axios(url, axiosConfig);
    return response.data;
  } catch (error) {
    console.error(`Error api ${path}:`, error);
    return {
      "resultCode": 500,
      "status": "ERROR",
      "message": `Error on api ${path}`
    };
  }
};