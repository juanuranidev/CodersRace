import { request } from "lib";

export const getLanguagesService = async () => {
  try {
    const response = await request({
      method: "GET",
      url: "languages/",
    });
    return response;
  } catch (error: any) {
    throw new Error(error);
  }
};
