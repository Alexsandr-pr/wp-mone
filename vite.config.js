import { defineConfig } from 'vite';
import path from 'path';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
    root: "src",
    build: {
        outDir: "../dist",
        emptyOutDir: true,
    },
    plugins: [
        handlebars({
            partialDirectory: "src/partials",
        })
    ]
})