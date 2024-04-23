import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import replace from "@rollup/plugin-replace";
import dotenv from "dotenv";

// Load variables from .env file
dotenv.config();

export default defineConfig({
  plugins: [
    react(),
    replace({
      __API_KEY__: JSON.stringify(process.env.API_KEY),
    }),
  ],
});