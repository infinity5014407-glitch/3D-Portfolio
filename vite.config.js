import { defineConfig } from "vite";

export default defineConfig({
  plugins: [],

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
	memories: "memories.html",
        projects: "projects.html",
        skills: "skills.html",
        experience: "experience.html",
        contact: "contact.html"
      }
    }
  }
});
