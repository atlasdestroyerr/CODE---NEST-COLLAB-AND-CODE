import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    
    // Define module resolution and aliases
    resolve: {
        alias: [
            {
                find: "@",
                replacement: fileURLToPath(new URL("./src", import.meta.url)),
            },
        ],
    },

    // Allow importing .mp4 files directly
    assetsInclude: ['**/*.mp4'],

    // Build-related configuration
    build: {
        chunkSizeWarningLimit: 1600,
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes("node_modules")) {
                        return id
                            .toString()
                            .split("node_modules/")[1]
                            .split("/")[0]
                            .toString();
                    }
                },
            },
        },
    },

    // Dev server options
    server: {
        open: true,
    },

    // Preview server config
    preview: {
        port: 5173,
    },
});
