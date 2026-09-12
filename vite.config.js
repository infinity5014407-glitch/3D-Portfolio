import { defineConfig } from "vite";

export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 5173,
    strictPort: true
  },

  build: {
    rollupOptions: {
      input: {
        main: new URL("./index.html", import.meta.url).pathname,
        about: new URL("./about.html", import.meta.url).pathname,
        projects: new URL("./projects.html", import.meta.url).pathname,
        skills: new URL("./skills.html", import.meta.url).pathname,
        experience: new URL("./experience.html", import.meta.url).pathname,
        contact: new URL("./contact.html", import.meta.url).pathname
      }
    }
  }
});
