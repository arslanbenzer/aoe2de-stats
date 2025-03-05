import "./App.css";
import "@mantine/core/styles.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { createTheme, MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const theme = createTheme({
  /** Your theme override here */
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </MantineProvider>
  );
}

export default App;
