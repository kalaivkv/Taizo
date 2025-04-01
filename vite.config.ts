import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    port: 8080,  // Set the dev server to listen on port 8080
    host: "0.0.0.0" // Ensures it listens on all network interfaces
  },
  preview: {
    port: 8080,
    host: "0.0.0.0"
  }
})
