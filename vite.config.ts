import { defineConfig } from "vite";

export default defineConfig(() => {
  console.log();
  return {
    server: {
      port: 5173,
      proxy: {
        "/api": {
          target: "https://aoe-api.reliclink.com",
          changeOrigin: true,
          rewrite: (path) => path.replace(`/api`, ""),
          secure: false,
        },
      },
    },
  };
});
