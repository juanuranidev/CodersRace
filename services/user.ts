import { request } from "lib";

export const getLeaderboardService = async () => {
  try {
    const response = await request({
      method: "GET",
      url: "api/user/leaderboard",
    });
    return response;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getUserByIdService = async (
  userId: string | string[] | undefined
) => {
  try {
    const response = await request({
      method: "GET",
      url: "api/user/retrieve",
      params: {
        userId,
      },
    });
    return response;
  } catch (error: any) {
    throw new Error(error);
  }
};
