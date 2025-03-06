export interface LeaderboardRequest {
  leaderboard_id: number;
  platform: string;
  title: string;
  sortBy: number;
  start: number;
  count: number;
}

export interface LeaderboardResponse {
  result: Result;
  statGroups: StatGroup[];
  leaderboardStats: RankingDetails[];
}

export interface Result {
  code: number;
  message: string;
}

export interface StatGroup {
  id: number;
  name: string;
  type: number;
  members: Member[];
}

export interface Member {
  profile_id: number;
  name: string;
  alias: string;
  personal_statgroup_id: number;
  xp: number;
  level: number;
  leaderboardregion_id: number;
  country: string;
}

export type RankingDetails = {
  statgroup_id: number;
  leaderboard_id: number;
  wins: number;
  losses: number;
  streak: number;
  disputes: number;
  drops: number;
  rank: number;
  ranktotal: number;
  ranklevel: number;
  rating: number;
  regionrank: number;
  regionranktotal: number;
  lastmatchdate: number;
  highestrank: number;
  highestranklevel: number;
  highestrating: number;
};
