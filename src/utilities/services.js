import axios from "axios";


export const GET = async (path,params) => {
    try
    {
        let url = `${import.meta.env.VITE_API_URL}/${path}`;
        const axiosConfig = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          };

          const queryString = new URLSearchParams(params);
          url = `${url}?${queryString.toString()}`;

          const response = await axios.get(url,axiosConfig);
          return response.data;

    }catch (error)
    {
        console.error(`Error api ${path}:`, error);
        return {
          "resultCode": 500,
          "status": "ERROR",
          "message": `Error on api ${path}`
        };
    }
}