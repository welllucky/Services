/* eslint-disable global-require */
/** @type {import('jest').Config} */
module.exports = {
  ...require("./jest-common"),
  setupFilesAfterEnv: [
    "test-config/jest-react-setup.js",
    "test-config/jest-setup.js",
  ],
  moduleDirectories: ["node_modules", "<rootDir>"],
  testEnvironment: "jest-environment-jsdom",
  verbose: true,
  moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx"],
  transform: {
    "^.+\\.tsx?$": "esbuild-jest",
    "^.+\\.jsx?$": "esbuild-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "test-config/__mocks__/styleMock.js",
    "\\.(gif|ttf|eot|svg)$": "test-config/__mocks__/fileMock.js",
  },
};
