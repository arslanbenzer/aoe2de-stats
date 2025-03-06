import { createBrowserRouter, Navigate } from "react-router-dom";
import { Layout } from "../components/layout/layout";
import { leaderboardRoutes } from "../components/leaderboard/routes";
import { NotFound } from "../pages/not-found/not-found.page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="/" replace /> },
      { path: "/leaderboard", ...leaderboardRoutes },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
