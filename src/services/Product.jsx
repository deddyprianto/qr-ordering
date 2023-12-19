import { config } from "../helper/config";

export const apiProduct = async(method, path, body) => {
  try {
    let url = `${config.API_URL}/${path}`;
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
      }
    }

    if (method.toUpperCase() === 'GET' && body) {
      const queryParams = new URLSearchParams(body);
      url = `${url}?${queryParams.toString()}`;
    } else if (body) {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(url, options);
    const result = await response.json()
    return result
  } catch (error) {
    console.error(`Error api ${path}:`, error);
    return {
      "resultCode": 500,
      "status": "ERROR",
      "message": `Error on api ${path}` 
    };
  }
}