import { Container, Table, Text } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { getRankings } from "./leaderboard.api";
import { LeaderboardRequest } from "./typings";

import "./leaderboard.css";

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

const getStreak = (streak: number) => {
  let color;
  if (streak === 0) {
    color = "grey";
  } else if (streak > 0) {
    color = "green";
  } else {
    color = "red";
  }
  return <Text c={color}>{streak}</Text>;
};

export const Leaderboard = () => {
  console.log("leader board");
  const { data } = usePosts();
  return (
    <Container>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>#</Table.Th>
            <Table.Th>Name</Table.Th>
            <Table.Th>Rating</Table.Th>
            <Table.Th>Matches</Table.Th>
            <Table.Th>Wins</Table.Th>
            <Table.Th>Losses</Table.Th>
            <Table.Th>Streak</Table.Th>
            <Table.Th>Win %</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {data?.statGroups.map((stat, index) => {
            const player = stat.members[0];

            const playerRanking = data.leaderboardStats[index];
            return (
              <Table.Tr key={player.profile_id}>
                <Table.Td>{playerRanking.rank}</Table.Td>
                <Table.Td>{player.alias}</Table.Td>
                <Table.Td>{playerRanking.rating}</Table.Td>
                <Table.Td>
                  {playerRanking.wins +
                    playerRanking.losses +
                    playerRanking.drops}
                </Table.Td>
                <Table.Td>{playerRanking.wins}</Table.Td>
                <Table.Td>{playerRanking.losses}</Table.Td>
                <Table.Td>{getStreak(playerRanking.streak)}</Table.Td>
                <Table.Td>
                  {(
                    (playerRanking.wins /
                      (playerRanking.wins + playerRanking.losses)) *
                    100
                  ).toFixed(2)}{" "}
                  %
                </Table.Td>
              </Table.Tr>
            );
          })}
        </Table.Tbody>
      </Table>
    </Container>
  );
};
