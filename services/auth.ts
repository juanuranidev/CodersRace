import { request } from "lib";

export const loginService = async (data: any) => {
  try {
    const response = await request({
      method: "POST",
      url: "/api/auth/login",
      data: {
        data,
      },
    });

    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};
