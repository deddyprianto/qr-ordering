import axios from 'axios';

export const apiMemberships = async (method, path, body) => {
  try {
    let url = `${import.meta.env.VITE_API_URL}/Memberships/${path}`;
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
    if(error.response?.data) return error.response?.data
    return {
      "resultCode": 500,
      "status": "ERROR",
      "message": `Error on api ${path}`
    };
  }
};