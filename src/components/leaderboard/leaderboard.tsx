import { Container } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { getRankings } from "./leaderboard.api";
import { LeaderboardRequest } from "./typings";

function usePosts() {
  const request: LeaderboardRequest = {
    leaderboard_id: 3,
    platform: "PC_STEAM",
    title: "age2",
    sortBy: 1,
    start: 1,
    count: 50,
  };
  return useQuery({
    queryKey: ["posts"],
    queryFn: () => getRankings(request),
  });
}

export const Leaderboard = () => {
  const { data } = usePosts();
  return (
    <Container>
      <span>
        {data?.data.statGroups.map((stat) => {
          return <p key={stat.members[0].profile_id}>{stat.members[0].xp}</p>;
        })}
      </span>
    </Container>
  );
};
