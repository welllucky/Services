/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "",
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // eslint-disable-next-line no-param-reassign
      config.resolve = {
        ...config.resolve,
        fallback: {
          ...config.resolve.fallback,
          fs: false,
        },
      };
    }
    // eslint-disable-next-line no-param-reassign
    config.module = {
      ...config.module,
      exprContextCritical: false,
    };
    // eslint-disable-next-line no-param-reassign
    config.resolve.alias["react-native-sqlite-storage"] = false;
    // eslint-disable-next-line no-param-reassign
    config.resolve.alias["@sap/hana-client/extension/Stream"] = false;
    // eslint-disable-next-line no-param-reassign
    config.resolve.alias["@sap/hana-client"] = false;
    return config;
  },
  compiler: {
    styledComponents: true,
    removeConsole: process.env.NODE_ENV === "production",
  },
  generateBuildId: () =>
    Promise.resolve(
      `build-id-${process.env.NEXT_PUBLIC_RELEASE}-${new Date().toISOString().replace(" ", "-")}`,
    ),
  reactStrictMode: process.env.NODE_ENV === "development",
  pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
  optimizeFonts: true,
  env: {
    NEXT_PUBLIC_NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_APIS_BASE_URL: process.env.NEXT_PUBLIC_APIS_BASE_URL,
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    SENTRY_PROJECT: process.env.SENTRY_PROJECT,
    SENTRY_AUTH_TOKEN: process.env.SENTRY_AUTH_TOKEN,
    SENTRY_ORG: process.env.SENTRY_ORG,
    NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
    NEXT_PUBLIC_AXIOM_INGEST_ENDPOINT:
      process.env.NEXT_PUBLIC_AXIOM_INGEST_ENDPOINT,
    SERVICES_COMPANY_ID: process.env.SERVICES_COMPANY_ID,
  },
  headers: async () => [
    {
      source: "/:path*",
      headers: [
        {
          key: "Document-Policy",
          value: "js-profiling",
        },
        {
          key: "Access-Control-Allow-Headers",
          value: "sentry-trace",
        },
        {
          key: "Access-Control-Allow-Headers",
          value: "baggage",
        },
      ],
    },
  ],
};

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require("next-pwa")({
  dest: "public",
  // disable: false,
  disable: process.env.NODE_ENV === "development",
  register: true,
  scope: "/",
  sw: "sw.js",
  reloadOnOnline: true,
});

module.exports = withPWA(nextConfig);

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withSentryConfig } = require("@sentry/nextjs");

module.exports = withSentryConfig(module.exports, {
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options

  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,

  // Only print logs for uploading source maps in CI
  silent: !process.env.CI,

  // For all available options, see:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  // Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
  // This can increase your server load as well as your hosting bill.
  // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
  // side errors will fail.
  tunnelRoute: "/monitoring",

  // Hides source maps from generated client bundles
  hideSourceMaps: true,

  // Automatically tree-shake Sentry logger statements to reduce bundle size
  disableLogger: true,

  // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
  // See the following for more information:
  // https://docs.sentry.io/product/crons/
  // https://vercel.com/docs/cron-jobs
  // automaticVercelMonitors: true,
  // autoInstrumentMiddleware: true,
  // autoInstrumentAppDirectory: true,
  // telemetry: true,
  release: process.env.NEXT_PUBLIC_RELEASE,
});
