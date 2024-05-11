/* eslint-disable @typescript-eslint/no-var-requires */
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const {
  transformIgnorePatterns,
  ...customJestConfig
} = require("test-config/jest-next");

module.exports = async () => ({
  ...(await createJestConfig(customJestConfig)()),
  transformIgnorePatterns,
  displayName: "Base App Tests",
});
