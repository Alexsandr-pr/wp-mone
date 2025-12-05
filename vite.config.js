import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import path, { resolve } from 'path';

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
        rollupOptions: {
            input: {
                "main": resolve(__dirname, 'src/index.html'),
                "blog-post": resolve(__dirname, 'src/blog-post.html'),
                "blog": resolve(__dirname, 'src/blog.html'),
                "branding": resolve(__dirname, 'src/branding.html'),
                "contact": resolve(__dirname, 'src/contact.html'),
                "thank-you": resolve(__dirname, 'src/thank-you.html'),
                "logo-design": resolve(__dirname, 'src/logo-design.html'),
                "naming": resolve(__dirname, 'src/naming.html'),
                "packaging": resolve(__dirname, 'src/packaging.html'),
                "social-media-design": resolve(__dirname, 'src/social-media-design.html'),
            }
        }
    },
    plugins: [
        handlebars({
            partialDirectory: "src/partials",
        })
    ]
})