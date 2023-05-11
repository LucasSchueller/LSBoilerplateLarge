/* eslint-disable import/no-extraneous-dependencies */
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import progress from "vite-plugin-progress";
import sassDts from "vite-plugin-sass-dts";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sassDts(),
    progress({
      format: "building [:bar] :percent",
      total: 200,
      width: 60,
      complete: "=",
      incomplete: "",
    }),
    svgr({
      exportAsDefault: true,
      svgrOptions: {
        // ...svgr options (https://react-svgr.com/docs/options/)
        typescript: true,
        expandProps: false,
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@img": path.resolve(__dirname, "src/img"),
    },
  },
});
