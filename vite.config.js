/* eslint-disable no-undef, no-unused-vars */
// https://dev.to/whchi/how-to-use-processenv-in-vite-ho9

import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    // vite config
    define: {
      "process.env.VITE_OPENAI_API_KEY": JSON.stringify(
        env.VITE_OPENAI_API_KEY
      ),
      "process.env.VITE_OPENAI_API_URL": JSON.stringify(
        env.VITE_OPENAI_API_URL
      ),
      // 'process.env.YOUR_BOOLEAN_VARIABLE': env.YOUR_BOOLEAN_VARIABLE,
      // If you want to exposes all env variables, which is not recommended
      // 'process.env': env
    },
  };
});
