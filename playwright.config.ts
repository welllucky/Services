import { defineConfig, devices } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
require("dotenv").config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
	// Glob patterns or regular expressions that match test files.
	testMatch: "**/?(*.)+(e2e|integration).[tj]s?(x)",

	// Folder for test artifacts such as screenshots, videos, traces, etc.
	outputDir: "./tests/output/",

	// path to the global setup files.
	// globalSetup: require.resolve('./global-setup'),

	testDir: "./tests/",

	/* Run tests in files in parallel */
	fullyParallel: true,

	/* Fail the build on CI if you accidentally left test.only in the source code. */
	forbidOnly: !!process.env.CI,

	/* Retry on CI only */
	retries: process.env.CI ? 2 : 0,

	/* Opt out of parallel tests on CI. */
	workers: process.env.CI ? 1 : undefined,

	/* Reporter to use. See https://playwright.dev/docs/test-reporters */
	reporter: [
		["html", { outputFolder: "./tests/report", host: "localhost", port: 4100 }],
	],

	/* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
	use: {
		/* Base URL to use in actions like `await page.goto('/')`. */
		baseURL: process.env.BASE_URL || "http://localhost:3000",

		// Record trace only when retrying a test for the first time.
		trace: "retain-on-failure",

		// Populates context with given storage state.
		storageState: "./tests/fixture/state.json",

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
		//  httpCredentials: {
		//    username: 'user',
		//    password: 'pass',
		//  },

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

		userAgent: "tester-worker-user-agent",
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
			name: "firefox",
			use: { ...devices["Desktop Firefox"] },
			// dependencies: ["setup"],
		},
		{
			name: "Mobile Chrome",
			use: { ...devices["Pixel 5"] },
			// dependencies: ["setup"],
		},
		{
			name: "Microsoft Edge",
			use: { ...devices["Desktop Edge"], channel: "msedge" },
			// dependencies: ["setup"],
		},
		{
			name: "Google Chrome",
			use: { ...devices["Desktop Chrome"], channel: "chrome" },
			// dependencies: ["setup"],
		},
	],

	/* Run your local dev server before starting the tests */
	// webServer: {
	// 	command: "yarn dev",
	// 	url: "http://localhost:3000",
	// 	// reuseExistingServer: !process.env.CI,
	// 	reuseExistingServer: false,
	// },
});
