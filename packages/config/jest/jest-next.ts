/* eslint-disable global-require */
/** @type {import('jest').Config} */
const customJestConfig = {
  ...require("./jest-common"),
  setupFilesAfterEnv: ["test-config/jest-setup.js"],
  moduleDirectories: ["node_modules", "<rootDir>"],
  testEnvironment: "jest-environment-jsdom",
  verbose: true,
  // moduleNameMapper: {
  //     "\\.(css|less)$":
  //         "<rootDir>/apps/base/test/jest/__mocks__/styleMock.js",
  // },
  testMatch: [
    "<rootDir>/src/**/*.(spec|test).{js,jsx,ts,tsx}",
    "<rootDir>/src/**/**/*.(spec|test).{js,jsx,ts,tsx}",
    "<rootDir>/pages/**/*.(spec|test).{js,jsx,ts,tsx}",
  ],
};

module.exports = {
  ...customJestConfig,
};
