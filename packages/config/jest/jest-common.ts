/** @type {import('jest').Config} */
module.exports = {
  resetMocks: true,
  moduleDirectories: ["node_modules"],
  transformIgnorePatterns: [
    "node_modules/(?!(swiper|ssr-window|dom7)/)",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
  transform: {
    "^.+\\.tsx?$": "esbuild-jest",
    "^.+\\.jsx?$": "esbuild-jest",
  },
  collectCoverageFrom: [
    "**/src/**/*.{js,ts,jsx,tsx}",
    "**/**/*.{js,ts,jsx,tsx}",
    "**/**/**/*.{js,ts,jsx,tsx}",
  ],
  coverageReporters: ["json", "text", "text-summary"],
  coveragePathIgnorePatterns: [],
  coverageThreshold: {
    global: {
      branches: 30,
      functions: 30,
      lines: 30,
      statements: 30,
    },
  },
};
