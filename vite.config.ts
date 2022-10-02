import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
// import svgLoader from '@andylacko/vite-svg-react-loader'
import viteImagemin from "vite-plugin-imagemin";
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        // svgLoader({
        //     svgrOptions: {
        //         icon: true,
        //         // ...svgr options (https://react-svgr.com/docs/options/)
        //     },
        // }),
        viteImagemin({
            gifsicle: {
                optimizationLevel: 7,
                interlaced: false,
            },
            optipng: {
                optimizationLevel: 7,
            },
            mozjpeg: {
                quality: 20,
            },
            pngquant: {
                quality: [0.8, 0.9],
                speed: 4,
            },
            webp: {
                quality: 75,
            },
            svgo: {
                plugins: [
                    {
                        name: "removeViewBox",
                    },
                    {
                        name: "removeEmptyAttrs",
                        active: false,
                    },
                ],
            },
        }),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            "@scss": path.resolve(__dirname, "src/scss"),
            "@img": path.resolve(__dirname, "src/img"),
        }
    },
})
