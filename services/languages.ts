import { request } from "lib";
import { fromGetLanguagesApi } from "adapters";

export const getLanguagesService = async () => {
  try {
    const response = await request({
      method: "GET",
      url: "languages/",
    });
    return fromGetLanguagesApi(response.data);
  } catch (error: any) {
    throw new Error(error);
  }
};
