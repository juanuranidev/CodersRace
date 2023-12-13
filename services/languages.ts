import { request } from "lib/utils";
import { fromGetLanguagesApi } from "adapters";

export const getLanguagesService = async () => {
  try {
    const response = await request({
      method: "GET",
      url: "api/language",
    });

    return fromGetLanguagesApi(response.data);
  } catch (error: any) {
    throw new Error(error);
  }
};
