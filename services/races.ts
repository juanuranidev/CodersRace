import { request } from "lib";

export const postRaceService = async (data: any) => {
  try {
    const response = await request({
      method: "POSt",
      url: "api/race/create",
      data: data,
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};
