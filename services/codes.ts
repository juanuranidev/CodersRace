import { request } from "lib";

export const getRandomCodeByLanguageService = async (
  languageName: string | undefined | string[]
) => {
  try {
    const response = await request({
      method: "GET",
      url: "api/codes/get-random",
      params: {
        languageName,
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};
