import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default defineConfig(function () {
  return {
    plugins: [react(), tsconfigPaths()],
    css: {
      modules: {
        localsConvention: "camelCaseOnly",
      },
      preprocessorOptions: {
        postcss: {
          plugins: [
            // Make sure to add the path to your postcss.config.js file
            autoprefixer(),
            tailwindcss("./tailwind.config.js"),
          ],
        },
      },
    },
    server: {
      port: 3000,
      proxy: {
        "/api": {
          target: "http://localhost:8080",
          changeOrigin: true,
        },
        historyApiFallback: "true",
      },
    },
  };
});
