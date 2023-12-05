import { request } from "lib";

export const postRaceService = async (data: any) => {
  try {
    const response = await request({
      method: "POST",
      url: "api/race",
      data: data,
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};
