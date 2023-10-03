import axios from "axios";
import { BACKEND_BASE_URL } from "lib/env";

const request = async ({ method, url, params, data }: any) => {
  try {
    const response = await axios({
      url: url,
      data: data,
      method: method,
      params: params,
      baseURL: BACKEND_BASE_URL,
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export default request;
