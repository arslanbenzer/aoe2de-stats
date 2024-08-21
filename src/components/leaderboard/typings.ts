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
