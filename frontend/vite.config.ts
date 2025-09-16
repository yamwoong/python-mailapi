import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/backend": {
        target: "http://localhost:3000", // Node.js 서버
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/backend/, ""),
      },
      "/python": {
        target: "http://localhost:8000", // FastAPI 서버
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/python/, ""),
      },
    },
  },
});
