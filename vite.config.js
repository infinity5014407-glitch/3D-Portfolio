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
        main: "index.html",
        about: "about.html",
        projects: "projects.html",
        skills: "skills.html",
        experience: "experience.html",
        contact: "contact.html"
      }
    }
  }
});
