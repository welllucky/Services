import { defineConfig, devices } from "@playwright/test";
import dotenv from "dotenv";
import path from "path";
import authFile from "./tests/playwright/fixture/.auth/user.json";

dotenv.config({ path: path.resolve(__dirname, ".env") });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./tests/e2e",
  // Folder for test artifacts such as screenshots, videos, traces, etc.
  outputDir: "./tests/playwright/output/",

  // path to the global setup files.
  // globalSetup: require.resolve("./tests/playwright/setup/global-setup.ts"),

  testMatch: "**/?(*.)+(e2e|integration).[tj]s?(x)",

  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,

  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,

  maxFailures: process.env.CI ? 10 : undefined,

  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : 4,

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ["list", { printSteps: true }],
    [
      "html",
      {
        outputFolder: "./tests/playwright/report",
        host: "localhost",
        port: 4100,
      },
    ],
  ],

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: "http://localhost:2424",
    baseURL: process.env.BASE_URL ?? "http://localhost:3000",

    isMobile: true,

    // Record trace only when retrying a test for the first time.
    trace: "retain-on-failure",

    // Populates context with given storage state.
    storageState: "./tests/playwright/fixture/state.json",

    // Emulates `'prefers-colors-scheme'` media feature.
    colorScheme: "light",

    // Context geolocation.
    // geolocation: { longitude: 12.492507, latitude: 41.889938 },

    // Emulates the user locale.
    locale: "pt-BR",

    // Grants specified permissions to the browser context.
    // permissions: [
    // 	"geolocation",
    // 	"notifications",
    // 	"camera",
    // 	"microphone",
    // 	"background-sync",
    // ],

    // Emulates the user timezone.
    timezoneId: "America/Sao_Paulo",

    // Viewport used for all pages in the context.
    viewport: { width: 430, height: 932 },

    // Whether to automatically download all the attachments.
    acceptDownloads: false,

    // An object containing additional HTTP headers to be sent with every request.
    //  extraHTTPHeaders: {
    //    'X-My-Header': 'value',
    //  },

    // Credentials for HTTP authentication.
    httpCredentials: {
      username: authFile.email,
      password: authFile.password,
    },

    // Whether to ignore HTTPS errors during navigation.
    ignoreHTTPSErrors: true,

    // Whether to emulate network being offline.
    offline: false,

    // Capture screenshot after each test failure.
    screenshot: "off",

    // Record video only when retrying a test for the first time.
    video: "on-first-retry",

    // Toggles bypassing Content-Security-Policy.
    bypassCSP: true,

    userAgent:
      "L3/1.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Mobile Safari/537.36",
  },

  expect: {
    // Maximum time expect() should wait for the condition to be met.
    timeout: 5000,

    toHaveScreenshot: {
      // An acceptable amount of pixels that could be different, unset by default.
      maxDiffPixels: 10,
    },

    toMatchSnapshot: {
      // An acceptable ratio of pixels that are different to the
      // total amount of pixels, between 0 and 1.
      maxDiffPixelRatio: 0.1,
    },
  },

  /* Configure projects for major browsers */
  projects: [
    // { name: "setup", testMatch: "./tests/setup/*.setup.ts" },
    {
      name: "Android Mid Level",
      use: { ...devices["Galaxy S9+"] },
      // dependencies: ["setup"],
    },
    {
      name: "Android High Level",
      use: { ...devices["Pixel 7"] },
      // dependencies: ["setup"],
    },
    {
      name: "Iphone low level",
      use: { ...devices["iPhone 8 Plus"] },
      // dependencies: ["setup"],
    },
    {
      name: "Iphone High level",
      use: { ...devices["iPhone XR"] },
      // dependencies: ["setup"],
    },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: "yarn dev",
  //   url: process.env.BASE_URL ?? "http://localhost:3000",
  //   reuseExistingServer: !process.env.CI,
  //   timeout: 5000,
  //   // reuseExistingServer: true
  // },
});
