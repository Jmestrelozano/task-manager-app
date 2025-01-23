import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  preset: "ts-jest",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // <= setup file here
  testEnvironment: "jest-environment-jsdom",
  coverageProvider: "v8",
  clearMocks: true,
  collectCoverageFrom: ["<rootDir>/src/**/*.(ts|tsx)"],
  coveragePathIgnorePatterns: [
    "<rootDir>/src/interfaces/",
    "<rootDir>/src/constant/",
    "<rootDir>/src/tests/",
    "<rootDir>/src/hooks/index.ts",
    "<rootDir>/src/i18n.ts",
    "<rootDir>/src/reportWebVitals.ts",
    "<rootDir>/src/setupTests.ts",
    "<rootDir>/src/react-app-env.d.ts",
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "json"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // Adjust this path based on your project structure
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
};

module.exports = createJestConfig(customJestConfig);
