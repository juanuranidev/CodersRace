import { request } from "lib";

export const loginService = async (profile: any) => {
  try {
    const response = await request({
      method: "POST",
      url: "/api/auth/login",
      data: {
        profile,
      },
    });

    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};
