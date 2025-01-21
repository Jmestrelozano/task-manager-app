import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom", // Use jsdom for browser-like tests
    coverage: {
      reportOnFailure: true, // Create coverage even if tests fail
      reporter: ["text", "json", "html"], // Optional: Add coverage reports
      provider: "istanbul",
      thresholds: {
        "100": true,
      },
    },
    setupFiles: "./src/tests/setup.ts",
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
