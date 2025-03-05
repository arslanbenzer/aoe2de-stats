import axios, { AxiosResponse } from "axios";
import { LeaderboardRequest, LeaderboardResponse } from "./typings";

const apiClient = axios.create({
  baseURL: "/api",
  headers: {
    "Content-type": "application/json",
  },
});

export const getRankings = async (
  request: LeaderboardRequest
): Promise<AxiosResponse<LeaderboardResponse, any>> => {
  return await apiClient.get<LeaderboardResponse>(
    "/community/leaderboard/getLeaderBoard2",
    { params: request }
  );
};
