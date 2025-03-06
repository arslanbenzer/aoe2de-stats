import axios from "axios";
import { LeaderboardRequest, LeaderboardResponse } from "./typings";

const apiClient = axios.create({
  baseURL: "/api",
  headers: {
    "Content-type": "application/json",
  },
});

export const getRankings = async (
  request: LeaderboardRequest
): Promise<LeaderboardResponse> => {
  return await apiClient
    .get<LeaderboardResponse>("/community/leaderboard/getLeaderBoard2", {
      params: request,
    })
    .then((response) => response.data);
};
