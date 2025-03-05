import { createBrowserRouter, Navigate } from "react-router-dom";
import { Layout } from "../components/layout/layout";
import { leaderboardRoutes } from "../components/leaderboard/routes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="/" replace /> },
      { path: "/leaderboard", ...leaderboardRoutes },
    ],
  },
]);
