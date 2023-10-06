import { request } from "lib";

export const getCodeByLanguage = async (languageName: string) => {
  try {
    const response = await request({
      method: "GET",
      url: "api/codes/get-random",
      param: {
        languageName,
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};
